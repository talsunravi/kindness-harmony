
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Channel } from '@/constants/radioChannels';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { toast } from "@/components/ui/use-toast";
import { Podcast } from '@/constants/podcasts';

type MediaContextType = {
  isPlayingPodcast: boolean;
  currentPodcast: Podcast | null;
  podcastProgress: number;
  playPodcast: (podcast: Podcast) => void;
  pausePodcast: () => void;
  stopPodcast: () => void;
  setPodcastProgress: (progress: number) => void;
  resumeRadio: () => void;
};

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const MediaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlayingPodcast, setIsPlayingPodcast] = useState(false);
  const [currentPodcast, setCurrentPodcast] = useState<Podcast | null>(null);
  const [podcastProgress, setPodcastProgress] = useState(0);
  const [podcastAudio, setPodcastAudio] = useState<HTMLAudioElement | null>(null);
  const [wasRadioPlaying, setWasRadioPlaying] = useState(false);
  
  const radioPlayer = useAudioPlayer({} as Channel); // This is just for accessing the methods

  useEffect(() => {
    // Clean up audio on unmount
    return () => {
      if (podcastAudio) {
        podcastAudio.pause();
        podcastAudio.src = '';
        setPodcastAudio(null);
      }
    };
  }, []);

  const playPodcast = (podcast: Podcast) => {
    // First check if the radio is playing and remember its state
    const radioIsPlaying = radioPlayer.isPlaying;
    setWasRadioPlaying(radioIsPlaying);
    
    // Stop the radio if it's playing
    if (radioIsPlaying) {
      radioPlayer.togglePlay();
    }
    
    // If another podcast is already playing, stop it first
    if (podcastAudio) {
      podcastAudio.pause();
      podcastAudio.src = '';
    }
    
    // Create new audio element for the podcast
    const audio = new Audio(podcast.audioUrl);
    
    // Set up event listeners
    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        setPodcastProgress((audio.currentTime / audio.duration) * 100);
      }
    });
    
    audio.addEventListener('ended', () => {
      setIsPlayingPodcast(false);
      setCurrentPodcast(null);
      setPodcastProgress(0);
      setPodcastAudio(null);
      
      // Resume radio playback if it was playing before
      if (wasRadioPlaying) {
        setTimeout(() => radioPlayer.togglePlay(), 500);
        setWasRadioPlaying(false);
      }
      
      toast({
        title: "Podcast completed",
        description: `You've finished listening to "${podcast.title}"`,
      });
    });
    
    // Start playing
    audio.play()
      .then(() => {
        setIsPlayingPodcast(true);
        setCurrentPodcast(podcast);
        setPodcastAudio(audio);
        toast({
          title: "Now playing",
          description: podcast.title,
        });
      })
      .catch(error => {
        console.error("Error playing podcast:", error);
        toast({
          title: "Error",
          description: "Could not play the podcast. Please try again.",
          variant: "destructive"
        });
      });
  };
  
  const pausePodcast = () => {
    if (podcastAudio) {
      if (!podcastAudio.paused) {
        podcastAudio.pause();
        setIsPlayingPodcast(false);
      } else {
        podcastAudio.play()
          .then(() => setIsPlayingPodcast(true))
          .catch(console.error);
      }
    }
  };
  
  const stopPodcast = () => {
    if (podcastAudio) {
      podcastAudio.pause();
      podcastAudio.src = '';
      setIsPlayingPodcast(false);
      setCurrentPodcast(null);
      setPodcastProgress(0);
      setPodcastAudio(null);
      
      // If radio was playing before, resume it
      if (wasRadioPlaying) {
        setTimeout(() => radioPlayer.togglePlay(), 500);
        setWasRadioPlaying(false);
      }
    }
  };
  
  const resumeRadio = () => {
    stopPodcast();
    if (!radioPlayer.isPlaying) {
      radioPlayer.togglePlay();
    }
  };
  
  return (
    <MediaContext.Provider
      value={{
        isPlayingPodcast,
        currentPodcast,
        podcastProgress,
        playPodcast,
        pausePodcast,
        stopPodcast,
        setPodcastProgress,
        resumeRadio
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (context === undefined) {
    throw new Error('useMedia must be used within a MediaProvider');
  }
  return context;
};

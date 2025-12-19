
import { useState, useEffect, useRef } from 'react';
import type { Channel } from '@/constants/radioChannels';

export const useAudioPlayer = (initialChannel: Channel) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentChannel, setCurrentChannel] = useState<Channel>(initialChannel);
  const [volume, setVolume] = useState(60);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create audio element
  useEffect(() => {
    audioRef.current = new Audio(currentChannel.stream);
    audioRef.current.volume = volume / 100;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentChannel]);

  // Handle play/pause
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      setIsLoading(true);
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsLoading(false);
          })
          .catch((error) => {
            console.log('Audio playback error:', error);
            setIsPlaying(false);
            setIsLoading(false);
          });
      }
    } else {
      audioRef.current.pause();
      setIsLoading(false);
    }
  }, [isPlaying, currentChannel]);

  // Handle volume change
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume / 100;
  }, [volume, isMuted]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const changeChannel = (channel: Channel) => {
    if (currentChannel.id === channel.id) return;
    
    const wasPlaying = isPlaying;
    setIsPlaying(false);
    
    setTimeout(() => {
      setCurrentChannel(channel);
      // Automatically start playing when channel is changed
      setIsPlaying(true);
    }, 300);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  return {
    isPlaying,
    currentChannel,
    volume,
    isMuted,
    isLoading,
    togglePlay,
    toggleMute,
    changeChannel,
    handleVolumeChange
  };
};

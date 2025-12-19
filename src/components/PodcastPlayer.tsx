
import React, { useState } from 'react';
import { Play, Pause, X, Volume2, VolumeX } from 'lucide-react';
import { Podcast } from '@/constants/podcasts';
import { useMedia } from '@/contexts/MediaContext';
import { cn } from '@/lib/utils';

interface PodcastPlayerProps {
  podcast: Podcast;
  onClose?: () => void;
  className?: string;
}

const PodcastPlayer: React.FC<PodcastPlayerProps> = ({ podcast, onClose, className }) => {
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  
  const { 
    isPlayingPodcast, 
    currentPodcast, 
    podcastProgress, 
    playPodcast, 
    pausePodcast,
    stopPodcast
  } = useMedia();
  
  const isCurrentPodcast = currentPodcast?.id === podcast.id;
  const isPlaying = isPlayingPodcast && isCurrentPodcast;
  
  const handlePlayPause = () => {
    if (isCurrentPodcast) {
      if (isPlaying) {
        pausePodcast();
      } else {
        playPodcast(podcast);
      }
    } else {
      playPodcast(podcast);
    }
  };

  const handleClose = () => {
    stopPodcast();
    if (onClose) onClose();
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
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  const formatTime = (timeInSec: number) => {
    const minutes = Math.floor(timeInSec / 60);
    const seconds = Math.floor(timeInSec % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  // Calculate current playtime based on progress percentage and duration
  const calculateCurrentTime = () => {
    if (!isCurrentPodcast) return '0:00';
    
    // Parse the duration string like "32:15" into seconds
    const durationParts = podcast.duration.split(':');
    const durationInSeconds = parseInt(durationParts[0]) * 60 + parseInt(durationParts[1]);
    
    // Calculate current time in seconds
    const currentTimeInSeconds = (podcastProgress / 100) * durationInSeconds;
    
    return formatTime(currentTimeInSeconds);
  };
  
  return (
    <div className={cn(
      "bg-background border rounded-lg p-4 shadow-sm w-full transition-all",
      className
    )}>
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium text-sm truncate">{podcast.title}</h3>
        <button 
          onClick={handleClose}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      
      <div className="w-full bg-secondary rounded-full h-2 mb-3">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-300" 
          style={{ width: isCurrentPodcast ? `${podcastProgress}%` : '0%' }}
        />
      </div>
      
      <div className="flex justify-between items-center text-xs text-muted-foreground mb-3">
        <span>{isCurrentPodcast ? calculateCurrentTime() : '0:00'}</span>
        <span>{podcast.duration}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <button 
          onClick={handlePlayPause}
          className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </button>
        
        <div className="flex items-center">
          <button
            onClick={toggleMute}
            className="p-2 text-foreground/80 hover:text-foreground transition-colors"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
          
          <div className="w-24 mx-2">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full h-1 bg-secondary appearance-none rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastPlayer;

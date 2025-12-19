
import React from 'react';
import { Play, Pause, User, Clock } from 'lucide-react';
import type { Channel } from '@/constants/radioChannels';
import NowPlayingAnimation from './NowPlayingAnimation';

interface PlayerControlsProps {
  isPlaying: boolean;
  isLoading: boolean;
  currentChannel: Channel;
  isMuted: boolean;
  volume: number;
  togglePlay: () => void;
  toggleMute: () => void;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  compact?: boolean;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({
  isPlaying,
  isLoading,
  currentChannel,
  togglePlay,
  compact = false
}) => {
  if (compact) {
    return (
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <button 
          onClick={togglePlay}
          disabled={isLoading}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex-shrink-0 shadow-md"
        >
          {isLoading ? (
            <div className="w-4 h-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 ml-0.5" />
          )}
        </button>
        
        {currentChannel.image && (
          <div className="relative h-10 w-10 overflow-hidden rounded-lg flex-shrink-0">
            <img 
              src={currentChannel.image} 
              alt={currentChannel.name}
              className="h-full w-full object-cover"
            />
            {isPlaying && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <NowPlayingAnimation isPlaying={isPlaying} className="scale-75" />
              </div>
            )}
          </div>
        )}
        
        <div className="min-w-0 flex-1">
          <h3 className="font-medium text-sm truncate flex items-center gap-1">
            {currentChannel.name}
            {isPlaying && <NowPlayingAnimation isPlaying={isPlaying} />}
          </h3>
          <p className="text-xs text-muted-foreground truncate">{currentChannel.rj}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <button 
        onClick={togglePlay}
        disabled={isLoading}
        className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 transition-colors mr-3 lg:mr-4 flex-shrink-0 shadow-md"
      >
        {isLoading ? (
          <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
        ) : isPlaying ? (
          <Pause className="w-5 h-5 lg:w-6 lg:h-6" />
        ) : (
          <Play className="w-5 h-5 lg:w-6 lg:h-6 ml-0.5" />
        )}
      </button>
      
      <div className="flex items-center gap-3 lg:gap-4">
        {currentChannel.image && (
          <div className="relative h-12 w-12 lg:h-14 lg:w-14 overflow-hidden rounded-lg flex-shrink-0 shadow-md">
            <img 
              src={currentChannel.image} 
              alt={currentChannel.name}
              className="h-full w-full object-cover"
            />
            {isPlaying && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <NowPlayingAnimation isPlaying={isPlaying} className="scale-125" />
              </div>
            )}
          </div>
        )}
        
        <div>
          <h3 className="font-medium text-sm lg:text-base flex items-center gap-2">
            {currentChannel.name}
            {isPlaying && <NowPlayingAnimation isPlaying={isPlaying} />}
          </h3>
          <div className="flex flex-col text-xs text-muted-foreground">
            <div className="flex items-center">
              <User className="w-3 h-3 mr-1" />
              <span className="font-medium">{currentChannel.rj}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              <span>{currentChannel.showTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;

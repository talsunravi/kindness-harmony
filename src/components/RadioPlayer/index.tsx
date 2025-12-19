
import React, { useState } from 'react';
import { Volume2, VolumeX, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { channels } from '@/constants/radioChannels';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import PlayerControls from './PlayerControls';
import ChannelSelector from './ChannelSelector';

const RadioPlayer = () => {
  const {
    isPlaying,
    currentChannel,
    volume,
    isMuted,
    isLoading,
    togglePlay,
    toggleMute,
    changeChannel,
    handleVolumeChange
  } = useAudioPlayer(channels[0]);

  const [isChannelsVisible, setIsChannelsVisible] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 dark:bg-card/95 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-border">
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between gap-2">
          <PlayerControls 
            isPlaying={isPlaying}
            isLoading={isLoading}
            currentChannel={currentChannel}
            isMuted={isMuted}
            volume={volume}
            togglePlay={togglePlay}
            toggleMute={toggleMute}
            handleVolumeChange={handleVolumeChange}
            compact
          />
          
          <div className="flex items-center gap-1">
            <button
              onClick={toggleMute}
              className="p-1.5 text-foreground/70 hover:text-foreground transition-colors"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            
            <button
              onClick={() => setIsChannelsVisible(!isChannelsVisible)}
              className="flex items-center gap-1 px-2 py-1 text-xs font-medium border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <span className="hidden xs:inline">Channels</span>
              {isChannelsVisible ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </button>
          </div>
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 items-center">
          {/* Main player controls */}
          <div className="flex items-center">
            <PlayerControls 
              isPlaying={isPlaying}
              isLoading={isLoading}
              currentChannel={currentChannel}
              isMuted={isMuted}
              volume={volume}
              togglePlay={togglePlay}
              toggleMute={toggleMute}
              handleVolumeChange={handleVolumeChange}
            />
          </div>
          
          {/* Channel visibility toggle - centered */}
          <div className="flex items-center justify-center">
            <button
              onClick={() => setIsChannelsVisible(!isChannelsVisible)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <span>Radio Channels</span>
              {isChannelsVisible ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>

          {/* Volume controls */}
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={toggleMute}
              className="p-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className={cn("w-5 h-5", volume < 30 && "opacity-60")} />
              )}
            </button>
            
            <div className="w-24 lg:w-32">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-1.5 bg-secondary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110"
              />
            </div>
          </div>
        </div>
        
        {/* Channel selector */}
        {isChannelsVisible && (
          <div className="mt-3 pt-3 border-t border-border">
            <ChannelSelector 
              channels={channels}
              currentChannel={currentChannel}
              isPlaying={isPlaying}
              onChannelChange={changeChannel}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioPlayer;

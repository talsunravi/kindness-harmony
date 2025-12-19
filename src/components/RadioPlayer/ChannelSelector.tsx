
import React from 'react';
import { cn } from '@/lib/utils';
import { Radio, Headphones } from 'lucide-react';
import type { Channel } from '@/constants/radioChannels';
import NowPlayingAnimation from './NowPlayingAnimation';

interface ChannelSelectorProps {
  channels: Channel[];
  currentChannel: Channel;
  isPlaying: boolean;
  onChannelChange: (channel: Channel) => void;
}

const ChannelSelector: React.FC<ChannelSelectorProps> = ({ 
  channels, 
  currentChannel, 
  isPlaying,
  onChannelChange 
}) => {
  return (
    <div className="pt-4">
      <h3 className="text-sm font-medium mb-3 text-foreground/80">Available Channels</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {channels.map((channel) => (
          <button
            key={channel.id}
            onClick={() => onChannelChange(channel)}
            className={cn(
              "flex p-3 rounded-xl transition-all duration-200 border overflow-hidden hover:shadow-md",
              currentChannel.id === channel.id
                ? "border-primary ring-1 ring-primary/30 bg-primary/5 shadow-sm"
                : "border-border hover:border-primary/50"
            )}
          >
            <div className="flex-shrink-0 relative w-16 h-16 rounded-lg overflow-hidden">
              <img 
                src={channel.image} 
                alt={channel.name}
                className="h-full w-full object-cover"
              />
              <div className={cn(
                "absolute inset-0 flex items-center justify-center",
                currentChannel.id === channel.id ? "bg-black/20" : "bg-black/10"
              )}>
                {currentChannel.id === channel.id && isPlaying ? (
                  <NowPlayingAnimation isPlaying={isPlaying} className="scale-125" />
                ) : (
                  <Headphones className={cn(
                    "w-6 h-6", 
                    currentChannel.id === channel.id 
                      ? "text-white" 
                      : "text-white/70"
                  )} />
                )}
              </div>
            </div>
            
            <div className="ml-3 flex flex-col justify-center text-left flex-grow">
              <div className="font-medium flex items-center">
                {channel.name}
                {currentChannel.id === channel.id && isPlaying && (
                  <NowPlayingAnimation isPlaying={isPlaying} className="ml-2" />
                )}
              </div>
              <div className="text-xs text-muted-foreground">{channel.rj}</div>
              <div className="flex items-center text-xs mt-1">
                <span className={`inline-block w-2 h-2 rounded-full ${channel.color} mr-1`}></span>
                <span>{channel.showTime}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChannelSelector;

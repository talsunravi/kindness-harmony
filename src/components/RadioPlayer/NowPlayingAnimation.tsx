
import React from 'react';
import { cn } from '@/lib/utils';

interface NowPlayingAnimationProps {
  isPlaying: boolean;
  className?: string;
}

const NowPlayingAnimation: React.FC<NowPlayingAnimationProps> = ({ 
  isPlaying,
  className
}) => {
  if (!isPlaying) return null;
  
  return (
    <div className={cn("flex items-center space-x-0.5", className)}>
      {[1, 2, 3, 4].map((bar) => (
        <div 
          key={bar}
          className="w-0.5 h-3 bg-primary rounded-full animate-pulse-subtle"
          style={{ 
            animationDelay: `${bar * 0.1}s`,
            animationDuration: '0.8s',
            height: `${Math.max(3, 5 * Math.random() + 3)}px`
          }}
        />
      ))}
    </div>
  );
};

export default NowPlayingAnimation;

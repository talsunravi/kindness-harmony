
import React from 'react';
import { Share2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ShareButtonProps {
  title: string;
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, className }) => {
  const { toast } = useToast();

  const handleShare = async () => {
    // Get the current URL
    const url = window.location.href;
    
    // Check if the Web Share API is available
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      try {
        await navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "The link has been copied to your clipboard.",
        });
      } catch (error) {
        console.error('Error copying to clipboard:', error);
        toast({
          title: "Could not copy link",
          description: "Please try again or copy the URL manually.",
          variant: "destructive"
        });
      }
    }
  };

  return (
    <button 
      onClick={handleShare}
      className={`flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors ${className || ''}`}
      aria-label="Share"
    >
      <Share2 className="w-5 h-5 mr-2" />
      Share
    </button>
  );
};

export default ShareButton;

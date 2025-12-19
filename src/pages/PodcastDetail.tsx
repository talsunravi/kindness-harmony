
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Play, Globe } from 'lucide-react';
import { podcasts } from '@/constants/podcasts';
import PodcastPlayer from '@/components/PodcastPlayer';
import { useMedia } from '@/contexts/MediaContext';

const PodcastDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { currentPodcast, playPodcast, isPlayingPodcast } = useMedia();
  
  const podcast = podcasts.find(p => p.id === Number(id));
  
  if (!podcast) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Podcast Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the podcast you're looking for.</p>
          <Link 
            to="/podcasts" 
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Podcasts
          </Link>
        </div>
      </div>
    );
  }
  
  const isCurrentlyPlaying = currentPodcast?.id === podcast.id;
  
  const handlePlayClick = () => {
    playPodcast(podcast);
  };

  // Find related podcasts in the same language
  const relatedPodcasts = podcasts
    .filter(p => p.id !== podcast.id && p.language === podcast.language)
    .slice(0, 2);
  
  // Add other language podcasts if we don't have enough related podcasts
  const otherPodcasts = podcasts
    .filter(p => p.id !== podcast.id && p.language !== podcast.language)
    .slice(0, 4 - relatedPodcasts.length);
  
  const recommendedPodcasts = [...relatedPodcasts, ...otherPodcasts];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/podcasts" 
          className="inline-flex items-center text-primary hover:underline mb-8 block"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Podcasts
        </Link>
        
        <div className="bg-background border rounded-xl overflow-hidden shadow-sm mb-8">
          <div className="md:flex">
            <div className="md:w-1/2 relative">
              <img 
                src={podcast.image} 
                alt={podcast.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary/80 text-white px-3 py-1 rounded-md text-sm flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                {podcast.language}
              </div>
            </div>
            <div className="p-6 md:w-1/2 flex flex-col">
              <h1 className="text-3xl font-bold mb-4">{podcast.title}</h1>
              
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{podcast.date}</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{podcast.duration}</span>
              </div>
              
              <p className="text-muted-foreground mb-6 flex-grow">{podcast.description}</p>
              
              {isCurrentlyPlaying ? (
                <PodcastPlayer podcast={podcast} />
              ) : (
                <button 
                  onClick={handlePlayClick}
                  className="flex items-center justify-center w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Play Episode
                </button>
              )}
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">More Episodes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedPodcasts.map(relatedPodcast => (
              <Link 
                key={relatedPodcast.id} 
                to={`/podcasts/${relatedPodcast.id}`}
                className="flex border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-1/3 bg-muted relative">
                  <img 
                    src={relatedPodcast.image} 
                    alt={relatedPodcast.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-primary/80 text-white px-1.5 py-0.5 rounded text-xs">
                    {relatedPodcast.language}
                  </div>
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="font-medium text-sm mb-1 line-clamp-2">{relatedPodcast.title}</h3>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{relatedPodcast.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetail;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Clock, Calendar } from 'lucide-react';
import { podcasts } from '@/constants/podcasts';
import { useMedia } from '@/contexts/MediaContext';
import PodcastPlayer from '@/components/PodcastPlayer';
import LanguageFilter from '@/components/LanguageFilter';

const Podcasts = () => {
  const { isPlayingPodcast, currentPodcast, playPodcast, pausePodcast, stopPodcast } = useMedia();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [filteredPodcasts, setFilteredPodcasts] = useState(podcasts);
  const [availableLanguages, setAvailableLanguages] = useState<string[]>([]);

  // Extract available languages from podcasts
  useEffect(() => {
    const languages = [...new Set(podcasts.map(podcast => podcast.language))];
    setAvailableLanguages(languages);
  }, []);

  // Filter podcasts based on selected language
  useEffect(() => {
    if (selectedLanguage) {
      setFilteredPodcasts(podcasts.filter(podcast => podcast.language === selectedLanguage));
    } else {
      setFilteredPodcasts(podcasts);
    }
  }, [selectedLanguage]);

  const handlePlayClick = (e: React.MouseEvent, podcast: typeof podcasts[0]) => {
    e.preventDefault(); // Prevent navigation when clicking the play button
    e.stopPropagation(); // Stop event propagation
    
    if (currentPodcast?.id === podcast.id && isPlayingPodcast) {
      pausePodcast();
    } else {
      playPodcast(podcast);
    }
  };

  const handleClosePlayer = () => {
    stopPodcast();
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Our Podcasts</h1>
        <p className="text-lg text-center mb-8 text-muted-foreground">
          Listen to our collection of inspiring podcasts focused on kindness and compassion.
        </p>
        
        <div className="mb-8">
          {/* <h2 className="text-lg font-medium mb-3">Filter by Language</h2> */}
          <LanguageFilter
            languages={availableLanguages}
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />
        </div>
        
        {filteredPodcasts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No podcasts found for the selected language.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPodcasts.map((podcast) => (
              <div key={podcast.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link to={`/podcasts/${podcast.id}`} className="block">
                  <div className="aspect-video bg-muted relative">
                    <img 
                      src={podcast.image} 
                      alt={podcast.title} 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-medium">View Details</span>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-sm flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {podcast.duration}
                    </div>
                    <div className="absolute top-2 left-2 bg-primary/80 text-white px-2 py-1 rounded-md text-xs">
                      {podcast.language}
                    </div>
                  </div>
                </Link>
                <div className="p-4">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {podcast.date}
                  </div>
                  <Link to={`/podcasts/${podcast.id}`}>
                    <h3 className="font-medium text-lg mb-2 hover:text-primary transition-colors">
                      {podcast.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4">{podcast.description}</p>
                  
                  {currentPodcast?.id === podcast.id ? (
                    <PodcastPlayer podcast={podcast} onClose={handleClosePlayer} className="mt-2" />
                  ) : (
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={(e) => handlePlayClick(e, podcast)}
                        className="flex items-center text-primary hover:underline text-sm font-medium"
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Listen Now
                      </button>
                      <Link to={`/podcasts/${podcast.id}`} className="text-muted-foreground hover:text-foreground text-sm">
                        View Details
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Podcasts;

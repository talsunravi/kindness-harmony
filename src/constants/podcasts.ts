
export interface Podcast {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  date: string;
  audioUrl: string;
  language: string;
}

export const podcasts: Podcast[] = [
  {
    id: 1,
    title: "The Ripple Effect of Kindness",
    description: "How small acts of kindness create waves of positive change throughout communities.",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    duration: "32:15",
    date: "May 12, 2023",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    language: "English"
  },
  {
    id: 2,
    title: "Mindful Giving: The Art of Contribution",
    description: "Exploring the science behind giving and why it improves both mental and physical health.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1687&q=80",
    duration: "45:08",
    date: "June 3, 2023",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    language: "English"
  },
  {
    id: 3,
    title: "దయగల పిల్లలు",
    description: "తదుపరి తరంలో సానుభూతి మరియు దయను పెంపొందించడానికి ఆచరణాత్మక వ్యూహాలు.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    duration: "39:24",
    date: "June 17, 2023",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    language: "Telugu"
  },
  {
    id: 4,
    title: "व्यापार में दया",
    description: "कैसे करुणामय नेतृत्व कार्यस्थल संस्कृति को बदलता है और उत्पादकता को बढ़ावा देता है।",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1687&q=80",
    duration: "51:42",
    date: "July 8, 2023",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    language: "Hindi"
  },
  {
    id: 5,
    title: "ಕರುಣೆಯ ಗುಣಪಡಿಸುವ ಶಕ್ತಿ",
    description: "ದಯೆ ಮತ್ತು ಸಹಾನುಭೂತಿ ವೈಯಕ್ತಿಕ ಮತ್ತು ಸಾಮಾಜಿಕ ಗಾಯಗಳನ್ನು ಗುಣಪಡಿಸಲು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು.",
    image: "https://images.unsplash.com/photo-1516731415730-0c607149933a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    duration: "37:19",
    date: "August 22, 2023",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    language: "Kannada"
  },
  {
    id: 6,
    title: "Global Acts of Kindness",
    description: "Inspiring stories of kindness from around the world that transcend cultural differences.",
    image: "https://images.unsplash.com/photo-1522684355982-d61a8f1ce779?ixlib=rb-4.0.3&auto=format&fit=crop&w=1838&q=80",
    duration: "43:56",
    date: "September 5, 2023",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    language: "English"
  }
];

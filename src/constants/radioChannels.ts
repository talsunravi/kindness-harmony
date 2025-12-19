
export interface Channel {
  id: string;
  name: string;
  language: string;
  stream: string;
  color: string;
  image: string;
  rj: string;
  showTime: string;
}

export const channels: Channel[] = [
  {
    id: 'english',
    name: 'Kindness Talks',
    language: 'English',
    stream: 'http://streams.radio.co/s0aa1e6f4a/listen',
    color: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop',
    rj: 'Alex Martin',
    showTime: '8:00 AM - 10:00 AM',
  },
  {
    id: 'telugu',
    name: 'Telugu Melodies',
    language: 'Telugu',
    stream: 'https://telugufm.live/radio/8000/radio.mp3',
    color: 'bg-yellow-500',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&auto=format&fit=crop',
    rj: 'Ravi Kumar',
    showTime: '10:00 AM - 12:00 PM',
  },
  {
    id: 'hindi',
    name: 'Hindi Dil Se',
    language: 'Hindi',
    stream: 'http://sc-bb.1.fm:8017/',
    color: 'bg-red-500',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400&auto=format&fit=crop',
    rj: 'Priya Sharma',
    showTime: '2:00 PM - 4:00 PM',
  },
  {
    id: 'kannada',
    name: 'Kannada Beats',
    language: 'Kannada',
    stream: 'http://live.radiosindia.com:8090/kannada',
    color: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400&auto=format&fit=crop',
    rj: 'Suresh Gowda',
    showTime: '4:00 PM - 6:00 PM',
  },
];

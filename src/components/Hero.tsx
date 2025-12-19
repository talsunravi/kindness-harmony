
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742",
    title: "Broadcasting Kindness to the World",
    showName: "Kindness Morning Show",
    rjName: "Sarah Johnson",
    date: "Monday, October 16, 2023",
    time: "08:00 AM EST",
    description: "Join our global community dedicated to spreading compassion through powerful stories and engaging conversations."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618",
    title: "Mindful Moments",
    showName: "Peaceful Afternoons",
    rjName: "Michael Chen",
    date: "Tuesday, October 17, 2023",
    time: "02:00 PM EST",
    description: "Discover inner peace and mindfulness through guided meditation and soulful music."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
    title: "Community Stories",
    showName: "Local Heroes",
    rjName: "Emma Rodriguez",
    date: "Wednesday, October 18, 2023",
    time: "11:00 AM EST",
    description: "Highlighting inspiring stories from our local communities making a difference every day."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    title: "Global Harmony Hour",
    showName: "World Music Special",
    rjName: "David Kumar",
    date: "Thursday, October 19, 2023",
    time: "07:00 PM EST",
    description: "Experience diverse musical traditions and cultural stories from around the globe."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
    title: "Evening Reflections",
    showName: "Sunset Sessions",
    rjName: "Lisa Thompson",
    date: "Friday, October 20, 2023",
    time: "06:00 PM EST",
    description: "End your day with calming conversations and peaceful reflections."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background to-background/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ 
          backgroundImage: `url('${slides[currentSlide].image}?auto=format&fit=crop&w=2070&q=80')`,
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-8 relative z-20 mt-[-40px]">
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {slides[currentSlide].showName}
          </span>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-foreground/80">
              <span>{slides[currentSlide].date}</span>
              <span>•</span>
              <span>{slides[currentSlide].time}</span>
            </div>
            <div className="text-primary font-medium">
              with {slides[currentSlide].rjName}
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight md:leading-tight lg:leading-tight mb-6 text-foreground animate-slide-up">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 md:mb-10 max-w-2xl md:mx-0 mx-auto animate-slide-up">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start animate-slide-up">
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Listen Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/schedule"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-background hover:bg-secondary transition-colors"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </div>
      
      {/* Slider Controls */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-sm transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                currentSlide === index 
                  ? "bg-primary w-6" 
                  : "bg-white/50 hover:bg-white/80"
              )}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-sm transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

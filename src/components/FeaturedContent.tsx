
import React from 'react';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const FeaturedContent = () => {
  const { toast } = useToast();

  const handleSetReminder = () => {
    toast({
      title: "Reminder Set",
      description: "You'll be notified when the show is about to start.",
    });
  };

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Featured Content</h2>
          <div className="flex space-x-4">
            <button className="rounded-full p-2 border border-border hover:bg-secondary transition-colors">
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <button className="rounded-full p-2 border border-border hover:bg-secondary transition-colors">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Upcoming Show */}
          <div className="bg-background border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                alt="Morning Kindness Show" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                Upcoming Show
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <CalendarDays className="h-4 w-4 mr-2" />
                Tuesday, Oct 10, 2023
                <Clock className="h-4 w-4 ml-4 mr-2" />
                08:00 AM EST
              </div>
              <h3 className="text-xl font-bold mb-3">The Morning Kindness Show</h3>
              <p className="text-muted-foreground mb-4">Join host Sarah Johnson as she discusses practical ways to incorporate kindness into your daily routine.</p>
              <Link to="/podcasts/4" className="inline-flex items-center text-primary hover:underline">
                Listen Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Recent Podcast */}
          <div className="bg-background border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                alt="Kindness in Business" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full">
                Recent Podcast
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Clock className="h-4 w-4 mr-2" />
                45 min episode
              </div>
              <h3 className="text-xl font-bold mb-3">Kindness in Business Leadership</h3>
              <p className="text-muted-foreground mb-4">Explore how compassionate leadership transforms workplace culture and boosts overall productivity and employee satisfaction.</p>
              <Link to="/podcasts/4" className="inline-flex items-center text-primary hover:underline">
                Listen Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Recent Podcast */}
          <div className="bg-background border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522159698025-071104a1ddbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                alt="Community Kindness" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full">
                Recent Podcast
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Clock className="h-4 w-4 mr-2" />
                38 min episode
              </div>
              <h3 className="text-xl font-bold mb-3">Building Stronger Communities</h3>
              <p className="text-muted-foreground mb-4">Discover inspiring stories of community initiatives and learn how small acts of kindness can create lasting positive change.</p>
              <Link to="/podcasts/5" className="inline-flex items-center text-primary hover:underline">
                Listen Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Current Fundraiser */}
          {/* <div className="bg-background border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80" 
                alt="Education Fundraiser" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-destructive/60 text-white text-xs px-3 py-1 rounded-full">
                Active Fundraiser
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Children's Education Fund</h3>
              <p className="text-muted-foreground mb-4">Support our initiative to provide educational resources to underprivileged children in communities around the world.</p>
              
              <div className="mb-4">
                <div className="flex justify-between mb-2 text-sm">
                  <span>Raised: $24,850</span>
                  <span>Goal: $50,000</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              
              <Link to="/fundraisers/3" className="inline-flex items-center text-primary hover:underline">
                Donate Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;

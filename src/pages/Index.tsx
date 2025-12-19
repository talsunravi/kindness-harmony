
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import FeaturedContent from '@/components/FeaturedContent';
import { Calendar, Users, Headphones, ArrowRight, Heart, Star, Music, Radio, Globe, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Add animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-fade-in bg-gradient-to-b from-background via-secondary/5 to-background">
      <Hero />
      
      {/* Stats Section with enhanced animations */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-primary/5 via-background to-primary/5"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border/40 animate-slide-up">
              <div className="mb-4 p-3 rounded-full bg-primary/10">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">350+</h3>
              <p className="text-muted-foreground">Podcast Episodes</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border/40 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="mb-4 p-3 rounded-full bg-primary/10">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">24/7</h3>
              <p className="text-muted-foreground">Live Radio Programming</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border/40 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <div className="mb-4 p-3 rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">1.2M+</h3>
              <p className="text-muted-foreground">Global Listeners</p>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Featured Content */}
      <FeaturedContent />
      
      {/* Current Fundraising Campaign */}
      {/* <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593113598332-cd59a0c3d530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 animate-slide-up">Current Fundraising Campaign</h2>
            <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: "100ms" }}>
              Join us in making a difference in the lives of those who need it most.
            </p>
          </div>
          
          <div className="bg-card border border-border/40 rounded-2xl overflow-hidden shadow-sm animate-scale-in" style={{ animationDelay: "200ms" }}>
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 h-64 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-b53601bbfc73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Education for All Campaign"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="lg:col-span-3 p-8 md:p-10">
                <h3 className="text-2xl font-medium mb-3">Education for All Campaign</h3>
                <p className="text-muted-foreground mb-6">
                  We're raising funds to provide educational resources and support to underserved communities around the world. Every contribution helps us bring learning opportunities to those who need them most.
                </p>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Progress</span>
                    <span>68% of $50,000</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "68%" }}></div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                    Donate Now
                  </button>
                  <Link 
                    to="/fundraisers" 
                    className="px-6 py-3 rounded-lg border border-border bg-background hover:bg-secondary transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Upcoming Shows */}
      <motion.section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 animate-slide-up">Upcoming Live Shows</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
              Don't miss our upcoming broadcasts featuring inspiring guests and conversations.
            </p>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {[...Array(3)].map((_, index) => (
              <div 
                key={index}
                className="bg-card border border-border/40 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 animate-slide-up"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex-shrink-0 bg-primary/10 rounded-lg p-4 text-center w-full md:w-auto">
                  <span className="block text-2xl font-bold">{15 + index}</span>
                  <span className="block text-sm text-muted-foreground">October</span>
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-medium text-lg mb-1">Kindness in Action: Guest Sarah Johnson</h3>
                  <p className="text-muted-foreground mb-3">
                    Join us for an inspiring conversation with humanitarian worker Sarah Johnson about her experiences building schools in developing countries.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                      10:00 AM EST
                    </span>
                    <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                      Kindness Talks
                    </span>
                    <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                      English
                    </span>
                  </div>
                </div>
                
                <button className="px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium flex-shrink-0 w-full md:w-auto">
                  Set Reminder
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="#" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              View Full Schedule
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.section>
      
      {/* Subscribe CTA */}
      {/* <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 animate-slide-up">Stay Connected with Us</h2>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Subscribe to our newsletter to receive updates on new shows, podcasts, and fundraising campaigns.
            </p>
            
            <div className="flex flex-col sm:flex-row mx-auto max-w-md gap-3 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4 animate-slide-up" style={{ animationDelay: "300ms" }}>
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section> */}

      {/* New: Testimonials Section */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6 md:px-8">
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">What Our Listeners Say</h2>
            <p className="text-lg text-muted-foreground">Stories from our community members</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "This radio station has transformed my daily commute into a journey of inspiration and positivity.",
                author: "Jessica M.",
                location: "New York"
              },
              {
                quote: "The community stories segment helped me connect with like-minded individuals in my area.",
                author: "Robert K.",
                location: "London"
              },
              {
                quote: "I've learned so much about mindfulness and kindness through their thoughtful programming.",
                author: "Maria S.",
                location: "Toronto"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border/40 rounded-xl p-8"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-6 text-primary">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* New: Impact Statistics */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-primary/5 via-background to-primary/5"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Community Partners' },
              { number: '50K+', label: 'Monthly Listeners' },
              { number: '1000+', label: 'Stories Shared' },
              { number: '25+', label: 'Countries Reached' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Continue with existing FeaturedContent and other sections... */}
    </main>
  );
};

export default Index;

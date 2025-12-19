
import React, { useEffect } from 'react';
import { Heart, Globe, Radio, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-fade-in">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-medium mb-6 animate-slide-up">About KindnessRadio</h1>
            <p className="text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: "100ms" }}>
              Discover the story behind our mission to spread kindness through the power of audio.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-up">
              <span className="inline-block text-sm font-medium text-primary mb-3">Our Story</span>
              <h2 className="text-3xl font-medium mb-6">Broadcasting Compassion Since 2010</h2>
              <p className="text-muted-foreground mb-4">
                KindnessRadio began with a simple idea: to create a media platform dedicated entirely to spreading compassion, empathy, and positive action. What started as a small podcast recording in a basement has grown into a global radio network reaching millions.
              </p>
              <p className="text-muted-foreground mb-4">
                Our founder, Emma Mitchell, believed that media had the power to inspire genuine kindness and create real change. After witnessing the impact of humanitarian work firsthand, she gathered a team of like-minded broadcasters, journalists, and producers to create content that would inspire listeners to make a difference.
              </p>
              <p className="text-muted-foreground">
                Today, KindnessRadio broadcasts in multiple languages, produces dozens of podcasts, and has helped raise millions of dollars for various causes around the world.
              </p>
            </div>
            
            <div className="order-1 lg:order-2 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" 
                  alt="KindnessRadio Studio"
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-lg border border-border/40 hidden md:block">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Radio className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">13+ Years</p>
                      <p className="text-sm text-muted-foreground">Of Broadcasting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-3 animate-slide-up">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Why We Exist
            </h2>
            <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: "200ms" }}>
              At KindnessRadio, we believe that kindness has the power to transform lives and communities. Our mission is to inspire, educate, and mobilize listeners to create a more compassionate world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border border-border/40 animate-slide-up" style={{ animationDelay: "300ms" }}>
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Inspire Compassion</h3>
              <p className="text-muted-foreground">
                Through compelling stories and conversations, we aim to inspire listeners to practice empathy and kindness in their daily lives.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border/40 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Connect Communities</h3>
              <p className="text-muted-foreground">
                We bring together diverse voices and perspectives to foster understanding and create a global community of kindness.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border/40 animate-slide-up" style={{ animationDelay: "500ms" }}>
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Drive Action</h3>
              <p className="text-muted-foreground">
                We mobilize resources and support for important causes through our fundraising campaigns and partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-3 animate-slide-up">Our Impact</span>
            <h2 className="text-3xl md:text-4xl font-medium mb-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Making a Difference
            </h2>
            <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: "200ms" }}>
              Over the years, KindnessRadio has made a tangible impact on communities worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up" style={{ animationDelay: "300ms" }}>
              <p className="text-5xl font-bold text-primary mb-2">$12M+</p>
              <p className="text-muted-foreground">Raised for Charity</p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: "400ms" }}>
              <p className="text-5xl font-bold text-primary mb-2">45</p>
              <p className="text-muted-foreground">Countries Reached</p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: "500ms" }}>
              <p className="text-5xl font-bold text-primary mb-2">120+</p>
              <p className="text-muted-foreground">Charitable Projects</p>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: "600ms" }}>
              <p className="text-5xl font-bold text-primary mb-2">1.5M+</p>
              <p className="text-muted-foreground">Regular Listeners</p>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: "700ms" }}>
              <div className="relative rounded-xl overflow-hidden h-80">
                <img 
                  src="https://images.unsplash.com/photo-1509099863731-ef4bff19e808?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" 
                  alt="KindnessRadio Impact"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-medium mb-2">Water for Life Project</h3>
                  <p className="mb-3">
                    Our 2022 campaign provided clean water access to over 50,000 people in rural communities.
                  </p>
                  <Link 
                    to="/fundraisers"
                    className="inline-flex items-center text-primary-foreground hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: "800ms" }}>
              <div className="bg-primary/5 p-6 rounded-xl h-full flex flex-col">
                <h3 className="text-xl font-medium mb-4">Recent Achievements</h3>
                <ul className="space-y-4 mb-6 flex-grow">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 p-1 rounded-full bg-primary/10">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Launched 3 new multilingual podcasts reaching underserved communities.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 p-1 rounded-full bg-primary/10">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Completed education campaign providing scholarships to 250 students.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 p-1 rounded-full bg-primary/10">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Expanded broadcasting to 5 new countries across Africa and Asia.
                    </p>
                  </li>
                </ul>
                <Link 
                  to="/fundraisers"
                  className="inline-flex items-center text-primary hover:text-primary/80"
                >
                  View All Projects
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 animate-slide-up">Join Our Mission</h2>
            <p className="text-xl mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Together, we can create a more compassionate world. There are many ways to get involved with KindnessRadio.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <Link
                to="/fundraisers"
                className="px-6 py-3 rounded-lg bg-white text-primary font-medium hover:bg-white/90 transition-colors"
              >
                Support a Campaign
              </Link>
              <Link
                to="/team"
                className="px-6 py-3 rounded-lg border border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Meet Our Team
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg border border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

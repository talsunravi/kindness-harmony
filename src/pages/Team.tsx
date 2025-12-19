
import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, Twitter, Mic, Headphones, Users } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    email?: string;
    linkedin?: string;
    twitter?: string;
  };
  category: 'hosts' | 'management' | 'production';
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Emma Mitchell',
    role: 'Founder & Executive Director',
    bio: 'Emma founded KindnessRadio in 2010 after a decade in public radio. Her vision was to create a platform that would inspire compassion through storytelling and meaningful conversations.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    social: {
      email: 'emma@kindnessradio.org',
      linkedin: '#',
      twitter: '#',
    },
    category: 'management',
  },
  {
    id: 2,
    name: 'Michael Torres',
    role: 'Program Director',
    bio: 'Michael oversees all programming at KindnessRadio. With over 15 years of experience in radio production, he ensures that our content is engaging, inspiring, and impactful.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    social: {
      email: 'michael@kindnessradio.org',
      linkedin: '#',
    },
    category: 'management',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Host, Kindness Talks',
    bio: 'Sarah hosts our flagship program "Kindness Talks," where she interviews changemakers and explores stories of compassion from around the world. Her warm and engaging style has made her a listener favorite.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    social: {
      twitter: '#',
      linkedin: '#',
    },
    category: 'hosts',
  },
  {
    id: 4,
    name: 'David Rodriguez',
    role: 'Host, Global Compassion Hour',
    bio: 'David brings stories of kindness from around the world to our listeners through his program "Global Compassion Hour." His background in international journalism gives him a unique perspective on cultural expressions of compassion.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    social: {
      twitter: '#',
      email: 'david@kindnessradio.org',
    },
    category: 'hosts',
  },
  {
    id: 5,
    name: 'Aisha Patel',
    role: 'Senior Producer',
    bio: 'Aisha leads our production team, ensuring that all our shows meet the highest quality standards. Her innovative approach to audio storytelling has won multiple industry awards.',
    image: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    social: {
      linkedin: '#',
      email: 'aisha@kindnessradio.org',
    },
    category: 'production',
  },
  {
    id: 6,
    name: 'James Walker',
    role: 'Audio Engineer',
    bio: 'James is the technical genius behind our crystal-clear sound. With a background in music production, he brings artistic sensibility to the technical aspects of our broadcasts.',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    social: {
      linkedin: '#',
    },
    category: 'production',
  },
  {
    id: 7,
    name: 'Carmen Diaz',
    role: 'Host, Voces de Bondad',
    bio: 'Carmen hosts our Spanish-language program "Voces de Bondad," bringing stories of kindness to our Spanish-speaking audience. Her infectious energy and compassion shine through in every episode.',
    image: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
    social: {
      twitter: '#',
      email: 'carmen@kindnessradio.org',
    },
    category: 'hosts',
  },
  {
    id: 8,
    name: 'Thomas Laurent',
    role: 'Host, Radio Gentillesse',
    bio: 'Thomas hosts our French-language program "Radio Gentillesse." His thoughtful interviews and philosophical approach to kindness have built a dedicated following in French-speaking countries.',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
    },
    category: 'hosts',
  },
  {
    id: 9,
    name: 'Lisa Chen',
    role: 'Fundraising Director',
    bio: 'Lisa leads our fundraising efforts, connecting our mission with supporters around the world. Her strategic approach has helped us expand our impact and reach new communities.',
    image: 'https://images.unsplash.com/photo-1618215649860-53cbe6d0e9a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
    social: {
      email: 'lisa@kindnessradio.org',
      linkedin: '#',
    },
    category: 'management',
  },
];

const Team = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hosts' | 'management' | 'production'>('all');
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>(teamMembers);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter team members based on category
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredMembers(teamMembers);
    } else {
      setFilteredMembers(teamMembers.filter(member => member.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <div className="page-fade-in">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-medium mb-6 animate-slide-up">Our Team</h1>
            <p className="text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: "100ms" }}>
              Meet the passionate individuals behind KindnessRadio who work tirelessly to spread compassion through the airwaves.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Filters */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-foreground hover:bg-secondary/70'
              }`}
            >
              All Team
            </button>
            <button 
              onClick={() => setActiveFilter('hosts')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
                activeFilter === 'hosts'
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-foreground hover:bg-secondary/70'
              }`}
            >
              <Mic className="mr-2 h-4 w-4" />
              Radio Hosts
            </button>
            <button 
              onClick={() => setActiveFilter('management')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
                activeFilter === 'management'
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-foreground hover:bg-secondary/70'
              }`}
            >
              <Users className="mr-2 h-4 w-4" />
              Management
            </button>
            <button 
              onClick={() => setActiveFilter('production')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
                activeFilter === 'production'
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-foreground hover:bg-secondary/70'
              }`}
            >
              <Headphones className="mr-2 h-4 w-4" />
              Production
            </button>
          </div>
        </div>
      </section>
      
      {/* Team Grid */}
      <section className="py-8 pb-20 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <div 
                key={member.id}
                className="bg-card rounded-xl overflow-hidden border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex space-x-3">
                    {member.social.email && (
                      <a 
                        href={`mailto:${member.social.email}`}
                        className="p-2 rounded-full bg-secondary text-foreground hover:bg-secondary/70 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    )}
                    
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin}
                        className="p-2 rounded-full bg-secondary text-foreground hover:bg-secondary/70 transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter}
                        className="p-2 rounded-full bg-secondary text-foreground hover:bg-secondary/70 transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-medium mb-6 animate-slide-up">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
              We're always looking for passionate individuals who share our mission of spreading kindness through media. Check out our current openings or send us your resume for future opportunities.
            </p>
            <button className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors animate-slide-up" style={{ animationDelay: "200ms" }}>
              View Open Positions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

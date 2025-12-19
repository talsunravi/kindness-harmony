import React, { useEffect } from 'react';
import { Linkedin } from 'lucide-react';

interface LeadershipMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedinUrl: string;
}

const leadershipTeam: LeadershipMember[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    title: 'Chief Executive Officer & Co-Founder',
    bio: 'Rajesh Kumar is a visionary leader with over 20 years of experience in media and technology. As the CEO and Co-Founder of TAL Radio, he has been instrumental in shaping the organization\'s mission to spread kindness through broadcasting. His journey began in traditional radio, where he discovered the power of storytelling to transform communities. Under his leadership, TAL Radio has grown from a small local station to a multi-language platform reaching millions of listeners across India. Rajesh holds an MBA from IIM Ahmedabad and has been recognized with numerous awards for his contributions to community media. He is passionate about leveraging technology to amplify voices of compassion and believes that every story of kindness has the power to inspire change.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    linkedinUrl: 'https://linkedin.com/in/',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    title: 'Chief Technology Officer',
    bio: 'Priya Sharma brings cutting-edge technological expertise to TAL Radio as the Chief Technology Officer. With a background in software engineering from Microsoft and Google, she joined TAL Radio with a mission to democratize access to inspirational content through technology. Priya has spearheaded the development of TAL Radio\'s streaming infrastructure, mobile applications, and AI-powered content recommendations. She holds a Master\'s degree in Computer Science from Stanford University and has published research on audio streaming optimization. Her innovative approach has enabled TAL Radio to deliver seamless listening experiences across diverse network conditions in India. Priya is a strong advocate for women in technology and regularly mentors young engineers pursuing careers in tech.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
    linkedinUrl: 'https://linkedin.com/in/',
  },
  {
    id: 3,
    name: 'Vikram Patel',
    title: 'Chief Financial Officer',
    bio: 'Vikram Patel serves as the Chief Financial Officer of TAL Radio, bringing three decades of financial leadership experience to the organization. Previously a partner at a leading accounting firm, Vikram transitioned to the nonprofit sector driven by his desire to create meaningful social impact. He has masterfully balanced TAL Radio\'s mission-driven goals with sustainable financial practices, securing funding partnerships with major foundations and corporate sponsors. Vikram holds a Chartered Accountant qualification and an MBA in Finance from London Business School. His strategic financial planning has enabled TAL Radio to expand its programming while maintaining operational efficiency. Beyond numbers, Vikram is deeply committed to transparency and ensures that every donation maximizes its impact on the communities TAL Radio serves.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    linkedinUrl: 'https://linkedin.com/in/',
  },
  {
    id: 4,
    name: 'Anita Desai',
    title: 'Co-Founder & Chief Content Officer',
    bio: 'Anita Desai is a Co-Founder of TAL Radio and serves as the Chief Content Officer, overseeing all programming and content strategy. A former journalist with The Times of India, Anita has dedicated her career to telling stories that matter. She conceptualized TAL Radio\'s multi-language approach, recognizing that kindness speaks every language. Under her creative direction, TAL Radio produces over 100 hours of original content weekly across Hindi, English, Telugu, and Kannada. Anita has received multiple journalism awards and was named among the "50 Most Influential Women in Indian Media." She believes that radio remains one of the most intimate and powerful mediums for human connection. Her vision continues to guide TAL Radio\'s editorial philosophy of amplifying stories of compassion, resilience, and hope from every corner of India.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80',
    linkedinUrl: 'https://linkedin.com/in/',
  },
];

const Leadership = () => {
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
            <h1 className="text-4xl md:text-5xl font-medium mb-6 animate-slide-up">Leadership</h1>
            <p className="text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: "100ms" }}>
              Meet the visionary leaders driving TAL Radio's mission to spread kindness and compassion through the power of broadcasting.
            </p>
          </div>
        </div>
      </section>
      
      {/* Leadership Grid */}
      <section className="py-12 pb-20 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadershipTeam.map((member, index) => (
              <div 
                key={member.id}
                className="bg-card rounded-xl overflow-hidden border border-border/40 shadow-sm hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-2/5 aspect-square md:aspect-auto overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-3/5 p-6 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                        <p className="text-primary font-medium text-sm">{member.title}</p>
                      </div>
                      <a 
                        href={member.linkedinUrl}
                        className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-white transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-medium mb-6 animate-slide-up">Our Vision</h2>
            <p className="text-lg text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Our leadership team is united by a shared vision: to create a world where kindness is amplified through every broadcast, reaching hearts and inspiring positive change in communities across India and beyond.
            </p>
            <p className="text-muted-foreground animate-slide-up" style={{ animationDelay: "200ms" }}>
              Together, we are committed to building a platform that celebrates compassion, elevates diverse voices, and proves that media can be a force for good.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;

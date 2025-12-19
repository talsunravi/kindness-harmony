
import React from 'react';
import { Link } from 'react-router-dom';
import { fundraisers } from '@/constants/fundraisers';

const Fundraisers = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Current Fundraisers</h1>
        <p className="text-lg text-center mb-12 text-muted-foreground">
          Join us in supporting these important causes and help spread kindness where it's needed most.
        </p>
        
        {/* Active Fundraiser */}
        <div className="mb-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl overflow-hidden">
          <div className="p-8 md:flex">
            <div className="md:w-1/2 mb-6 md:mb-0 md:mr-8">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd59a93c5156?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                alt="Children's Education Fund" 
                className="rounded-lg w-full h-[300px] object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <div className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-full mb-4">
                Featured Campaign
              </div>
              <h2 className="text-2xl font-bold mb-3">Children's Education Fund</h2>
              <p className="mb-4 text-muted-foreground">
                Help provide educational resources and opportunities for underprivileged children around the world.
              </p>
              
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Raised: $24,850</span>
                  <span className="font-medium">Goal: $50,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/fundraisers/4" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Donate Now
                </Link>
                <button className="border border-primary text-primary px-6 py-2 rounded-md hover:bg-primary/5 transition-colors">
                  Share Campaign
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Fundraiser Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fundraisers.map((fundraiser) => (
            <div key={fundraiser.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link to={`/fundraisers/${fundraiser.id}`} className="block">
                <div className="aspect-video bg-muted">
                  <img 
                    src={fundraiser.image} 
                    alt={fundraiser.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
              </Link>
              <div className="p-5">
                <Link to={`/fundraisers/${fundraiser.id}`}>
                  <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors">{fundraiser.title}</h3>
                </Link>
                <p className="text-muted-foreground text-sm mb-4">{fundraiser.description}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-2 text-sm">
                    <span>Raised: ${fundraiser.raised.toLocaleString()}</span>
                    <span>Goal: ${fundraiser.goal.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${(fundraiser.raised / fundraiser.goal) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{fundraiser.daysLeft} days left</span>
                  <Link to={`/fundraisers/${fundraiser.id}`} className="text-primary hover:underline text-sm font-medium">
                    Support This Cause
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fundraisers;

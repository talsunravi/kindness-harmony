
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import talRadioLogo from '@/assets/tal-radio-logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 pt-12 sm:pt-16 pb-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={talRadioLogo} 
                alt="TAL Radio - Inspiring Kindness" 
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Spreading kindness through the power of sound. Join us in making the world a better place, one broadcast at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Broadcasts</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/podcasts" className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base">
                  Podcasts
                </Link>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base">
                  Past Episodes
                </a>
              </li>
              {/* <li>
                <Link to="/fundraisers" className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base">
                  Fundraisers
                </Link>
              </li> */}
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base">
                  Partnerships
                </a>
              </li>
            </ul>
          </div>
          
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Stay Connected</h3>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Subscribe to our newsletter to get updates on shows, podcasts, and fundraising campaigns.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-3 sm:px-4 py-2 text-sm sm:text-base rounded-l-md border border-border focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-white px-3 sm:px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors flex-shrink-0">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Subscribe</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} TAL Radio. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="text-foreground/60 hover:text-primary text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

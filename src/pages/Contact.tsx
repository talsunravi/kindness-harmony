
import React from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-lg text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
          Have questions, feedback, or just want to connect? We'd love to hear from you. Reach out to our team using any of the methods below.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-primary/5 rounded-xl p-6 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-4">For general inquiries and information</p>
            <a href="mailto:hello@kindnessradio.org" className="text-primary hover:underline">
              hello@kindnessradio.org
            </a>
          </div>
          
          <div className="bg-primary/5 rounded-xl p-6 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">Call Us</h3>
            <p className="text-muted-foreground mb-4">Monday to Friday, 9am - 5pm EST</p>
            <a href="tel:+1-555-123-4567" className="text-primary hover:underline">
              +1 (555) 123-4567
            </a>
          </div>
          
          <div className="bg-primary/5 rounded-xl p-6 text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">Visit Us</h3>
            <p className="text-muted-foreground mb-4">Our studio is open for scheduled visits</p>
            <address className="not-italic text-primary">
              123 Kindness Way<br />
              Harmony Hills, CA 90210
            </address>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-card border rounded-xl shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="What is your message about?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="flex items-center justify-center w-full bg-primary text-white px-4 py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="md:w-1/2 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1635187677105!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={true}
                loading="lazy"
                title="Our location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/constants/blogPosts';

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Kindness Blog</h1>
        <p className="text-lg text-center mb-12 text-muted-foreground">
          Read our latest articles on spreading kindness, compassion, and positive change.
        </p>
        
        {/* Featured Article */}
        <div className="mb-16">
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1488282687151-d5f12f1e83b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
              alt="Community garden volunteers" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <span className="text-white/90 text-sm mb-2 inline-block">Featured Article</span>
              <h2 className="text-white text-3xl font-bold mb-2">Building Communities Through Acts of Kindness</h2>
              <p className="text-white/80 mb-4">How small local initiatives are transforming neighborhoods and building stronger connections.</p>
              <Link to="/blog/2" className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition-colors inline-block">
                Read Article
              </Link>
            </div>
          </div>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link to={`/blog/${post.id}`} className="block">
                <div className="aspect-video bg-muted">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
              </Link>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{post.category}</span>
                  <span className="text-muted-foreground text-xs ml-3">{post.date}</span>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors">{post.title}</h3>
                </Link>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm">{post.author.name}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="text-primary hover:underline text-sm font-medium">
                    Read More
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

export default Blog;

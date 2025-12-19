
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';
import { blogPosts } from '@/constants/blogPosts';
import ShareButton from '@/components/ShareButton';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const post = blogPosts.find(p => p.id === Number(id));
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the article you're looking for.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-primary hover:underline mb-8 block"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
        
        <article>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center mb-8 text-sm text-muted-foreground">
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Tag className="h-4 w-4 mr-1" />
              <span>{post.category}</span>
            </div>
            <div className="flex items-center mb-2">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author.name}</span>
            </div>
          </div>
          
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
          
          <div className="flex items-center mb-8 border-b pb-8">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="font-medium">{post.author.name}</h3>
              {post.author.bio && (
                <p className="text-sm text-muted-foreground">{post.author.bio}</p>
              )}
            </div>
          </div>

          <div className="mb-8">
            <ShareButton title={post.title} />
          </div>
          
          <div 
            className="prose prose-lg max-w-none mb-12" 
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="border-t pt-8 mt-12">
            <h3 className="text-xl font-bold mb-6">More Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.id}`}
                    className="flex border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-1/3 bg-muted">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full mb-2 inline-block">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-medium text-sm mb-1 line-clamp-2">{relatedPost.title}</h3>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{relatedPost.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;

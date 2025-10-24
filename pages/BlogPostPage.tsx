import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">404 - Postingan tidak ditemukan</h1>
        <Link to="/blog" className="text-[#033C35] hover:underline mt-4 inline-block">Kembali ke Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <article>
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#033C35] leading-tight mb-4">{post.title}</h1>
            <p className="text-gray-500">
              Diterbitkan pada {post.date} oleh {post.author}
            </p>
          </header>
          
          <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg mb-12" />
          
          <div 
            className="prose prose-lg text-gray-700 prose-h3:text-[#033C35]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 border-t pt-8 text-center">
            <Link to="/blog" className="bg-[#033C35] text-white font-bold py-3 px-8 rounded-2xl text-lg hover:bg-[#1a4738] transition-colors">
                &larr; Kembali ke Semua Postingan
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;
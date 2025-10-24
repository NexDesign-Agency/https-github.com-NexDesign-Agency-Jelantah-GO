
import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { BlogPost } from '../types';

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`} className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{post.date} • {post.author}</p>
        <h3 className="text-xl font-bold text-[#1A4738] mb-3 group-hover:text-green-700 transition-colors">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.summary}</p>
        <span className="font-semibold text-green-600">Baca Selengkapnya &rarr;</span>
      </div>
    </Link>
  );
};

const BlogListPage: React.FC = () => {
  return (
    <div className="bg-[#F9F8F4] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1A4738] mb-4">Blog & Artikel Edukasi</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan wawasan, panduan, dan berita terbaru seputar pengelolaan minyak jelantah dan industri daur ulang.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;

import { Button } from '@/components/ui/button';
import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const blogs = [
  {
    title: "First Blog",
    description: "This is the first blog description.",
    slug: "first-blog",
    date: "2023-10-01",
    author: "John Doe",
    image: "https://images.pexels.com/photos/225769/pexels-photo-225769.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    title: "Second Blog",
    description: "This is the second blog description.",
    slug: "second-blog",
    date: "2023-10-02",
    author: "Stacy Dew",
    image: "https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    title: "Third Blog",
    description: "This is the third blog description.",
    slug: "third-blog",
    date: "2023-10-02",
    author: "Steve Wozniak",
    image: "https://images.pexels.com/photos/5952647/pexels-photo-5952647.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  // Add more blog objects here
];

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <div className="mt-4 text-gray-500 text-sm">
                <span>{blog.date}</span> | <span>{blog.author}</span>
              </div>


              <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline"})}>Click here</Link>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
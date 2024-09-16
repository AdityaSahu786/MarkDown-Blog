import React from 'react'

// components/navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">
        <Link href="/">AnakinBlog</Link>
      </div>
      <div className="space-x-4">
        <Link href="/" className="text-white hover:underline">Home</Link>
        <Link href="/about" className="text-white hover:underline">About</Link>
        <Link href="/contact" className="text-white hover:underline">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;



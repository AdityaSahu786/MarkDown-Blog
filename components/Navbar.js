
import React from 'react'
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { HamIcon } from 'lucide-react';


const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0  backdrop-blur border-b">
      <div className="container mx-auto flex justify-between items-center">
         <Link href={"/"}><div className=" text-lg font-bold">
            AnakinBlog
        </div></Link>
        <div className="hidden md:flex space-x-4 items-center ">
          <Link href="/"> Home
          </Link>
          <Link href="/about">
             About
          </Link>
          <Link href="/contact">
              Contact
          </Link>
          <div>
        <Button className="mx-1" variant="outline">Login</Button>
        <Button className="mx-1" variant="outline">Signup</Button>

        </div>
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M412h16m-7 6h7"></path>
              </svg>
            </button>
        </div>
       
        
      </div>
    </nav>
  );
};

export default Navbar;



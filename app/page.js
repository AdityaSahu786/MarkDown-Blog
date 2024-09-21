import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary">Tailwind CSS</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
              <input type="search" name="query" placeholder="Search Components" required="required" className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />
              <button type="submit" className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>
      <section class="bg-gray-900 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-extrabold text-gray-900">Pricing Plans</h2>
      <p class="mt-4 text-lg text-gray-600">Choose the plan that fits your needs.</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div class="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        <h3 class="text-2xl font-semibold text-gray-900">Basic</h3>
        <p class="mt-4 text-gray-600 text-xl">$10/month</p>
        <ul class="mt-6 space-y-4">
          <li class="flex items-center">
            <span class="text-green-500">✔</span>
            <span class="ml-3 text-gray-700">Feature 1</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-500">✔</span>
            <span class="ml-3 text-gray-700">Feature 2</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-500">✔</span>
            <span class="ml-3 text-gray-700">Feature 3</span>
          </li>
        </ul>
        <button class="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-black-700">Choose Basic</button>
      </div>

      <div class="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 border-4 border-purple-500 relative">
        <span class="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">Bestseller</span>
        <h3 class="text-2xl font-semibold text-gray-900">Standard</h3>
        <p class="mt-4 text-gray-600 text-xl">$20/month</p>
        <ul class="mt-6 space-y-4">
          <li class="flex items-center">
            <span class="text-green-500">✔</span>
            <span class="ml-3 text-gray-700">Feature 1</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-500">✔</span>
            <span class="ml-3 text-gray-700">Feature 2</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-500">✔</span>
            <span class="ml-3 text-gray-700">Feature 3</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-500">✔</span>
            <span class="ml-3 text-gray-700">Feature 4</span>
          </li>
        </ul>
        <button class="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-black-700">Choose Standard</button>
      </div>
       
      <div class="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        <h3 class="text-2xl font-semibold text-gray-900">Premium</h3>
        <p class="mt-4 text-gray-600 text-xl">$30/month</p>
        <ul class="mt-6 space-y-4">
          <li class="flex items-center">
            <span class="text-green-500">✔</span>
            <span class="ml-3 text-gray-700">Feature 1</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-500">✔</span>
            <span class="ml-3 text-gray-700">Feature 2</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-500">✔</span>
            <span class="ml-3 text-gray-700">Feature 3</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-500">✔</span>
            <span class="ml-3 text-gray-700">Feature 4</span>
          </li>
          <li class="flex items-center">
            <span class="text-green-500">✔</span>
            <span class="ml-3 text-gray-700">Feature 5</span>
          </li>
        </ul>
        <button class="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-black-700">Choose Premium</button>
      </div>
    </div>
  </div>
</section>

<section class="bg-gray-900 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-extrabold text-white">What Our Clients Say</h2>
      <p class="mt-4 text-lg text-gray-400">Hear from our satisfied customers.</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div class="bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        <p class="text-gray-300">"This service has been a game-changer for our business. Highly recommend!"</p>
        <h3 class="mt-4 text-xl font-semibold text-white">John Doe</h3>
        <p class="text-gray-500">CEO, Company A</p>
      </div>
      
      <div class="bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        <p class="text-gray-300">"Exceptional quality and fantastic customer support."</p>
        <h3 class="mt-4 text-xl font-semibold text-white">Jane Smith</h3>
        <p class="text-gray-500">CTO, Company B</p>
      </div>
      
      <div class="bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        <p class="text-gray-300">"I can't imagine working without this tool anymore. It's indispensable."</p>
        <h3 class="mt-4 text-xl font-semibold text-white">Alice Johnson</h3>
        <p class="text-gray-500">Manager, Company C</p>
      </div>
    </div>
  </div>
</section>

<section class="bg-gray-900 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-extrabold text-gray-100">Top Blogs</h2>
      <p class="mt-4 text-lg text-gray-400">Read our latest and greatest articles.</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div class="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-gray-50">
        <h3 class="text-2xl font-semibold text-gray-900">Ethical Hacking and Penetration Testing</h3>
        <img src="https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Blog-3" className="w-full h-48 object-cover rounded-t-lg"/>
        <p class="mt-4 text-gray-600">A brief description of blog 1.</p>
        <a href="#" class="m-2 inline-block text-blue-600 hover:text-blue-800">Read more</a>
      </div>
      
      <div class="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-gray-50">
        <h3 class="text-2xl font-semibold text-gray-900">AWS or Azure</h3>
        <img src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Blog-3" className="w-full h-48 object-cover rounded-t-lg"/>
        <p class="mt-4 text-gray-600">A brief description of blog 2.</p>
        <a href="#" class="m-2 inline-block text-blue-600 hover:text-blue-800">Read more</a>
      </div>
      
      <div class="bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-gray-50">
        <h3 class="text-2xl font-semibold text-gray-900">Quantum Computing</h3>
        <img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Blog-3" className="w-full h-48 object-cover rounded-t-lg"/>
        <p class="mt-4 text-gray-600">A brief description of blog 3.</p>
        <a href="#" class="m-2 inline-block text-blue-600 hover:text-blue-800">Read more</a>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};


  

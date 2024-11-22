import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex-grow">
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        </div>
        
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to ModernApp
          </h1>
          <p className="max-w-3xl mt-6 text-xl text-gray-300">
            Experience the future of web applications with our modern, responsive, and beautiful design.
            Built with React, TypeScript, and Tailwind CSS and optimized for performance.
          </p>
          <div className="mt-10">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
            >
              Lear more about the new app
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: 'Modern Design',
              description: 'Clean and intuitive interface built with the latest web technologies.',
              image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
            },
            {
              title: 'Responsive',
              description: 'Perfect experience across all devices and screen sizes.',
              image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
            },
            {
              title: 'Fast & Reliable',
              description: 'Optimized performance for the best user experience.',
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
            }
          ].map((feature, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                className="object-cover w-full h-48"
                src={feature.image}
                alt={feature.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
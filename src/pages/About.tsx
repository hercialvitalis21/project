import React from 'react';
import { Users, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="flex-grow">
      <div className="bg-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              About ModernApp
            </h2>
            <p className="mt-4 text-xl text-indigo-200">
              Learn about our mission and values
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-gray-900">Our Team</h3>
            <p className="mt-2 text-base text-gray-600">
              A passionate group of individuals dedicated to creating exceptional web experiences.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-gray-900">Our Mission</h3>
            <p className="mt-2 text-base text-gray-600">
              To deliver innovative solutions that empower businesses and individuals in the digital age.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-gray-900">Our Vision</h3>
            <p className="mt-2 text-base text-gray-600">
              To be at the forefront of technological advancement, setting new standards in web development.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <img
            className="w-full h-96 object-cover rounded-lg shadow-xl"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Team collaboration"
          />
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            © 2024 ModernApp. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com" className="text-gray-400 hover:text-gray-500">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-gray-500">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-500">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import myImage from '../assets/my_image.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-100 py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src={myImage}
                alt="Mohamed Mmdouh"
                className="w-20 h-20 rounded-full border-4 border-blue-600 dark:border-blue-400 shadow-lg mb-4 object-cover mx-auto"
              />
              <h3 className="text-xl font-bold mb-4">Mohamed Mmdouh</h3>
              <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
                Passionate Flutter developer creating beautiful, high-performance 
                mobile applications that deliver exceptional user experiences.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-blue-400 transition-colors duration-200">
                  Home
                </a>
                <a href="#about" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-blue-400 transition-colors duration-200">
                  About
                </a>
                <a href="#projects" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-blue-400 transition-colors duration-200">
                  Projects
                </a>
                <a href="#contact" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-blue-400 transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/mohamed-mmdouh156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-mmdouh-32492a1a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:mohamed.mmdouh.dev@gmail.com"
                  className="w-10 h-10 bg-gray-700 dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 dark:border-gray-800 pt-8 text-center">
            <p className="text-gray-300 dark:text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> by Mohamed Mmdouh
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
              © 2024 Mohamed Mmdouh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
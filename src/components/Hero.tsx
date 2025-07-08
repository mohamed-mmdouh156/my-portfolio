import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import myImage from '../assets/my_image.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src={myImage}
              alt="Mohamed Mmdouh"
              className="w-44 h-44 mx-auto mb-6 rounded-full border-4 border-blue-600 dark:border-blue-400 shadow-xl object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-6 leading-tight">
            Flutter
            <span className="block text-blue-600 dark:text-blue-400">Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting beautiful, high-performance mobile applications with Flutter. 
            Passionate about creating seamless user experiences across iOS and Android platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 text-white dark:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/mohamed-mmdouh156"
              className="w-12 h-12 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-blue-400 text-white dark:text-gray-900 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-mmdouh-32492a1a1/"
              className="w-12 h-12 bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 text-white dark:text-gray-900 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mohamed.mmdouh.dev@gmail.com"
              className="w-12 h-12 bg-green-600 dark:bg-green-400 hover:bg-green-700 dark:hover:bg-green-500 text-white dark:text-gray-900 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-400 dark:text-gray-300" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
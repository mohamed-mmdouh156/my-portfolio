import React from 'react';
import { Code, Smartphone, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient Flutter applications'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Cross-Platform',
      description: 'Developing apps that work seamlessly on both iOS and Android'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'Optimizing apps for smooth animations and fast loading times'
    },
    {
      icon: <Users size={24} />,
      title: 'User-Focused',
      description: 'Creating intuitive interfaces that users love to interact with'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Passionate Flutter Developer
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm Mohamed Mamdouh, a dedicated Flutter developer with a passion for creating 
                exceptional mobile experiences. With expertise in Dart and Flutter framework, 
                I specialize in building cross-platform applications that deliver native performance 
                and beautiful user interfaces.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                My journey in mobile development has led me to work on various projects ranging 
                from e-commerce apps to productivity tools, always focusing on clean architecture, 
                performance optimization, and user experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium">
                  Flutter Expert
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium">
                  Mobile UI/UX
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full font-medium">
                  Problem Solver
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 rounded-lg flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { ExternalLink, Github, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Ufeed',
      description: 'At UFeed, we specialize in transforming human capital management, providing superior data analytics and insights to elevate your organization\'s potential with UFeed.',
      image: 'https://www.ufeed-ai.com/public/logo-Ufeed.png?auto=compress&cs=tinysrgb&w=500',
      tech: ['Flutter', 'Firebase', 'AI/ML APIs', 'Provider'],
      liveUrl: 'https://www.ufeed-ai.com/',
      appUrl: 'https://application.ufeed-ai.com/',
      category: 'Human Capital strategy'
    },
    {
      title: 'Dima - AI-Powered Co-pilot',
      description: 'AI-powered co-pilot designed for brand managers, PR professionals, and marketing experts. Deeply understands Arabic language including dialects and Franco-Arabic, helping monitor, analyze, and engage with brand conversations in real-time. Trusted by over 250 professionals across the MENA region.',
      image: 'https://play-lh.googleusercontent.com/rx7r705Su4RrQGClAwdnzG1bhLSVeDZoNOZpJEcia5doMgS13YbIp75sWhhwNw0q1Oc=w480-h960-rw?auto=compress&cs=tinysrgb&w=800',
      tech: ['Flutter', 'AI/ML', 'Bloc', 'Real-time Analytics'],
      webUrl: 'https://www.dida.darwinz.ai/',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=darwinz.ai.didagpt3',
      appStoreUrl: 'https://apps.apple.com/us/app/didagpt/id6477492861',
      category: 'AI/Marketing'
    },
    {
      title: 'GeniePT - AI-Powered Online Training',
      description: 'It\'s an AI-powered app that creates personalized workout plans and nutrition programs tailored specifically for you. It also tracks your progress regularly, offers curated articles to boost your fitness knowledge, and provides daily live support. Our goal is to help you achieve your health and fitness goals through a smart application that combines cutting-edge artificial intelligence technology with advanced training methodologies.',
      image: 'https://play-lh.googleusercontent.com/aDQ9f8DUop2bpftcGqAbn0mKfU_7tMOjcGcuH1GRWpsmqKp69o3ev1lio-aZmnOqtw=w480-h960-rw?auto=compress&cs=tinysrgb&w=800',
      tech: ['Flutter', 'Bloc', 'REST APIs','AI/ML',"UI/UX"],
      webUrl: 'https://www.geniept.net/',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.geniept2.geniept2',
      appStoreUrl: 'https://apps.apple.com/eg/app/geniept/id6744561364',
      category: 'Health & Fitness'
    },
    {
      title: 'CardSim - Online gaming store',
      description: 'CardSim Store is your one-stop shop for top digital products. Discover the most popular gaming subscriptions, streaming service memberships, and a wide range of digital cards — all in one secure and easy-to-use platform. Whether you\'re a gamer, streamer, or just looking for digital convenience, CardSim Store offers instant delivery, secure payments, and trusted service you can rely on.',
      image: 'https://cardsim.net/assets/images/1835279290865599.png?auto=compress&cs=tinysrgb&w=800',
      tech: ['Flutter', 'Bloc', 'REST APIs', "UI/UX"],
      webUrl: 'https://cardsim.net/',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=games.cardsim.net&hl=ar',
      category: 'E-commerce'
    },
    {
      title: 'ZCard',
      description: 'ZCard is a health insurance program that offers discounts of up to 100% on medical check-ups, hospital visits, lab tests, and radiology services.This program is designed for individuals who want to save money on their medical expenses without compromising the quality of care they receive.',
      image: 'https://play-lh.googleusercontent.com/PhYE3mwto4qGYo53n9MnlELUvNGaIu-M4G75kPpJCqRf67CtOS6aEbR762qPF-UQ6Kc=w480-h960-rw?auto=compress&cs=tinysrgb&w=800',
      tech: ['Flutter','Bloc', "UI/UX",'REST APIs', 'Payment Gateway'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=zcard.app.zcard',
      appStoreUrl: 'https://apps.apple.com/eg/app/viking-information-technology/id6449321785',
      category: 'Medical'
    },
    {
      title: 'WFI - Home Services Platform',
      description: 'Leading brand in home services solutions in Saudi Arabia, offering distinguished services that meet household needs by employing qualified domestic workers with the highest standards. With Wafi, we take care of all the minute details efficiently and professionally, ensuring comfort and reassurance.',
      image: 'https://wfiksa.com/images/logo.png?auto=compress&cs=tinysrgb&w=800',
      tech: ['Flutter', 'Service Booking','Provider','Google Maps','REST APIs', 'Payment Gateway'],
      webUrl: 'https://wfiksa.com/',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=watan.app.wfi',
      appStoreUrl: 'https://apps.apple.com/eg/app/wfi-وفي/id6443803109',
      category: 'Services'
    },
    {
      title: 'FlexCards - Gift Cards',
      description: 'Flexcards has become the go-to solution for retailers and restaurants to easily create, sell, and distribute digital gift cards — known as Flexcards — to both individual and corporate customers.Download the app now to seamlessly view and redeem Flexcards from all your favorite stores!',
      image: 'https://play-lh.googleusercontent.com/ZaKa7gfT1KE_gmeokEqikpTCEF6aqNdsQYih0JEQMSzpGUJqyScvr_xp0KBhiImA3WI=w526-h296-rw?auto=compress&cs=tinysrgb&w=800',
      tech: ['Flutter','QR Codes', 'Bloc','Firebase'],
      demoUrl: 'https://demo.flexcards.darwinz.ai/',
      webUrl: 'https://flexcards.darwinz.ai/#/auth',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=darwinz.ai.flexcard',
      category: 'Business'
    },
    {
      title: 'Gas Plus - Service App',
      description: 'On-demand gas delivery service with real-time tracking, payment integration, and customer support.',
      image: 'https://mostaql.hsoubcdn.com/uploads/thumbnails/1888767/66939cfb92ac5/intro.jpg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Flutter', 'Google Maps', 'Payment Gateway', 'Real-time Tracking'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gas.gas',
      appStoreUrl: 'https://apps.apple.com/app/gas-plus/id1662697146',
      category: 'Service'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of mobile applications I've built with Flutter
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 text-white dark:text-gray-900 px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        <span>Live Site</span>
                      </a>
                    )}
                    {project.webUrl && (
                      <a
                        href={project.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600 dark:bg-green-400 hover:bg-green-700 dark:hover:bg-green-500 text-white dark:text-gray-900 px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        <span>Web App</span>
                      </a>
                    )}
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600 dark:bg-green-400 hover:bg-green-700 dark:hover:bg-green-500 text-white dark:text-gray-900 px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        <Smartphone size={16} />
                        <span>Play Store</span>
                      </a>
                    )}
                    {project.appStoreUrl && (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-blue-400 text-white dark:text-gray-900 px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        <Smartphone size={16} />
                        <span>App Store</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
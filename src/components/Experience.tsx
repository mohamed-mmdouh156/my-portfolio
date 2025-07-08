import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Med-Level Flutter Developer',
      company: 'Darwinz AI',
      location: 'New Cairo, Egypt',
      duration: '2023 - Present',
      description: 'Leading mobile development projects, mentoring junior developers, and architecting scalable Flutter applications.',
      achievements: [
        'Led development of 3+ production Flutter apps',
        'Improved app performance by 40% through optimization',
        'Mentored team of 3 junior developers'
      ]
    },
    {
      title: 'Flutter Developer - Internship',
      company: 'Algoriza',
      location: 'Cairo, Egypt',
      duration: 'June 2022 - August 2022',
      description: 'Developed cross-platform mobile applications using Flutter, focusing on user experience and performance.',
      achievements: [
        'Built and deployed mobile applications',
        'Integrated complex APIs and third-party services',
      ]
    },
    {
      title: 'Flutter Developer - Internship',
      company: 'Watan First Digital ',
      location: 'Cairo, Egypt',
      duration: 'May 2022 - December 2022',
      description: 'Started career in mobile development, contributing to various Flutter projects and learning best practices.',
      achievements: [
        'Contributed to 2 major project releases',
        'Learned advanced Flutter concepts and patterns',
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Benha University - Faculty of Computers and Informatics',
      year: '2018 - 2022',
      description: 'Graduated with focus on software engineering and mobile application development'
    }
  ];

  const certifications = [
    'Android Development Training (ITI) August 2021 - September 2021',
    'The Complete 2022 Flutter & Dart Development Course',
    'Flutter Clean Architecture',
    'Advanced Dart Programming'
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My professional journey in mobile development
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 flex items-center gap-3">
                <Calendar className="text-blue-600 dark:text-blue-400" size={24} />
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100">{exp.title}</h4>
                      <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">{exp.duration}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-3">
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education & Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 flex items-center gap-3">
                <Award className="text-blue-600 dark:text-blue-400" size={24} />
                Education & Certifications
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">{edu.degree}</h4>
                    <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.institution}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-3">{edu.year}</div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.description}</p>
                  </div>
                ))}
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">Certifications</h4>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
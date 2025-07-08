import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 95 },
        { name: 'Dart', level: 95 },
        { name: 'iOS Development', level: 85 },
        { name: 'Android Development', level: 90 },
      ]
    },
    {
      title: 'Backend & APIs',
      skills: [
        { name: 'Firebase', level: 90 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 75 },
        { name: 'Node.js', level: 70 },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 80 },
        { name: 'Testing', level: 85 },
        { name: 'App Store Deployment', level: 90 },
      ]
    }
  ];

  const technologies = [
    'Flutter', 'Dart', 'Firebase', 'Provider', 'Bloc', 'GetX',
    'Clean Architecture','MVVM','OOP','SOLID Principles',
    'Google Maps', 'Payment Getways',
    'SQLite','REST API', 'GraphQL', 'Git', 'Figma',
    'Android Studio', 'VS Code', 'Xcode', 'Postman'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive skill set focused on creating exceptional mobile experiences
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-200 font-medium">{skill.name}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium transition-colors duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';

const services = [
  {
    title: 'Resume Analysis',
    description: 'AI-powered analysis of your resume to highlight strengths and suggest improvements.',
    icon: '📝',
  },
  {
    title: 'Skill Matching',
    description: 'Match your skills with job requirements and get tailored job recommendations.',
    icon: '🔍',
  },
  
  {
    title: 'PDF Export',
    description: 'Download your analyzed resume as a clean, formatted PDF file.',
    icon: '📄',
  },
  {
    title: 'Custom Tips',
    description: 'Get actionable tips to enhance your resume for specific industries or roles.',
    icon: '💡',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-gray-500 mb-12">
          Discover how SmartResumeScan helps you land your dream job.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-200 shadow-xl p-6 hover:scale-105 transition duration-300">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Kieron Rana</h1>
        <p className="text-xl mb-8">Developer</p>
        <a href="mailto:kieronrana@gmail.com" target="_blank" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
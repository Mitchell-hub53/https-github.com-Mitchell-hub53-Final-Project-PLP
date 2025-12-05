import React, { useEffect, useState } from 'react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${IMAGES.banner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to Agrigrow
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light text-gray-200">
          Your trusted seedling delivery partner
        </p>
        <a 
          href="#services" 
          className="inline-block bg-secondary text-primary font-bold py-3 px-8 rounded-full hover:bg-green-400 transition transform hover:scale-105 shadow-lg"
        >
          View Our Seedlings
        </a>
      </div>
    </section>
  );
};

export default Hero;
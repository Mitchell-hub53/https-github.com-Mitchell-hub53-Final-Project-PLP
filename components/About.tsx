import React from 'react';
import FadeIn from './FadeIn.tsx';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-accent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Who We Are</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Agrigrow is dedicated to supporting farmers by providing high-quality, disease-resistant seedlings delivered right to your farm. 
            We bridge the gap between quality nurseries and the farmers who feed the nation.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to ensure every farmer has access to the best start for their crops—because a good harvest begins with a strong seedling.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
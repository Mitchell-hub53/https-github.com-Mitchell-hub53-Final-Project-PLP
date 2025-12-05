import React from 'react';
import { IMAGES } from '../constants';
import { Product } from '../types';
import FadeIn from './FadeIn';

const products: Product[] = [
  {
    id: 1,
    name: "Maize Seedlings",
    description: "High-quality hybrid maize seedlings delivered fresh.",
    imageUrl: IMAGES.maize
  },
  {
    id: 2,
    name: "Tomato Seedlings",
    description: "Healthy tomato seedlings ready for transplanting.",
    imageUrl: IMAGES.tomato
  },
  {
    id: 3,
    name: "Cabbage Seedlings",
    description: "Strong and disease-resistant cabbage seedlings.",
    imageUrl: IMAGES.cabbage
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Seedlings</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product, index) => (
            <FadeIn key={product.id} delay={index * 150} className="w-full max-w-sm">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full flex flex-col">
                <div className="h-64 overflow-hidden relative group">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                  </div>
                  <button className="w-full py-2 bg-primary text-white font-semibold rounded hover:bg-green-700 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
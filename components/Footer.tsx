import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white text-center py-8 mt-auto">
      <div className="container mx-auto px-4">
        {/* Contact Links in Footer */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 mb-4 text-green-100 font-medium">
           <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors hover:underline">
             {CONTACT_INFO.email}
           </a>
           <span className="hidden md:inline text-green-400">•</span>
           <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors hover:underline">
             {CONTACT_INFO.phone}
           </a>
        </div>
        
        <div className="border-t border-green-800 pt-4 mt-2">
          <p className="font-medium text-lg">&copy; {new Date().getFullYear()} Agrigrow. All rights reserved.</p>
          <p className="text-green-200 text-sm mt-2">Growing Tomorrow, Today 🌱</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
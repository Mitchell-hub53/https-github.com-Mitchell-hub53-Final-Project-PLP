import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white text-center py-6 mt-auto">
      <div className="container mx-auto px-4">
        <p className="font-medium text-lg">&copy; {new Date().getFullYear()} Agrigrow. All rights reserved.</p>
        <p className="text-green-200 text-sm mt-2">Growing Tomorrow, Today 🌱</p>
      </div>
    </footer>
  );
};

export default Footer;
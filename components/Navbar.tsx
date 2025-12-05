import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { NAV_LINKS } from '../constants.ts';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-primary text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-2xl">
          <Leaf className="h-8 w-8 text-secondary" />
          <span>Agrigrow</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-secondary transition-colors duration-300 font-semibold"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-green-700 animate-fade-in">
          <ul className="flex flex-col space-y-4 mt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block text-center hover:text-secondary font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
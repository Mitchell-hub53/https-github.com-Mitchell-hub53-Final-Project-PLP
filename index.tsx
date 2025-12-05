import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { Menu, X, Leaf, Mail, Phone, Send, MapPin, ArrowUp } from 'lucide-react';

// ==========================================
// TYPES
// ==========================================
export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// ==========================================
// CONSTANTS
// ==========================================
export const CONTACT_INFO = {
  email: "agrigrowenterprise@gmail.com",
  phone: "+254796805119",
  address: "Nairobi, Kenya"
};

export const IMAGES = {
  banner: "https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg",
  tomato: "https://images.pexels.com/photos/8221390/pexels-photo-8221390.jpeg",
  cabbage: "https://images.pexels.com/photos/14209081/pexels-photo-14209081.jpeg",
  maize: "https://images.pexels.com/photos/16053020/pexels-photo-16053020.jpeg"
};

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const FORMSUBMIT_EMAIL = "agrigrowenterprise@gmail.com";
export const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/${FORMSUBMIT_EMAIL}`;


// ==========================================
// COMPONENTS
// ==========================================

// --- FadeIn Component ---
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.2 });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Navbar Component ---
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-primary text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-2xl">
          <Leaf className="h-8 w-8 text-secondary" />
          <span>Agrigrow</span>
        </div>

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

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

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

// --- Hero Component ---
const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${IMAGES.banner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

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

// --- About Component ---
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

// --- Services Component ---
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

// --- Contact Component ---
const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600">Have questions? We'd love to hear from you.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          <FadeIn delay={100}>
            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Us</h4>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Call Us</h4>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-primary hover:underline">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Visit Us</h4>
                    <p className="text-gray-600">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <form 
              action={FORMSUBMIT_ENDPOINT} 
              method="POST" 
              target="_blank"
              referrerPolicy="origin"
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
              
              <input type="hidden" name="_subject" value="New Inquiry from Agrigrow Website" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// --- Footer Component ---
const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white text-center py-8 mt-auto">
      <div className="container mx-auto px-4">
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

// --- ScrollToTop Component ---
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 transform z-50 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

// ==========================================
// APP COMPONENT
// ==========================================
const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

// ==========================================
// ROOT RENDER
// ==========================================
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

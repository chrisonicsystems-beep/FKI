
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Craftsman', href: '#about' },
    { name: 'Expertise', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Enquire', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-xl py-3 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex flex-col">
          <span className="text-2xl font-bold tracking-[0.2em] text-silver serif">FITZGERALD</span>
          <span className="text-[10px] text-gold uppercase tracking-[0.4em] font-bold">Kitchen Installs NZ</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors font-semibold"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+64210745218" 
            className="flex items-center space-x-3 border border-gold/30 px-6 py-2 group hover:border-gold transition-all"
          >
            <Phone size={14} className="text-gold" />
            <span className="text-xs font-bold tracking-widest text-gold uppercase">021 074 5218</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gold" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black fixed inset-0 z-40 flex flex-col items-center justify-center space-y-10">
          <button className="absolute top-8 right-6 text-gold" onClick={() => setIsMenuOpen(false)}>
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-3xl font-light uppercase tracking-[0.2em] text-white hover:text-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

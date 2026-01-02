
import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <div className="text-2xl font-bold tracking-widest text-white serif mb-2">FITZGERALD</div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            Excellence in luxury kitchen installation. Serving New Zealand's most exclusive residences with master craftsmanship.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-800 text-gray-400 hover:text-gold hover:border-gold transition-all">
            <Instagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-800 text-gray-400 hover:text-gold hover:border-gold transition-all">
            <Facebook size={18} />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-800 text-gray-400 hover:text-gold hover:border-gold transition-all">
            <Linkedin size={18} />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-2">© 2026 Fitzgerald Kitchen Installs NZ</p>
          <div className="flex justify-center md:justify-end space-x-4 text-[10px] text-gray-600 uppercase tracking-tighter">
            <a href="#contact" className="hover:text-gold">Contact Form</a>
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

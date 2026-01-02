
import React from 'react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 reveal">
          <div className="max-w-2xl">
            <div className="flex items-center mb-6">
              <div className="h-px w-12 bg-gold mr-4"></div>
              <h2 className="metallic-gold uppercase tracking-[0.4em] text-xs font-black">Our Expertise</h2>
            </div>
            <h3 className="text-4xl md:text-5xl text-white serif font-bold">Uncompromising Quality in Every Detail</h3>
          </div>
          <div className="hidden md:block">
             <div className="h-[1px] w-32 bg-gold/50 mb-4"></div>
             <p className="text-gray-400 text-sm italic">Mastering the installation of the world's finest kitchens.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon];
            return (
              <div 
                key={service.id} 
                className="group p-10 border border-white/5 bg-[#0a0a0a] hover:border-gold/50 transition-all duration-500 flex flex-col items-center text-center reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-silver-dark group-hover:bg-gold/10 group-hover:border-gold/30 group-hover:text-gold transition-all duration-300">
                  {IconComponent && <IconComponent size={32} strokeWidth={1.2} />}
                </div>
                <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">{service.title}</h4>
                <p className="text-gray-500 leading-relaxed font-light text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
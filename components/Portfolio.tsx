
import React from 'react';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <div className="flex items-center justify-center mb-6 space-x-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-700"></div>
            <h2 className="metallic-gold uppercase tracking-[0.4em] text-xs font-black">Masterpiece Collection</h2>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-700"></div>
          </div>
          <h3 className="text-5xl md:text-7xl metallic-silver serif font-bold mb-8">NZ Showcases</h3>
        </div>

        <div className="space-y-64">
          {PORTFOLIO.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center reveal`}
            >
              <div className="w-full lg:w-3/5 relative group">
                {/* Architectural frame */}
                <div className="absolute -inset-4 border border-amber-900/20 translate-x-6 translate-y-6 pointer-events-none transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-1000"></div>
                
                <div className="relative overflow-hidden aspect-[16/10] md:aspect-square lg:aspect-[16/11]">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="absolute bottom-10 left-10 text-left">
                  <p className="metallic-gold text-xs uppercase tracking-[0.3em] font-bold mb-2">{project.category}</p>
                  <h4 className="text-4xl text-white serif font-bold leading-tight">{project.title}</h4>
                </div>
              </div>
              
              <div className="w-full lg:w-2/5">
                <div className="space-y-16">
                  <div>
                    <div className="flex items-center mb-6">
                       <span className="metallic-gold text-sm font-black mr-4 uppercase tracking-widest">0{index + 1}</span>
                       <div className="h-px flex-1 bg-amber-900/30"></div>
                    </div>
                    <p className="text-amber-500 italic tracking-widest text-sm mb-8 uppercase font-bold">{project.location}, New Zealand</p>
                  </div>
                  
                  <div className="space-y-12">
                    <div className="relative pl-10">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-200 to-transparent"></div>
                      <h5 className="metallic-silver text-xs uppercase tracking-widest font-black mb-4">The Brief</h5>
                      <p className="text-slate-400 font-light leading-relaxed text-xl italic">"{project.brief}"</p>
                    </div>
                    
                    <div className="relative pl-10">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-600 to-transparent"></div>
                      <h5 className="metallic-gold text-xs uppercase tracking-widest font-black mb-4">The Installation</h5>
                      <p className="text-slate-300 font-light leading-relaxed text-lg">{project.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-64 relative py-24 px-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a] border border-amber-900/30" />
          <div className="absolute -top-1 -left-1 w-12 h-12 border-t-2 border-l-2 border-amber-600"></div>
          <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-2 border-r-2 border-amber-600"></div>
          
          <div className="relative z-10">
            <h4 className="metallic-gold text-2xl md:text-4xl serif mb-12 italic leading-relaxed max-w-3xl mx-auto">
              "Bringing world-class precision to the finest homes in New Zealand."
            </h4>
            <a href="#contact" className="inline-block px-20 py-6 bg-white hover:bg-amber-500 text-black font-black uppercase tracking-[0.4em] text-xs transition-all duration-500 transform hover:-translate-y-1">
              Secure Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


import React from 'react';
import { ChevronDown } from 'lucide-react';
import { USER_LOGO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1556912177-f547cff79eba?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Kitchen" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Central Branding Module */}
      <div className="relative z-20 w-full max-w-5xl px-6 flex flex-col items-center">
        
        {/* The Detailed Arch Construction - Now Responsively Scaled */}
        <div className="relative w-full max-w-sm md:max-w-3xl flex flex-col items-center mb-12">
          {/* Gold Arch Line */}
          <div className="absolute -top-20 md:-top-32 w-full aspect-[2/1] border-t-2 border-l border-r border-amber-600/40 rounded-t-full pointer-events-none shadow-[0_-20px_50px_-20px_rgba(217,119,6,0.3)]" />
          
          {/* Kitchen Silhouettes inside the Arch - Scaled for Mobile */}
          <div className="absolute -top-16 md:-top-24 flex items-end justify-between w-full max-w-[280px] md:max-w-xl px-6 md:px-12 opacity-30 pointer-events-none">
             {/* Left: Pendant Lamp */}
             <div className="flex flex-col items-center">
               <div className="w-[1px] h-8 md:h-12 bg-amber-600/50"></div>
               <div className="w-6 md:w-8 h-4 md:h-6 bg-amber-600/50 rounded-t-full"></div>
             </div>
             
             {/* Center: Range Hood */}
             <div className="flex flex-col items-center -mb-2">
               <div className="w-12 md:w-16 h-14 md:h-20 bg-gradient-to-b from-amber-600/20 to-amber-600/60 clip-hood"></div>
             </div>
             
             {/* Right: Modern Faucet */}
             <div className="flex flex-col items-center">
               <div className="w-6 md:w-10 h-10 md:h-16 border-t-[3px] md:border-t-4 border-r-[3px] md:border-r-4 border-amber-600/50 rounded-tr-xl md:rounded-tr-2xl"></div>
             </div>
          </div>

          {/* Logo Branding */}
          <div className="mt-8 scale-90 md:scale-100 animate-logo-fade flex flex-col items-center w-full">
             <img 
               src={USER_LOGO} 
               alt="FKI Fitzgerald Kitchen Installs" 
               className="w-full max-w-2xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] px-4 md:px-0"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 const parent = e.currentTarget.parentElement;
                 if (parent) {
                   const fallback = document.createElement('div');
                   fallback.className = "flex flex-col items-center text-center py-10";
                   fallback.innerHTML = `
                     <div class="mb-2 metallic-gold text-7xl md:text-9xl font-bold serif tracking-tighter leading-none">FKI</div>
                     <div class="metallic-silver text-4xl md:text-8xl uppercase tracking-[0.3em] font-bold mb-6">FITZGERALD</div>
                     <div class="flex items-center w-full max-w-xs md:max-w-lg">
                       <div class="h-[2px] flex-1 bg-gradient-to-r from-transparent via-amber-700 to-amber-500"></div>
                       <div class="mx-3 md:mx-6 metallic-gold text-[8px] md:text-lg uppercase tracking-[0.4em] md:tracking-[0.6em] font-black whitespace-nowrap">Kitchen Installs</div>
                       <div class="h-[2px] flex-1 bg-gradient-to-l from-transparent via-amber-700 to-amber-500"></div>
                     </div>
                   `;
                   parent.appendChild(fallback);
                 }
               }}
             />
          </div>
        </div>
        
        {/* Call to Actions */}
        <div className="animate-reveal-up flex flex-col items-center w-full">
          <p className="text-silver/40 uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-xs font-black mb-12 md:mb-16 text-center leading-relaxed">
            New Zealand's Premier Independent <br className="md:hidden" /> Luxury Kitchen Specialist
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 w-full sm:w-auto">
            <a href="#portfolio" className="relative group overflow-hidden w-full sm:w-80 py-4 md:py-5 border border-amber-900/40 hover:border-amber-500 transition-all duration-500 text-center">
              <span className="relative z-10 metallic-gold font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Explore Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 via-amber-600/5 to-amber-600/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#contact" className="relative group overflow-hidden w-full sm:w-80 py-4 md:py-5 border border-slate-800/60 hover:border-white transition-all duration-500 text-center">
              <span className="relative z-10 metallic-silver font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">Request Consultation</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <ChevronDown size={28} className="text-amber-500" />
      </div>

      <style>{`
        @keyframes logo-fade {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes reveal-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-logo-fade { animation: logo-fade 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-reveal-up { animation: reveal-up 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards; opacity: 0; }
        .clip-hood {
          clip-path: polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
};

export default Hero;

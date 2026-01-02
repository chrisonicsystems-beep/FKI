
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { TESTIMONIALS } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = { 
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-32 bg-[#050505] relative overflow-hidden">
          {/* Faint Arch Motif Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] arch-motif opacity-5 pointer-events-none rotate-180" />

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group reveal">
              <div className="absolute -top-6 -left-6 w-full h-full border border-amber-900/30 translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000"></div>
              <div className="relative overflow-hidden aspect-[4/5] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=800" 
                  alt="Adrian Fitzgerald" 
                  className="w-full h-full object-cover transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-black border border-amber-900/50 p-10 z-20 hidden md:block">
                <span className="block text-5xl font-black metallic-gold serif mb-2">20+</span>
                <span className="text-[10px] text-white/50 font-black uppercase tracking-[0.3em] block">Years Experience</span>
                <span className="text-[10px] text-amber-600 font-black uppercase tracking-[0.3em] block">New Zealand Wide</span>
              </div>
            </div>
            
            <div className="reveal">
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-amber-600 mr-4"></div>
                <h2 className="metallic-gold uppercase tracking-[0.4em] text-xs font-black">The Craftsman</h2>
              </div>
              <h3 className="text-5xl md:text-6xl text-white serif font-bold mb-10">Dedication to <span className="metallic-silver italic">Perfection</span></h3>
              
              <div className="space-y-8 text-slate-400 leading-relaxed font-light text-xl">
                <p>
                  At Fitzgerald Kitchen Installs, we believe a luxury kitchen is only as good as its installation. 
                  Adrian has spent over two decades mastering the intricate art of joinery throughout New Zealand.
                </p>
                <p>
                  Working with homeowners, designers, and luxury architects, he provides a meticulous service that 
                  elevates the final outcome of any project. From perfectly aligned cabinetry to the seamless integration 
                  of industrial-grade appliances, no detail is too small for FKI.
                </p>
                <p>
                  Choosing Adrian means choosing peace of mind, knowing that your investment is being handled 
                  by one of New Zealand's most skilled independent installers.
                </p>
              </div>

              <div className="mt-16 flex items-center space-x-10">
                <div>
                   <div className="metallic-silver font-bold text-3xl serif italic mb-1">Adrian Fitzgerald</div>
                   <div className="metallic-gold text-[10px] uppercase tracking-[0.5em] font-black">Principal Installer</div>
                </div>
                <div className="h-10 w-px bg-amber-900/30"></div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-loose">
                  Specializing in <br/> High-End Fitting
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        
        <Portfolio />

        {/* Testimonials */}
        <section className="py-32 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24 reveal">
              <h2 className="metallic-gold uppercase tracking-[0.4em] text-xs font-black mb-6">Voices of Excellence</h2>
              <h3 className="text-4xl md:text-6xl metallic-silver serif font-bold">Client Testimonials</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-black/40 p-12 border border-white/5 hover:border-amber-900/50 transition-all group reveal relative">
                   <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-900/20 to-transparent"></div>
                   
                   <div className="text-amber-500 mb-8 flex space-x-1">
                     {[...Array(t.stars)].map((_, i) => <span key={i} className="text-xl">★</span>)}
                   </div>
                   <blockquote className="text-2xl text-slate-300 serif italic font-light leading-relaxed mb-10">
                     "{t.text}"
                   </blockquote>
                   <div className="flex items-center justify-between">
                     <div>
                       <span className="block text-white font-black uppercase tracking-[0.2em] text-xs mb-1">{t.name}</span>
                       <span className="metallic-gold text-[10px] uppercase tracking-[0.3em] font-black">{t.location}</span>
                     </div>
                     <div className="metallic-silver text-4xl serif opacity-10">"</div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
      
      {/* Decorative corner accents */}
      <div className="fixed top-0 left-0 w-24 h-24 border-t border-l border-amber-900/10 pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-0 w-24 h-24 border-b border-r border-amber-900/10 pointer-events-none z-0"></div>
    </div>
  );
};

export default App;

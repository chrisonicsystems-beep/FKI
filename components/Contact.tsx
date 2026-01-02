
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry. Adrian will be in touch shortly to discuss your NZ project.");
  };

  return (
    <section id="contact" className="py-24 bg-dark-luxury border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl text-white serif font-bold mb-8">Let's Create Your <span className="text-gold italic">Dream Space</span></h3>
            
            <p className="text-gray-400 mb-12 leading-relaxed text-lg font-light">
              FKI specializes in luxury kitchen fitting across New Zealand. 
              Due to high demand from top-tier designers, we recommend booking 3-4 months in advance.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Call Adrian</h4>
                  <p className="text-gray-400">+64 21 074 5218</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Email</h4>
                  <p className="text-gray-400">adrian@kitcheninstalls.co.nz</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Service Area</h4>
                  <p className="text-gray-400">Auckland, Wellington, Christchurch & Queenstown</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-8 md:p-12 border border-gray-800 relative shadow-2xl">
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-gold"></div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-gold"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gold text-xs uppercase tracking-widest mb-2 font-bold">Your Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:outline-none focus:border-gold transition-all"
                    placeholder="e.g. Liam Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gold text-xs uppercase tracking-widest mb-2 font-bold">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:outline-none focus:border-gold transition-all"
                    placeholder="+64 2X XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gold text-xs uppercase tracking-widest mb-2 font-bold">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:outline-none focus:border-gold transition-all"
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gold text-xs uppercase tracking-widest mb-2 font-bold">Project Details</label>
                <textarea 
                  rows={4}
                  required
                  className="w-full bg-black/50 border border-gray-800 p-4 text-white focus:outline-none focus:border-gold transition-all resize-none"
                  placeholder="Describe your kitchen installation needs (Style, Appliances, Timeline)..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gold text-black font-bold uppercase tracking-[0.2em] py-5 flex items-center justify-center space-x-2 hover:bg-white transition-all duration-300"
              >
                <span>Send Enquiry</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

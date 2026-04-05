import React from 'react';
import { Twitter, Linkedin, Zap } from 'lucide-react';

const Footer = ({ onCtaClick }) => {
  return (
    <footer className="bg-[#030712] border-t border-white/5 pt-16 md:pt-20 pb-10 px-4 md:px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-16 md:mb-20">

        {/* LEFT */}
        <div className="md:col-span-5 space-y-4 md:space-y-6">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#B8A8FF] rounded-lg flex items-center justify-center">
              <Zap size={16} className="text-black" />
            </div>
            <span className="text-xl md:text-2xl font-black text-white">
              ELEVATES<span className="text-[#B8A8FF]">.</span>
            </span>
          </div>

          <p className="text-slate-500 text-sm md:text-base max-w-sm">
            We build high-performance digital assets for professionals who don't settle for "average."
          </p>

          <div className="flex gap-4">
            <a href="https://x.com/sakbuss79" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/saksham-patiyar-165389289/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* EXPLORE */}
        <div className="md:col-span-3">
          <h4 className="text-white font-bold mb-4 md:mb-6 text-xs md:text-sm uppercase tracking-widest">
            Explore
          </h4>

          <ul className="space-y-3 md:space-y-4 text-slate-500 text-sm md:text-base">
            <li><a href="#services" className="hover:text-[#B8A8FF] transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-[#B8A8FF] transition-colors">Case Study</a></li>
            <li><a href="#contact" className="hover:text-[#B8A8FF] transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="md:col-span-4 space-y-4 md:space-y-6">
          
          <h4 className="text-white font-bold text-xs md:text-sm uppercase tracking-widest">
            New Projects
          </h4>

          <a 
            href="mailto:helloelevatesweb@gmail.com" 
            className="text-lg md:text-xl font-bold text-[#B8A8FF] break-all"
          >
            helloelevatesweb@gmail.com
          </a>

          <button 
            onClick={onCtaClick} 
            className="w-full bg-white/5 border border-white/10 text-white font-bold py-3 md:py-4 rounded-xl hover:bg-white hover:text-black transition-all"
          >
            GET A REVIEW
          </button>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row gap-2 md:gap-0 justify-between text-slate-600 text-[10px] md:text-xs font-bold uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Elevates Co.</p>
        <p>Built for the bold.</p>
      </div>

    </footer>
  );
};

export default Footer;
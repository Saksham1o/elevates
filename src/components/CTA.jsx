import React from 'react';
import { MousePointer2, Sparkles } from 'lucide-react';

const FinalCTA = ({ onCtaClick }) => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#030712]" id="contact">
      <div className="max-w-5xl mx-auto">

        <div className="relative glass-card rounded-[2rem] md:rounded-[3.5rem] p-6 md:p-20 text-center border border-white/10 overflow-hidden">

          {/* Background */}
          <div className="absolute inset-0 bg-[#7F2CCB]/10 blur-[100px] -z-10" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/20 text-[#B8A8FF] font-bold text-[10px] md:text-xs uppercase tracking-widest mb-6 md:mb-10">
            <Sparkles size={12} /> Limited Availability
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-6 md:mb-8 leading-tight">
            Ready to <span className="text-gradient">Elevate?</span>
          </h2>

          {/* CTA */}
          <button 
            onClick={onCtaClick}
            className="group bg-[#B8A8FF] text-black font-black px-6 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl text-sm md:text-xl flex items-center gap-2 md:gap-4 mx-auto hover:scale-105 transition-all"
          >
            FIX MY WEBSITE
            <MousePointer2 size={18} className="group-hover:rotate-12 transition-transform" />
          </button>

          {/* Bottom tags */}
          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8 opacity-30 text-[10px] md:text-sm">
            <span className="text-white font-black italic">MODERN UX</span>
            <span className="text-white font-black italic">FAST BUILD</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
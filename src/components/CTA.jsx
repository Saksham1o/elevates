import React from 'react';
import { MousePointer2, ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = ({ onCtaClick }) => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative rounded-[2.5rem] bg-slate-900 overflow-hidden shadow-2xl shadow-[#7F2CCB]/20">
          
          {/* Animated Background Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7F2CCB]/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B8A8FF]/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 p-10 md:p-16 text-center space-y-8">
            {/* Top Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#B8A8FF] font-bold text-xs uppercase tracking-widest backdrop-blur-md">
                <Sparkles size={14} />
                <span>Limited Availability</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                Ready to <span className="text-[#B8A8FF]">Elevate</span> Your Website?
              </h2>
              <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                Get a free website review and see exactly what’s holding your site back from generating leads and sales.
              </p>
            </div>

            {/* Action Area */}
            <div className="flex flex-col items-center gap-6 pt-4">
              <button className="group w-full sm:w-auto relative bg-[#B8A8FF] text-black font-black px-10 py-5 rounded-2xl text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-[0_0_30px_rgba(184,168,255,0.4)]"
              onClick={onCtaClick}>
                Fix My Website
                <MousePointer2 size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-slate-500 text-sm font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Typically responds within 24 hours
              </p>
            </div>
          </div>

          {/* Bottom Decoration */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B8A8FF] to-transparent opacity-50"></div>
        </div>

        {/* Footnote Trust Line */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale pointer-events-none">
          <span className="text-slate-900 font-bold tracking-tighter text-xl italic">Modern UX</span>
          <span className="text-slate-900 font-bold tracking-tighter text-xl italic">High Speed</span>
          <span className="text-slate-900 font-bold tracking-tighter text-xl italic">Conversion Ready</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
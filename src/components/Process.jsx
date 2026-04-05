import React from 'react';
import { Search, PenTool, Rocket, ShieldCheck } from 'lucide-react';

const Process = ({ onCtaClick }) => {
  const steps = [
    { 
      title: "Review", 
      desc: "Strategy and deep audit of your current digital presence.", 
      icon: Search, 
      tag: "01" 
    },
    { 
      title: "Design", 
      desc: "Creating a modern, high-conversion UI/UX framework.", 
      icon: PenTool, 
      tag: "02" 
    },
    { 
      title: "Launch", 
      desc: "Deployment with speed optimization and SEO check.", 
      icon: Rocket, 
      tag: "03" 
    },
    { 
      title: "Support", 
      desc: "Post-launch care and technical peace of mind.", 
      icon: ShieldCheck, 
      tag: "04" 
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#030712] relative overflow-hidden" id="process">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7F2CCB]/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-[#B8A8FF] font-black text-xs uppercase tracking-[0.3em] bg-[#B8A8FF]/5 px-4 py-2 rounded-full border border-[#B8A8FF]/20">
            The Roadmap
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-6 tracking-tighter">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F2CCB] to-[#B8A8FF]">Elevates</span> Works
          </h2>
        </div>

        {/* 4-Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-[#B8A8FF]/40 hover:bg-white/[0.07] transition-all duration-500 flex flex-col h-full"
            >
              {/* Numbering Badge - Floating Top Right */}
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#B8A8FF] group-hover:shadow-[0_0_15px_rgba(184,168,255,0.3)] transition-all duration-500">
                  <span className="text-sm font-black text-white/30 group-hover:text-[#B8A8FF]">
                    {step.tag}
                  </span>
                </div>
              </div>

              {/* Icon Section */}
              <div className="mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#B8A8FF]/10 flex items-center justify-center text-[#B8A8FF] group-hover:bg-[#B8A8FF] group-hover:text-black transition-all duration-500 shadow-inner">
                  <step.icon size={28} />
                </div>
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#B8A8FF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Glow Line - Appears on Hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-[#B8A8FF] to-transparent group-hover:w-1/2 transition-all duration-700 opacity-50" />
            </div>
          ))}
        </div>

        {/* Action Card */}
        <div className="mt-20 relative group overflow-hidden rounded-[3rem] p-1 bg-gradient-to-r from-white/5 to-white/10 hover:from-[#7F2CCB]/20 hover:to-[#B8A8FF]/20 transition-all duration-700">
          <div className="bg-[#030712] rounded-[2.9rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-center md:text-left">
              <h4 className="text-3xl font-black text-white mb-2">Ready to start your upgrade?</h4>
              <p className="text-slate-500 font-medium italic">We typically complete redesigns within 2-3 weeks.</p>
            </div>
            <button 
              onClick={onCtaClick}
              className="whitespace-nowrap bg-white text-black font-black px-10 py-5 rounded-2xl hover:bg-[#B8A8FF] hover:shadow-[0_0_30px_rgba(184,168,255,0.4)] hover:scale-105 transition-all duration-300"
            >
              BOOK FREE REVIEW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
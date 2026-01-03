import React from 'react';
import { Search, PenTool, Rocket, ShieldCheck, Check } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      title: "Review & Strategy",
      description: "We analyze your current website and identify exactly what’s holding it back from being a growth asset.",
      icon: <Search className="w-6 h-6" />,
      tag: "Step 01"
    },
    {
      title: "Design & Optimization",
      description: "We redesign your site with modern UI, high-speed performance, and messaging clarity in mind.",
      icon: <PenTool className="w-6 h-6" />,
      tag: "Step 02"
    },
    {
      title: "Build & Launch",
      description: "Your new site goes live—fast, fully responsive, and structured to turn visitors into inquiries.",
      icon: <Rocket className="w-6 h-6" />,
      tag: "Step 03"
    },
    {
      title: "Handover & Support",
      description: "You own everything. No technical lock-ins. We provide a clean delivery and ongoing peace of mind.",
      icon: <ShieldCheck className="w-6 h-6" />,
      tag: "Step 04"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden" id="process">
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B8A8FF]/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#B8A8FF]/15 text-[#7F2CCB] font-bold text-xs tracking-widest uppercase border border-[#B8A8FF]/30 mb-4">
            Our Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            How <span className="text-[#7F2CCB]">Elevates</span> Works
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            We’ve refined our process to be simple, transparent, and results-driven. 
            No guesswork—just a clear path to a better website.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="relative">
          {/* Desktop Connection Line */}
          <div className="hidden lg:block absolute top-[2.25rem] left-0 w-full h-0.5 bg-slate-100 -z-10">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-[#B8A8FF] to-[#7F2CCB]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Marker */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:border-[#B8A8FF] group-hover:shadow-lg group-hover:shadow-[#B8A8FF]/20 transition-all duration-300 relative z-10">
                    <div className="text-[#7F2CCB]">
                      {step.icon}
                    </div>
                  </div>
                  {/* Step Tag (Desktop Only) */}
                  <span className="ml-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-[#B8A8FF] transition-colors">
                    {step.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#7F2CCB] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile/Tablet Step Indicator */}
                <div className="mt-6 flex items-center gap-2">
                   <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                      <Check size={12} className="text-green-500" />
                   </div>
                   <span className="text-xs font-bold text-slate-400">Verified Step</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Reassurance */}
        <div className="mt-20 p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7F2CCB]/20 rounded-full blur-[80px]"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-2xl font-bold">Ready to start your upgrade?</h4>
              <p className="text-slate-400 max-w-md">
                We typically complete redesigns within 2-4 weeks depending on the scope.
              </p>
            </div>
            <button className="whitespace-nowrap bg-[#B8A8FF] text-black font-bold px-8 py-4 rounded-xl hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-[#B8A8FF]/20">
              Book Your Free Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
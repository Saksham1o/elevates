import React from 'react';
import { Monitor, Zap, Target, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const serviceData = [
    {
      title: "Website Redesign & Modernization",
      description: "Outdated websites hurt trust and conversions. We redesign your site to look modern, professional, and credible so your business reflects the quality you actually provide.",
      icon: <Monitor className="w-8 h-8 text-[#7F2CCB]" />,
      outcome: "Build instant trust"
    },
    {
      title: "Performance & Mobile Optimization",
      description: "Fast-loading, mobile-first websites that keep visitors engaged. We ensure your site works perfectly on every device, reducing bounce rates and keeping users on your page.",
      icon: <Zap className="w-8 h-8 text-[#7F2CCB]" />,
      outcome: "Stop losing mobile leads"
    },
    {
      title: "Conversion-Focused Layouts",
      description: "Clear messaging and strong structures designed to turn casual visitors into inquiries. We guide your customers toward a clear action so your website actually makes you money.",
      icon: <Target className="w-8 h-8 text-[#7F2CCB]" />,
      outcome: "Turn traffic into customers"
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-50/50" id="services">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#B8A8FF]/15 text-[#7F2CCB] font-bold text-xs tracking-widest uppercase border border-[#B8A8FF]/30">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Services Designed to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F2CCB] to-[#B8A8FF]">Elevate Your Website</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            We focus on the results that matter: credibility, speed, and growth. No tech-talk, just a website that works for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#B8A8FF]/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Accent Gradient */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#B8A8FF]/5 rounded-full blur-3xl group-hover:bg-[#B8A8FF]/20 transition-colors duration-500"></div>
              
              {/* Icon Container */}
              <div className="w-16 h-16 bg-[#B8A8FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#B8A8FF] group-hover:rotate-6 transition-all duration-500">
                <div className="group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 relative z-10">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#7F2CCB] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                
                {/* Outcome Badge */}
                <div className="pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#7F2CCB] font-bold text-xs uppercase tracking-wider">
                    <ArrowUpRight size={16} />
                    <span className='cursor-pointer' onClick={() => {window.location.href = "#contact"}}>{service.outcome}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-[#7F2CCB] to-[#B8A8FF] group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Hook */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 font-medium mb-6 italic">
            "Simple, effective, and built to grow your bottom line."
          </p>
          <button className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-[#7F2CCB] transition-colors group"
          onClick={() => window.location.href = "#work"}>
            Learn more about our process 
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
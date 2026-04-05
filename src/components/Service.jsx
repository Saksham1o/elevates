import { Monitor, Zap, Target, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const serviceData = [
    {
      title: "Website Redesign & Modernization",
      description: "Modern, credible websites that reflect your actual business quality.",
      icon: Monitor,
      outcome: "Build trust"
    },
    {
      title: "Performance Optimization",
      description: "Fast-loading, mobile-first experience across all devices.",
      icon: Zap,
      outcome: "Keep users engaged"
    },
    {
      title: "Conversion Layouts",
      description: "Design that turns visitors into leads and customers.",
      icon: Target,
      outcome: "Increase conversions"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#030712]" id="services">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12 md:mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-[#B8A8FF]/10 text-[#B8A8FF] text-[10px] md:text-xs font-bold uppercase border border-[#B8A8FF]/20 animate-fade-in">
            High-Performance Solutions
          </span>

          <h2 className="text-3xl md:text-6xl font-black text-white mt-4">
            Services to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F2CCB] to-[#B8A8FF] animate-pulse">
              Scale Your Business
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((service, index) => (
            
            <div 
              key={index} 
              className="group relative glass-card p-6 md:p-10 rounded-[2rem] border border-white/5 overflow-hidden 
              transition-all duration-500 
              hover:-translate-y-3 hover:scale-[1.02] 
              hover:border-[#B8A8FF]/30 
              hover:shadow-[0_0_40px_rgba(184,168,255,0.15)]"
            >

              {/* 🔥 Glow Effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#7F2CCB]/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-700" />

              {/* ICON */}
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10 
              transition-all duration-500 
              group-hover:bg-[#B8A8FF] 
              group-hover:rotate-6 
              group-hover:shadow-[0_0_20px_rgba(184,168,255,0.4)]">

                <service.icon className="w-6 h-6 text-[#B8A8FF] transition-all duration-500 group-hover:text-black group-hover:scale-110" />
              </div>

              {/* TITLE */}
              <h3 className="text-lg md:text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#B8A8FF]">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-slate-400 text-sm mb-6 transition-all duration-300 group-hover:text-slate-300">
                {service.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 text-[#B8A8FF] text-xs font-bold uppercase tracking-wider 
              transition-all duration-300 group-hover:gap-3">

                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                {service.outcome}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
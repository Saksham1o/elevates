import React from 'react';
import { AlertCircle, Target, CheckCircle, ExternalLink, Layout, Smartphone, MousePointerClick } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: "Website Redesign Concept — Local Health Clinic",
      subtitle: "Concept project · Not a client engagement",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
      problem: [
        "The original website looked outdated and intimidating.",
        "Lacked a clear 'Book Appointment' call-to-action.",
        "Difficult to navigate on mobile devices.",
        "Slow page structure and confusing messaging."
      ],
      goal: "The goal was to modernize the website, improve patient clarity, and create a layout that guides visitors toward booking an appointment easily.",
      solution: [
        "Redesigned hero section for immediate trust.",
        "Improved visual hierarchy for services.",
        "Added high-contrast CTAs.",
        "Optimized layout for mobile-first users."
      ],
      outcome: "The final design presents a clean, modern, and professional website that builds patient trust and is ready to capture leads."
    },
    {
      title: "Website Redesign Concept — Professional Consulting",
      subtitle: "Concept project · Not a client engagement",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      problem: [
        "The site suffered from a 'wall of text' that overwhelmed visitors.",
        "No clear path for prospective clients to get in touch.",
        "Messaging did not reflect the high-end quality of the services provided."
      ],
      goal: "The goal was to simplify the messaging, build authority through clean design, and create a conversion-focused structure for lead generation.",
      solution: [
        "Simplified the copy and messaging structure.",
        "Created a lead-capture focused layout.",
        "Integrated professional imagery and whitespace.",
        "Optimized navigation for faster information access."
      ],
      outcome: "The final redesign offers a credible, authority-building online presence with a structure designed to turn visitors into inquiries."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50" id="work">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#B8A8FF]/15 text-[#7F2CCB] font-bold text-xs tracking-widest uppercase border border-[#B8A8FF]/30">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Website Redesign <span className="text-[#7F2CCB]">Examples</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Explore our approach to solving real-world business problems through professional design and optimization.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((item, index) => (
            <div key={index} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl flex flex-col h-full">
              
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden group">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-slate-900 shadow-sm border border-slate-200">
                  CONCEPT PROJECT
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 space-y-8 flex-grow">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm font-semibold text-[#7F2CCB]/70 tracking-tight">{item.subtitle}</p>
                </div>

                {/* 1. The Problem */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-red-500 font-bold text-sm uppercase tracking-wider">
                    <AlertCircle size={16} />
                    <span>The Problem</span>
                  </div>
                  <ul className="space-y-2">
                    {item.problem.map((p, i) => (
                      <li key={i} className="text-slate-500 text-sm flex gap-3">
                        <span className="text-red-300 font-bold">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. The Goal */}
                <div className="space-y-3 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-wider">
                    <Target size={16} className="text-[#7F2CCB]" />
                    <span>The Goal</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    "{item.goal}"
                  </p>
                </div>

                {/* 3. The Solution */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[#7F2CCB] font-bold text-sm uppercase tracking-wider">
                    <Layout size={16} />
                    <span>The Solution</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.solution.map((s, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                        <CheckCircle size={12} className="text-green-500" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. The Outcome */}
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-green-600 font-bold text-sm uppercase tracking-wider mb-2">
                    <CheckCircle size={18} />
                    <span>Qualitative Outcome</span>
                  </div>
                  <p className="text-slate-800 font-bold text-base">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5. Mandatory Disclaimer */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-xs italic max-w-xl mx-auto leading-relaxed">
            * Disclaimer: The projects above are concept redesigns created to demonstrate my professional approach to improving business websites and conversion layouts. These are not active client engagements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
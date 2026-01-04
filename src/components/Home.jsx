import { CheckCircle2, XCircle, MousePointer2, ExternalLink, Contact } from 'lucide-react';

const Home = () => {
  const painPoints = [
    "Outdated Website",
    "Low Leads",
    "Slow Loading",
    "Poor Mobile Experience",
    "Confusing Messaging",
    "No Clear CTA"
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-[#B8A8FF]/30 overflow-x-hidden">
      {/* Hero Section - Responsive Padding */}
      <section className="relative mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
            
            {/* Left Side: Photo Container - Now responsive */}
            <div className="w-full md:w-1/2 lg:w-[45%] relative group">
              {/* Soft Glow Effect - Hidden on small mobile to improve performance */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#B8A8FF]/15 rounded-full blur-3xl animate-pulse hidden sm:block"></div>
              
              {/* Image Container: Removed fixed w-[500px] and added max-w-lg */}
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-full mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-50">
                <img 
                  src="https://i.ibb.co/XxQ1c0rP/saksh.png"  
                  alt="Founder" 
                  /* Fixed image cropping for hair: used object-contain + p-1 */
                  className="w-full h-auto sm:object-contain md:object-cover sm:object-top aspect-[4/5] max-h-[500px] md:max-h-[550px] p-1"
                />
                
                {/* Floating Trust Card - Hidden on extra small mobile */}
                <div className="hidden sm:block absolute bottom-4 right-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="user" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-slate-900 leading-tight">20+ Happy Clients</p>
                      <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium tracking-tight">Real Results</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accent Border Frame - Moves with the container */}
              <div className="hidden md:block absolute inset-0 border-2 border-[#B8A8FF]/60 rounded-[2rem] translate-x-4 translate-y-4 -z-10"></div>
            </div>

            {/* Right Side: Content - Mobile Optimized Typography */}
            <div className="w-full md:w-1/2 lg:w-[55%] space-y-6 md:space-y-7 text-left">
              {/* Sub-Headline */}
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#B8A8FF]/15 text-[#7F2CCB] font-bold text-[10px] sm:text-xs tracking-widest uppercase border border-[#B8A8FF]/30">
                  Upgrade Your Presence
                </span>
                <p className="text-slate-500 font-medium text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                  Helping small & medium businesses upgrade outdated websites into fast, modern, lead-generating assets.
                </p>
              </div>

              {/* Headline - Responsive font sizes (text-3xl to text-6xl) */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.2] sm:leading-[1.15] tracking-tight">
                Is Your Website <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F2CCB] to-[#B8A8FF]">Holding You Back?</span>
              </h1>

              {/* Pain Chips - Balanced for small screens */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {painPoints.map((text, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-50 border border-slate-200 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold text-slate-600 shadow-sm"
                  >
                    <XCircle size={14} className="opacity-80 text-red-400" />
                    {text}
                  </div>
                ))}
              </div>

              {/* Solution Line - Stronger presence but readable on mobile */}
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed border-l-4 border-[#B8A8FF] pl-4 sm:pl-6 py-1">
                I redesign and optimize sites so they <span className="font-bold text-slate-900 underline decoration-[#B8A8FF] decoration-[2px] sm:decoration-[3px] underline-offset-4">look professional</span>, load fast, and convert visitors.
              </p>

              {/* Buttons - Stack on mobile, side-by-side on tablet/desktop */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 md:pt-3">
                <button className="w-full sm:w-auto bg-[#B8A8FF] text-black font-bold px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#7F2CCB] hover:text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7F2CCB]/30 group"
                onClick={() => window.location.href = "#contact"}>
                  Fix My Website
                  <MousePointer2 size={18} className="group-hover:rotate-12 transition-transform" />
                </button>
                
                <button className="w-full sm:w-auto bg-white text-slate-800 border-2 border-slate-200 font-bold px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 hover:border-[#B8A8FF] hover:text-[#7F2CCB]"
                onClick={() => window.location.href = "#about"}>
                  View My Work
                  <ExternalLink size={18} />
                </button>
              </div>

              {/* Trust Micro-copy */}
              <div className="flex items-center gap-2 text-slate-400 text-[11px] sm:text-xs md:text-sm font-semibold pt-1">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>Built for real businesses — not just demos.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
        @media (max-width: 380px) {
          .xs\\:block { display: none !important; }
        }
      `}} />
    </div>
  );
};

export default Home;
import { MousePointer2, Sparkles, TrendingUp, Shield } from 'lucide-react';

const Home = ({ onCtaClick }) => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* MAIN */}
        <div className="lg:col-span-8 glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 relative overflow-hidden flex flex-col justify-center">
          
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#B8A8FF] text-[10px] md:text-xs font-bold mb-4 md:mb-6 w-fit">
            <Sparkles size={12} /> Available for Q2 Projects
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 md:mb-8">
            Turning Slow Sites Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8A8FF] to-[#7F2CCB]">
              Revenue Engines.
            </span>
          </h1>

          <button
            onClick={onCtaClick}
            className="bg-[#B8A8FF] text-black font-black px-6 md:px-10 py-3 md:py-5 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-3 w-fit text-sm md:text-base hover:shadow-[0_0_40px_rgba(184,168,255,0.3)] transition-all"
          >
            FIX MY WEBSITE <MousePointer2 size={18} />
          </button>
        </div>

        {/* SIDE */}
        <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6">

          <div className="glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border-l-4 border-l-[#B8A8FF]">
            <TrendingUp size={24} className="text-[#B8A8FF] mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">40%+</h3>
            <p className="text-slate-400 text-sm md:text-base">Average Performance Boost</p>
          </div>

          <div className="bg-gradient-to-br from-[#7F2CCB] to-[#4c1d95] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 text-white">
            <Shield size={24} className="mb-3 opacity-50" />
            <h3 className="text-base md:text-xl font-bold italic">
              "The most professional upgrade we've ever had."
            </h3>
            <p className="mt-3 text-white/60 text-xs md:text-sm font-bold">
              — Dr. Saksham's 1st Client
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;
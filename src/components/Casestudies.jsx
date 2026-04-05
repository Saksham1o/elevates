import { CheckCircle, Play } from 'lucide-react';

const Casestudies = () => {
  return (
    <section className="py-20 md:py-28 bg-[#030712]" id="work">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="mb-14 md:mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-4 text-gradient">
            Real Client. Real Impact.
          </h2>
          <p className="text-slate-500 max-w-xl text-base md:text-lg mx-auto md:mx-0">
            From a traditional clinic to a fully digital, automated patient system.
          </p>
        </div>

        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center glass-card rounded-[2rem] md:rounded-[3rem] p-4 md:p-6 border border-white/10">

          {/* LEFT: Visual (Image + Video Placeholder) */}
          <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group">

            {/* IMAGE PLACEHOLDER */}
            <div className="w-full h-[300px] md:h-[500px] bg-white/5 flex items-center justify-center text-slate-500">
              Add Doctor + Project Image
            </div>

            {/* VIDEO BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full text-white hover:bg-[#B8A8FF] hover:text-black transition-all">
                <Play fill="currentColor" size={24} />
              </button>
            </div>

            {/* OVERLAY */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white z-10">
              <p className="text-sm md:text-base font-bold">
                Dr. Rohit Kapoor
              </p>
              <p className="text-xs md:text-sm text-slate-400">
                Homeopathy Clinic Owner
              </p>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="p-4 md:p-8 space-y-6 md:space-y-8">

            {/* Title */}
            <div className="space-y-2">
              <span className="text-[#B8A8FF] font-black tracking-widest text-xs uppercase">
                Testimonial
              </span>
              <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                Complete Digital Transformation for a Modern Clinic
              </h3>
            </div>

            {/* Features Delivered */}
            <div className="space-y-3">
              {[
                "Custom high-performance website with premium UI",
                "Advanced online appointment booking system",
                "Secure doctor-only dashboard with login credentials",
                "Optimized for speed, mobile responsiveness, and UX"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-[#B8A8FF] mt-1" size={18} />
                  <p className="text-slate-400 text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {[
                { label: "Speed", val: "0.6s", color: "text-green-400" },
                { label: "Efficiency", val: "+200%", color: "text-[#B8A8FF]" },
                { label: "Manual Work", val: "-70%", color: "text-red-400" }
              ].map(stat => (
                <div key={stat.label} className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/5 text-center">
                  <p className={`text-lg md:text-xl font-black ${stat.color}`}>
                    {stat.val}
                  </p>
                  <p className="text-[10px] md:text-xs text-slate-400 font-bold mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Testimonial Quote */}
            <div className="border-l-2 border-[#7F2CCB] pl-4 md:pl-6">
              <p className="text-slate-300 italic text-sm md:text-base leading-relaxed">
                “Saksham didn’t just design a website—he built a complete system for my clinic.
                The detailing, speed, and the secure appointment dashboard completely changed how I manage patients.
                Everything is faster, smoother, and professional.”
              </p>
            </div>

          </div>
        </div>

        {/* VIDEO PLACEHOLDER BELOW (OPTIONAL) */}
        <div className="mt-10 md:mt-16 w-full h-[220px] md:h-[400px] rounded-2xl bg-white/5 flex items-center justify-center text-slate-500 border border-white/10">
          Add Testimonial Video Here
        </div>

      </div>
    </section>
  );
};

export default Casestudies;
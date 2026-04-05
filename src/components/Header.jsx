import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const Header = ({ onCtaClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-[100] glass-card rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-tr from-[#7F2CCB] to-[#B8A8FF] rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform">
            <Zap size={18} className="text-white fill-white" />
          </div>
          <span className="text-lg md:text-xl font-black tracking-tighter text-white">
            ELEVATES<span className="text-[#B8A8FF]">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
          {["Services", "Work", "Process"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-[#B8A8FF] transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={onCtaClick}
          className="hidden md:block bg-white text-black px-5 py-2 rounded-xl font-bold text-sm hover:bg-[#B8A8FF] transition-all active:scale-95"
        >
          Let's Talk
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md">
          {/* Drawer */}
          <div className="absolute top-0 left-0 w-full rounded-b-3xl p-6 border-b border-white/10 bg-[#030712]">
            {/* Top Row (NO GLOW / NO EFFECTS) */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                {/* NORMAL ICON (no rotation / no glow) */}
                <div className="w-9 h-9 bg-[#7F2CCB] rounded-xl flex items-center justify-center">
                  <Zap size={16} className="text-white" />
                </div>

                {/* NORMAL TEXT */}
                <span className="text-lg font-bold text-white tracking-tight">
                  ELEVATES<span className="text-[#B8A8FF]">.</span>
                </span>
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white"
              >
                <X />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-6 text-lg font-medium text-white/70">
              {["Services", "Work", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-white/10" />

            {/* CTA */}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onCtaClick();
              }}
              className="w-full bg-[#B8A8FF] text-black font-bold py-4 rounded-2xl"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

import React from 'react';
import { Mail, ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = ({ onCtaClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Left Block: Brand (4 Columns) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#B8A8FF] rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rotate-45"></div>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Elevates</span>
            </div>
            <p className="text-slate-500 text-base leading-relaxed max-w-xs">
              Modern websites that elevate your business. We build high-performance assets for real businesses.
            </p>
            {/* Optional Social Icons */}
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-[#7F2CCB] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-[#7F2CCB] transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-[#7F2CCB] transition-colors"><Github size={20} /></a>
            </div>
          </div>

          {/* Middle Block: Quick Links (3 Columns) */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-4">
              {['Services', 'Work', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-500 hover:text-[#7F2CCB] font-medium transition-colors flex items-center gap-1 group"
                  >
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Block: Contact + CTA (5 Columns) */}
          <div className="md:col-span-5 space-y-6">
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-[0.2em]">Let's talk</h4>
            <div className="space-y-4">
              <a 
                href="mailto:hello@elevatesweb.com" 
                className="flex items-center gap-3 text-lg md:text-xl font-bold text-slate-900 hover:text-[#7F2CCB] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#B8A8FF]/10 transition-colors">
                  <Mail size={20} className="text-[#7F2CCB]" />
                </div>
                helloelevatesweb@gmail.com
              </a>
              
              <div className="pt-2">
                <button className="w-full sm:w-auto bg-slate-900 text-white font-bold px-6 py-4 rounded-xl hover:bg-[#7F2CCB] transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 group"
                onClick={onCtaClick}>
                  Get a Free Website Review
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line: Legal & Copyright */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Elevates. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-sm font-medium italic">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8A8FF]"></span>
            Built for real businesses — not just demos.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
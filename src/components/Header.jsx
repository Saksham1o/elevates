import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Services", "Work", "About", "Contact"];

  return (
    <div className="bg-slate-50 pt-20">
      {/* Header Container */}
      <nav className="flex items-center justify-between p-3 md:px-10 fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">

        {/* Logo Section */}
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#B8A8FF] rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rotate-45"></div>
          </div>
          <h1 className="text-black text-lg md:text-2xl font-bold tracking-tight">
            Elevates Co.
          </h1>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => {
            const sectionId = link.toLowerCase();

            return (
              <li key={link}>
                <a
                  href={`#${sectionId}`}
                  className="
                    text-gray-500
                    hover:text-black
                    transition-colors
                    duration-200
                    relative
                    after:absolute
                    after:-bottom-1
                    after:left-0
                    after:w-0
                    after:h-[2px]
                    after:bg-[#B8A8FF]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <a href="#contact" className="hidden sm:block">
            <button className="relative bg-[#B8A8FF] text-black font-semibold px-4 py-2 rounded-lg transition-all duration-300 ease-out hover:bg-[#7F2CCB] hover:text-white hover:-translate-y-[2px] hover:shadow-lg hover:shadow-[#7F2CCB]/30 focus:outline-none focus:ring-2 focus:ring-[#B8A8FF] focus:ring-offset-2">
              Get Started
            </button>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out overflow-hidden md:hidden ${
            isMenuOpen
              ? 'max-h-[400px] opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <ul className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => {
              const sectionId = link.toLowerCase();

              return (
                <li key={link}>
                  <a
                    href={`#${sectionId}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-xl font-medium text-gray-600 hover:text-[#7F2CCB] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              );
            })}

            <li className="pt-4 border-t border-gray-100">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-[#B8A8FF] text-black font-semibold py-3 rounded-xl">
                  Get Started
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Sobre', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Trajetória', href: '#timeline' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-sm border-b-4 border-pacman-wall">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center gap-2">
              <Terminal className="text-pacman-yellow w-8 h-8" />
              <span className="font-pixel text-pacman-yellow text-xs sm:text-sm md:text-base">
                MARCOS_DEV
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-retro text-2xl text-gray-300 hover:text-pacman-pink transition-colors px-3 py-2 rounded-md"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="font-pixel text-xs bg-pacman-yellow text-black px-4 py-3 hover:bg-white transition-colors">
                CONTRATE_ME
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-pacman-yellow hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-pacman-dark border-b-2 border-pacman-wall">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-pacman-pink block px-3 py-4 rounded-md text-xl font-retro"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
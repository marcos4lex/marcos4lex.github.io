import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#1919A6 1px, transparent 1px), linear-gradient(90deg, #1919A6 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-4 z-10 relative text-center">
        <div className="inline-block mb-6 animate-bounce">
          <span className="font-pixel text-pacman-pink text-[8px] sm:text-[10px] md:text-xs border-2 border-pacman-pink px-2 sm:px-3 py-3 uppercase tracking-wider sm:tracking-widest bg-black whitespace-nowrap">
            Insert Coin to Start
          </span>
        </div>

        <h1 className="font-pixel text-2xl sm:text-3xl md:text-5xl leading-tight mb-6 text-white">
          MARCOS ALEXANDRE<span className="text-pacman-yellow animate-blink">_</span>
        </h1>

        <h2 className="font-retro text-2xl sm:text-3xl md:text-4xl text-pacman-blue mb-8 max-w-3xl mx-auto">
          &lt;Desenvolvedor Web em Ascensão /&gt;
          <br />
          <span className="text-gray-400 text-xl sm:text-2xl">
            Base Forte em Tecnologia & Gestão
          </span>
        </h2>

        <p className="font-retro text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Transformando problemas complexos em soluções funcionais.
          Gestor de TI transicionando para criar códigos limpos, escaláveis e eficientes.
          Do hardware ao software.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a href="#projects" className="font-pixel text-xs bg-pacman-yellow text-black px-6 py-4 hover:bg-white hover:scale-105 transition-all border-b-4 border-r-4 border-yellow-700 shadow-lg">
            MEUS PROJETOS
          </a>
          <a href="#contact" className="font-pixel text-xs bg-transparent text-pacman-blue border-2 border-pacman-blue px-6 py-4 hover:bg-pacman-blue hover:text-black transition-all">
            CONTATO
          </a>
          <a href="/marcos-cv.pdf" download className="flex items-center gap-2 font-retro text-xl text-gray-400 hover:text-white transition-colors group">
            <FileText size={20} />
            <span className="border-b border-transparent group-hover:border-white">Baixar CV</span>
          </a>
        </div>

        <div className="flex justify-center gap-8">
          <a href="https://github.com/marcos4lex" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pacman-yellow transition-colors transform hover:scale-125">
            <Github size={32} />
          </a>
          <a href="https://www.linkedin.com/in/marcos4lex/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pacman-blue transition-colors transform hover:scale-125">
            <Linkedin size={32} />
          </a>
          <a href="mailto:marcosalexandredsa@gmail.com" className="text-gray-500 hover:text-pacman-pink transition-colors transform hover:scale-125">
            <Mail size={32} />
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-pacman-wall">
          <ArrowDown size={32} />
        </div>
      </div>

      {/* Pacman Decoration */}
      <div className="absolute bottom-20 right-[-100px] opacity-20 md:opacity-40 animate-[pulse_4s_ease-in-out_infinite]">
        <div className="relative w-32 h-32 bg-pacman-yellow rounded-full clip-path-pacman"></div>
      </div>
    </section>
  );
};

export default Hero;
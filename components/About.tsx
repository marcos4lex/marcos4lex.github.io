import React from 'react';
import PixelCard from './PixelCard';
import { Cpu, Code2, Rocket, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-pacman-blue opacity-50"></div>
              <img
                src="/marcos.jpg"
                alt="Marcos Alexandre"
                className="w-full relative z-10 filter grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-pacman-dark border-2 border-pacman-pink p-4 z-20 shadow-xl">
                <p className="font-pixel text-[10px] text-pacman-pink leading-relaxed">
                  LEVEL: JUNIOR<br />
                  EXP: HIGH<br />
                  STATUS: READY
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="font-pixel text-2xl md:text-3xl text-pacman-yellow mb-8">
              <span className="text-white">QUEM É</span> MARCOS?
            </h2>

            <div className="space-y-6 font-retro text-xl text-gray-300 text-justify">
              <p>
                Sou um profissional em plena metamorfose digital. Após anos atuando como
                <strong className="text-white"> Gestor de TI</strong>, onde garanti que infraestruturas complexas funcionassem perfeitamente, decidi mergulhar no código.
              </p>
              <p>
                Minha bagagem não é apenas técnica; é estratégica. Trago a disciplina da manutenção de hardware, a liderança de equipes e a visão de processos para o desenvolvimento de software.
              </p>
              <p>
                Atualmente, meu foco é <strong className="text-pacman-blue">Desenvolvimento Web</strong>, buscando criar aplicações que não apenas rodem, mas resolvam problemas reais de forma eficiente e limpa.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 text-pacman-orange">
                <Cpu />
                <span className="font-retro text-lg">Hardware & Infra</span>
              </div>
              <div className="flex items-center gap-3 text-pacman-blue">
                <Code2 />
                <span className="font-retro text-lg">Lógica & Code</span>
              </div>
              <div className="flex items-center gap-3 text-pacman-pink">
                <ShieldCheck />
                <span className="font-retro text-lg">Liderança</span>
              </div>
              <div className="flex items-center gap-3 text-pacman-yellow">
                <Rocket />
                <span className="font-retro text-lg">Inovação</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
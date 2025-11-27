import React from 'react';
import PixelCard from './PixelCard';
import { Terminal, Sparkles, Gamepad2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[#050505]">
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-2xl md:text-4xl text-white mb-16 text-center">
          <span className="text-pacman-red">MEUS</span> PROJETOS
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Project 1 */}
          <PixelCard borderColor="border-pink-400">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-pink-400/20 rounded border border-pink-400">
                <Sparkles className="text-pink-400 w-8 h-8" />
              </div>
              <span className="font-pixel text-[10px] bg-gray-800 px-2 py-1 text-gray-300">FRONTEND</span>
            </div>

            <h3 className="font-pixel text-lg text-white mb-2">MALU MIRANDA</h3>
            <p className="font-retro text-xl text-gray-400 mb-6 min-h-[5rem]">
              Portfolio interativo para a atriz e bailarina Malu Miranda. Design moderno com animações suaves e layout responsivo.
            </p>

            <div className="bg-black p-4 border border-gray-700 mb-6 mt-6 font-mono text-sm text-pink-400 h-32 overflow-hidden relative">
              <div className="opacity-50 text-xs">
                tailwind.config = &#123;<br />
                &nbsp;&nbsp;theme: &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;extend: &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colors: &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pinky: '#f43f5e',<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
                &nbsp;&nbsp;&#125;<br />
                &#125;
              </div>
              <div className="absolute bottom-2 right-2 animate-pulse">_</div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-pixel text-[10px] text-pacman-yellow mb-2">TECH SPECS:</h4>
                <ul className="list-disc list-inside font-retro text-gray-500 text-lg">
                  <li>React + Vite</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>

              <a
                href="https://marcos4lex.dev/portfolio-malu-miranda"
                target="_blank"
                rel="noreferrer"
                className="inline-block w-full text-center font-pixel text-xs bg-pink-500/20 border-2 border-pink-500 text-pink-400 px-4 py-2 hover:bg-pink-500 hover:text-white transition-colors"
              >
                VISITAR SITE
              </a>
            </div>
          </PixelCard>

          {/* Project 2 */}
          <PixelCard borderColor="border-pacman-pink">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-pacman-pink/20 rounded border border-pacman-pink">
                <Gamepad2 className="text-pacman-pink w-8 h-8" />
              </div>
              <span className="font-pixel text-[10px] bg-gray-800 px-2 py-1 text-gray-300">GAME DEV</span>
            </div>

            <h3 className="font-pixel text-lg text-white mb-2">SHELDON MANIA</h3>
            <p className="font-retro text-xl text-gray-400 mb-6 min-h-[5rem]">
              Jogo "Pedra, Papel, Tesoura, Lagarto, Spock" contra o computador. Implementação complexa de condições de vitória e randomização.
            </p>

            <div className="bg-black p-4 border border-gray-700 mb-6 mt-6 font-mono text-sm text-green-400 h-32 overflow-hidden">
              <p>&gt; Player escolheu: Spock</p>
              <p>&gt; CPU escolheu: Lagarto</p>
              <p className="text-red-500">&gt; Lagarto envenena Spock!</p>
              <p className="text-pacman-yellow">&gt; GAME OVER</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-pixel text-[10px] text-pacman-yellow">IDEIAS FUTURAS:</h4>
                <ul className="list-disc list-inside font-retro text-gray-500 text-lg">
                  <li>Versão Web (React)</li>
                  <li>Sistema de Placar/Ranking</li>
                  <li>Efeitos Sonoros 8-bit</li>
                </ul>
              </div>

              <a
                href="https://github.com/marcos4lex/sheldon-mania"
                target="_blank"
                rel="noreferrer"
                className="inline-block w-full text-center font-pixel text-xs bg-pink-500/20 border-2 border-pink-500 text-pink-400 px-4 py-2 hover:bg-pink-500 hover:text-white transition-colors"
              >
                VISITAR SITE
              </a>
            </div>
          </PixelCard>

        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/marcos4lex?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-pixel text-xs bg-gray-800 border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-colors"
          >
            <Terminal size={16} />
            VER REPOSITÓRIO COMPLETO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import PixelCard from './PixelCard';
import { Terminal, Calculator, Gamepad2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[#050505]">
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-2xl md:text-4xl text-white mb-16 text-center">
          <span className="text-pacman-red">MEUS</span> PROJETOS
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Project 1 */}
          <PixelCard borderColor="border-pacman-blue">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-pacman-blue/20 rounded border border-pacman-blue">
                <Calculator className="text-pacman-blue w-8 h-8" />
              </div>
              <span className="font-pixel text-[10px] bg-gray-800 px-2 py-1 text-gray-300">C LANG</span>
            </div>

            <h3 className="font-pixel text-lg text-white mb-2">CALCULADORA TERMINAL</h3>
            <p className="font-retro text-xl text-gray-400 mb-6 min-h-[5rem]">
              Uma aplicação robusta construída do zero em C. Realiza operações matemáticas com controle de fluxo preciso e tratamento de lógica estruturada.
            </p>

            <div className="bg-black p-4 border border-gray-700 mb-6 mt-6 font-mono text-sm text-green-400 h-32 overflow-hidden relative">
              <div className="opacity-50 text-xs">
                #include &lt;stdio.h&gt;<br />
                int main() &#123;<br />
                &nbsp;&nbsp;printf("Enter operator: ");<br />
                &nbsp;&nbsp;scanf("%c", &op);<br />
                &nbsp;&nbsp;// Logic implementation...<br />
                &#125;
              </div>
              <div className="absolute bottom-2 right-2 animate-pulse">_</div>
            </div>

            <div className="space-y-2">
              <h4 className="font-pixel text-[10px] text-pacman-yellow">IDEIAS FUTURAS:</h4>
              <ul className="list-disc list-inside font-retro text-gray-500 text-lg">
                <li>Interface Gráfica (GUI)</li>
                <li>Operações Científicas</li>
                <li>Conversão para WebAssembly</li>
              </ul>
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

            <div className="space-y-2">
              <h4 className="font-pixel text-[10px] text-pacman-yellow">IDEIAS FUTURAS:</h4>
              <ul className="list-disc list-inside font-retro text-gray-500 text-lg">
                <li>Versão Web (React)</li>
                <li>Sistema de Placar/Ranking</li>
                <li>Efeitos Sonoros 8-bit</li>
              </ul>
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
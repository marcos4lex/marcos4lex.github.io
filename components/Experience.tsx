import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const timeline = [
    {
      year: 'ATUAL',
      title: 'Transição de Carreira',
      description: 'Foco total em desenvolvimento web, estudos de algoritmos e React.',
      type: 'education',
      icon: <GraduationCap className="text-black" />
    },
    {
      year: '2024-2026',
      title: 'Supervisor de TI',
      description: 'Gestão de equipes técnicas, garantindo produtividade, alinhamento e qualidade nas entregas — mesmo sob prazos apertados.',
      type: 'work',
      icon: <Briefcase className="text-black" />
    },
    {
      year: 'GRADUAÇÃO',
      title: 'Análise e Desenvolvimento de Sistemas',
      description: 'Desempenho acadêmico destacado (CR 9.0), aprofundando conhecimentos em estruturas de dados, desenvolvimento web e lógica de programação.',
      type: 'education',
      icon: <GraduationCap className="text-black" />
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-pacman-dark border-t-4 border-pacman-wall">
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-2xl md:text-4xl text-white mb-16 text-center">
          LINHA DO TEMPO
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-pacman-wall"></div>

          {timeline.map((item, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

              {/* Dot on Line */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pacman-yellow border-4 border-black rounded-full z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>

              {/* Spacer for layout balance */}
              <div className="w-full md:w-1/2"></div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                <div className="bg-gray-900 p-6 border-l-4 border-pacman-blue hover:bg-gray-800 transition-colors group">
                  <span className="font-pixel text-xs text-pacman-pink mb-2 block">{item.year}</span>
                  <h3 className="font-pixel text-sm md:text-base text-white mb-2">{item.title}</h3>
                  <p className="font-retro text-lg text-gray-400 group-hover:text-white transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>

            </div>
          ))}

          {/* Start Point */}
          <div className="absolute bottom-0 left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pacman-wall"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
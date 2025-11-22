import React from 'react';
import PixelCard from './PixelCard';

const Skills: React.FC = () => {
  const hardSkills = [
    { name: 'HTML5 & CSS3', level: 80, color: 'bg-pacman-yellow' },
    { name: 'JavaScript', level: 65, color: 'bg-pacman-yellow' },
    { name: 'React', level: 60, color: 'bg-pacman-blue' },
    { name: 'C / C++', level: 70, color: 'bg-pacman-blue' },
    { name: 'MySQL', level: 50, color: 'bg-pacman-pink' },
    { name: 'Git / GitHub', level: 85, color: 'bg-pacman-red' },
    { name: 'Linux', level: 80, color: 'bg-pacman-orange' },
  ];

  const softSkills = [
    'Liderança de Equipes',
    'Resolução de Problemas',
    'Pensamento Analítico',
    'Comunicação Clara',
    'Gestão de Processos',
    'Autodidata'
  ];

  return (
    <section id="skills" className="py-20 bg-[#080808] relative overflow-hidden">
      {/* Decorative Maze Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="maze" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 H 90 V 90 H 10 Z" fill="none" stroke="#1919A6" strokeWidth="2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#maze)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-2xl md:text-4xl text-white mb-4">
            ARSENAL TÉCNICO
          </h2>
          <div className="w-24 h-2 bg-pacman-yellow mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Hard Skills */}
          <div>
            <h3 className="font-pixel text-lg text-pacman-blue mb-8 flex items-center gap-3">
              <span className="animate-pulse">●</span> HARD SKILLS
            </h3>
            <div className="space-y-6">
              {hardSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2 font-retro text-xl text-gray-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-4 bg-gray-800 border-2 border-gray-700 relative">
                    <div
                      className={`h-full ${skill.color} absolute top-0 left-0 transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    >
                      {/* Pacman eating the bar */}
                      <div className="absolute -right-3 -top-1.5 w-6 h-6 bg-pacman-yellow rounded-full clip-path-pacman animate-chomp z-10 hidden md:block"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="font-pixel text-lg text-pacman-pink mb-8 flex items-center gap-3">
              <span className="animate-pulse">●</span> SOFT SKILLS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <PixelCard key={index} borderColor="border-gray-600" className="hover:border-pacman-pink transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-pacman-pink rounded-full animate-pulse"></div>
                    <span className="font-retro text-xl text-white">{skill}</span>
                  </div>
                </PixelCard>
              ))}
            </div>

            <div className="mt-10 p-6 border-2 border-dashed border-pacman-wall bg-gray-900/50 rounded-lg">
              <h4 className="font-pixel text-xs text-pacman-orange mb-4">DESTAQUE DE APRENDIZADO</h4>
              <p className="font-retro text-lg text-gray-400">
                "Da organização de processos à arquitetura de código — minha disciplina permanece a mesma."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
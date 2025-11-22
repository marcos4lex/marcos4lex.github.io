import React from 'react';
import { Monitor, Layout, Wrench, Server } from 'lucide-react';
import PixelCard from './PixelCard';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Landing Pages',
      desc: 'Páginas de alta conversão com design moderno e responsivo.',
      icon: <Layout className="w-10 h-10 text-pacman-yellow" />
    },
    {
      title: 'Sites Institucionais',
      desc: 'Desenvolvimento de presença digital para pequenos negócios.',
      icon: <Monitor className="w-10 h-10 text-pacman-blue" />
    },
    {
      title: 'Suporte TI & Linux',
      desc: 'Consultoria básica, configuração de ambientes e troubleshooting.',
      icon: <Server className="w-10 h-10 text-pacman-red" />
    },
    {
      title: 'Manutenção Web',
      desc: 'Atualização, otimização de performance e correções.',
      icon: <Wrench className="w-10 h-10 text-pacman-pink" />
    }
  ];

  return (
    <section className="py-20 bg-[#050505]">
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-2xl md:text-4xl text-center text-white mb-16">
          O QUE POSSO FAZER
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <PixelCard key={index} borderColor="border-white" className="text-center">
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="font-pixel text-sm text-white mb-4">{service.title}</h3>
              <p className="font-retro text-lg text-gray-400 leading-tight">
                {service.desc}
              </p>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
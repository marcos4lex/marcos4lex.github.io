import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-pacman-dark border-t-8 border-double border-pacman-blue">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block p-2 border-2 border-pacman-yellow mb-4 animate-pulse">
            <Mail className="w-8 h-8 text-pacman-yellow" />
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="font-pixel text-2xl md:text-4xl text-white">Entre em contato!</h2>
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-pacman-yellow fill-current animate-[bounce_1s_infinite]">
              <path d="M50 50 L85 15 A50 50 0 1 0 85 85 Z" />
            </svg>
          </div>
          <p className="font-retro text-xl text-gray-400">
            Estou pronto para novos desafios. Mande uma mensagem para conversarmos sobre projetos ou oportunidades.
          </p>
        </div>

        <div className="bg-gray-900 p-8 border-4 border-pacman-wall relative">
          {/* Decorative pixel corners inside */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-pacman-wall"></div>
          <div className="absolute top-2 right-2 w-2 h-2 bg-pacman-wall"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-pacman-wall"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-pacman-wall"></div>

          <form action="https://formsubmit.co/marcosalexandredsa@gmail.com" method="POST" className="space-y-6">
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-pixel text-[10px] text-pacman-blue mb-2">NOME DO JOGADOR</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-black border-2 border-gray-700 text-white font-retro text-xl p-3 focus:border-pacman-yellow focus:outline-none transition-colors"
                  placeholder="Player 1"
                />
              </div>
              <div>
                <label className="block font-pixel text-[10px] text-pacman-blue mb-2">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-black border-2 border-gray-700 text-white font-retro text-xl p-3 focus:border-pacman-yellow focus:outline-none transition-colors"
                  placeholder="email@exemplo.com"
                />
              </div>
            </div>

            <div>
              <label className="block font-pixel text-[10px] text-pacman-blue mb-2">MENSAGEM</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-black border-2 border-gray-700 text-white font-retro text-xl p-3 focus:border-pacman-yellow focus:outline-none transition-colors"
                placeholder="Escreva sua mensagem aqui..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pacman-blue hover:bg-white text-black font-pixel text-xs py-4 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Send size={16} />
              ENVIAR MENSAGEM
            </button>
          </form>
        </div>

        <footer className="mt-16 text-center font-retro text-gray-500 text-lg">
          <p>&copy; {new Date().getFullYear()} MARCOS ALEXANDRE. ALL RIGHTS RESERVED.</p>
          <p className="text-sm mt-2">INSERT COIN TO CONTINUE</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
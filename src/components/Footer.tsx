import React from 'react';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-[#4B3B2A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">JAMILLE GODOY</h3>
            <p className="mb-4 opacity-90">
              Nutrição funcional de alto nível com abordagem científica e personalizada 
              para transformar sua saúde de dentro para fora.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nutri.jamillegodoy/" className="hover:text-[#E3D9C7] transition-colors duration-300">
                <Instagram size={20} />
              </a>d
              
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Atendimento', 'Curso', 'Lista de Espera'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="opacity-90 hover:text-[#E3D9C7] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="mr-3 mt-1" size={18} />
                <span className="opacity-90">jamillegodoynutri@gmail.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="mr-3 mt-1" size={18} />
                <span className="opacity-90">(67) 98137-9640</span>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-3 mt-1" size={18} />
                <span className="opacity-90">
                  Atendimento Online.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center opacity-90">
          <p>&copy; {new Date().getFullYear()} JG Nutrição Funcional. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
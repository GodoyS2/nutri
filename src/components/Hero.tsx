import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="início" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#E3D9C7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4B3B2A] leading-tight mb-4">
              Saúde Integrativa <span className="text-[#8A7260]">Personalizada</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-[#4B3B2A] mb-6">
              Nutrição funcional baseada em Metabolômica para transformar sua saúde
            </h2>
            <p className="text-[#4B3B2A] mb-8 text-lg">
              Atendimento exclusivo com análises moleculares avançadas e protocolos 
              personalizados para alcançar seu potencial máximo de saúde e bem-estar.
            </p>
            <a 
              href="#espera" 
              className="group inline-flex items-center bg-[#8A7260] text-white px-6 py-3 rounded-md hover:bg-[#4B3B2A] transition-colors duration-300"
            >
              Entrar na lista de espera
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </a>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-[#8A7260] rounded-lg transform translate-x-2 translate-y-2"></div>
              <img 
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg" 
                alt="Dra. Juliana Garcia - Nutricionista Funcional" 
                className="relative z-10 rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
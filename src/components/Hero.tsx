import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="início" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#E3D9C7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12" data-aos="fade-right">
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
              href="https://wa.me/5567981379640" 
              className="group inline-flex items-center bg-[#8A7260] text-white px-8 py-4 rounded-md hover:bg-[#4B3B2A] transition-all duration-300 text-lg"
            >
              <MessageCircle className="mr-3 transition-transform duration-300 group-hover:scale-110" size={24} />
              Agende sua consulta
            </a>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <div className="relative">
              <div className="absolute inset-0 bg-[#8A7260] rounded-lg transform translate-x-2 translate-y-2"></div>
              <img 
                src='/Assets/metabolomica.jpeg'
                alt="Dra. Jamille Godoy - Nutricionista " 
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
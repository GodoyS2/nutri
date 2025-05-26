import React from 'react';

const Hero = () => {
  return (
    <section id="início" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#E3D9C7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12" data-aos="fade-right">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4B3B2A] leading-tight mb-4">
              O Raio-X do Seu Metabolismo em <span className="text-[#8A7260]">Tempo real</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-[#4B3B2A] mb-6">
              Descubra desequilíbrios, carências e impactos do seu estilo de vida com uma análise profunda e personalizada do funcionamento do seu corpo.
            </h2>
            <p className="text-[#4B3B2A] mb-8 text-lg">
              Atendimento exclusivo com análises moleculares avançadas e protocolos 
              personalizados para alcançar seu potencial máximo de saúde e bem-estar.
            </p>
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
import React from 'react';

const Hero = () => {
  return (
    <section id="início" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#E3D9C7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12" data-aos="fade-right">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4B3B2A] leading-tight mb-4">
              SEU METABOLISMO EM  <span className="text-[#8A7260]">TEMPO REAL</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-[#4B3B2A] mb-6">
                      Um verdadeiro raio-x que revela carências, excessos e impactos do seu estilo de vida. Descubra como seu corpo está funcionando de verdade com uma análise totalmente personalizada.
            </h2>
            <p className="text-[#4B3B2A] mb-8 text-lg">
              A Metabolômica é uma ciência “ômica” que permite identificar e quantificar os metabólitos — pequenas moléculas que refletem tudo o que está acontecendo no seu corpo em tempo real.
Ela revela como o seu organismo está funcionando de fato, mostrando desequilíbrios, carências, excessos e impactos do estilo de vida, alimentação, estresse e muito mais.

É como um raio-x do metabolismo, fundamental para uma abordagem realmente personalizada da saúde.

Quer entender o que o seu corpo está dizendo? A metabolômica pode traduzir.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <div className="relative">
              <div className="absolute inset-0 bg-[#8A7260] rounded-lg transform translate-x-2 translate-y-2"></div>
              <img 
                src='/Assets/metabolomica.jpeg'
                alt="Dra. Jamille Godoy - Nutricionista " 
                className="relative z-10 rounded-lg w-[300px] md:w-[350px] lg:w-[400px] h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
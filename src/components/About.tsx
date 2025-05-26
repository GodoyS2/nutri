import React from 'react';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#F4EEE7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-8 md:mb-0" data-aos="fade-right">
            <div className="relative">
              <div className="absolute inset-0 bg-[#8A7260] rounded-lg transform -translate-x-2 translate-y-2"></div>
              <img 
                src="/Assets/jamille.jpeg" 
                alt="Dra. Jamille Godoy em seu consultório" 
                className="relative z-10 rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
          
          <div className="md:w-3/5 md:pl-16" data-aos="fade-left">
            <h2 className="text-3xl font-bold text-[#4B3B2A] mb-6">Sobre a Profissional</h2>
            <h3 className="text-xl font-semibold text-[#8A7260] mb-4">Dra. Jamille Godoy</h3>
            <p className="text-[#4B3B2A] mb-6">
        Nutricionista formada desde 2007, com mais de 18 anos de experiência em hemodiálise e 13 anos em nutrição hospitalar. Minha atuação é pautada na nutrição de precisão, com foco em resultados reais, sustentáveis e personalizados, promovendo equilíbrio metabólico, saúde plena e longevidade.

Sou pós-graduada em Metabolômica pela Academia Brasileira de Medicina Funcional e Integrativa, com formações complementares pela Faculdade de Saúde Avançada (FSA) nas áreas de:

Exames laboratoriais aplicados à prática clínica

Suplementação individualizada

Nutrição funcional com uso de Inteligência Artificial

Minha abordagem é direcionada a pessoas com doenças crônicas ou que buscam envelhecer com saúde, energia e vitalidade. Através de uma análise minuciosa — baseada em exames, dados metabólicos e estratégias nutricionais individualizadas —, trabalho para corrigir desequilíbrios bioquímicos e hormonais, sempre respeitando a individualidade de cada organismo.

Acredito que restaurar o metabolismo é essencial para prevenir doenças e promover um bem-estar verdadeiro e duradouro. Se você busca um cuidado nutricional profundo, que vai além dos sintomas, estou aqui para caminhar com você nessa jornada de transformação. 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="100">
                <GraduationCap className="text-[#8A7260] mb-2" size={24} />
                <p className="text-center text-[#4B3B2A] font-medium">Exames laboratoriais aplicados à prática clínica</p>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="200">
                <GraduationCap className="text-[#8A7260] mb-2" size={24} />
                <p className="text-center text-[#4B3B2A] font-medium">Suplementação individualizada</p>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="300">
                <GraduationCap className="text-[#8A7260] mb-2" size={24} />
                <p className="text-center text-[#4B3B2A] font-medium">Nutrição funcional com uso de Inteligência Artificial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
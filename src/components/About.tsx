import React from 'react';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#F4EEE7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-[#8A7260] rounded-lg transform -translate-x-2 translate-y-2"></div>
              <img 
                src="/Assets/jamille.jpg" 
                alt="Dra. Jamille Godoy em seu consultório" 
                className="relative z-10 rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
          
          <div className="md:w-3/5 md:pl-16">
            <h2 className="text-3xl font-bold text-[#4B3B2A] mb-6">Sobre a Profissional</h2>
            <h3 className="text-xl font-semibold text-[#8A7260] mb-4">Dra. Jamille Godoy</h3>
            <p className="text-[#4B3B2A] mb-6">
              Nutricionista funcional com mais de 15 anos de experiência em saúde integrativa,
              especialista em Metabolômica aplicada à nutrição clínica. Meu trabalho é baseado na 
              ciência de precisão, que analisa seus marcadores bioquímicos para criar um plano 
              totalmente personalizado que atenda às suas necessidades específicas.
            </p>
            <p className="text-[#4B3B2A] mb-8">
              Com formação internacional e constante atualização científica, trago as mais recentes 
              descobertas no campo da nutrição funcional e medicina de precisão para meus pacientes, 
              sempre com um olhar humanizado e integral para a saúde.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm">
                <BookOpen className="text-[#8A7260] mb-2" size={24} />
                <p className="text-center text-[#4B3B2A] font-medium">Pesquisadora e Autora</p>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm">
                <GraduationCap className="text-[#8A7260] mb-2" size={24} />
                <p className="text-center text-[#4B3B2A] font-medium">PhD em Nutrição Funcional</p>
              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm">
                <Award className="text-[#8A7260] mb-2" size={24} />
                <p className="text-center text-[#4B3B2A] font-medium">Referência em Metabolômica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { ClipboardList, Microscope, FileCheck } from 'lucide-react';
import ServiceCard from './ui/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <ClipboardList size={32} className="text-[#8A7260]" />,
      title: "Avaliação Clínica",
      description: "Consulta detalhada para entender seu histórico, sintomas e objetivos de saúde. Análise completa de exames anteriores e avaliação de seu estilo de vida.",
      step: 1
    },
    {
      icon: <Microscope size={32} className="text-[#8A7260]" />,
      title: "Análise Molecular",
      description: "Utilizando os mais avançados exames de metabolômica, analisamos seu perfil bioquímico para identificar desequilíbrios e necessidades específicas.",
      step: 2
    },
    {
      icon: <FileCheck size={32} className="text-[#8A7260]" />,
      title: "Protocolo Personalizado",
      description: "Desenvolvimento de um plano nutricional individualizado com alimentos, suplementos e mudanças de estilo de vida específicos para suas necessidades.",
      step: 3
    }
  ];

  return (
    <section id="atendimento" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#4B3B2A] mb-4">Como Funciona o Atendimento</h2>
          <p className="text-[#4B3B2A] max-w-2xl mx-auto">
            Um processo científico e personalizado para identificar a raiz dos seus sintomas
            e criar uma abordagem única para sua saúde.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-1/3 left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-0.5 bg-[#E3D9C7] z-0"></div>

          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              step={service.step}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#4B3B2A] mb-8 max-w-2xl mx-auto">
            Os atendimentos são realizados de forma online para pacientes de todo o Brasil.
            Cada caso é único e o tempo de acompanhamento varia conforme suas necessidades.
          </p>
          <a 
            href="https://wa.me/5567981379640" 
            className="inline-block bg-[#8A7260] text-white px-6 py-3 rounded-md hover:bg-[#4B3B2A] transition-colors duration-300"
          >
            Agende sua consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services
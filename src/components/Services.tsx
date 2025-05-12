import React from 'react';
import { ClipboardList, Microscope, FileCheck, MessageCircle } from 'lucide-react';
import ServiceCard from './ui/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <ClipboardList size={32} className="text-[#8A7260]" />,
      title: "Avaliação Personalizada",
      description: "Análise detalhada do seu histórico de saúde, hábitos alimentares e estilo de vida para identificar a raiz dos seus sintomas.",
      step: 1
    },
    {
      icon: <Microscope size={32} className="text-[#8A7260]" />,
      title: "Metabolômica Avançada",
      description: "Interpretação profunda dos seus exames metabólicos para criar um mapa personalizado do seu metabolismo.",
      step: 2
    },
    {
      icon: <FileCheck size={32} className="text-[#8A7260]" />,
      title: "Plano Integrativo",
      description: "Desenvolvimento de um protocolo nutricional personalizado que integra alimentação, suplementação e mudanças no estilo de vida.",
      step: 3
    }
  ];

  return (
    <section id="atendimento" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-[#8A7260] font-medium mb-2 inline-block">Metodologia Exclusiva</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B3B2A] mb-6">Transforme Sua Saúde</h2>
          <p className="text-[#4B3B2A] max-w-2xl mx-auto text-lg">
            Uma abordagem científica e personalizada que vai além dos sintomas,
            identificando e tratando a causa raiz dos seus desafios de saúde.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center relative mb-16">
          <div className="hidden md:block absolute top-1/3 left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-0.5 bg-[#E3D9C7] z-0"></div>

          {services.map((service, index) => (
            <div 
              key={index} 
              className="md:w-1/3"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                step={service.step}
              />
            </div>
          ))}
        </div>

        <div className="bg-[#F4EEE7] rounded-2xl p-8 md:p-12 mt-16" data-aos="fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-[#4B3B2A] mb-6">
              Atendimento Online para Todo o Brasil
            </h3>
            <p className="text-[#4B3B2A] mb-8 text-lg">
              Consultas realizadas de forma online, permitindo que você receba um atendimento 
              de excelência sem sair de casa. Cada protocolo é desenvolvido considerando sua 
              individualidade e objetivos específicos.
            </p>
            <a 
              href="https://wa.me/5567981379640?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-[#8A7260] text-white px-8 py-4 rounded-md hover:bg-[#4B3B2A] transition-all duration-300 text-lg font-medium"
            >
              <MessageCircle className="mr-3 transition-transform duration-300 group-hover:scale-110" size={24} />
              Agende sua consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
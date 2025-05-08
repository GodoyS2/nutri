import React from 'react';
import { Calendar, Users, Award, Clock } from 'lucide-react';

const Course = () => {
  return (
    <section id="curso" className="py-16 md:py-24 bg-[#E3D9C7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <span className="text-[#8A7260] font-medium mb-2 inline-block">Educação Avançada</span>
            <h2 className="text-3xl font-bold text-[#4B3B2A] mb-6">Pós-Graduação em Nutrição Funcional e Metabolômica</h2>
            <p className="text-[#4B3B2A] mb-8">
              Um curso completo e aprofundado para profissionais da saúde que desejam dominar a nutrição 
              funcional baseada em evidências e aplicar a metabolômica na prática clínica.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <Calendar className="text-[#8A7260] mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-[#4B3B2A]">Início das Aulas</h4>
                  <p className="text-[#4B3B2A]">15 de Março de 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-[#8A7260] mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-[#4B3B2A]">Duração</h4>
                  <p className="text-[#4B3B2A]">18 meses (online)</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="text-[#8A7260] mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-[#4B3B2A]">Público-alvo</h4>
                  <p className="text-[#4B3B2A]">Nutricionistas e Médicos</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="text-[#8A7260] mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-medium text-[#4B3B2A]">Certificação</h4>
                  <p className="text-[#4B3B2A]">Reconhecida pelo MEC</p>
                </div>
              </div>
            </div>

            <a 
              href="#inscricao" 
              className="inline-block bg-[#8A7260] text-white px-6 py-3 rounded-md hover:bg-[#4B3B2A] transition-colors duration-300"
            >
              Inscrever-se agora
            </a>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg" 
                alt="Curso de Pós-Graduação em Nutrição Funcional" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="bg-[#8A7260] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Turma com vagas limitadas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
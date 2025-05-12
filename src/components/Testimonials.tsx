import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
import TestimonialCard from './ui/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A abordagem da Dra. Jamille transformou completamente minha saúde. Após anos de sintomas inexplicáveis, ela identificou a raiz dos meus problemas através da análise metabolômica.",
      name: "Mariana Silva",
      title: "Paciente há 2 anos",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      quote: "Como médico, reconheço o rigor científico e a excelência do trabalho da Dra. Jamille. Seu conhecimento em metabolômica aplicada à nutrição é extraordinário.",
      name: "Dr. Paulo Mendes",
      title: "Cardiologista",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
    },
    {
      quote: "O curso de pós-graduação ministrado pela Dra. Jamille é incomparável. A profundidade do conteúdo e a aplicabilidade clínica mudaram minha prática profissional.",
      name: "Ana Luíza Costa",
      title: "Nutricionista",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F4EEE7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#4B3B2A] mb-4">Reconhecimento Profissional</h2>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-[#8A7260] mx-0.5" size={24} fill="#8A7260" />
            ))}
          </div>
          <p className="text-[#4B3B2A] max-w-2xl mx-auto">
            Conheça a experiência de pacientes e colegas que confiaram no trabalho da Dra. Jamille Godoy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="h-full"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <TestimonialCard 
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                image={testimonial.image}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-[#4B3B2A] mb-4">Pronta para transformar sua saúde?</h3>
          <a 
            href="https://wa.me/5567981379640" 
            className="group inline-flex items-center bg-[#8A7260] text-white px-8 py-4 rounded-md hover:bg-[#4B3B2A] transition-all duration-300 text-lg"
          >
            <MessageCircle className="mr-3 transition-transform duration-300 group-hover:scale-110" size={24} />
            Agende sua consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
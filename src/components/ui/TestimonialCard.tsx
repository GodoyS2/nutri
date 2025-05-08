import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, image }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm transform transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
      <Quote className="text-[#E3D9C7] mb-4" size={32} />
      
      <p className="text-[#4B3B2A] mb-6 italic">"{quote}"</p>
      
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-[#4B3B2A]">{name}</h4>
          <p className="text-[#8A7260] text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
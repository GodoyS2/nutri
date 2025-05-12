import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, step }) => {
  return (
    <div className="relative bg-[#F4EEE7] rounded-lg p-8 shadow-sm z-10 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-md">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#8A7260] flex items-center justify-center text-white font-bold">
        {step}
      </div>
      <div className="flex flex-col items-center text-center pt-4">
        <div className="mb-6 p-4 bg-white rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#4B3B2A] mb-4">{title}</h3>
        <p className="text-[#4B3B2A] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
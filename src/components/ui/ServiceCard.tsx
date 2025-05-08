import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, step }) => {
  return (
    <div className="relative md:w-1/3 bg-[#F4EEE7] rounded-lg p-6 shadow-sm z-10 transform transition-transform duration-300 hover:scale-105">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#8A7260] flex items-center justify-center text-white font-bold">
        {step}
      </div>
      <div className="flex flex-col items-center text-center pt-4">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#4B3B2A] mb-3">{title}</h3>
        <p className="text-[#4B3B2A]">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
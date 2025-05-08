import React, { useState } from 'react';
import { Check } from 'lucide-react';

const WaitingList = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    submitted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    // For now, we'll just simulate a successful submission
    setFormState({
      ...formState,
      submitted: true
    });
  };

  if (formState.submitted) {
    return (
      <section id="espera" className="py-16 md:py-24 bg-[#E3D9C7]">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="bg-white rounded-lg p-8 shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8A7260] rounded-full mb-6">
              <Check className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-[#4B3B2A] mb-4">Você está na lista de espera!</h2>
            <p className="text-[#4B3B2A] mb-6">
              Obrigada pelo seu interesse. Entraremos em contato assim que novas vagas 
              estiverem disponíveis para iniciar seu processo de transformação da saúde.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="espera" className="py-16 md:py-24 bg-[#E3D9C7]">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#4B3B2A] mb-4">Entre na Lista de Espera</h2>
          <p className="text-[#4B3B2A]">
            Preencha o formulário abaixo para entrar na lista de espera para atendimento.
            Vagas são limitadas e os contatos são feitos por ordem de inscrição.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-[#4B3B2A] font-medium mb-2">Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#E3D9C7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A7260]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-[#4B3B2A] font-medium mb-2">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#E3D9C7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A7260]"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-[#4B3B2A] font-medium mb-2">Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#E3D9C7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A7260]"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="reason" className="block text-[#4B3B2A] font-medium mb-2">Principal motivo de consulta</label>
              <textarea
                id="reason"
                name="reason"
                value={formState.reason}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-[#E3D9C7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A7260]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#8A7260] text-white py-3 rounded-md hover:bg-[#4B3B2A] transition-colors duration-300"
            >
              Entrar na Lista de Espera
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitingList;
import React from 'react';
import { Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1600"
          alt="Barbearia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-5xl md:text-6xl font-bold">Barbearia Elite</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Transforme seu visual com os melhores profissionais da cidade
          </p>
          <a
            href="#booking"
            className="inline-flex items-center bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Agende seu Horário
          </a>
        </div>
      </div>
    </div>
  );
}
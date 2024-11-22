import React from 'react';
import { Menu, Scissors, ShoppingBag, Calendar, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Scissors className="w-8 h-8" />
            <span className="text-xl font-bold">Barbearia Elite</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-gray-300 transition">Serviços</a>
            <a href="#barbers" className="hover:text-gray-300 transition">Barbeiros</a>
            <a href="#products" className="hover:text-gray-300 transition">Produtos</a>
            <a href="#booking" className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">
              Agendar Horário
            </a>
          </div>
          
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
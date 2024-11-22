import React from 'react';
import { barbers } from '../data';
import { Star } from 'lucide-react';

export default function Barbers() {
  return (
    <section id="barbers" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nossa Equipe</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber) => (
            <div key={barber.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img
                src={barber.image}
                alt={barber.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{barber.name}</h3>
                <div className="flex items-center mb-3">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1">{barber.rating}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {barber.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
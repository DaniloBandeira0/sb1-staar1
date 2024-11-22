import React, { useState } from 'react';
import { barbers, services } from '../data';
import { Calendar, Clock, User, MessageCircle } from 'lucide-react';
import { formatWhatsAppMessage, getWhatsAppLink } from '../utils/whatsapp';

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const WHATSAPP_NUMBER = '5511999999999'; // Substitua pelo número real do salão

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar no backend
    console.log({ selectedDate, selectedService, selectedBarber, name, email });
  };

  const handleWhatsAppBooking = () => {
    const selectedServiceName = services.find(s => s.id === Number(selectedService))?.name || '';
    const selectedBarberName = barbers.find(b => b.id === Number(selectedBarber))?.name || '';
    
    const message = formatWhatsAppMessage({
      service: selectedServiceName,
      barber: selectedBarberName,
      date: selectedDate,
      time: selectedTime,
      name
    });

    window.open(getWhatsAppLink(WHATSAPP_NUMBER, message), '_blank');
  };

  return (
    <section id="booking" className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Agende seu Horário</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Serviço
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full p-3 border rounded-md"
                required
              >
                <option value="">Selecione um serviço</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} - R$ {service.price}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Barbeiro
              </label>
              <select
                value={selectedBarber}
                onChange={(e) => setSelectedBarber(e.target.value)}
                className="w-full p-3 border rounded-md"
                required
              >
                <option value="">Selecione um barbeiro</option>
                {barbers.map((barber) => (
                  <option key={barber.id} value={barber.id}>
                    {barber.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Data
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Horários Disponíveis
            </label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  className={`p-2 text-sm border rounded-md transition ${
                    selectedTime === time 
                      ? 'bg-black text-white' 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar no Site
            </button>

            <button
              type="button"
              onClick={handleWhatsAppBooking}
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
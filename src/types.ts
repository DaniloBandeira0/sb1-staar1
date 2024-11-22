export interface Barber {
  id: number;
  name: string;
  image: string;
  specialties: string[];
  rating: number;
}

export interface Service {
  id: number;
  name: string;
  duration: number;
  price: number;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface Appointment {
  id: number;
  barberId: number;
  serviceId: number;
  date: string;
  time: string;
  clientName: string;
  clientEmail: string;
}
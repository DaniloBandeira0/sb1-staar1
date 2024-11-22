import { Barber, Service, Product } from './types';

export const barbers: Barber[] = [
  {
    id: 1,
    name: "João Silva",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500",
    specialties: ["Corte Clássico", "Barba", "Degradê"],
    rating: 4.9
  },
  {
    id: 2,
    name: "Pedro Santos",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500",
    specialties: ["Degradê", "Coloração", "Desenhos"],
    rating: 4.8
  },
  {
    id: 3,
    name: "Carlos Oliveira",
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=500",
    specialties: ["Barba", "Corte Moderno", "Hidratação"],
    rating: 4.7
  }
];

export const services: Service[] = [
  {
    id: 1,
    name: "Corte de Cabelo",
    duration: 30,
    price: 50,
    description: "Corte personalizado com acabamento perfeito"
  },
  {
    id: 2,
    name: "Barba",
    duration: 30,
    price: 35,
    description: "Modelagem e hidratação da barba"
  },
  {
    id: 3,
    name: "Corte + Barba",
    duration: 60,
    price: 75,
    description: "Combo completo para seu visual"
  },
  {
    id: 4,
    name: "Degradê",
    duration: 45,
    price: 60,
    description: "Degradê personalizado com máxima precisão"
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Pomada Modeladora",
    price: 45,
    image: "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?w=500",
    description: "Pomada de alta fixação para todos os tipos de cabelo"
  },
  {
    id: 2,
    name: "Óleo para Barba",
    price: 35,
    image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=500",
    description: "Óleo hidratante para barba macia e bem cuidada"
  }
];
export function formatWhatsAppMessage(data: {
  service: string;
  barber: string;
  date: string;
  time: string;
  name: string;
}): string {
  const message = `Olá! Gostaria de agendar um horário:
- Serviço: ${data.service}
- Barbeiro: ${data.barber}
- Data: ${data.date}
- Horário: ${data.time}
- Nome: ${data.name}`;

  return encodeURIComponent(message);
}

export function getWhatsAppLink(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${message}`;
}
/**
 * WhatsApp utility functions for Siyalele Projects
 */

export const WHATSAPP_NUMBERS = {
  primary: '+27732178184',
  secondary: '+27607226173'
} as const;

export const createWhatsAppLink = (
  message: string = 'Hello! I would like to inquire about your services.',
  phoneNumber: string = WHATSAPP_NUMBERS.primary
): string => {
  const cleanPhone = phoneNumber.replace(/\s+/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};

export const createServiceWhatsAppLink = (serviceName: string): string => {
  const message = `Hello! I would like to inquire about ${serviceName}. Could you please provide more information and a quote?`;
  return createWhatsAppLink(message);
};
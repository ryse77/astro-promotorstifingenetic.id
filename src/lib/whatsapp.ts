import { SITE_CONFIG } from './constants';

interface WhatsAppMessageOptions {
  kecamatan: string;
  provinsi: string;
  pattern: 'daftar' | 'pendaftaran';
}

/**
 * Generate WhatsApp message URL dengan template per pattern
 */
export function generateWhatsAppURL(options: WhatsAppMessageOptions): string {
  const { kecamatan, provinsi, pattern } = options;

  const messages = {
    daftar: `Halo, saya tertarik untuk mendaftar sebagai promotor STIFIn di ${kecamatan}, ${provinsi}. Mohon informasi lebih lanjut.`,
    pendaftaran: `Halo, saya ingin bergabung sebagai promotor STIFIn di ${kecamatan}, ${provinsi}. Bagaimana cara pendaftarannya?`,
  };

  const message = messages[pattern];
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodedMessage}`;
}

/**
 * Generate WhatsApp message untuk homepage/general inquiry
 */
export function generateGeneralWhatsAppURL(customMessage?: string): string {
  const defaultMessage = 'Halo, saya tertarik untuk menjadi promotor STIFIn. Mohon informasi lebih lanjut.';
  const message = customMessage || defaultMessage;
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodedMessage}`;
}

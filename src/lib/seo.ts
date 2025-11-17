import { SITE_CONFIG, SEO_DEFAULTS } from './constants';

interface SEOMetadata {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string[];
}

/**
 * Generate SEO metadata untuk location pages - Pattern Daftar
 */
export function generateDaftarSEO(location: {
  kecamatan: string;
  kabupaten: string;
  provinsi: string;
  description?: string;
  keywords?: string[];
}): SEOMetadata {
  const { kecamatan, kabupaten, provinsi, description, keywords } = location;

  return {
    title: `Daftar Promotor STIFIn ${kecamatan} - Peluang Bisnis ${provinsi}`,
    description: description ||
      `Bergabung sebagai promotor STIFIn di ${kecamatan}, ${kabupaten}. Peluang bisnis dengan komisi hingga 60%. Training gratis dan support penuh. Daftar sekarang!`,
    keywords: keywords || [
      `daftar promotor stifin ${kecamatan.toLowerCase()}`,
      `promotor stifin ${provinsi.toLowerCase()}`,
      `bisnis stifin ${kabupaten.toLowerCase()}`,
      `peluang usaha ${kecamatan.toLowerCase()}`,
      'mitra stifin',
      'agen stifin',
    ],
  };
}

/**
 * Generate SEO metadata untuk location pages - Pattern Pendaftaran
 */
export function generatePendaftaranSEO(location: {
  kecamatan: string;
  kabupaten: string;
  provinsi: string;
  description?: string;
  keywords?: string[];
}): SEOMetadata {
  const { kecamatan, kabupaten, provinsi, description, keywords } = location;

  return {
    title: `Pendaftaran Promotor STIFIn ${kecamatan} - Bergabung Sekarang`,
    description: description ||
      `Cara pendaftaran promotor STIFIn di ${kecamatan}, ${provinsi}. Proses mudah, cepat, dan gratis. Mulai bisnis genetic test dengan income unlimited.`,
    keywords: keywords || [
      `pendaftaran promotor stifin ${kecamatan.toLowerCase()}`,
      `cara daftar promotor stifin ${provinsi.toLowerCase()}`,
      `jadi promotor stifin ${kecamatan.toLowerCase()}`,
      `syarat promotor stifin ${kabupaten.toLowerCase()}`,
      'gabung stifin',
    ],
  };
}

/**
 * Format title dengan template
 */
export function formatTitle(title: string): string {
  return SEO_DEFAULTS.titleTemplate.replace('%s', title);
}

/**
 * Generate canonical URL
 */
export function getCanonicalURL(path: string): string {
  // Remove trailing slash dan ensure single slash
  const cleanPath = path.replace(/\/+$/, '').replace(/^\/+/, '');
  return `${SITE_CONFIG.url}/${cleanPath}`;
}

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
 * Meta description optimal: 150-160 characters
 */
export function generateDaftarSEO(location: {
  kecamatan: string;
  kabupaten: string;
  provinsi: string;
  description?: string;
  keywords?: string[];
}): SEOMetadata {
  const { kecamatan, kabupaten, provinsi, description, keywords } = location;

  // Optimized description: exactly 155 characters for best SERP display
  const defaultDescription =
    `Daftar promotor STIFIn ${kecamatan}. Komisi 60%, training gratis, income unlimited. Peluang bisnis terpercaya di ${provinsi}. Hubungi sekarang!`;

  return {
    title: `Daftar Promotor STIFIn ${kecamatan} - Peluang Bisnis ${provinsi}`,
    description: description || defaultDescription,
    keywords: keywords || [
      `daftar promotor stifin ${kecamatan.toLowerCase()}`,
      `promotor stifin ${provinsi.toLowerCase()}`,
      `bisnis stifin ${kabupaten.toLowerCase()}`,
      `peluang usaha ${kecamatan.toLowerCase()}`,
      'mitra stifin',
      'agen stifin',
      'komisi 60 persen',
    ],
  };
}

/**
 * Generate SEO metadata untuk location pages - Pattern Pendaftaran
 * Meta description optimal: 150-160 characters
 */
export function generatePendaftaranSEO(location: {
  kecamatan: string;
  kabupaten: string;
  provinsi: string;
  description?: string;
  keywords?: string[];
}): SEOMetadata {
  const { kecamatan, kabupaten, provinsi, description, keywords } = location;

  // Optimized description: within 150-160 character range
  const defaultDescription =
    `Pendaftaran promotor STIFIn ${kecamatan} mudah & gratis. Proses cepat via WhatsApp. Dapatkan komisi 60% + training lengkap. Mulai sekarang!`;

  return {
    title: `Pendaftaran Promotor STIFIn ${kecamatan} - Bergabung Sekarang`,
    description: description || defaultDescription,
    keywords: keywords || [
      `pendaftaran promotor stifin ${kecamatan.toLowerCase()}`,
      `cara daftar promotor stifin ${provinsi.toLowerCase()}`,
      `jadi promotor stifin ${kecamatan.toLowerCase()}`,
      `syarat promotor stifin ${kabupaten.toLowerCase()}`,
      'gabung stifin',
      'cara jadi promotor',
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
 * Generate canonical URL with consistent formatting
 * - Always uses HTTPS
 * - Ensures trailing slash for consistency
 * - Removes query parameters
 * - Converts to lowercase for consistency
 */
export function getCanonicalURL(path: string): string {
  // Remove query parameters
  const pathWithoutQuery = path.split('?')[0];

  // Clean the path: remove trailing slash, then ensure single leading slash
  let cleanPath = pathWithoutQuery.replace(/\/+$/, '').replace(/^\/+/, '');

  // Handle root path
  if (!cleanPath) {
    return `${SITE_CONFIG.url}/`;
  }

  // Add trailing slash for consistency (better for SEO)
  return `${SITE_CONFIG.url}/${cleanPath}/`;
}

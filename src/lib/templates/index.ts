/**
 * Template Rotation System
 * Menentukan template mana yang digunakan berdasarkan index lokasi
 * 7 template variations untuk menghindari duplicate content
 */

export type TemplateType =
  | 'income-focus'
  | 'freedom-focus'
  | 'growth-focus'
  | 'multiple-income'
  | 'professional-focus'
  | 'community-focus'
  | 'mission-focus';

export interface Location {
  slug: string;
  kecamatan: string;
  kabupaten: string;
  provinsi: string;
  provinsiSlug: string;
  demandLevel?: 'high' | 'medium' | 'low';
  keywords?: string[];
  description?: string;
}

/**
 * Mendapatkan template type berdasarkan index lokasi
 * Menggunakan modulo 7 untuk rotasi template
 */
export function getTemplateType(locationIndex: number): TemplateType {
  const templateNumber = (locationIndex % 7) + 1;

  switch (templateNumber) {
    case 1:
      return 'income-focus';
    case 2:
      return 'freedom-focus';
    case 3:
      return 'growth-focus';
    case 4:
      return 'multiple-income';
    case 5:
      return 'professional-focus';
    case 6:
      return 'community-focus';
    case 7:
      return 'mission-focus';
    default:
      return 'income-focus';
  }
}

/**
 * Mendapatkan index lokasi dari array cities
 */
export function getLocationIndex(locations: Location[], currentSlug: string): number {
  return locations.findIndex((loc) => loc.slug === currentSlug);
}

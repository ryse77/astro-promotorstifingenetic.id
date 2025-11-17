// Site-wide constants and configuration

export const SITE_CONFIG = {
  name: 'Promotor STIFIn Genetic',
  domain: 'promotorstifingenetic.id',
  url: 'https://promotorstifingenetic.id',
  description: 'Peluang bisnis menjadi promotor STIFIn Genetic Test di seluruh Indonesia. Komisi hingga 60% dengan sistem yang terbukti.',

  // Social & Contact
  whatsapp: {
    number: '6281234567890', // Ganti dengan nomor WA yang aktif
    displayNumber: '+62 812-3456-7890',
  },

  email: 'info@promotorstifingenetic.id',

  // Social Media (optional)
  social: {
    facebook: 'https://facebook.com/promotorstifingenetic',
    instagram: 'https://instagram.com/promotorstifingenetic',
    twitter: 'https://twitter.com/promotorstifingenetic',
  },

  // SEO
  defaultOgImage: '/images/og-default.jpg',

  // Business Info
  business: {
    name: 'STIFIn',
    fullName: 'Science of Talents through Fingerprint',
    commission: '60%',
    benefits: [
      'Komisi hingga 60% dari setiap transaksi',
      'Training gratis dari STIFIn Academy',
      'Support marketing dan promotional material',
      'Sistem online yang mudah digunakan',
      'Potensi income unlimited',
      'Fleksibel, bisa dikerjakan paruh waktu',
    ],
  },
};

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Promotor STIFIn Genetic',
  defaultTitle: 'Promotor STIFIn Genetic - Peluang Bisnis Indonesia',
  description: SITE_CONFIG.description,
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    site_name: SITE_CONFIG.name,
  },
};

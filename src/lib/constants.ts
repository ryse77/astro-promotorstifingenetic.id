// Site-wide constants and configuration

export const SITE_CONFIG = {
  name: 'Promotor STIFIn Genetic',
  domain: 'promotorstifingenetic.id',
  url: 'https://promotorstifingenetic.id',
  description: 'Peluang bisnis menjadi Licensed Promotor STIFIn Genetic Test di seluruh Indonesia. 6 sumber penghasilan dengan margin minimal 300%.',

  // Social & Contact
  whatsapp: {
    number: '628122011519',
    displayNumber: '+62 812-2011-519',
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
    fullName: 'Promotor STIFIn Genetic Official',
    commission: '300%',
    benefits: [
      'Margin minimal 300% dari modal voucher tes',
      '6 sumber penghasilan: tes, private, speaker, 3 afiliasi',
      'Support marketing dan sistem online lengkap',
      'ID Aplikasi pribadi seumur hidup',
      'Potensi penghasilan >10 juta per bulan',
      'Fleksibel, bisa dikerjakan paruh waktu atau full time',
    ],
    // 8 Paket Lengkap yang Didapat (from knowledge)
    whatYouGet: [
      {
        title: 'Workshop STIFIn Level 01',
        description: 'Pembelajaran Konsep STIFIn Level Dasar dengan materi: Mesin Kecerdasan, Personality Genetik, Sirkulasi STIFIn, Golden Rule STIFIn, dan Ujian WSL1.',
        icon: '🎓',
      },
      {
        title: 'Workshop STIFIn Level 02',
        description: 'Pembelajaran Konsep STIFIn Level Advance dengan materi bekal untuk menjadi Promotor STIFIn yang handal. Termasuk ujian kompetensi.',
        icon: '📚',
      },
      {
        title: 'E-Modul',
        description: 'Materi/E-Modul Workshop STIFIn Level 1 dan Level 2 dalam format PDF dan PowerPoint untuk kalangan personal.',
        icon: '📄',
      },
      {
        title: 'E-Certificate',
        description: 'Sertifikat Lulus Workshop STIFIn Level 1 dan Workshop STIFIn Level 2 dalam bentuk elektronik.',
        icon: '🎖️',
      },
      {
        title: 'Aplikasi STIFIn',
        description: 'ID/Serial Number Aplikasi untuk Tes STIFIn yang akan diinstal di laptop Windows. Proses instalasi akan dibantu oleh Tim STIFIn Genetic.',
        icon: '💻',
      },
      {
        title: 'Support Digital',
        description: 'Landing page untuk promosi GRATIS, Google My Business GRATIS, flyer untuk promosi, dan bebas pakai konten sosial media dari STIFIn Genetic.',
        icon: '🚀',
      },
      {
        title: 'Buku Pancarona',
        description: 'Buku panduan berisi penjelasan lengkap tentang materi STIFIn untuk bahan bacaan Promotor STIFIn. Berisi 280 halaman.',
        icon: '📖',
      },
      {
        title: 'Scanner USB Fingerprint',
        description: '1 Unit Scanner USB Fingerprint sebagai alat untuk menginput data sidik jari ke aplikasi tes STIFIn.',
        icon: '🖐️',
      },
    ],
    // 6 Income Streams Breakdown
    incomeStreams: [
      {
        title: 'Tes STIFIn Fingerprint',
        description: 'Margin keuntungan minimal 300% dari modal voucher STIFIn setiap kali melakukan tes.',
        potentialIncome: '6-10 juta/bulan',
        example: '10 tes/bulan × Rp 600rb margin = Rp 6 juta',
      },
      {
        title: 'Sesi Private STIFIn',
        description: 'Fee konsultasi personal minimal Rp 250.000 per sesi per orang.',
        potentialIncome: '2-4 juta/bulan',
        example: '8 sesi/bulan × Rp 250-500rb = Rp 2-4 juta',
      },
      {
        title: 'Public Speaker',
        description: 'Fee honor ketika diundang sebagai narasumber tentang konsep STIFIn dan kepribadian.',
        potentialIncome: '2-5 juta/bulan',
        example: '1-2 event/bulan × Rp 2-5 juta',
      },
      {
        title: 'Afiliasi Tes STIFIn',
        description: 'Margin dari setiap referral klien yang melakukan tes STIFIn.',
        potentialIncome: '0.5-2 juta/bulan',
        example: 'Margin per referral yang convert',
      },
      {
        title: 'Afiliasi Workshop STIFIn',
        description: 'Margin ketika mereferensikan seseorang untuk mengikuti Workshop STIFIn.',
        potentialIncome: '0.5-2 juta/bulan',
        example: 'Margin per peserta workshop',
      },
      {
        title: 'Afiliasi Promotor STIFIn',
        description: 'Margin rekrutmen ketika mereferensikan seseorang menjadi Licensed Promotor STIFIn.',
        potentialIncome: '1-3 juta/bulan',
        example: 'Margin per promotor baru',
      },
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

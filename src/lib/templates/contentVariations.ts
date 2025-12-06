/**
 * Content Variations per Template
 * Konten yang berbeda untuk setiap template type
 */

import type { Location, TemplateType } from './index';

export interface TemplateContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  mainSectionTitle: string;
  mainContent: string;
  ctaTitle: string;
  ctaDescription: string;
  whatsappMessageSuffix: string;
}

/**
 * Mendapatkan konten berdasarkan template type dan pattern
 */
export function getTemplateContent(
  templateType: TemplateType,
  pattern: 'daftar' | 'pendaftaran',
  location: Location
): TemplateContent {
  const { kecamatan, kabupaten, provinsi } = location;

  const contents: Record<TemplateType, Record<'daftar' | 'pendaftaran', TemplateContent>> = {
    'income-focus': {
      daftar: {
        heroTitle: `Daftar Promotor STIFIn di ${kecamatan} - Peluang Penghasilan >10 Juta/Bulan`,
        heroSubtitle: `Licensed Promotor STIFIn dengan 6 Sumber Penghasilan di ${provinsi}`,
        heroDescription: `Bergabung sebagai Licensed Promotor STIFIn di ${kecamatan} dan dapatkan peluang penghasilan >10 juta/bulan dari 6 sumber income. Investasi sekali, untung berkali-kali!`,
        mainSectionTitle: `Potensi Penghasilan Licensed Promotor STIFIn di ${kecamatan}`,
        mainContent: `${kecamatan}, ${kabupaten} merupakan lokasi strategis untuk mengembangkan bisnis sebagai Licensed Promotor STIFIn. Dengan populasi yang terus berkembang dan meningkatnya kesadaran masyarakat ${provinsi} akan pentingnya mengenali potensi diri sejak dini, peluang bisnis tes STIFIn sangat menjanjikan.`,
        ctaTitle: `Siap Raih Penghasilan >10 Juta/Bulan di ${kecamatan}?`,
        ctaDescription: `Hubungi kami sekarang untuk informasi detail investasi dan jadwal workshop. Raih peluang menjadi Licensed Promotor STIFIn di ${kecamatan}!`,
        whatsappMessageSuffix: `Mohon info detail mengenai investasi workshop dan potensi penghasilannya. Terima kasih!`,
      },
      pendaftaran: {
        heroTitle: `Pendaftaran Promotor STIFIn ${kecamatan} - Raih Penghasilan Puluhan Juta`,
        heroSubtitle: `Licensed Promotor STIFIn dengan 6 Sumber Penghasilan di ${provinsi}`,
        heroDescription: `Mulai bisnis dengan potensi income puluhan juta di ${kecamatan} sekarang! 6 sumber penghasilan dari margin 300% hingga fee honor pembicara.`,
        mainSectionTitle: `Cara Pendaftaran Licensed Promotor STIFIn di ${kecamatan}`,
        mainContent: `Bergabung sebagai Licensed Promotor STIFIn di ${kecamatan}, ${provinsi} sangat mudah. Ikuti 4 langkah sederhana untuk memulai bisnis dengan potensi penghasilan >10 juta per bulan!`,
        ctaTitle: `Siap Memulai Bisnis di ${kecamatan}?`,
        ctaDescription: `Hubungi kami untuk info lengkap cara pendaftaran dan investasi yang dibutuhkan!`,
        whatsappMessageSuffix: `Mohon info detail proses pendaftaran dan investasinya. Terima kasih!`,
      },
    },

    'freedom-focus': {
      daftar: {
        heroTitle: `Daftar Promotor STIFIn di ${kecamatan} - Kerja Bebas Tanpa Terikat Bos`,
        heroSubtitle: `Profesi Freelance Berlisensi Resmi di ${provinsi}`,
        heroDescription: `Menjadi Licensed Promotor STIFIn di ${kecamatan} memberikan Anda kebebasan penuh untuk bekerja kapan saja, di mana saja, tanpa terikat atasan atau aturan kerja yang kaku!`,
        mainSectionTitle: `Kebebasan Kerja Sebagai Licensed Promotor STIFIn di ${kecamatan}`,
        mainContent: `Berbeda dengan pekerjaan konvensional, menjadi Licensed Promotor STIFIn di ${kecamatan}, ${kabupaten} memberikan Anda kebebasan penuh dalam menjalankan profesi ini. Tidak ada atasan yang mengatur, tidak ada jam kerja yang mengikat, dan tidak ada aturan kaku yang membatasi.`,
        ctaTitle: `Siap Jadi Boss Untuk Diri Sendiri di ${kecamatan}?`,
        ctaDescription: `Hubungi kami untuk info lengkap cara menjadi Licensed Promotor STIFIn dengan sistem kerja bebas dan fleksibel!`,
        whatsappMessageSuffix: `Mohon info lengkap tentang workshop dan sistemnya. Terima kasih!`,
      },
      pendaftaran: {
        heroTitle: `Pendaftaran Promotor STIFIn ${kecamatan} - Profesi Freelance Berlisensi`,
        heroSubtitle: `Profesi Freelance Berlisensi Resmi di ${provinsi}`,
        heroDescription: `Raih kebebasan finansial dan waktu dengan profesi freelance Licensed Promotor STIFIn di ${kecamatan}. Atur sendiri jadwal dan target Anda!`,
        mainSectionTitle: `Sistem Kerja Freelance yang Fleksibel`,
        mainContent: `Profesi Licensed Promotor STIFIn di ${kecamatan}, ${provinsi} memberikan fleksibilitas penuh. Anda yang menentukan kapan bekerja, di mana melayani klien, dan berapa target penghasilan Anda.`,
        ctaTitle: `Siap Memulai Karir Freelance di ${kecamatan}?`,
        ctaDescription: `Hubungi kami untuk informasi lengkap tentang profesi freelance Licensed Promotor STIFIn!`,
        whatsappMessageSuffix: `Mohon info tentang sistem freelance dan prosesnya. Terima kasih!`,
      },
    },

    'growth-focus': {
      daftar: {
        heroTitle: `Daftar Promotor STIFIn di ${kecamatan} - Kembangkan Potensi Diri Anda`,
        heroSubtitle: `Pengembangan Diri Melalui Profesi Licensed Promotor STIFIn di ${provinsi}`,
        heroDescription: `Kembangkan diri Anda menjadi ahli kepribadian dan potensi genetik dengan menjadi Licensed Promotor STIFIn di ${kecamatan}. Upgrade skill sambil membantu orang lain!`,
        mainSectionTitle: `Pengembangan Diri Melalui Licensed Promotor STIFIn di ${kecamatan}`,
        mainContent: `Menjadi Licensed Promotor STIFIn di ${kecamatan}, ${kabupaten} bukan hanya tentang bisnis dan penghasilan. Ini adalah journey pengembangan diri yang akan mengubah cara Anda memahami manusia, termasuk diri Anda sendiri.`,
        ctaTitle: `Siap Mulai Journey Pengembangan Diri di ${kecamatan}?`,
        ctaDescription: `Hubungi kami untuk informasi lengkap tentang workshop dan proses menjadi Licensed Promotor STIFIn. Transform yourself, transform others!`,
        whatsappMessageSuffix: `Mohon info detail tentang workshop dan prosesnya. Terima kasih!`,
      },
      pendaftaran: {
        heroTitle: `Pendaftaran Promotor STIFIn ${kecamatan} - Jadi Ahli Kepribadian & Potensi`,
        heroSubtitle: `Pengembangan Diri Melalui Profesi Licensed Promotor STIFIn di ${provinsi}`,
        heroDescription: `Tingkatkan expertise Anda sebagai ahli kepribadian dengan sertifikasi resmi Licensed Promotor STIFIn di ${kecamatan}. Belajar sambil menghasilkan!`,
        mainSectionTitle: `Menjadi Expert Kepribadian & Potensi di ${kecamatan}`,
        mainContent: `Sertifikasi resmi Workshop STIFIn Level 1 & 2 menjadikan Anda expert yang diakui di bidang personality genetik dan potensi diri di ${kecamatan}, ${provinsi}.`,
        ctaTitle: `Siap Jadi Expert di ${kecamatan}?`,
        ctaDescription: `Hubungi kami untuk info lengkap sertifikasi dan pengembangan expertise Anda!`,
        whatsappMessageSuffix: `Mohon info workshop dan sertifikasinya. Terima kasih!`,
      },
    },

    'multiple-income': {
      daftar: {
        heroTitle: `Daftar Promotor STIFIn di ${kecamatan} - 6 Sumber Penghasilan Unlimited`,
        heroSubtitle: `Licensed Promotor STIFIn: Satu Profesi, 6 Sumber Penghasilan di ${provinsi}`,
        heroDescription: `Raih kebebasan finansial dengan 6 sumber penghasilan dari satu profesi Licensed Promotor STIFIn di ${kecamatan}. Aktif atau pasif, semuanya bisa menghasilkan!`,
        mainSectionTitle: `6 Sumber Penghasilan Licensed Promotor STIFIn di ${kecamatan}`,
        mainContent: `Licensed Promotor STIFIn di ${kecamatan}, ${kabupaten} memiliki keunikan dengan 6 sumber penghasilan berbeda: dari tes STIFIn (margin 300%), konsultasi private (Rp 250rb/sesi), hingga fee pembicara dan afiliasi.`,
        ctaTitle: `Siap Diversifikasi Income di ${kecamatan}?`,
        ctaDescription: `Hubungi kami untuk strategi detail memaksimalkan 6 sumber penghasilan Licensed Promotor STIFIn!`,
        whatsappMessageSuffix: `Mohon info detail investasi dan cara memaksimalkan 6 sumber penghasilan. Terima kasih!`,
      },
      pendaftaran: {
        heroTitle: `Pendaftaran Promotor STIFIn ${kecamatan} - Diversifikasi Income Anda`,
        heroSubtitle: `Licensed Promotor STIFIn: Satu Profesi, 6 Sumber Penghasilan di ${provinsi}`,
        heroDescription: `Maksimalkan potensi income dengan 6 revenue streams dari profesi Licensed Promotor STIFIn di ${kecamatan}!`,
        mainSectionTitle: `Strategi Memaksimalkan 6 Sumber Penghasilan`,
        mainContent: `Dengan strategi yang tepat, Licensed Promotor STIFIn di ${kecamatan} bisa memaksimalkan semua 6 sumber penghasilan secara bertahap hingga mencapai potensi >20 juta per bulan.`,
        ctaTitle: `Siap Maksimalkan Income di ${kecamatan}?`,
        ctaDescription: `Hubungi kami untuk strategi lengkap dan case study promotor sukses!`,
        whatsappMessageSuffix: `Mohon info strategi income dan case study. Terima kasih!`,
      },
    },

    'professional-focus': {
      daftar: {
        heroTitle: `Daftar Promotor STIFIn di ${kecamatan} - Profesi Berlisensi Resmi`,
        heroSubtitle: `Licensed Professional: Kredibilitas & Sertifikasi Nasional di ${provinsi}`,
        heroDescription: `Raih kredibilitas sebagai professional berlisensi resmi dengan menjadi Licensed Promotor STIFIn di ${kecamatan}. Sertifikasi nasional, kode etik, standar kompetensi jelas!`,
        mainSectionTitle: `Profesi Licensed Professional di ${kecamatan}`,
        mainContent: `Licensed Promotor STIFIn adalah profesi professional berlisensi resmi dari STIFIn dengan standar kompetensi dan kode etik yang jelas. Di ${kecamatan}, ${kabupaten}, profesi ini semakin diakui kredibilitasnya.`,
        ctaTitle: `Siap Jadi Professional Berlisensi di ${kecamatan}?`,
        ctaDescription: `Hubungi kami untuk info lengkap sertifikasi dan lisensi professional!`,
        whatsappMessageSuffix: `Mohon info sertifikasi dan lisensi professional. Terima kasih!`,
      },
      pendaftaran: {
        heroTitle: `Pendaftaran Promotor STIFIn ${kecamatan} - Karir Professional Berlisensi`,
        heroSubtitle: `Licensed Professional: Kredibilitas & Sertifikasi Nasional di ${provinsi}`,
        heroDescription: `Mulai karir professional dengan lisensi resmi Licensed Promotor STIFIn di ${kecamatan}. Career path jelas, standar tinggi!`,
        mainSectionTitle: `Standar Kompetensi & Kode Etik Professional`,
        mainContent: `Sebagai Licensed Promotor STIFIn professional di ${kecamatan}, Anda akan mengikuti standar kompetensi dan kode etik yang ditetapkan STIFIn Pusat, menjaga kualitas layanan tertinggi.`,
        ctaTitle: `Siap Berkarir Professional di ${kecamatan}?`,
        ctaDescription: `Hubungi kami untuk info career path dan standar professional!`,
        whatsappMessageSuffix: `Mohon info career path dan standardnya. Terima kasih!`,
      },
    },

    'community-focus': {
      daftar: {
        heroTitle: `Daftar Promotor STIFIn di ${kecamatan} - Join 1000+ Promotor Indonesia`,
        heroSubtitle: `Bergabung Komunitas Licensed Promotor Terbesar di ${provinsi}`,
        heroDescription: `Tidak sendiri! Bergabung dengan 1000+ Licensed Promotor STIFIn se-Indonesia. Support system kuat, mentoring rutin, networking berkualitas di ${kecamatan}!`,
        mainSectionTitle: `Komunitas 1000+ Licensed Promotor di ${kecamatan}`,
        mainContent: `Menjadi bagian dari komunitas 1000+ Licensed Promotor STIFIn memberikan Anda akses ke support system yang kuat, mentoring dari expert, dan networking berkualitas di ${kecamatan} dan seluruh Indonesia.`,
        ctaTitle: `Siap Join Komunitas di ${kecamatan}?`,
        ctaDescription: `Hubungi kami untuk info lengkap tentang komunitas dan support system!`,
        whatsappMessageSuffix: `Mohon info tentang komunitas dan support system. Terima kasih!`,
      },
      pendaftaran: {
        heroTitle: `Pendaftaran Promotor STIFIn ${kecamatan} - Bagian dari Gerakan Nasional`,
        heroSubtitle: `Bergabung Komunitas Licensed Promotor Terbesar di ${provinsi}`,
        heroDescription: `Jadilah bagian dari gerakan nasional 1000+ Licensed Promotor STIFIn. Mentoring, networking, kolaborasi di ${kecamatan}!`,
        mainSectionTitle: `Support & Mentoring dari Komunitas`,
        mainContent: `Komunitas Licensed Promotor STIFIn di ${kecamatan} dan ${provinsi} memberikan support berkelanjutan: mentoring rutin, sharing session, event gathering, dan kolaborasi antar promotor.`,
        ctaTitle: `Siap Bergabung di ${kecamatan}?`,
        ctaDescription: `Hubungi kami untuk bergabung dengan komunitas professional!`,
        whatsappMessageSuffix: `Mohon info komunitas dan event-nya. Terima kasih!`,
      },
    },

    'mission-focus': {
      daftar: {
        heroTitle: `Daftar Promotor STIFIn di ${kecamatan} - Bantu Bangsa Temukan Potensi`,
        heroSubtitle: `Gerakan Mencerdaskan Bangsa: Profesi Mulia yang Menghasilkan di ${provinsi}`,
        heroDescription: `Jadi bagian dari gerakan mencerdaskan bangsa dengan membantu masyarakat ${kecamatan} mengenali potensi terbaiknya. Profesi bermakna dengan penghasilan menjanjikan!`,
        mainSectionTitle: `Misi Mencerdaskan Bangsa dari ${kecamatan}`,
        mainContent: `Licensed Promotor STIFIn di ${kecamatan}, ${kabupaten} menjalankan misi mulia membantu masyarakat mengenali potensi genetik mereka sejak dini, berkontribusi untuk masa depan ${provinsi} dan Indonesia yang lebih baik.`,
        ctaTitle: `Siap Berkontribusi dari ${kecamatan}?`,
        ctaDescription: `Hubungi kami untuk menjadi bagian dari gerakan mencerdaskan bangsa!`,
        whatsappMessageSuffix: `Mohon info misi dan dampak sosialnya. Terima kasih!`,
      },
      pendaftaran: {
        heroTitle: `Pendaftaran Promotor STIFIn ${kecamatan} - Profesi Bermakna & Menghasilkan`,
        heroSubtitle: `Gerakan Mencerdaskan Bangsa: Profesi Mulia yang Menghasilkan di ${provinsi}`,
        heroDescription: `Wujudkan purpose dan profit dalam satu profesi. Bantu orang di ${kecamatan} temukan potensi sambil raih penghasilan >10 juta/bulan!`,
        mainSectionTitle: `Dampak Sosial dari Profesi Licensed Promotor`,
        mainContent: `Setiap tes STIFIn yang Anda lakukan di ${kecamatan} adalah kontribusi untuk membantu seseorang menemukan jalan terbaik hidupnya. Purpose + profit = fulfillment!`,
        ctaTitle: `Siap Berdampak dari ${kecamatan}?`,
        ctaDescription: `Hubungi kami untuk memulai profesi bermakna dan menghasilkan!`,
        whatsappMessageSuffix: `Mohon info profesi dan dampaknya. Terima kasih!`,
      },
    },
  };

  return contents[templateType][pattern];
}

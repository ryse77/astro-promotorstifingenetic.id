export interface SocialProofEntry {
  name: string;
  city: string;
  avatar?: string | null; // Path to image or null for default avatar with initial
  timestamp?: string;
}

export const socialProofData: SocialProofEntry[] = [
  // ========================================
  // CARA EDIT:
  // 1. Copy block dibawah
  // 2. Ganti name, city, dan avatar
  // 3. Jika ada foto: avatar: "/images/avatars/nama.jpg"
  // 4. Jika pakai initial: avatar: null
  // ========================================

  {
    name: "Alvin Prasetyo",
    city: "Jakarta Selatan",
    avatar: null, // Akan generate avatar "A" otomatis
  },
  {
    name: "Budi Santoso",
    city: "Surabaya",
    avatar: null,
  },
  {
    name: "Citra Dewi",
    city: "Bandung",
    avatar: null,
  },
  {
    name: "Dewi Lestari",
    city: "Medan",
    avatar: null,
  },
  {
    name: "Eko Prasetyo",
    city: "Semarang",
    avatar: null,
  },
  {
    name: "Fitri Handayani",
    city: "Makassar",
    avatar: null,
  },
  {
    name: "Gani Wijaya",
    city: "Palembang",
    avatar: null,
  },
  {
    name: "Hana Pratiwi",
    city: "Tangerang",
    avatar: null,
  },
  {
    name: "Indra Gunawan",
    city: "Depok",
    avatar: null,
  },
  {
    name: "Joko Susilo",
    city: "Bekasi",
    avatar: null,
  },
  {
    name: "Kartika Sari",
    city: "Yogyakarta",
    avatar: null,
  },
  {
    name: "Laila Maharani",
    city: "Malang",
    avatar: null,
  },
  {
    name: "Maya Putri",
    city: "Bogor",
    avatar: null,
  },
  {
    name: "Nina Rahayu",
    city: "Batam",
    avatar: null,
  },
  {
    name: "Oscar Ramadhan",
    city: "Pekanbaru",
    avatar: null,
  },
  {
    name: "Putri Ayu",
    city: "Denpasar",
    avatar: null,
  },
  {
    name: "Qori Hidayat",
    city: "Balikpapan",
    avatar: null,
  },
  {
    name: "Rina Marlina",
    city: "Pontianak",
    avatar: null,
  },
  {
    name: "Sari Wulandari",
    city: "Samarinda",
    avatar: null,
  },
  {
    name: "Tono Kusuma",
    city: "Manado",
    avatar: null,
  },
];

export const messageTemplates = [
  "{name} dari {city} baru saja mendaftar sebagai Licensed Promotor STIFIn",
  "{name} dari {city} telah bergabung menjadi Promotor STIFIn",
  "{name} di {city} baru mendaftar",
  "Seseorang dari {city} baru saja mengambil peluang ini",
];

// Helper function untuk generate random entry
export function getRandomEntry(): SocialProofEntry {
  return socialProofData[Math.floor(Math.random() * socialProofData.length)];
}

// Helper function untuk generate random template
export function getRandomTemplate(): string {
  return messageTemplates[Math.floor(Math.random() * messageTemplates.length)];
}

// Helper function untuk generate popup text
export function generatePopupText(): { text: string; entry: SocialProofEntry } {
  const entry = getRandomEntry();
  const template = getRandomTemplate();
  const text = template
    .replace("{name}", entry.name)
    .replace("{city}", entry.city);

  return { text, entry };
}

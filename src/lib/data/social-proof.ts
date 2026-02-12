export interface SocialProofEntry {
  name: string;
  city: string;
  avatar?: string | null; // Path to image or null for default avatar with initial
  timestamp?: string;
}

export const socialProofData: SocialProofEntry[] = [
  {
    name: "Jifi Abdullah",
    city: "PADANG PARIAMAN",
    avatar: null,
  },
  {
    name: "Desmanita.A Md",
    city: "KAB. AGAM",
    avatar: null,
  },
  {
    name: "Fitri Ningsih S. Psi",
    city: "KAB. KAMPAR",
    avatar: null,
  },
  {
    name: "Dwi Darmawati",
    city: "TANGERANG",
    avatar: null,
  },
  {
    name: "John Lauis",
    city: "TANGERANG",
    avatar: null,
  },
  {
    name: "Devinawati",
    city: "TANGERANG",
    avatar: null,
  },
  {
    name: "Ahmad Suratman",
    city: "TANGERANG",
    avatar: null,
  },
  {
    name: "Wiwik Sriwahyuni",
    city: "TANGERANG",
    avatar: null,
  },
  {
    name: "Rona Agustina",
    city: "TANGERANG",
    avatar: null,
  },
  {
    name: "CHICHI SUKARDJO",
    city: "JAKARTA TIMUR",
    avatar: null,
  },
  {
    name: "Firdiani",
    city: "JAKARTA TIMUR",
    avatar: null,
  },
  {
    name: "Marwi Argasasmita",
    city: "JAKARTA TIMUR",
    avatar: null,
  },
  {
    name: "Sylvia Martshalina",
    city: "JAKARTA TIMUR",
    avatar: null,
  },
  {
    name: "SITI AMINAH",
    city: "JAKARTA TIMUR",
    avatar: null,
  },
  {
    name: "Irfan Abdul Hilmi",
    city: "JAKARTA TIMUR",
    avatar: null,
  },
  {
    name: "Tiantri Wulan Yuli",
    city: "JAKARTA TIMUR",
    avatar: null,
  },
  {
    name: "Budi Rinoso",
    city: "JAKARTA TIMUR",
    avatar: null,
  },
  {
    name: "Dinda Riah Sari",
    city: "JAKARTA TIMUR",
    avatar: null,
  },
  {
    name: "CITRA SETYO PRATIWI",
    city: "JAKARTA TIMUR",
    avatar: null,
  },
  {
    name: "Suharti SE A.Md",
    city: "JAKARTA TIMUR",
    avatar: null,
  },
  {
    name: "dr Alief Ringga Prapditia Sugiyo",
    city: "JAKARTA TIMUR",
    avatar: null,
  },
  {
    name: "Yuliningsih",
    city: "JAKARTA SELATAN",
    avatar: null,
  },
  {
    name: "YURIKE OKTIVIA ISKANDAR",
    city: "JAKARTA SELATAN",
    avatar: null,
  },
  {
    name: "Yenny Shofariah",
    city: "JAKARTA SELATAN",
    avatar: null,
  },
  {
    name: "Fazha Farhinna S.Psi",
    city: "JAKARTA SELATAN",
    avatar: null,
  },
  {
    name: "Ratu Nabila Kurnia Rahman",
    city: "JAKARTA SELATAN",
    avatar: null,
  },
  {
    name: "Abdul Halim Nasution",
    city: "JAKARTA SELATAN",
    avatar: null,
  },
  {
    name: "A.LARASATI SUGITY",
    city: "JAKARTA SELATAN",
    avatar: null,
  },
  {
    name: "Reza Muhammad Syarief",
    city: "DEPOK",
    avatar: null,
  },
  {
    name: "Rahmawati Dimyati",
    city: "DEPOK",
    avatar: null,
  },
  {
    name: "dr. Fitria Yunita",
    city: "DEPOK",
    avatar: null,
  },
  {
    name: "Bayu Yuda Pribadi",
    city: "DEPOK",
    avatar: null,
  },
  {
    name: "Renanta Anindia Wardana S.S.T.Pi. M.M.",
    city: "DEPOK",
    avatar: null,
  },
  {
    name: "Septy Maharani Rinal",
    city: "BANDA ACEH",
    avatar: null,
  },
  {
    name: "Devisa Pertiwi",
    city: "BANDA ACEH",
    avatar: null,
  },
  {
    name: "Eny Sriwahyuningsih",
    city: "SEMARANG",
    avatar: null,
  },
  {
    name: "Florencia Angela Santoso",
    city: "SEMARANG",
    avatar: null,
  },
  {
    name: "Brillianthine Novy Apsari",
    city: "SEMARANG",
    avatar: null,
  },
  {
    name: "Ivan Kurnia Adi",
    city: "SEMARANG",
    avatar: null,
  },
  {
    name: "Adelina Cahyaningrum S.Tr.Keb",
    city: "SEMARANG",
    avatar: null,
  },
  {
    name: "Ahda Syakira",
    city: "Padang",
    avatar: null,
  },
  {
    name: "Nuraisyah Lubis",
    city: "BATAM",
    avatar: null,
  },
  {
    name: "Annisa Febrinel Hendry",
    city: "BOGOR",
    avatar: null,
  },
  {
    name: "Agus Siswanto",
    city: "BOGOR",
    avatar: null,
  },
  {
    name: "ERVAN ZUMAEDI",
    city: "BOGOR",
    avatar: null,
  },
  {
    name: "Yusuf",
    city: "BOGOR",
    avatar: null,
  },
  {
    name: "Muhammad Isa Afifi S.T",
    city: "BOGOR",
    avatar: null,
  },
  {
    name: "Merry Ajeng Putri Dewi",
    city: "BANDUNG BARAT",
    avatar: null,
  },
  {
    name: "Ismail Saleh",
    city: "BANDUNG BARAT",
    avatar: null,
  },
  {
    name: "Tommy Nugraha",
    city: "BANDUNG BARAT",
    avatar: null,
  },
];

export const messageTemplates = [
  "{name} dari {city} baru saja mendaftar sebagai Licensed Promotor STIFIn",
  "{name} dari {city} telah bergabung menjadi Promotor STIFIn",
  "{name} di {city} baru mendaftar",
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

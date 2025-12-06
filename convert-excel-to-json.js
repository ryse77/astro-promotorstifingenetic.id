import XLSX from 'xlsx';
import fs from 'fs';

// Fungsi untuk membuat slug dari string
function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^a-z0-9-]/g, '')     // Remove special characters
    .replace(/-+/g, '-')            // Replace multiple - with single -
    .replace(/^-|-$/g, '');         // Remove leading/trailing -
}

// Fungsi untuk generate keywords
function generateKeywords(kecamatan, kabupaten, provinsi) {
  return [
    `promotor stifin ${kecamatan.toLowerCase()}`,
    `bisnis stifin ${kabupaten.toLowerCase().replace(/^kab\.\s*|^kota\s*/i, '')}`,
    `daftar promotor stifin ${provinsi.toLowerCase()}`
  ];
}

// Fungsi untuk generate description
function generateDescription(kecamatan, kabupaten) {
  return `Bergabung sebagai promotor STIFIn di ${kecamatan}, ${kabupaten}. Peluang bisnis dengan komisi hingga 70%. Training gratis, support penuh!`;
}

// Fungsi untuk menentukan demand level (bisa dikustomisasi nanti)
function getDemandLevel(kabupaten, kecamatan) {
  // Kota-kota besar dengan demand tinggi
  const highDemandKeywords = [
    'jakarta', 'bandung', 'surabaya', 'medan', 'semarang',
    'makassar', 'palembang', 'tangerang', 'depok', 'bekasi',
    'bogor', 'yogyakarta', 'malang', 'solo', 'balikpapan'
  ];

  const locationText = `${kabupaten} ${kecamatan}`.toLowerCase();

  // Check jika mengandung keyword kota besar
  for (const keyword of highDemandKeywords) {
    if (locationText.includes(keyword)) {
      return 'high';
    }
  }

  // Default medium
  return 'medium';
}

console.log('🚀 Starting Excel to JSON conversion...\n');

// Baca file Excel
const workbook = XLSX.readFile('c:\\Users\\Ryse\\Documents\\STIFIn\\stifin-indonesia.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert ke JSON
const rawData = XLSX.utils.sheet_to_json(worksheet);

console.log(`📊 Total rows in Excel: ${rawData.length}\n`);

// Transform data ke format yang dibutuhkan
const transformedData = rawData.map((row, index) => {
  const provinsi = row['Provinsi'];
  const kabupaten = row['Kabupaten/Kota'];
  const kecamatan = row['Kecamatan'];

  // Create slugs
  const kecamatanSlug = createSlug(kecamatan);
  const provinsiSlug = createSlug(provinsi);

  // Generate auto fields
  const keywords = generateKeywords(kecamatan, kabupaten, provinsi);
  const description = generateDescription(kecamatan, kabupaten);
  const demandLevel = getDemandLevel(kabupaten, kecamatan);

  return {
    slug: kecamatanSlug,
    kecamatan: kecamatan,
    kabupaten: kabupaten,
    provinsi: provinsi,
    provinsiSlug: provinsiSlug,
    demandLevel: demandLevel,
    keywords: keywords,
    description: description
  };
});

console.log('✅ Data transformation completed!\n');

// Statistik
const stats = {
  totalLocations: transformedData.length,
  totalProvinsi: [...new Set(transformedData.map(d => d.provinsi))].length,
  totalKabupaten: [...new Set(transformedData.map(d => d.kabupaten))].length,
  totalKecamatan: [...new Set(transformedData.map(d => d.kecamatan))].length,
  highDemand: transformedData.filter(d => d.demandLevel === 'high').length,
  mediumDemand: transformedData.filter(d => d.demandLevel === 'medium').length,
};

console.log('📈 Statistics:');
console.log(`   Total Locations: ${stats.totalLocations}`);
console.log(`   Unique Provinsi: ${stats.totalProvinsi}`);
console.log(`   Unique Kabupaten/Kota: ${stats.totalKabupaten}`);
console.log(`   Unique Kecamatan: ${stats.totalKecamatan}`);
console.log(`   High Demand: ${stats.highDemand}`);
console.log(`   Medium Demand: ${stats.mediumDemand}`);
console.log('');

// Sample data
console.log('📋 Sample Data (First 3 entries):');
console.log(JSON.stringify(transformedData.slice(0, 3), null, 2));
console.log('');

// Simpan ke file JSON
const outputPath = 'src/lib/data/cities-new.json';
fs.writeFileSync(outputPath, JSON.stringify(transformedData, null, 2));

console.log(`✅ JSON file saved to: ${outputPath}`);
console.log('');

// Simpan juga metadata
const metadata = {
  generatedAt: new Date().toISOString(),
  source: 'stifin-indonesia.xlsx',
  stats: stats,
  sampleEntries: transformedData.slice(0, 5)
};

fs.writeFileSync('conversion-metadata.json', JSON.stringify(metadata, null, 2));

console.log('✅ Metadata saved to: conversion-metadata.json');
console.log('');
console.log('🎉 Conversion completed successfully!');
console.log('');
console.log('📝 Next Steps:');
console.log('   1. Review the output: src/lib/data/cities-new.json');
console.log('   2. Backup old file: cp src/lib/data/cities.json src/lib/data/cities-backup.json');
console.log('   3. Replace: mv src/lib/data/cities-new.json src/lib/data/cities.json');
console.log('   4. Test build: npm run build');

import XLSX from 'xlsx';
import fs from 'fs';

// Baca file Excel
const workbook = XLSX.readFile('c:\\Users\\Ryse\\Documents\\STIFIn\\stifin-indonesia.xlsx');

// Ambil sheet pertama
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert ke JSON
const data = XLSX.utils.sheet_to_json(worksheet);

console.log('=== ANALISIS FILE EXCEL ===\n');
console.log(`Total Sheets: ${workbook.SheetNames.length}`);
console.log(`Sheet Names: ${workbook.SheetNames.join(', ')}\n`);
console.log(`Total Rows: ${data.length}\n`);

// Tampilkan nama kolom
if (data.length > 0) {
  console.log('Kolom yang tersedia:');
  Object.keys(data[0]).forEach((key, index) => {
    console.log(`  ${index + 1}. ${key}`);
  });
  console.log('\n');
}

// Tampilkan 5 baris pertama
console.log('Sample Data (5 baris pertama):');
console.log(JSON.stringify(data.slice(0, 5), null, 2));
console.log('\n');

// Hitung jumlah unik per kolom (jika ada kolom provinsi, kota, kecamatan)
if (data.length > 0) {
  const keys = Object.keys(data[0]);

  console.log('Jumlah Data Unik:');
  keys.forEach(key => {
    const uniqueValues = [...new Set(data.map(row => row[key]))];
    console.log(`  ${key}: ${uniqueValues.length} unik`);
  });
  console.log('\n');
}

// Simpan sample ke JSON untuk preview
const sampleData = {
  metadata: {
    totalRows: data.length,
    columns: data.length > 0 ? Object.keys(data[0]) : [],
    sheets: workbook.SheetNames
  },
  sample: data.slice(0, 20)
};

fs.writeFileSync(
  'c:\\Users\\Ryse\\Documents\\GitHub\\astro-promotorstifingenetic.id\\excel-analysis.json',
  JSON.stringify(sampleData, null, 2)
);

console.log('✓ Analisis lengkap disimpan ke excel-analysis.json');

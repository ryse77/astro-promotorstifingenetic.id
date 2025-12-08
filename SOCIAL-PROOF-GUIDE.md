# 🎯 Panduan Social Proof Popup

## 📋 Daftar Isi
- [Cara Kerja](#cara-kerja)
- [Cara Edit Data](#cara-edit-data)
- [Cara Tambah Foto Avatar](#cara-tambah-foto-avatar)
- [Cara Customize Timing](#cara-customize-timing)
- [Cara Customize Design](#cara-customize-design)
- [Troubleshooting](#troubleshooting)

---

## 🚀 Cara Kerja

Social Proof Popup akan:
1. Muncul pertama kali setelah **8 detik** user landing di halaman
2. Menampilkan nama + kota secara random dari data yang Anda input
3. Tampil selama **6 detik**, lalu fade out otomatis
4. Muncul lagi setiap **45-75 detik** (random interval)
5. User bisa close manual dengan klik tombol X

---

## ✏️ Cara Edit Data

### File yang Perlu Diedit:
📁 **`src/lib/data/social-proof.ts`**

### Template Copy-Paste:

```typescript
// Buka file: src/lib/data/social-proof.ts
// Scroll ke array socialProofData
// Copy-paste block ini dan edit:

{
  name: "Nama Lengkap Anda",
  city: "Nama Kota",
  avatar: null, // Atau "/images/avatars/foto.jpg" jika ada foto
}
```

### Contoh Data Lengkap:

```typescript
export const socialProofData: SocialProofEntry[] = [
  // Data dengan foto custom
  {
    name: "Alvin Prasetyo",
    city: "Jakarta Selatan",
    avatar: "/images/avatars/alvin.jpg", // Foto custom
  },

  // Data tanpa foto (pakai initial)
  {
    name: "Budi Santoso",
    city: "Surabaya",
    avatar: null, // Akan generate avatar "B"
  },

  // Tambahkan data baru disini...
];
```

### Tips:
- ✅ Gunakan nama real untuk kredibilitas
- ✅ Variasikan kota dari seluruh Indonesia
- ✅ Minimal 20 data untuk variasi yang baik
- ✅ Gunakan `avatar: null` jika tidak ada foto (akan generate initial)

---

## 📸 Cara Tambah Foto Avatar

### Step 1: Siapkan Foto

**Requirement:**
- Size: 100x100px (recommended)
- Format: JPG, PNG, atau WebP
- File size: Max 50KB (kecil = loading cepat)
- Quality: 80-85% (balance antara quality & size)

**Optimize Foto Online (Free):**
- 🔗 https://tinypng.com - Compress PNG/JPG
- 🔗 https://squoosh.app - Google's image optimizer
- 🔗 https://compressjpeg.com - Batch compress

### Step 2: Upload Foto

Simpan foto ke folder:
```
public/images/avatars/nama-file.jpg
```

**Contoh:**
```
public/images/avatars/alvin.jpg
public/images/avatars/dewi.png
public/images/avatars/budi.jpg
```

### Step 3: Update Config

Edit file `src/lib/data/social-proof.ts`:

```typescript
{
  name: "Alvin Prasetyo",
  city: "Jakarta Selatan",
  avatar: "/images/avatars/alvin.jpg", // Path dari folder public
}
```

### Verify Upload:

Buka browser:
```
http://localhost:4321/images/avatars/alvin.jpg
```

Jika foto muncul = SUCCESS! ✅

---

## ⏱️ Cara Customize Timing

Edit file: **`src/components/SocialProofPopup.astro`**

### Ubah Delay Pertama Kali (Default: 8 detik)

```javascript
// Cari baris ini (sekitar line 97):
popupTimeout = setTimeout(showPopup, 8000);

// Ganti 8000 dengan nilai lain (dalam milliseconds):
popupTimeout = setTimeout(showPopup, 5000); // 5 detik
popupTimeout = setTimeout(showPopup, 10000); // 10 detik
```

### Ubah Durasi Tampil (Default: 6 detik)

```javascript
// Cari baris ini (sekitar line 72):
hideTimeout = setTimeout(() => {
  hidePopup();
}, 6000);

// Ganti 6000:
}, 4000); // Tampil 4 detik
}, 8000); // Tampil 8 detik
```

### Ubah Interval Muncul (Default: 45-75 detik)

```javascript
// Cari baris ini (sekitar line 76):
const nextDelay = 45000 + Math.random() * 30000;

// Formula: min + (random * range)
// Contoh untuk 30-60 detik:
const nextDelay = 30000 + Math.random() * 30000;

// Contoh untuk 60-90 detik:
const nextDelay = 60000 + Math.random() * 30000;
```

---

## 🎨 Cara Customize Design

Edit file: **`src/components/SocialProofPopup.astro`**

### Ubah Posisi Popup

```html
<!-- Cari baris ini (sekitar line 8): -->
<div
  id="social-proof-popup"
  class="hidden fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 max-w-sm"
>

<!-- Ubah posisi: -->
<!-- Bottom-right: -->
class="hidden fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 max-w-sm"

<!-- Top-left: -->
class="hidden fixed top-4 left-4 md:top-6 md:left-6 z-50 max-w-sm"

<!-- Top-right: -->
class="hidden fixed top-4 right-4 md:top-6 md:right-6 z-50 max-w-sm"
```

### Ubah Warna Border

```html
<!-- Cari class border-green-600 (sekitar line 12): -->
class="bg-white rounded-xl shadow-2xl p-4 border-l-4 border-green-600 animate-slide-up"

<!-- Ganti warna: -->
border-blue-600    <!-- Biru -->
border-red-600     <!-- Merah -->
border-purple-600  <!-- Ungu -->
border-yellow-600  <!-- Kuning -->
```

### Ubah Warna Avatar

```html
<!-- Cari class avatar gradient (sekitar line 19): -->
class="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-full..."

<!-- Ganti gradient: -->
from-blue-600 to-purple-600    <!-- Biru-ungu -->
from-orange-600 to-red-600     <!-- Orange-merah -->
from-pink-600 to-purple-600    <!-- Pink-ungu -->
```

---

## 🔧 Troubleshooting

### Problem: Popup tidak muncul

**Solusi:**
1. Cek browser console (F12) untuk error
2. Pastikan JavaScript enabled
3. Clear browser cache (Ctrl + Shift + R)
4. Cek apakah data di `social-proof.ts` valid

### Problem: Foto tidak muncul

**Solusi:**
1. Cek path foto benar: `/images/avatars/nama.jpg`
2. Pastikan file ada di folder `public/images/avatars/`
3. Cek nama file tidak ada typo
4. Test direct access: `http://localhost:4321/images/avatars/nama.jpg`

### Problem: Popup muncul terlalu sering

**Solusi:**
```javascript
// Perbesar interval di SocialProofPopup.astro:
const nextDelay = 60000 + Math.random() * 60000; // 60-120 detik
```

### Problem: Data tidak terupdate

**Solusi:**
1. Restart dev server: `Ctrl + C` lalu `npm run dev`
2. Hard refresh browser: `Ctrl + Shift + R`
3. Clear Astro cache: `rm -rf .astro` (atau delete folder `.astro`)

---

## 📊 Best Practices

### Data Pool:
- ✅ Minimal **20 entries** untuk variasi yang baik
- ✅ Gunakan nama yang believable (tidak generic)
- ✅ Variasikan kota dari berbagai provinsi
- ✅ Update data secara berkala (tambah data real jika ada)

### Timing:
- ✅ First show: **8-10 detik** (jangan terlalu cepat)
- ✅ Duration: **5-7 detik** (cukup untuk dibaca)
- ✅ Interval: **45-75 detik** (tidak mengganggu)

### Design:
- ✅ Jangan terlalu besar (max-w-sm)
- ✅ Posisi bottom-left/bottom-right (tidak blocking content)
- ✅ Warna konsisten dengan brand (green-teal-cyan)

### Performance:
- ✅ Optimize foto avatar (max 50KB)
- ✅ Lazy load images
- ✅ Minimal 20 data entries untuk variasi

---

## 🎯 Quick Start Checklist

- [ ] Edit data di `src/lib/data/social-proof.ts`
- [ ] Tambah minimal 20 entries dengan nama & kota
- [ ] (Optional) Upload foto avatar ke `public/images/avatars/`
- [ ] Test di browser: refresh dan tunggu 8 detik
- [ ] Verify popup muncul dengan data yang benar
- [ ] Test close button berfungsi
- [ ] Test di mobile (responsive)

---

## 📞 Need Help?

Jika ada pertanyaan atau butuh customization lebih lanjut, contact developer! 🚀

# Avatar Images for Social Proof Popup

## 📁 Folder ini untuk menyimpan foto avatar pengguna

### Format File:
- **Size**: 100x100px (recommended untuk performance)
- **Format**: JPG, PNG, atau WebP
- **Naming**: gunakan nama yang mudah diingat (contoh: `alvin.jpg`, `dewi.png`)
- **File size**: Max 50KB per foto (optimize untuk loading cepat)

### Cara Menambahkan Avatar Baru:

1. **Simpan foto di folder ini**
   ```
   public/images/avatars/nama-file.jpg
   ```

2. **Update data di `src/lib/data/social-proof.ts`**
   ```typescript
   {
     name: "Nama Lengkap",
     city: "Nama Kota",
     avatar: "/images/avatars/nama-file.jpg", // Path dari public
   }
   ```

3. **Jika tidak ada foto, set avatar: null**
   ```typescript
   {
     name: "Nama Lengkap",
     city: "Nama Kota",
     avatar: null, // Akan generate initial otomatis
   }
   ```

### Tips Optimize Foto:

**Online Tools (Free):**
- TinyPNG.com - Compress PNG/JPG
- Squoosh.app - Google's image optimizer
- CompressJPEG.com - Batch compress

**Recommended Settings:**
- Resolution: 100x100px
- Quality: 80-85%
- Format: JPG untuk foto, PNG untuk logo
- File size target: < 30KB

### Contoh Struktur File:
```
public/
└── images/
    └── avatars/
        ├── alvin.jpg (28KB)
        ├── dewi.png (22KB)
        ├── budi.jpg (31KB)
        └── README.md (this file)
```

### Preview Avatar:
Untuk melihat avatar yang sudah di-upload, buka browser:
```
http://localhost:4321/images/avatars/nama-file.jpg
```

---

**Note:** Folder ini harus ada minimal 1 file (README.md ini) agar ter-commit ke git.
Jika tidak ada foto custom, sistem akan generate avatar dengan initial nama otomatis.

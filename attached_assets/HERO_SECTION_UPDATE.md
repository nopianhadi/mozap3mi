# Update Hero Section - PT. Moza Group Indonesia

## Perubahan yang Dilakukan

### 1. Layout Hero Section
- **Sebelumnya**: Gambar sebagai background dengan overlay gelap
- **Sekarang**: Layout 2 kolom (grid) dengan gambar di sebelah kanan

### 2. Struktur Baru
```
┌─────────────────────────────────────────┐
│  [Konten Kiri]    │   [Gambar Kanan]   │
│  - Badge          │                     │
│  - Judul          │   Gambar Vertikal   │
│  - Tagline        │   Professional      │
│  - Deskripsi      │   Workers           │
│  - Tombol CTA     │                     │
│  - Statistik      │                     │
└─────────────────────────────────────────┘
```

### 3. Perubahan Visual
- Background: Gradient lembut (slate-50 → blue-50 → indigo-50)
- Gambar: Posisi di kanan dengan rounded corners & shadow
- Teks: Warna disesuaikan untuk kontras lebih baik
- Statistik: Card putih dengan shadow untuk readability
- Decorative elements: Blur circles untuk efek modern

### 4. Responsive Design
- Desktop (lg+): Tampil 2 kolom dengan gambar
- Mobile/Tablet: Gambar disembunyikan, konten full width

### 5. File Gambar
**Lokasi**: `attached_assets/generated_images/Hero_professional_workers_side.svg`

**Placeholder Sementara**: 
- SVG ilustrasi sederhana dengan tema professional workers
- Warna: Biru (#3b82f6, #1e40af) sesuai brand
- Ukuran: 800x1000px (portrait)

**Untuk Gambar Final**:
Silakan generate gambar PNG dengan spesifikasi:
- **Prompt**: "Professional Indonesian workers in business attire, confident pose, modern office building background, diverse group of people, success and achievement theme, bright optimistic atmosphere, high quality professional photography, vertical composition"
- **Ukuran**: Minimal 1200x1600px
- **Format**: PNG atau JPG
- **Nama file**: `Hero_professional_workers_side.png`

### 6. Cara Mengganti Gambar
1. Generate gambar menggunakan AI (DALL-E, Midjourney, dll) atau gunakan stock photo
2. Simpan dengan nama: `Hero_professional_workers_side.png`
3. Letakkan di: `attached_assets/generated_images/`
4. Update import di `client/src/pages/home.tsx`:
   ```typescript
   import heroSideImage from "@assets/generated_images/Hero_professional_workers_side.png";
   ```

## Keuntungan Layout Baru
✅ Lebih modern dan clean
✅ Konten lebih mudah dibaca (tidak ada overlay gelap)
✅ Gambar lebih menonjol sebagai visual element
✅ Better contrast dan accessibility
✅ Lebih fleksibel untuk variasi konten

## File yang Dimodifikasi
- `client/src/pages/home.tsx` - Hero section layout
- `attached_assets/generated_images/Hero_professional_workers_side.svg` - Gambar placeholder

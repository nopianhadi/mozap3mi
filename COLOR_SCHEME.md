# Skema Warna PT. Moza Group Indonesia

## 🎨 Palet Warna Utama

### Warna Brand Primer

#### Merah Indonesia (Brand Red)
- **Primary**: `hsl(0, 84%, 48%)` - #DC2626
- **Light**: `hsl(0, 84%, 95%)` - Background merah muda
- **Dark**: `hsl(0, 84%, 38%)` - Hover state
- **Penggunaan**: Tombol CTA utama, header, aksen penting, logo

#### Biru Kepercayaan (Brand Blue)
- **Primary**: `hsl(210, 100%, 50%)` - #0080FF
- **Light**: `hsl(210, 100%, 96%)` - Background biru muda
- **Dark**: `hsl(210, 100%, 40%)` - Hover state
- **Penggunaan**: Link, informasi, section alternatif, trust badges

#### Emas Kesuksesan (Brand Gold)
- **Primary**: `hsl(45, 93%, 47%)` - #E5A800
- **Light**: `hsl(45, 93%, 95%)` - Background emas muda
- **Dark**: `hsl(38, 92%, 35%)` - Text gold
- **Penggunaan**: Highlight, achievement, premium features, badges

#### Hijau Pertumbuhan (Brand Green)
- **Primary**: `hsl(142, 76%, 36%)` - #16A34A
- **Light**: `hsl(142, 76%, 95%)` - Background hijau muda
- **Dark**: `hsl(142, 76%, 28%)` - Hover state
- **Penggunaan**: Success messages, growth indicators, positive stats

#### Navy Profesional (Brand Navy)
- **Primary**: `hsl(220, 40%, 20%)` - #1E293B
- **Light**: `hsl(220, 40%, 96%)` - Background navy muda
- **Penggunaan**: Footer, text headers, professional sections

---

## 🌍 Warna Negara Tujuan

### Jepang (Japan Red)
- **Color**: `hsl(0, 100%, 50%)` - #FF0000
- **Penggunaan**: Card Jepang, icon bendera

### Hong Kong (Hong Kong Red)
- **Color**: `hsl(0, 84%, 48%)` - #DC2626
- **Penggunaan**: Card Hong Kong

### Taiwan (Taiwan Blue)
- **Color**: `hsl(210, 100%, 50%)` - #0080FF
- **Penggunaan**: Card Taiwan

### Australia (Australia Gold)
- **Color**: `hsl(45, 93%, 47%)` - #E5A800
- **Penggunaan**: Card Australia

### Eropa (Europe Blue)
- **Color**: `hsl(210, 50%, 45%)` - #3B82F6
- **Penggunaan**: Card Eropa

### Kuwait (Kuwait Green)
- **Color**: `hsl(142, 76%, 36%)` - #16A34A
- **Penggunaan**: Card Kuwait

---

## 📊 Warna Semantik

### Success (Sukses)
- **Primary**: `hsl(142, 76%, 36%)` - #16A34A
- **Light**: `hsl(142, 76%, 95%)` - Background
- **Penggunaan**: Pesan sukses, konfirmasi, status berhasil

### Warning (Peringatan)
- **Primary**: `hsl(38, 92%, 50%)` - #F59E0B
- **Light**: `hsl(45, 93%, 95%)` - Background
- **Penggunaan**: Peringatan, informasi penting

### Error (Kesalahan)
- **Primary**: `hsl(0, 72%, 50%)` - #DC2626
- **Light**: `hsl(0, 72%, 95%)` - Background
- **Penggunaan**: Error messages, validasi gagal

### Info (Informasi)
- **Primary**: `hsl(210, 100%, 50%)` - #0080FF
- **Light**: `hsl(210, 100%, 96%)` - Background
- **Penggunaan**: Informasi umum, tips, panduan

---

## 🎭 Warna Sistem

### Background & Foreground
- **Background**: `hsl(0, 0%, 99%)` - #FCFCFC (hampir putih)
- **Foreground**: `hsl(220, 15%, 15%)` - #1F2937 (text utama)

### Card & Borders
- **Card**: `hsl(0, 0%, 100%)` - #FFFFFF (putih murni)
- **Card Border**: `hsl(220, 13%, 91%)` - Border halus
- **Border**: `hsl(220, 13%, 88%)` - Border umum

### Muted (Redup)
- **Background**: `hsl(220, 13%, 95%)` - Background redup
- **Foreground**: `hsl(220, 10%, 45%)` - Text redup

---

## 🎨 Cara Penggunaan

### Tailwind Classes

#### Background Colors
```jsx
<div className="bg-brand-red">Merah Indonesia</div>
<div className="bg-brand-blue">Biru Kepercayaan</div>
<div className="bg-brand-gold">Emas Kesuksesan</div>
<div className="bg-brand-green">Hijau Pertumbuhan</div>
<div className="bg-brand-navy">Navy Profesional</div>
```

#### Text Colors
```jsx
<h1 className="text-brand-red">Judul Merah</h1>
<p className="text-brand-blue">Teks Biru</p>
<span className="text-brand-gold">Highlight Emas</span>
```

#### Border Colors
```jsx
<div className="border-2 border-brand-red">Border Merah</div>
<div className="border border-brand-blue">Border Biru</div>
```

#### Hover Effects
```jsx
<button className="bg-white hover-brand-red">Hover Merah</button>
<button className="bg-white hover-brand-blue">Hover Biru</button>
```

#### Gradients
```jsx
<div className="bg-gradient-red-gold">Gradient Merah ke Emas</div>
<div className="bg-gradient-blue-red">Gradient Biru ke Merah</div>
<div className="bg-gradient-indonesia">Gradient Bendera Indonesia</div>
```

#### Shadows
```jsx
<div className="shadow-brand-red">Shadow Merah</div>
<div className="shadow-brand-blue">Shadow Biru</div>
```

#### Country Cards
```jsx
<div className="bg-country-japan">Jepang</div>
<div className="bg-country-taiwan">Taiwan</div>
<div className="bg-country-australia">Australia</div>
```

---

## 🌓 Dark Mode

Website ini juga mendukung dark mode dengan palet warna yang disesuaikan:

### Dark Mode Colors
- **Background**: `hsl(220, 20%, 10%)` - Dark professional
- **Foreground**: `hsl(220, 10%, 95%)` - Light text
- **Primary Red**: `hsl(0, 84%, 55%)` - Lebih terang untuk dark mode
- **Card**: `hsl(220, 18%, 13%)` - Elevated dark

---

## 📐 Panduan Desain

### Kombinasi Warna yang Direkomendasikan

#### Hero Section
- Background: Gradient `bg-gradient-red-gold` atau image dengan overlay
- Text: `text-white`
- CTA Button: `bg-brand-red hover:bg-brand-red-dark`

#### About Section
- Background: `bg-brand-blue-light` atau `bg-white`
- Heading: `text-brand-navy`
- Accent: `text-brand-red`

#### Services Section (Country Cards)
- Card Background: `bg-white` dengan `shadow-lg`
- Country Color: Gunakan `bg-country-*` untuk accent
- Hover: `hover:shadow-brand-blue`

#### Advantages Section
- Background: `bg-brand-navy-light`
- Icons: `text-brand-gold`
- Heading: `text-brand-navy`

#### Contact Section
- Form Background: `bg-white`
- Button: `bg-brand-red hover:bg-brand-red-dark`
- Info Card: `bg-brand-blue-light`

#### Footer
- Background: `bg-brand-navy`
- Text: `text-white`
- Links: `text-brand-gold hover:text-brand-gold-dark`

---

## ✨ Tips Penggunaan

1. **Kontras**: Selalu pastikan kontras yang cukup antara text dan background (minimal 4.5:1)
2. **Hierarki**: Gunakan merah untuk elemen paling penting, biru untuk sekunder
3. **Konsistensi**: Gunakan warna yang sama untuk elemen yang sama di seluruh website
4. **Accessibility**: Test dengan color blindness simulator
5. **Balance**: Jangan terlalu banyak menggunakan warna terang, beri ruang bernafas dengan putih/abu-abu

---

## 🔧 CSS Variables

Semua warna tersedia sebagai CSS variables:

```css
/* Brand Colors */
var(--brand-red)
var(--brand-blue)
var(--brand-gold)
var(--brand-green)
var(--brand-navy)

/* Country Colors */
var(--country-japan)
var(--country-taiwan)
var(--country-australia)

/* Semantic Colors */
var(--success)
var(--warning)
var(--error)
var(--info)
```

---

## 📱 Responsive Considerations

- Pada mobile, gunakan warna yang lebih solid (hindari gradient kompleks)
- Pastikan touch target minimal 44x44px dengan warna yang jelas
- Gunakan shadow yang lebih subtle pada mobile untuk performa

---

**Dibuat untuk PT. Moza Group Indonesia**
*Dari Moza ke dunia kerja global, profesional berkarya Indonesia mendunia*

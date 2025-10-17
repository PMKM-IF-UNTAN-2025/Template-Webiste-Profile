# PMKM Web Profile Desa

Website profil desa yang dibangun menggunakan Next.js dengan tampilan yang menyerupai project acuan CodeIgniter. Website ini menampilkan informasi lengkap tentang desa, termasuk berita, pariwisata, UMKM, dan layanan desa.

## 🚀 Fitur Utama

### Halaman Utama
- **Hero Carousel**: Menampilkan slide promosi desa
- **Link Section**: Menu cepat akses ke berbagai layanan
- **Staff Carousel**: Profil perangkat desa dan kepala dusun
- **Video Section**: Video profil desa
- **Destinasi Pariwisata**: Menampilkan 3 destinasi terbaru
- **Produk UMKM**: Menampilkan 3 produk UMKM terbaru
- **Peta Lokasi**: Peta interaktif dengan informasi batas wilayah

### Halaman Profil
- **Tentang Desa**: Sejarah dan informasi umum desa
- **Visi & Misi**: Visi dan misi pembangunan desa
- **SOTK**: Struktur Organisasi Tata Kelola
- **Data Penduduk**: Statistik penduduk berdasarkan usia, pendidikan, dan pekerjaan
- **Data Kewilayahan**: Informasi geografis dan administrasi wilayah

### Halaman Informasi
- **Berita**: Daftar berita desa dengan sistem kategori
- **Pengumuman**: Pengumuman resmi dari pemerintah desa
- **Layanan**: Informasi layanan administrasi desa
- **Sarana & Prasarana**: Daftar fasilitas umum desa
- **Dokumen Publik**: Dokumen resmi yang dapat diunduh

### Halaman Pariwisata & UMKM
- **Pariwisata**: Destinasi wisata dengan detail lengkap
- **UMKM**: Produk usaha mikro, kecil, dan menengah
- **Detail Halaman**: Halaman detail untuk setiap item

### Halaman Kontak
- **Informasi Kontak**: Alamat, telepon, email, jam pelayanan
- **Form Kontak**: Form untuk mengirim pesan
- **Media Sosial**: Link ke akun media sosial desa

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 14
- **Styling**: Bootstrap 5 + Custom CSS
- **Icons**: Bootstrap Icons
- **Animations**: AOS (Animate On Scroll)
- **Data**: JSON files untuk data statis
- **Deployment**: Vercel (recommended)

## 📁 Struktur Project

```
PMKM-Web-Profile-Desa/
├── app/                          # Next.js App Router
│   ├── berita/                   # Halaman berita
│   ├── pariwisata/               # Halaman pariwisata
│   ├── umkm/                     # Halaman UMKM
│   ├── profil/                   # Halaman profil desa
│   ├── data-penduduk/            # Data penduduk
│   ├── data-kewilayahan/         # Data kewilayahan
│   ├── sotk/                     # Struktur organisasi
│   ├── pengumuman/               # Pengumuman
│   ├── layanan/                  # Layanan desa
│   ├── sarana-prasarana/         # Sarana prasarana
│   ├── dokumen/                  # Dokumen publik
│   ├── kontak/                   # Kontak
│   ├── layout.jsx                # Layout utama
│   ├── page.jsx                  # Halaman beranda
│   └── globals.css               # CSS global
├── components/                   # Komponen React
│   ├── Navbar.jsx                # Navigasi utama
│   ├── Footer.jsx                # Footer
│   ├── HeroCarousel.jsx          # Carousel hero
│   ├── VideoSection.jsx          # Section video
│   ├── CardList.jsx              # List card
│   ├── MapSection.jsx            # Section peta
│   ├── LinkSection.jsx           # Section link cepat
│   ├── StaffCarousel.jsx         # Carousel staff
│   └── ScrollTop.jsx             # Tombol scroll to top
├── data/                         # Data JSON
│   ├── site.json                 # Data situs
│   ├── hero.json                 # Data hero carousel
│   ├── berita.json               # Data berita
│   ├── wisata.json               # Data pariwisata
│   └── umkm.json                 # Data UMKM
├── public/                       # File statis
│   ├── assets/                   # CSS dan JS
│   ├── img/                      # Gambar
│   └── placeholder-*.jpg         # Placeholder images
└── package.json                  # Dependencies
```

## 🎨 Design System

### Warna Utama
- **Primary**: #4f46e5 (Indigo)
- **Secondary**: #6b7280 (Gray)
- **Success**: #10b981 (Emerald)
- **Danger**: #ef4444 (Red)
- **Warning**: #f59e0b (Amber)
- **Info**: #3b82f6 (Blue)

### Komponen
- **Cards**: Rounded corners dengan shadow
- **Buttons**: Primary, secondary, outline variants
- **Typography**: Inter font family
- **Spacing**: Consistent spacing menggunakan Bootstrap grid

## 🚀 Instalasi & Menjalankan

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd PMKM-Web-Profile-Desa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser**
   ```
   http://localhost:3000
   ```

## 📝 Customization

### Mengubah Data
Edit file JSON di folder `data/`:
- `site.json`: Informasi situs dan kontak
- `hero.json`: Data carousel hero
- `berita.json`: Data berita
- `wisata.json`: Data pariwisata
- `umkm.json`: Data UMKM

### Mengubah Styling
- Edit `app/globals.css` untuk styling global
- Edit `public/assets/css/style.css` untuk custom CSS
- Gunakan Bootstrap classes untuk styling cepat

### Menambah Halaman
1. Buat folder baru di `app/`
2. Buat file `page.jsx` di dalam folder
3. Tambahkan route di `components/Navbar.jsx`

## 🌐 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Connect repository ke Vercel
3. Deploy otomatis

### Manual Build
```bash
npm run build
npm start
```

## 📱 Responsive Design

Website ini fully responsive dan mendukung:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Fitur Teknis

- **SEO Optimized**: Meta tags dan structured data
- **Performance**: Lazy loading images dan code splitting
- **Accessibility**: ARIA labels dan keyboard navigation
- **Dark Mode**: Toggle dark/light theme
- **PWA Ready**: Dapat diinstall sebagai app

## 📞 Support

Untuk pertanyaan atau dukungan, silakan hubungi:
- **Email**: desacapkala@gmail.com
- **WhatsApp**: +62 812-3662-6752

## 📄 License

Project ini dibuat untuk keperluan PMKM (Program Mahasiswa Kreatif Mahasiswa) dan dapat digunakan secara bebas untuk keperluan non-komersial.

---

**Dibuat dengan ❤️ oleh Tim PMKM**
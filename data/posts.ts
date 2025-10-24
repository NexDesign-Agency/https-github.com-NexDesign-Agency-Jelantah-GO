import { BlogPost } from '../types';

const placeholderContent = `
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8">
        <div class="flex">
            <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="ml-3">
                <p class="text-sm text-yellow-700">
                    Konten untuk artikel ini sedang kami siapkan. Terima kasih atas kesabaran Anda. Cek kembali nanti untuk wawasan lengkapnya!
                </p>
            </div>
        </div>
    </div>
`;

// FIX: Renamed 'newPosts' to 'posts' and exported it to be used in other files.
export const posts: BlogPost[] = [
  // Pilar: Bisnis Pengepul
  {
    id: 'bisnis-pengepul-jelantah-2025',
    title: 'Bisnis Pengepul Jelantah 2025: Modal, Untung & Pemasaran',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Ingin jadi wirausaha hijau? Blueprint bisnis ini membedah tuntas rincian modal, simulasi keuntungan, dan strategi pemasaran untuk membangun bisnis pengepul jelantah dari nol.',
    imageUrl: 'https://picsum.photos/seed/bisnis-pilar/800/600',
    content: placeholderContent,
  },
  {
    id: 'panduan-memulai-bisnis-pengepul',
    title: 'Panduan Memulai Bisnis Pengepul',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/bisnis1/800/600',
    content: placeholderContent,
  },
  {
    id: 'cara-negosiasi-harga-dengan-pengepul',
    title: 'Cara Negosiasi Harga dengan Pengepul',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/bisnis2/800/600',
    content: placeholderContent,
  },
  {
    id: 'kisah-sukses-ibu-rina-mitra-pengepul',
    title: 'Kisah Sukses Ibu Rina, Mitra Pengepul',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/bisnis3/800/600',
    content: placeholderContent,
  },
  {
    id: 'checklist-peralatan-pengepul-jelantah-pemula',
    title: 'Checklist Peralatan Pengepul Jelantah Pemula',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/bisnis4/800/600',
    content: placeholderContent,
  },
  {
    id: '5-skrip-template-penawaran-kerjasama-jelantah',
    title: '5 Skrip & Template Penawaran Kerjasama Jelantah',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/bisnis5/800/600',
    content: placeholderContent,
  },
  {
    id: 'kisah-sukses-pak-doni-omzet-20-juta',
    title: 'Kisah Sukses Pak Doni, Omzet 20 Juta/Bulan',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/bisnis6/800/600',
    content: placeholderContent,
  },
  {
    id: 'manajemen-logistik-pengepul-jelantah',
    title: 'Manajemen Logistik Pengepul Jelantah',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/bisnis7/800/600',
    content: placeholderContent,
  },
  {
    id: 'mitra-jelantahgo-vs-mandiri',
    title: 'Mitra JelantahGO vs Mandiri: Analisis Untung-Rugi',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/bisnis8/800/600',
    content: placeholderContent,
  },

  // Pilar: Lokal Jakarta
  {
    id: 'jual-minyak-jelantah-jakarta-2025',
    title: 'Jual Minyak Jelantah Jakarta: Panduan Lengkap & Harga Terbaru 2025',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Panduan lokal paling komprehensif untuk warga dan bisnis yang ingin menjual minyak jelantah di semua wilayah DKI Jakarta.',
    imageUrl: 'https://picsum.photos/seed/lokal-jkt-pilar/800/600',
    content: placeholderContent,
  },
  {
    id: 'pengepul-jelantah-jakarta-selatan',
    title: 'Pengepul Jelantah Jakarta Selatan: Solusi Cepat Kafe & Resto',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/lokal-jkt1/800/600',
    content: placeholderContent,
  },
  {
    id: 'harga-jual-minyak-jelantah-terbaik-di-jakarta-utara',
    title: 'Harga Jual Minyak Jelantah Terbaik di Jakarta Utara',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/lokal-jkt2/800/600',
    content: placeholderContent,
  },
   {
    id: 'jemput-jelantah-gratis-jakarta-barat',
    title: 'Jemput Jelantah Gratis Jakarta Barat',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/lokal-jkt3/800/600',
    content: placeholderContent,
  },
  {
    id: 'jual-minyak-jelantah-jakarta-timur',
    title: 'Jual Minyak Jelantah Jakarta Timur',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/lokal-jkt4/800/600',
    content: placeholderContent,
  },
   {
    id: 'manajemen-limbah-jelantah-jakarta-pusat',
    title: 'Manajemen Limbah Jelantah Jakarta Pusat',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/lokal-jkt5/800/600',
    content: placeholderContent,
  },

  // Pilar: Lokal Lainnya
  {
    id: 'jual-minyak-jelantah-tangerang-tangsel-2025',
    title: 'Jual Minyak Jelantah Tangerang & Tangsel: Panduan Lengkap 2025',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Panduan spesifik untuk warga dan bisnis di Tangerang Raya (Kota, Tangsel, Kabupaten).',
    imageUrl: 'https://picsum.photos/seed/lokal-tng-pilar/800/600',
    content: placeholderContent,
  },
  {
    id: 'jual-minyak-jelantah-bekasi-2025',
    title: 'Jual Minyak Jelantah Bekasi: Panduan untuk Warga & Industri 2025',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Panduan lengkap untuk warga dan pelaku industri di seluruh wilayah Bekasi (Kota dan Kabupaten).',
    imageUrl: 'https://picsum.photos/seed/lokal-bks-pilar/800/600',
    content: placeholderContent,
  },
  {
    id: 'jual-minyak-jelantah-depok-bogor-2025',
    title: 'Jual Minyak Jelantah Depok & Bogor: Panduan Kuliner & Warga 2025',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Panduan untuk warga dan bisnis kuliner di Depok dan Bogor.',
    imageUrl: 'https://picsum.photos/seed/lokal-dbg-pilar/800/600',
    content: placeholderContent,
  },

  // Pilar: Panduan Jual Jelantah
  {
    id: 'panduan-terlengkap-jual-minyak-jelantah-2025',
    title: 'Panduan Terlengkap Jual Minyak Jelantah 2025',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Titik awal terbaik Anda. Pelajari semua yang perlu Anda ketahui tentang menjual jelantah dalam satu panduan super lengkap.',
    imageUrl: 'https://picsum.photos/seed/panduan-pilar/800/600',
    content: placeholderContent,
  },
  {
    id: 'cara-menyimpan-minyak-jelantah',
    title: 'Cara Menyimpan Minyak Jelantah: 5 Tips Anti Bau & Tumpah',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/panduan1/800/600',
    content: placeholderContent,
  },
  {
    id: 'cara-jual-minyak-jelantah-paling-menguntungkan',
    title: 'Cara Jual Minyak Jelantah yang Paling Menguntungkan',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/panduan2/800/600',
    content: placeholderContent,
  },
  {
    id: '10-cara-mengumpulkan-100-liter-jelantah',
    title: '10 Cara Mengumpulkan 100 Liter Jelantah per Bulan',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/panduan3/800/600',
    content: placeholderContent,
  },
  {
    id: 'kapan-waktu-terbaik-menjual-jelantah',
    title: 'Kapan Waktu Terbaik untuk Menjual Jelantah?',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/panduan4/800/600',
    content: placeholderContent,
  },
  {
    id: 'update-harga-minyak-jelantah-november-2025',
    title: 'Update Harga Minyak Jelantah November 2025',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/panduan5/800/600',
    content: placeholderContent,
  },
  {
    id: '7-kesalahan-fatal-penjual-jelantah-pemula',
    title: '7 Kesalahan Fatal Penjual Jelantah Pemula',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/panduan6/800/600',
    content: placeholderContent,
  },
  {
    id: 'waspada-5-ciri-pengepul-jelantah-nakal',
    title: 'Waspada! 5 Ciri Pengepul Jelantah Nakal',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/panduan7/800/600',
    content: placeholderContent,
  },

  // Pilar: Ancaman vs Peluang
  {
    id: 'jelantah-ancaman-vs-peluang',
    title: 'Jelantah: Ancaman Lingkungan vs. Peluang Ekonomi',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Selami dua sisi mata uang minyak jelantah. Pahami dampak destruktifnya dan bagaimana ia bertransformasi menjadi ‘emas cair’ dalam ekonomi sirkular.',
    // FIX: Fixed the broken imageUrl and added the missing 'content' property.
    imageUrl: 'https://picsum.photos/seed/ancaman-pilar/800/600',
    content: placeholderContent,
  },
  {
    id: 'bahaya-buang-jelantah-sembarangan',
    title: 'Bahaya Buang Jelantah Sembarangan',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/ancaman1/800/600',
    content: placeholderContent,
  },
  {
    id: 'dampak-jelantah-pada-ekosistem-air',
    title: 'Dampak Jelantah pada Ekosistem Air',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/ancaman2/800/600',
    content: placeholderContent,
  },
  {
    id: 'mengenal-biodiesel-dari-jelantah',
    title: 'Mengenal Biodiesel dari Jelantah',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/ancaman3/800/600',
    content: placeholderContent,
  },
  {
    id: 'program-b30-dan-peran-jelantah',
    title: 'Program B30 dan Peran Jelantah',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/ancaman4/800/600',
    content: placeholderContent,
  },
  {
    id: 'proses-ilmiah-jelantah-menjadi-biodiesel',
    title: 'Proses Ilmiah Jelantah Menjadi Biodiesel',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/ancaman5/800/600',
    content: placeholderContent,
  },
  {
    id: 'fatberg-monster-bawah-tanah',
    title: 'Fatberg: Monster Bawah Tanah dari Jelantah',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/ancaman6/800/600',
    content: placeholderContent,
  },
  {
    id: '5-bahaya-minyak-jelantah-bagi-kesehatan',
    title: '5 Bahaya Minyak Jelantah bagi Kesehatan',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/ancaman7/800/600',
    content: placeholderContent,
  },
  {
    id: 'diy-sabun-lilin-dari-minyak-jelantah',
    title: 'DIY: Membuat Sabun & Lilin dari Minyak Jelantah',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/ancaman8/800/600',
    content: placeholderContent,
  },
  {
    id: 'regulasi-limbah-b3-untuk-bisnis-kuliner',
    title: 'Regulasi Limbah B3 untuk Bisnis Kuliner',
    date: '25 Juli 2024', author: 'Tim JelantahGO',
    summary: 'Konten sedang dalam persiapan.',
    imageUrl: 'https://picsum.photos/seed/ancaman9/800/600',
    content: placeholderContent,
  },
];

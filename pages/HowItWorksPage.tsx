import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StepDetailCard: React.FC<{
  step: string;
  title: string;
  children: React.ReactNode;
}> = ({ step, title, children }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-12">
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-[#033C35] text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold flex-shrink-0">
          {step}
        </div>
        <h3 className="text-3xl font-bold text-[#033C35] ml-6">{title}</h3>
      </div>
      <div className="prose prose-lg text-gray-700">
        {children}
      </div>
    </div>
  </div>
);

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#033C35]"
    >
      <span>{question}</span>
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
    {isOpen && (
      <div className="mt-4 text-gray-600">
        <p>{answer}</p>
      </div>
    )}
  </div>
);


const HowItWorksPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const faqs = [
        { q: "Apakah benar penjemputan 100% gratis?", a: "Ya, untuk volume minimal 40 liter, kami jemput gratis tanpa biaya apapun di seluruh area Jabodetabek." },
        { q: "Berapa lama proses penjemputan di lokasi?", a: "Untuk volume 40-100 liter sekitar 15-30 menit. Proses sangat cepat dan efisien." },
        { q: "Apakah saya harus di rumah saat dijemput?", a: "Ya, Anda atau perwakilan harus ada untuk menyaksikan penimbangan dan menerima pembayaran tunai." },
        { q: "Bagaimana jika volume saya kurang dari 40 liter?", a: "Anda bisa terus mengumpulkan, gabung dengan tetangga, atau antar langsung ke drop point kami." },
        { q: "Apakah wadah saya ikut diambil?", a: "Tidak, wadah tetap milik Anda. Tim kami hanya memindahkan minyaknya saja ke drum kami." },
        { q: "Bagaimana cara mengetahui harga terkini?", a: "Hubungi customer service kami untuk info harga terbaru, karena harga bisa berubah mengikuti pasar internasional." },
        { q: "Apakah bisa penjemputan same day?", a: "Bisa, terutama untuk volume 200+ liter dan area dekat kantor kami. Konfirmasikan ke CS untuk ketersediaan." },
        { q: "Apakah ada batas maksimal volume penjemputan?", a: "Tidak ada batas. Kami melayani dari 40 liter hingga ribuan liter untuk pelanggan korporat." }
    ];

  return (
    <div className="bg-[#F9F8F4]">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="font-semibold tracking-widest text-[#033C35]">PANDUAN LENGKAP JUAL JELANTAH</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#033C35] my-4 max-w-4xl mx-auto">
            Bagaimana Cara Jual Minyak Jelantah ke JelantahGO?
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proses sederhana 4 langkah! Anda tidak perlu repot, kami yang akan datang. Prosesnya hanya 15-30 menit dan Anda langsung terima pembayaran tunai.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-center text-4xl font-bold text-[#033C35] mb-12">🔄 4 Langkah Mudah Jual Minyak Jelantah</h2>
          
          <StepDetailCard step="01" title="Kumpulkan Minyak Jelantah Anda">
            <h4 className="font-bold">A. Siapkan Wadah yang Tepat</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Gunakan wadah tertutup seperti jerigen, galon bekas, atau drum plastik.</li>
              <li>Pastikan wadah bersih dan tidak bocor. Hindari wadah kaca.</li>
            </ul>

            <h4 className="font-bold">B. Volume Minimum untuk Penjemputan Gratis</h4>
            <p>Minimal <strong>40 liter</strong> untuk layanan jemput gratis. Jika kurang, Anda bisa terus mengumpulkan, gabung dengan tetangga, atau antar ke drop point kami.</p>
            
            <h4 className="font-bold mt-4">Tips Mengumpulkan Jelantah:</h4>
            <ul className="list-disc pl-5">
              <li>✅ Simpan di tempat sejuk dan tertutup.</li>
              <li>✅ Jangan campur dengan air, sabun, atau bahan kimia.</li>
              <li>✅ Saring sisa makanan sebelum dituang ke wadah.</li>
            </ul>
          </StepDetailCard>

          <StepDetailCard step="02" title="Hubungi JelantahGO">
            <h4 className="font-bold">A. Via WhatsApp (Paling Cepat & Mudah) ⭐</h4>
            <p>Hubungi <strong>0851-8303-3995</strong> dengan format:</p>
            <pre className="bg-gray-100 p-4 rounded-lg my-2 text-sm whitespace-pre-wrap">
{`Halo JelantahGO,
Nama: [Nama Anda]
Lokasi: [Alamat Lengkap]
Volume: [Perkiraan jumlah liter]
Jadwal: [Kapan bisa dijemput]`}
            </pre>
            <p>Tim kami akan merespon dalam 5-15 menit pada jam operasional (Senin-Sabtu, 11.00-23.00 WIB).</p>

            <h4 className="font-bold mt-4">B. Informasi yang Perlu Disiapkan:</h4>
            <ul className="list-disc pl-5">
              <li>Nama lengkap dan nomor WhatsApp aktif.</li>
              <li>Alamat lengkap dan perkiraan volume.</li>
              <li>Jadwal penjemputan yang diinginkan.</li>
            </ul>
          </StepDetailCard>

          <StepDetailCard step="03" title="Tim Kami Menjemput ke Lokasi Anda">
            <h4 className="font-bold">A. Kedatangan Tim Profesional</h4>
            <p>Tim kami akan datang sesuai jadwal dengan seragam, ID card resmi, dan kendaraan operasional JelantahGO.</p>
            
            <h4 className="font-bold mt-4">B. Proses Penimbangan Transparan</h4>
             <ul className="list-disc pl-5">
              <li>⚖️ Kami menggunakan timbangan digital akurat dan terkalibrasi.</li>
              <li>📦 Minyak dipindahkan ke wadah timbang kami, Anda bisa menyaksikan prosesnya secara langsung.</li>
              <li>📝 Total harga dihitung di depan Anda: Volume (liter) × Harga per liter.</li>
             </ul>

            <h4 className="font-bold mt-4">C. Standar Kualitas Minyak</h4>
            <p>Kami menerima minyak goreng bekas dengan warna coklat, tidak tercampur air/sabun, dan tidak gosong total (hitam pekat seperti oli).</p>
          </StepDetailCard>

          <StepDetailCard step="04" title="Terima Pembayaran Tunai Langsung">
             <h4 className="font-bold">A. Perhitungan Final di Depan Anda</h4>
            <p>Setelah penimbangan, tim kami akan menunjukkan total volume dan menghitung total pembayaran bersama Anda.</p>

            <h4 className="font-bold mt-4">B. Pembayaran Tunai & Struk Resmi</h4>
             <ul className="list-disc pl-5">
              <li>💰 Anda menerima uang tunai <strong>langsung di tempat</strong>, tanpa potongan biaya apapun.</li>
              <li>🧾 Anda akan menerima struk/nota transaksi resmi sebagai bukti.</li>
              <li>🏦 Opsi pembayaran via transfer atau e-wallet juga tersedia (konfirmasi sebelumnya).</li>
             </ul>
             
             <h4 className="font-bold mt-4">C. Wadah Anda Aman</h4>
             <p>Wadah tetap menjadi milik Anda. Kami hanya memindahkan minyaknya saja dan mengembalikan wadah dalam kondisi kosong.</p>
          </StepDetailCard>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#033C35] mb-4">📍 Area Layanan Penjemputan Gratis</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                Kami melayani penjemputan gratis (min. 40 liter) di seluruh wilayah Jabodetabek.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto text-left">
                <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="font-bold text-[#033C35] mb-2">Jakarta Pusat</h3>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="font-bold text-[#033C35] mb-2">Jakarta Barat</h3>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="font-bold text-[#033C35] mb-2">Jakarta Selatan</h3>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="font-bold text-[#033C35] mb-2">Jakarta Timur</h3>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="font-bold text-[#033C35] mb-2">Jakarta Utara</h3>
                </div>
                 <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="font-bold text-[#033C35] mb-2">Kota Tangerang</h3>
                </div>
                 <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="font-bold text-[#033C35] mb-2">Tangerang Selatan</h3>
                </div>
                 <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="font-bold text-[#033C35] mb-2">Bekasi</h3>
                </div>
                 <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="font-bold text-[#033C35] mb-2">Depok</h3>
                </div>
                 <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="font-bold text-[#033C35] mb-2">Bogor</h3>
                </div>
            </div>
             <p className="mt-8 text-gray-500">*Untuk area spesifik di luar daftar, silakan hubungi customer service kami.</p>
        </div>
      </section>

       {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-[#033C35] mb-12">❓ Pertanyaan Umum</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
                {faqs.map((faq, index) => (
                    <FAQItem 
                        key={index}
                        question={faq.q}
                        answer={faq.a}
                        isOpen={openFaq === index}
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    />
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
          <div className="container mx-auto px-6">
              <div className="bg-[#033C35] text-white p-12 md:p-16 rounded-3xl text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Siap Jual Minyak Jelantah Anda?</h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
                      Prosesnya mudah, cepat, dan menguntungkan. Hubungi kami sekarang untuk menjadwalkan penjemputan pertama Anda.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="https://wa.me/6285183033995" target="_blank" rel="noopener noreferrer" className="bg-white text-[#033C35] font-bold py-3 px-8 rounded-2xl text-lg hover:bg-gray-200 transition-all transform hover:scale-105">
                          WhatsApp Sekarang
                      </a>
                      <Link to="/harga" className="border-2 border-gray-400 text-white font-bold py-3 px-8 rounded-2xl text-lg hover:bg-white/10 transition-all transform hover:scale-105">
                          Lihat Skema Harga
                      </Link>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
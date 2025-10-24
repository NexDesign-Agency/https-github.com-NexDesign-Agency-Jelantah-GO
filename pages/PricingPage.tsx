import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PriceCategoryCard: React.FC<{
  category: string;
  price: string;
  description: string;
  estimation: { volume: number; value: string }[];
  benefits: string[];
  highlighted?: boolean;
}> = ({ category, price, description, estimation, benefits, highlighted }) => (
  <div className={`bg-white rounded-3xl shadow-lg transition-transform hover:scale-105 flex flex-col ${highlighted ? 'border-2 border-[#033C35]' : 'border-2 border-transparent'}`}>
    <div className="p-8 flex-grow">
      <h3 className="text-2xl font-bold text-[#033C35]">{category}</h3>
      <p className="text-gray-500 mb-4">{description}</p>
      <p className="text-5xl font-extrabold text-[#033C35]">Rp {price}</p>
      <p className="text-gray-500 mb-6">per liter</p>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p className="font-semibold text-gray-700 mb-2">Estimasi Penghasilan:</p>
        <ul className="space-y-1 text-sm text-gray-600">
          {estimation.map(est => (
            <li key={est.volume} className="flex justify-between">
              <span>{est.volume} liter</span>
              <span className="font-medium">{est.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="font-semibold text-gray-700 mb-2">Benefit:</p>
      <ul className="space-y-2 text-gray-600">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6-4a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span dangerouslySetInnerHTML={{ __html: benefit }} />
          </li>
        ))}
      </ul>
    </div>
    <div className="p-8 pt-0">
        <a href="https://wa.me/6285183033995" target="_blank" rel="noopener noreferrer" className={`w-full text-center block font-bold py-3 px-8 rounded-2xl text-lg transition-colors ${highlighted ? 'bg-[#033C35] text-white hover:bg-[#1a4738]' : 'bg-green-100 text-[#033C35] hover:bg-green-200'}`}>
            Pesan Penjemputan
        </a>
    </div>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void; }> = ({ question, answer, isOpen, onClick }) => (
    <div className="border-t border-gray-200 py-4">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#033C35]">
            <span>{question}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </span>
        </button>
        {isOpen && <p className="mt-4 text-gray-600">{answer}</p>}
    </div>
);

const PricingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [
      { q: "Apakah harga bisa nego?", a: "Harga sudah ditetapkan secara transparan dan fair. Namun untuk volume sangat besar (1000+ liter) atau kontrak jangka panjang, bisa didiskusikan dengan manajemen." },
      { q: "Kenapa harga berbeda-beda per volume?", a: "Semakin besar volume, semakin efisien biaya operasional kami (transportasi, tenaga kerja). Efisiensi ini kami kembalikan ke Anda dalam bentuk harga lebih tinggi." },
      { q: "Apakah ada potongan atau biaya tersembunyi?", a: "TIDAK ADA. Harga yang Anda lihat di timbangan adalah harga yang Anda terima. Tidak ada potongan transportasi, admin, atau biaya lainnya." },
      { q: "Bagaimana jika kualitas minyak saya kurang baik?", a: "Kami akan evaluasi di tempat. Jika ada campuran air banyak atau kontaminasi, akan dijelaskan dan mungkin ada penyesuaian harga. Tapi tetap dalam kisaran wajar." },
      { q: "Apakah harga sama untuk semua area Jabodetabek?", a: "Ya, harga sama untuk seluruh area layanan kami tanpa ada perbedaan wilayah." }
  ];

  return (
    <div className="bg-[#F9F8F4]">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="font-semibold tracking-widest text-[#033C35]">UPDATE TERKINI 2025</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#033C35] my-4 max-w-4xl mx-auto">
            Harga Minyak Jelantah Terbaru Jakarta & Jabodetabek
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            JelantahGO memberikan harga tertinggi di pasaran dengan sistem pembayaran tunai langsung dan penjemputan gratis!
          </p>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            <PriceCategoryCard
              category="Kategori 1: 40-99 Liter"
              price="7.500"
              description="Cocok untuk rumah tangga atau warung kecil."
              estimation={[
                  { volume: 40, value: 'Rp 300.000' },
                  { volume: 75, value: 'Rp 562.500' },
              ]}
              benefits={[
                "Penjemputan 100% gratis",
                "Pembayaran tunai langsung",
                "Jadwal fleksibel (1-3 hari)",
                "Area seluruh Jabodetabek"
              ]}
            />
            <PriceCategoryCard
              category="Kategori 2: 100-199 Liter"
              price="8.000"
              description="Ideal untuk UMKM kuliner dan resto kecil."
              estimation={[
                  { volume: 100, value: 'Rp 800.000' },
                  { volume: 150, value: 'Rp 1.200.000' },
              ]}
              benefits={[
                "Semua benefit Kategori 1",
                "<strong>Prioritas penjemputan</strong>",
                "Harga Rp 500 lebih tinggi/liter",
                "Bisa request jadwal tetap"
              ]}
              highlighted={true}
            />
            <PriceCategoryCard
              category="Kategori 3: 200+ Liter"
              price="8.500"
              description="Harga tertinggi untuk resto, hotel & mitra."
              estimation={[
                  { volume: 200, value: 'Rp 1.700.000' },
                  { volume: 500, value: 'Rp 4.250.000' },
              ]}
              benefits={[
                "Semua benefit Kategori 1 & 2",
                "<strong>Bisa dijemput di hari yang sama</strong>",
                "Dedicated account manager",
                "Invoice resmi untuk bisnis"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Income Calculator Section */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-[#033C35] mb-4">🧮 Kalkulator Penghasilan Jelantah</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">Lihat berapa penghasilan tahunan yang bisa Anda dapatkan dari minyak jelantah yang sebelumnya terbuang.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-left">
                  <div className="bg-gray-50 p-6 rounded-2xl border">
                      <h4 className="font-bold text-lg text-[#033C35]">Ibu Rumah Tangga</h4>
                      <p className="text-sm text-gray-500 mb-2">50 liter/bulan</p>
                      <p className="text-3xl font-bold text-[#033C35]">Rp 4.5 Juta</p>
                      <p className="text-gray-600">per tahun</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border">
                      <h4 className="font-bold text-lg text-[#033C35]">Warung Nasi</h4>
                      <p className="text-sm text-gray-500 mb-2">120 liter/bulan</p>
                      <p className="text-3xl font-bold text-[#033C35]">Rp 11.5 Juta</p>
                      <p className="text-gray-600">per tahun</p>
                  </div>
                   <div className="bg-gray-50 p-6 rounded-2xl border">
                      <h4 className="font-bold text-lg text-[#033C35]">Restoran Besar</h4>
                      <p className="text-sm text-gray-500 mb-2">320 liter/bulan</p>
                      <p className="text-3xl font-bold text-[#033C35]">Rp 32.6 Juta</p>
                      <p className="text-gray-600">per tahun</p>
                  </div>
                   <div className="bg-gray-50 p-6 rounded-2xl border">
                      <h4 className="font-bold text-lg text-[#033C35]">Mitra Pengepul</h4>
                      <p className="text-sm text-gray-500 mb-2">1000 liter/bulan</p>
                      <p className="text-3xl font-bold text-[#033C35]">Rp 24 Juta</p>
                      <p className="text-gray-600">keuntungan per tahun</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Factors Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#033C35] mb-12">📈 Faktor yang Mempengaruhi Harga Jelantah</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-[#033C35] mb-2">Harga CPO Global</h4>
                <p className="text-gray-600">Harga jelantah berkorelasi dengan harga minyak sawit mentah di pasar internasional.</p>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-[#033C35] mb-2">Permintaan Biodiesel</h4>
                <p className="text-gray-600">Program B30/B40 pemerintah meningkatkan permintaan jelantah sebagai bahan baku.</p>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-[#033C35] mb-2">Volume Penjualan</h4>
                <p className="text-gray-600">Volume besar membuat biaya logistik lebih efisien, sehingga harga bisa lebih tinggi.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-[#033C35] mb-2">Kualitas Minyak</h4>
                <p className="text-gray-600">Minyak yang bersih dari air dan sisa makanan akan mendapatkan harga optimal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                     <h2 className="text-4xl font-bold text-[#033C35] mb-6">🎯 Tips Mendapatkan Harga Tertinggi</h2>
                     <p className="text-lg text-gray-600 mb-8">Ikuti panduan sederhana ini untuk memaksimalkan keuntungan dari penjualan minyak jelantah Anda.</p>
                </div>
                <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-2xl flex items-start gap-4">
                        <div className="text-2xl font-bold text-[#033C35]">1.</div>
                        <div>
                            <h4 className="font-bold text-lg text-[#033C35]">Kumpulkan Volume Besar</h4>
                            <p className="text-gray-600">Ajak tetangga atau warung sekitar untuk mengumpulkan bersama. Targetkan 200+ liter untuk harga terbaik.</p>
                        </div>
                    </div>
                     <div className="bg-gray-50 p-6 rounded-2xl flex items-start gap-4">
                        <div className="text-2xl font-bold text-[#033C35]">2.</div>
                        <div>
                            <h4 className="font-bold text-lg text-[#033C35]">Jaga Kualitas Minyak</h4>
                            <p className="text-gray-600">Saring sisa makanan dan pastikan wadah tertutup rapat agar tidak tercampur air hujan.</p>
                        </div>
                    </div>
                     <div className="bg-gray-50 p-6 rounded-2xl flex items-start gap-4">
                        <div className="text-2xl font-bold text-[#033C35]">3.</div>
                        <div>
                            <h4 className="font-bold text-lg text-[#033C35]">Jadilah Pelanggan Rutin</h4>
                            <p className="text-gray-600">Pelanggan rutin mendapatkan prioritas jadwal dan potensi bonus loyalitas dari kami.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-[#033C35] mb-12">❓ Pertanyaan Umum Seputar Harga</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
                <FAQItem 
                    question={faqs[0].q} 
                    answer={faqs[0].a} 
                    isOpen={openFaq === 0} 
                    onClick={() => setOpenFaq(openFaq === 0 ? null : 0)} 
                />
                {faqs.slice(1).map((faq, index) => (
                    <FAQItem 
                        key={index + 1}
                        question={faq.q}
                        answer={faq.a}
                        isOpen={openFaq === index + 1}
                        onClick={() => setOpenFaq(openFaq === index + 1 ? null : index + 1)}
                    />
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
          <div className="container mx-auto px-6">
              <div className="bg-[#033C35] text-white p-12 md:p-16 rounded-3xl text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Ubah Jelantah Anda Menjadi Uang Tunai!</h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
                    Jangan biarkan terbuang percuma. Hubungi kami sekarang untuk mendapatkan harga terbaik di pasaran dan layanan penjemputan profesional.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="https://wa.me/6285183033995" target="_blank" rel="noopener noreferrer" className="bg-white text-[#033C35] font-bold py-3 px-8 rounded-2xl text-lg hover:bg-gray-200 transition-all transform hover:scale-105">
                          WhatsApp Sekarang
                      </a>
                      <Link to="/cara-kerja" className="border-2 border-gray-400 text-white font-bold py-3 px-8 rounded-2xl text-lg hover:bg-white/10 transition-all transform hover:scale-105">
                          Lihat Cara Kerja
                      </Link>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default PricingPage;
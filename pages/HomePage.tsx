
import React from 'react';
import { Link } from 'react-router-dom';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="bg-[#1e5241]/50 p-6 rounded-2xl text-center">
    <p className="text-3xl lg:text-4xl font-bold text-white">{value}</p>
    <p className="text-gray-300 mt-1">{label}</p>
  </div>
);

const FeatureCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
    <h3 className="font-bold text-green-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{children}</p>
  </div>
);

const PriceCard: React.FC<{ volume: string; price: string; description: string; highlighted?: boolean }> = ({ volume, price, description, highlighted = false }) => (
    <div className={`bg-white p-8 rounded-3xl shadow-lg transition-transform hover:scale-105 ${highlighted ? 'border-2 border-green-500' : 'border-2 border-transparent'}`}>
        <p className="text-gray-500 uppercase text-sm font-semibold">Volume</p>
        <p className="text-3xl font-bold text-[#1a4738] my-2">{volume}</p>
        <p className="text-5xl font-extrabold text-[#1a4738]">Rp {price}</p>
        <p className="text-gray-500 mb-4">per liter</p>
        <p className="text-gray-600 text-sm h-12">{description}</p>
        <a href="#harga" className="font-semibold text-green-600 hover:text-green-700 mt-4 inline-block">Rincian skema harga &rarr;</a>
    </div>
);

const StepCard: React.FC<{ step: string; title: string; children: React.ReactNode }> = ({ step, title, children }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm">
    <p className="text-2xl font-bold text-green-200 mb-2">{step}</p>
    <h3 className="font-bold text-[#1a4738] mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{children}</p>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#1A4738] text-white bg-[url('https://www.transparenttextures.com/patterns/subtle-carbon.png')]">
        <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 text-center md:text-left">
            <p className="font-semibold tracking-widest">JELANTANGO • JAKARTA & JABODETABEK</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4 mb-6">
              Jual minyak jelantah dengan harga premium, penjemputan rapi, dan bukti legal.
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mb-8">
              Kami membantu rumah tangga, restoran, hotel, dan industri mengelola minyak jelantah dengan aman. Harga transparan Rp 7.500–8.500 per liter, kurir terlatih, dan pembayaran langsung tanpa menunggu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#" className="bg-white text-[#1A4738] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-all transform hover:scale-105">
                WhatsApp Sekarang
              </a>
              <a href="#" className="border-2 border-gray-400 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white/10 transition-all transform hover:scale-105">
                Lihat Skema Harga
              </a>
            </div>
          </div>
          <div className="md:w-2/5 mt-12 md:mt-0 md:pl-12">
            <div className="bg-black/20 p-6 rounded-3xl backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-4">Kami dipercaya oleh</h3>
              <div className="grid grid-cols-2 gap-4">
                <StatCard value="150K+" label="Liter terkumpul" />
                <StatCard value="Rp 1,2 M+" label="Dibayarkan ke masyarakat" />
                <StatCard value="800+" label="Pelanggan aktif" />
                <StatCard value="30+" label="Mitra profesional" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-[#1a4738] mb-4">Mengapa ratusan pelanggan memilih JelantahGO?</h2>
                    <p className="text-gray-600 mb-8">Sejak 2020 kami fokus menjadi mitra pengelolaan jelantah yang transparan, legal, dan ramah lingkungan. Seluruh proses dan peralatan mengikuti standar limbah B3 yang berlaku.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                    <h3 className="font-bold text-green-800 mb-2">AREA LAYANAN</h3>
                    <p className="text-[#1a4738] font-semibold mb-3">Jakarta • Tangerang • Bekasi • Depok • Bogor</p>
                    <p className="text-gray-600 text-sm mb-4">Untuk volume besar di luar Jabodetabek, silakan hubungi tim kami untuk opsi kemitraan.</p>
                    <a href="#" className="font-semibold text-green-600 hover:text-green-700">Lihat detail area &rarr;</a>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                <FeatureCard title="HARGA TERTINGGI">Hingga Rp 8.500 per liter untuk volume di atas 200 liter dan negosiasi transparan.</FeatureCard>
                <FeatureCard title="JEMPUT GRATIS">Penjemputan gratis minimal 40 liter di seluruh Jabodetabek, sesuai jadwal Anda.</FeatureCard>
                <FeatureCard title="BAYAR TUNAI">Pembayaran langsung setelah penimbangan, bisa tunai atau transfer sesuai permintaan.</FeatureCard>
                <FeatureCard title="RAMAH LINGKUNGAN">Jelantah diolah menjadi biodiesel; kontribusi nyata untuk menekan limbah B3.</FeatureCard>
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#1a4738] mb-4">Harga minyak jelantah terbaru</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">Harga kami mengikuti perkembangan CPO nasional dan dapat disesuaikan untuk volume industri.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <PriceCard volume="40–99 liter" price="7.500" description="Minimal untuk jemput gratis." />
                <PriceCard volume="100–199 liter" price="8.000" description="Termasuk prioritas penjemputan." highlighted={true} />
                <PriceCard volume="≥ 200 liter" price="8.500" description="Dilengkapi sertifikat pengelolaan." />
            </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#1a4738] text-center mb-12">Alur penjemputan jelantah tahap demi tahap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StepCard step="01" title="Kumpulkan jelantah">Simpan minyak bekas dalam jeriken tertutup, jangan campur air atau deterjen.</StepCard>
            <StepCard step="02" title="Hubungi tim kami">Via WhatsApp 0851-8303-3995. Kami konfirmasi volume dan jadwal jemput.</StepCard>
            <StepCard step="03" title="Penjemputan rapi">Kurir datang sesuai waktu, menimbang dengan timbangan digital yang terkalibrasi.</StepCard>
            <StepCard step="04" title="Terima pembayaran">Pilih tunai atau transfer. Anda menerima bukti serah terima dan invoice.</StepCard>
          </div>
        </div>
      </section>
      
      {/* Education & Testimonial Section */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                      <h2 className="text-4xl font-bold text-[#1a4738] mb-8">Pelajari strategi jual dan pengelolaan jelantah</h2>
                      <div className="space-y-4">
                          <Link to="/blog/panduan-jual-jelantah-2025" className="block bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                              <h3 className="font-bold text-green-800 mb-1">Panduan jual jelantah 2025</h3>
                              <p className="text-gray-600 text-sm">Langkah lengkap agar dapat harga terbaik dan memilih pengepul legal.</p>
                          </Link>
                          <Link to="/blog/program-mitra-jelantahgo" className="block bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                              <h3 className="font-bold text-green-800 mb-1">Program Mitra JelantahGO</h3>
                              <p className="text-gray-600 text-sm">Simulasi keuntungan Rp 1–5 juta/bulan untuk pengepul pemula.</p>
                          </Link>
                          <Link to="/blog/dampak-jelantah-bagi-lingkungan" className="block bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                              <h3 className="font-bold text-green-800 mb-1">Dampak jelantah bagi lingkungan</h3>
                              <p className="text-gray-600 text-sm">Mengapa jelantah tergolong limbah B3 dan cara pengelolaannya yang benar.</p>
                          </Link>
                      </div>
                      <Link to="/blog" className="font-semibold text-green-600 hover:text-green-700 mt-6 inline-block">Telusuri seluruh artikel edukasi &rarr;</Link>
                  </div>
                  <div className="bg-[#1a4738] text-white p-8 rounded-3xl">
                      <h3 className="font-semibold tracking-widest mb-6">CERITA MITRA</h3>
                      <div className="space-y-6">
                        <div className="bg-white/10 p-4 rounded-xl">
                            <p className="italic">“Saya bergabung jadi mitra sejak 8 bulan lalu dan program supportnya luar biasa. Sekarang bisa menutup biaya operasional dan membeli armada baru.”</p>
                            <p className="font-bold mt-3">PAK DONI – MITRA JELANTANGO</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl">
                            <p className="italic">“Penjemputan selalu tepat waktu, bayarnya langsung, dan timnya ramah. Cocok banget buat UMKM kuliner yang butuh layanan profesional.”</p>
                            <p className="font-bold mt-3">IBU RINA – PEMILIK KATERING</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl">
                           <p>Sertifikasi & compliance: Kerjasama dengan fasilitas pengolahan biodiesel B30, bukti pengelolaan limbah tersedia untuk audit.</p>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>


      {/* CTA Section */}
      <section className="py-20">
          <div className="container mx-auto px-6">
              <div className="bg-[#1a4738] text-white p-12 md:p-16 rounded-3xl text-center">
                  <p className="font-semibold tracking-widest">SIAP MENJEMPUT JELANTAH ANDA</p>
                  <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Mulai dari jadwal pertama hingga laporan bulanan, tim JelantahGO siap membantu.</h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                      Hubungi kami untuk jadwal penjemputan, konsultasi kemitraan, atau permintaan dokumen legalitas.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="#" className="bg-white text-[#1A4738] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-all transform hover:scale-105">
                          Jadwalkan Penjemputan
                      </a>
                      <a href="#" className="border-2 border-gray-400 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white/10 transition-all transform hover:scale-105">
                          Lihat informasi kontak lengkap
                      </a>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default HomePage;

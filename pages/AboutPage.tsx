import React from 'react';
import { Link } from 'react-router-dom';

// A reusable component for statistic cards
const StatCard: React.FC<{ value: string; label: string; icon?: React.ReactNode }> = ({ value, label, icon }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
    {icon && <div className="text-[#033C35] mb-2 flex justify-center">{icon}</div>}
    <p className="text-4xl font-bold text-[#033C35]">{value}</p>
    <p className="text-gray-600 mt-1">{label}</p>
  </div>
);

// A reusable component for feature cards
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
        <div className="text-[#033C35] mb-3">{icon}</div>
        <h3 className="text-xl font-bold text-[#033C35] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F9F8F4]">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#033C35] mb-4">Tentang JelantahGO</h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Mengenal lebih dekat JelantahGO, pengepul minyak jelantah terpercaya sejak 2020 yang telah melayani 800+ pelanggan, mengumpulkan 150.000+ liter, dan membayarkan Rp 1,2 miliar+ kepada masyarakat Jakarta dan sekitarnya.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#033C35] mb-12">JelantahGO dalam Angka</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard value="5+" label="Tahun pengalaman" />
            <StatCard value="800+" label="Pelanggan aktif" />
            <StatCard value="150K+" label="Liter terkumpul" />
            <StatCard value="Rp 1.2M+" label="Dibayarkan" />
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#033C35] mb-12">Visi dan Misi JelantahGO</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#033C35] mb-4">🟢 Visi Kami</h3>
              <p className="text-gray-700">Menjadi pengepul minyak jelantah terbesar dan terpercaya di Indonesia, sekaligus memberikan kontribusi nyata dalam pelestarian lingkungan melalui pengelolaan limbah minyak goreng bekas yang bertanggung jawab.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#033C35] mb-4">🟢 Misi Kami</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><span className="mr-2 mt-1">✔️</span> Memberikan harga pembelian tertinggi di pasaran</li>
                <li className="flex items-start"><span className="mr-2 mt-1">✔️</span> Layanan penjemputan gratis yang profesional</li>
                <li className="flex items-start"><span className="mr-2 mt-1">✔️</span> Pembayaran tunai langsung di tempat</li>
                <li className="flex items-start"><span className="mr-2 mt-1">✔️</span> Mengolah jelantah jadi biodiesel ramah lingkungan</li>
                <li className="flex items-start"><span className="mr-2 mt-1">✔️</span> Memberdayakan masyarakat melalui program mitra</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#033C35] mb-12">Mengapa JelantahGO Didirikan?</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">Indonesia menghasilkan jutaan liter minyak goreng bekas setiap harinya. Sayangnya, sebagian besar masih dibuang sembarangan. Padahal, 1 liter jelantah dapat mencemari hingga 1 juta liter air bersih!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="font-bold text-xl text-red-600 mb-2">Masalah Lingkungan</h3>
                <p className="text-gray-600">Jelantah mencemari sumber air, merusak ekosistem, dan menyumbat saluran pembuangan.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="font-bold text-xl text-yellow-600 mb-2">Nilai Ekonomi Terbuang</h3>
                <p className="text-gray-600">Minyak jelantah punya nilai ekonomi tinggi untuk diolah jadi biodiesel, sabun, dan lilin.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="font-bold text-xl text-[#033C35] mb-2">Solusi JelantahGO</h3>
                <p className="text-gray-600">Kami menjadi jembatan antara masyarakat dan industri, memberikan harga terbaik dan dampak positif.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-[#033C35] mb-16">Perjalanan JelantahGO: Dari Startup hingga Terpercaya</h2>
              <div className="relative max-w-2xl mx-auto">
                  <div className="absolute left-1/2 w-0.5 h-full bg-green-200 transform -translate-x-1/2"></div>
                  
                  {/* Timeline Item 2020 */}
                  <div className="relative mb-8 flex justify-end">
                      <div className="absolute w-8 h-8 bg-[#033C35] rounded-full left-1/2 top-0 transform -translate-x-1/2 flex items-center justify-center text-white font-bold">20</div>
                      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm w-5/12 ml-auto">
                          <h3 className="font-bold text-lg text-[#033C35]">Awal Mula</h3>
                          <p className="text-sm text-gray-600">Dimulai dengan 1 tim kurir, mengumpulkan 5.000 liter dari 50 pelanggan pertama.</p>
                      </div>
                  </div>
                  {/* Timeline Item 2021 */}
                  <div className="relative mb-8 flex justify-start">
                      <div className="absolute w-8 h-8 bg-[#033C35] rounded-full left-1/2 top-0 transform -translate-x-1/2 flex items-center justify-center text-white font-bold">21</div>
                      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm w-5/12 mr-auto">
                          <h3 className="font-bold text-lg text-[#033C35]">Ekspansi Layanan</h3>
                          <p className="text-sm text-gray-600">Memperluas area ke seluruh Jakarta dan mulai melayani segmen bisnis (resto & hotel).</p>
                      </div>
                  </div>
                  {/* Timeline Item 2022 */}
                  <div className="relative mb-8 flex justify-end">
                      <div className="absolute w-8 h-8 bg-[#033C35] rounded-full left-1/2 top-0 transform -translate-x-1/2 flex items-center justify-center text-white font-bold">22</div>
                      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm w-5/12 ml-auto">
                          <h3 className="font-bold text-lg text-[#033C35]">Program Mitra</h3>
                          <p className="text-sm text-gray-600">Meluncurkan program mitra pengepul, berhasil mengumpulkan 50.000+ liter setahun.</p>
                      </div>
                  </div>
                   {/* Timeline Item 2023 */}
                  <div className="relative mb-8 flex justify-start">
                      <div className="absolute w-8 h-8 bg-[#033C35] rounded-full left-1/2 top-0 transform -translate-x-1/2 flex items-center justify-center text-white font-bold">23</div>
                      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm w-5/12 mr-auto">
                          <h3 className="font-bold text-lg text-[#033C35]">Digitalisasi</h3>
                          <p className="text-sm text-gray-600">Launching website & sistem online untuk tracking penjemputan real-time.</p>
                      </div>
                  </div>
                   {/* Timeline Item 2024 */}
                  <div className="relative flex justify-end">
                      <div className="absolute w-8 h-8 bg-[#033C35] rounded-full left-1/2 top-0 transform -translate-x-1/2 flex items-center justify-center text-white font-bold">24</div>
                      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm w-5/12 ml-auto">
                          <h3 className="font-bold text-lg text-[#033C35]">Semakin Terpercaya</h3>
                          <p className="text-sm text-gray-600">800+ pelanggan, 150K+ liter, Rp 1.2M+ dibayarkan, dan 30+ mitra.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>


      {/* Why Different Section */}
      <section className="py-20">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-[#033C35] mb-12">Apa yang Membuat JelantahGO Berbeda?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>} title="Harga Tertinggi" description="Rp 7.500 – 8.500 per liter, tanpa potongan biaya tersembunyi." />
                  <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1zM3 11h10" /></svg>} title="Jemput 100% Gratis" description="Minimal 40 liter, tim datang ke lokasi tanpa biaya tambahan (Jabodetabek)." />
                  <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} title="Bayar Tunai Langsung" description="Setelah ditimbang, langsung dibayar tunai tanpa menunggu transfer." />
                  <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} title="Tim Profesional" description="Kurir sopan, pakai timbangan digital akurat, dan ID resmi." />
                   <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} title="Pengelolaan Bertanggung Jawab" description="Semua jelantah kami olah jadi biodiesel dan produk ramah lingkungan." />
                  <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>} title="Edukasi Masyarakat" description="Aktif mengedukasi bahaya buang jelantah sembarangan melalui berbagai kanal." />
              </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-[#033C35] mb-12">Apa Kata Pelanggan Kami?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                    <p className="text-gray-600 italic">“Sudah 2 tahun jual jelantah ke JelantahGO. Prosesnya selalu lancar, bayar cash langsung, dan harganya paling tinggi. Recommended!”</p>
                    <p className="font-bold text-[#033C35] mt-4">— Ibu Siti, Jakarta Barat</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl">
                    <p className="text-gray-600 italic">“Sebagai pemilik warung makan, setiap bulan saya bisa dapat tambahan 1–2 juta dari jual jelantah. Dulu dibuang percuma, sekarang jadi penghasilan.”</p>
                    <p className="font-bold text-[#033C35] mt-4">— Pak Budi, Tangerang</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl">
                    <p className="text-gray-600 italic">“Bergabung jadi mitra JelantahGO adalah keputusan terbaik. Supportnya luar biasa. Sekarang sudah jadi bisnis sampingan yang menguntungkan.”</p>
                    <p className="font-bold text-[#033C35] mt-4">— Doni Ramadhan, Mitra</p>
                </div>
            </div>
        </div>
      </section>

       {/* Legality Section */}
      <section className="py-20">
          <div className="container mx-auto px-6">
              <div className="bg-white p-12 rounded-2xl shadow-lg grid md:grid-cols-2 gap-8 items-center">
                  <div>
                      <h2 className="text-3xl font-bold text-[#033C35] mb-4">Sertifikasi dan Legalitas</h2>
                      <p className="text-gray-600 mb-6">JelantahGO beroperasi secara legal dan profesional untuk memberikan Anda rasa aman dan percaya.</p>
                      <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start"><svg className="w-6 h-6 text-[#033C35] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12 12 0 0012 21.414a12 12 0 008.618-15.428z"></path></svg><span>Terdaftar sebagai badan usaha resmi</span></li>
                          <li className="flex items-start"><svg className="w-6 h-6 text-[#033C35] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12 12 0 0012 21.414a12 12 0 008.618-15.428z"></path></svg><span>Memiliki izin pengelolaan limbah B3</span></li>
                          <li className="flex items-start"><svg className="w-6 h-6 text-[#033C35] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12 12 0 0012 21.414a12 12 0 008.618-15.428z"></path></svg><span>Bekerja sama dengan pabrik biodiesel bersertifikat</span></li>
                          <li className="flex items-start"><svg className="w-6 h-6 text-[#033C35] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12 12 0 0012 21.414a12 12 0 008.618-15.428z"></path></svg><span>Menyediakan bukti serah terima limbah resmi (manifest)</span></li>
                      </ul>
                  </div>
                  <div>
                      <img src="https://picsum.photos/seed/legal/600/400" alt="Legalitas JelantahGO" className="rounded-2xl shadow-lg"/>
                  </div>
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
          <div className="container mx-auto px-6">
              <div className="bg-[#033C35] text-white p-12 md:p-16 rounded-3xl text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Siap Menjadi Bagian dari Solusi?</h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
                    Hubungi kami untuk mulai menjual minyak jelantah Anda dan berkontribusi pada lingkungan yang lebih bersih.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/kontak" className="bg-white text-[#033C35] font-bold py-3 px-8 rounded-2xl text-lg hover:bg-gray-200 transition-all transform hover:scale-105">
                          Hubungi Kami
                      </Link>
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

export default AboutPage;
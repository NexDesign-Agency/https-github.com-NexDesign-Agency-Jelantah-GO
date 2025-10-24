import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeatureCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
    <h3 className="font-bold text-[#033C35] mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{children}</p>
  </div>
);

const PriceCard: React.FC<{ volume: string; price: string; description: string; highlighted?: boolean }> = ({ volume, price, description, highlighted = false }) => (
    <div className={`bg-white p-8 rounded-3xl shadow-lg transition-transform hover:scale-105 ${highlighted ? 'border-2 border-[#033C35]' : 'border-2 border-transparent'}`}>
        <p className="text-gray-500 uppercase text-sm font-semibold">Volume</p>
        <p className="text-3xl font-bold text-[#033C35] my-2">{volume}</p>
        <p className="text-5xl font-extrabold text-[#033C35]">Rp {price}</p>
        <p className="text-gray-500 mb-4">per liter</p>
        <p className="text-gray-600 text-sm h-12">{description}</p>
        <a href="#harga" className="font-semibold text-[#033C35] hover:underline mt-4 inline-block">Rincian skema harga &rarr;</a>
    </div>
);

const StepCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
    <div className="border-l-4 border-[#033C35] pl-4">
        <h3 className="font-bold text-[#033C35] text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{children}</p>
    </div>
  </div>
);

const MetricDisplay: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center h-full flex flex-col justify-center">
        <p className="text-4xl font-bold text-[#033C35]">{value}</p>
        <p className="text-gray-600 mt-1">{label}</p>
    </div>
);

const WhoCanSellCard: React.FC<{ icon: string; title: string; children: React.ReactNode; link?: string; linkText?: string; }> = ({ icon, title, children, link, linkText }) => (
  <div className="bg-white p-6 rounded-2xl hover:shadow-md transition-shadow text-center h-full flex flex-col border border-gray-400">
    <span className="text-4xl mb-4">{icon}</span>
    <h3 className="font-bold text-[#033C35] mb-2">{title}</h3>
    <p className="text-gray-600 text-sm flex-grow">{children}</p>
    {link && linkText && (
      <Link to={link} className="font-semibold text-[#033C35] hover:underline mt-4 inline-block text-sm">
        {linkText} &rarr;
      </Link>
    )}
  </div>
);

const FAQItem: React.FC<{ question: string; answer: React.ReactNode; isOpen: boolean; onClick: () => void; }> = ({ question, answer, isOpen, onClick }) => (
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
        {answer}
      </div>
    )}
  </div>
);


const HomePage: React.FC = () => {
  const [liters, setLiters] = useState('');
  const [estimatedIncome, setEstimatedIncome] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const calculateIncome = (currentLiters: number) => {
      if (currentLiters < 40) return 0;
      if (currentLiters < 100) return currentLiters * 7500;
      if (currentLiters < 200) return currentLiters * 8000;
      return currentLiters * 8500;
  };

  const handleCalculate = (e: React.FormEvent) => {
      e.preventDefault();
      const numLiters = parseFloat(liters) || 0;
      setEstimatedIncome(calculateIncome(numLiters));
  };
  
    const faqs = [
        {
            q: "Siapa saja yang bisa menjual minyak jelantah ke JelantahGO?",
            a: <ul className="list-disc list-inside pl-5 space-y-1"><li>Rumah tangga</li><li>Warung/restoran</li><li>Hotel/kantin</li><li>Mitra/pengepul</li></ul>
        },
        {
            q: "Berapa harga per liter minyak jelantah yang diterima?",
            a: <p>Rp 7.500 untuk 40–99 L, Rp 8.000 untuk 100–199 L, Rp 8.500 untuk 200+ L.</p>
        },
        {
            q: "Apakah penjemputan benar-benar gratis?",
            a: <p>Ya, gratis untuk minimal 40 liter di seluruh Jabodetabek.</p>
        },
        {
            q: "Bagaimana cara jual?",
            a: <ul className="list-disc list-inside"><li>Kumpulkan ≥40L</li><li>WhatsApp kami</li><li>Kurir jemput</li><li>Terima uang tunai.</li></ul>
        },
        {
            q: "Minyak harus bersih?",
            a: <p>Tidak perlu disaring halus. Cukup buang sisa makanan. Jangan campur air/sabun.</p>
        },
        {
            q: "Wilayah mana saja yang dilayani oleh JelantahGO?",
            a: <p>Seluruh Jabodetabek: Jakarta (Barat, Pusat, Selatan, Utara, Timur), Tangerang (Kota/Tangsel/Kab.), Bekasi (Kota & Kab.), Depok & Bogor.</p>
        }
    ];

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#033C35] text-white bg-[url('https://www.transparenttextures.com/patterns/subtle-carbon.png')]">
        <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center">
          <div className="w-full text-center">
            <p className="font-semibold tracking-widest">JELANTANGO • JAKARTA & SEKITARNYA</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4 mb-6">
              Jual Minyak Jelantah Jakarta | Harga Tinggi, Jemput Gratis & Dibayar Tunai
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Cari harga jual minyak jelantah Jakarta terbaik? JelantahGO memberikan harga tertinggi mulai dari Rp 7.500 hingga Rp 8.500 per liter. Melayani Jakarta, Tangerang, Bekasi, Depok & Bogor. Dapatkan penjemputan GRATIS dan bayar tunai langsung!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="bg-white text-[#033C35] font-bold py-3 px-8 rounded-2xl text-lg hover:bg-gray-200 transition-all transform hover:scale-105">
                WhatsApp Sekarang
              </a>
              <a href="#" className="border-2 border-gray-400 text-white font-bold py-3 px-8 rounded-2xl text-lg hover:bg-white/10 transition-all transform hover:scale-105">
                Lihat Skema Harga
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator & Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Calculator Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                    <h2 className="text-3xl font-bold text-[#033C35] mb-4">Hitung Penghasilan Anda</h2>
                    <form onSubmit={handleCalculate} className="flex-grow flex flex-col">
                        <div>
                            <label htmlFor="liters-input" className="block text-gray-700 font-medium mb-2">Berapa liter jelantah yang Anda punya?</label>
                            <input 
                                type="number" 
                                id="liters-input"
                                value={liters}
                                onChange={(e) => setLiters(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#033C35] mb-4"
                                placeholder="Contoh: 50"
                            />
                            <button type="submit" className="w-full bg-[#033C35] text-white font-bold py-3 px-8 rounded-2xl text-lg hover:bg-[#1a4738] transition-colors">
                                Hitung Penghasilan
                            </button>
                        </div>
                        <div className="mt-auto bg-green-50 p-6 rounded-lg border-l-4 border-[#033C35]">
                            <p className="text-gray-600">Estimasi Penghasilan:</p>
                            <p className="text-4xl font-bold text-[#033C35] my-1">
                                Rp {estimatedIncome.toLocaleString('id-ID')}
                            </p>
                            <p className="text-xs text-gray-500">*Minimum 40 liter untuk penjemputan gratis</p>
                        </div>
                    </form>
                </div>
                {/* Image */}
                <div>
                    <img src="https://res.cloudinary.com/dknswj9co/image/upload/v1761330419/jelantahgo_sunter_sfde7t.png" alt="Petugas JelantahGO mengambil jelantah dari mitra" className="rounded-2xl shadow-lg w-full h-full object-cover" />
                </div>
            </div>
            {/* Stats below calculator */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
                <MetricDisplay value="150K+" label="Liter Terkumpul" />
                <MetricDisplay value="Rp 1.2M+" label="Dibayarkan ke Masyarakat" />
                <MetricDisplay value="800+" label="Pelanggan Aktif" />
                <MetricDisplay value="30+" label="Mitra Terpercaya" />
            </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-[#033C35] mb-4">Mengapa ratusan pelanggan memilih JelantahGO?</h2>
                    <p className="text-gray-600 mb-8">Sejak 2020 kami fokus menjadi mitra pengelolaan jelantah yang transparan, legal, dan ramah lingkungan. Seluruh proses dan peralatan mengikuti standar limbah B3 yang berlaku.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                    <h3 className="font-bold text-[#033C35] mb-2">AREA LAYANAN</h3>
                    <p className="text-[#033C35] font-semibold mb-3">Jakarta • Tangerang • Bekasi • Depok • Bogor</p>
                    <p className="text-gray-600 text-sm mb-4">Untuk volume besar di luar Jabodetabek, silakan hubungi tim kami untuk opsi kemitraan.</p>
                    <a href="#" className="font-semibold text-[#033C35] hover:underline">Lihat detail area &rarr;</a>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                <FeatureCard title="HARGA TERTINGGI">Hingga Rp 8.500 per liter untuk volume di atas 200 liter dan negosiasi transparan.</FeatureCard>
                <FeatureCard title="JEMPUT GRATIS">Penjemputan gratis minimal 40 liter di seluruh Jabodetabek, sesuai jadwal Anda.</FeatureCard>
                <FeatureCard title="BAYAR TUNAI">Pembayaran langsung setelah penimbangan, bisa tunai atau transfer sesuai permintaan.</FeatureCard>
                <FeatureCard title="RAMAH LINGKungan">Jelantah diolah menjadi biodiesel; kontribusi nyata untuk menekan limbah B3.</FeatureCard>
            </div>
        </div>
      </section>
      
      {/* Who Can Sell Section */}
      <section className="py-20">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-[#033C35] mb-4">Siapa yang Bisa Jual Minyak Jelantah ke JelantahGO?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">Kami menerima minyak jelantah dari berbagai sumber.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto items-stretch">
                  <WhoCanSellCard icon="🏠" title="Rumah Tangga">
                    Ibu rumah tangga bisa kumpulkan jelantah sebagai penghasilan tambahan.
                  </WhoCanSellCard>
                  <WhoCanSellCard icon="🍜" title="Warung & Restoran">
                    Usaha kuliner bisa jual rutin dalam volume besar.
                  </WhoCanSellCard>
                  <WhoCanSellCard icon="🏢" title="Hotel & Kantin">
                    Institusi besar jadi partner rutin kami.
                  </WhoCanSellCard>
                  <WhoCanSellCard icon="🤝" title="Pengepul/Mitra" link="/mitra" linkText="Pelajari selengkapnya">
                    Punya jiwa wirausaha? Jadi mitra pengepul dan dapatkan support penuh dari kami.
                  </WhoCanSellCard>
              </div>
          </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#033C35] mb-4">Harga minyak jelantah terbaru</h2>
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
          <h2 className="text-4xl font-bold text-[#033C35] text-center mb-12">Alur penjemputan jelantah tahap demi tahap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <StepCard title="Kumpulkan jelantah">Simpan minyak bekas dalam jeriken tertutup, jangan campur air atau deterjen.</StepCard>
            <StepCard title="Hubungi tim kami">Via WhatsApp 0851-8303-3995. Kami konfirmasi volume dan jadwal jemput.</StepCard>
            <StepCard title="Penjemputan rapi">Kurir datang sesuai waktu, menimbang dengan timbangan digital yang terkalibrasi.</StepCard>
            <StepCard title="Terima pembayaran">Pilih tunai atau transfer. Anda menerima bukti serah terima dan invoice.</StepCard>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-[#033C35] mb-4">Area Layanan Pengambilan Minyak Jelantah</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">Sebagai pengepul minyak jelantah Jakarta yang berpengalaman, kami melayani seluruh wilayah Jabodetabek dengan layanan penjemputan gratis.</p>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto text-left">
                  <h3 className="font-bold text-[#033C35] text-lg mb-6">Daftar Wilayah:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Jakarta */}
                    <div className="flex items-start gap-3">
                      <span className="text-xl mt-1">📍</span>
                      <div>
                        <p className="font-bold text-[#033C35]">Jakarta</p>
                        <p className="text-sm text-gray-600">Barat, Pusat, Selatan, Utara, Timur</p>
                      </div>
                    </div>
                    {/* Tangerang */}
                    <div className="flex items-start gap-3">
                      <span className="text-xl mt-1">📍</span>
                      <div>
                        <p className="font-bold text-[#033C35]">Tangerang</p>
                        <p className="text-sm text-gray-600">Kota, Tangsel, Kab. Tangerang</p>
                      </div>
                    </div>
                    {/* Bekasi */}
                    <div className="flex items-start gap-3">
                      <span className="text-xl mt-1">📍</span>
                      <div>
                        <p className="font-bold text-[#033C35]">Bekasi</p>
                        <p className="text-sm text-gray-600">Kota & Kab. Bekasi</p>
                      </div>
                    </div>
                    {/* Depok & Bogor */}
                     <div className="flex items-start gap-3">
                      <span className="text-xl mt-1">📍</span>
                      <div>
                        <p className="font-bold text-[#033C35]">Depok & Bogor</p>
                        <p className="text-sm text-gray-600">Kota Depok, Kota Bogor & sekitarnya</p>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="max-w-4xl mx-auto mt-8 text-sm text-gray-800 bg-yellow-50 border-l-4 border-yellow-400 p-4 text-left rounded-md">
                <strong>Catatan:</strong> Untuk area di luar Jabodetabek, Anda bisa <Link to="/mitra" className="font-bold text-[#033C35] hover:underline">bergabung sebagai mitra pengepul</Link>.
              </div>
          </div>
      </section>
      
      {/* Education & Testimonial Section */}
      <section className="py-20">
          <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                      <h2 className="text-4xl font-bold text-[#033C35] mb-8">Pelajari strategi jual dan pengelolaan jelantah</h2>
                      <div className="space-y-4">
                          <Link to="/blog/panduan-jual-jelantah-2025" className="block bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                              <h3 className="font-bold text-[#033C35] mb-1">Panduan jual jelantah 2025</h3>
                              <p className="text-gray-600 text-sm">Langkah lengkap agar dapat harga terbaik dan memilih pengepul legal.</p>
                          </Link>
                          <Link to="/blog/program-mitra-jelantahgo" className="block bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                              <h3 className="font-bold text-[#033C35] mb-1">Program Mitra JelantahGO</h3>
                              <p className="text-gray-600 text-sm">Simulasi keuntungan Rp 1–5 juta/bulan untuk pengepul pemula.</p>
                          </Link>
                          <Link to="/blog/dampak-jelantah-bagi-lingkungan" className="block bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                              <h3 className="font-bold text-[#033C35] mb-1">Dampak jelantah bagi lingkungan</h3>
                              <p className="text-gray-600 text-sm">Mengapa jelantah tergolong limbah B3 dan cara pengelolaannya yang benar.</p>
                          </Link>
                      </div>
                      <Link to="/blog" className="font-semibold text-[#033C35] hover:underline mt-6 inline-block">Telusuri seluruh artikel edukasi &rarr;</Link>
                  </div>
                  <div className="bg-[#033C35] text-white p-8 rounded-3xl">
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

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-[#033C35] mb-12">FAQ / Pertanyaan yang Sering Ditanyakan</h2>
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
      <section className="py-20">
          <div className="container mx-auto px-6">
              <div className="bg-[#033C35] text-white p-12 md:p-16 rounded-3xl text-center">
                  <p className="font-semibold tracking-widest">SIAP MENJEMPUT JELANTAH ANDA</p>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 max-w-4xl mx-auto">Kami tak sekadar menjemput jelantah kami bantu wujudkan kemitraan yang menguntungkan.</h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                      Hubungi kami untuk jadwal penjemputan & konsultasi kemitraan
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="#" className="bg-white text-[#033C35] font-bold py-3 px-8 rounded-2xl text-lg hover:bg-gray-200 transition-all transform hover:scale-105">
                          Jadwalkan Penjemputan
                      </a>
                      <a href="#" className="border-2 border-gray-400 text-white font-bold py-3 px-8 rounded-2xl text-lg hover:bg-white/10 transition-all transform hover:scale-105">
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
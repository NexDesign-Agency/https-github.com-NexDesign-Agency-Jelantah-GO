import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EarningSimulationCard: React.FC<{ level: string; volume: string; profit: string; yearlyProfit: string; initialCapital: string; highlighted?: boolean; }> = ({ level, volume, profit, yearlyProfit, initialCapital, highlighted }) => (
    <div className={`bg-white p-8 rounded-2xl shadow-lg border-2 ${highlighted ? 'border-[#033C35]' : 'border-gray-100'} flex flex-col`}>
        <h3 className="text-xl font-bold text-[#033C35]">{level}</h3>
        <p className="text-gray-500 mb-4">{volume}</p>
        <p className="text-4xl font-extrabold text-[#033C35]">{profit}</p>
        <p className="text-gray-600 mb-1">per bulan</p>
        <p className="text-lg font-medium text-[#033C35] mb-4">({yearlyProfit}/tahun)</p>
        <div className="mt-auto border-t pt-4">
            <p className="text-sm text-gray-500">Estimasi Modal Awal</p>
            <p className="font-semibold text-[#033C35]">{initialCapital}</p>
        </div>
    </div>
);

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
        <div className="text-[#033C35] mb-4">{icon}</div>
        <h3 className="text-lg font-bold text-[#033C35] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);

const StepCard: React.FC<{ step: string; title: string; description: string; }> = ({ step, title, description }) => (
    <div className="flex items-start gap-6">
        <div className="flex-shrink-0 bg-[#033C35] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
            {step}
        </div>
        <div>
            <h3 className="text-xl font-bold text-[#033C35] mb-1">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const CaseStudyCard: React.FC<{ name: string; background: string; profit: string; quote: string; image: string }> = ({ name, background, profit, quote, image }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-2xl font-bold text-[#033C35]">{name}</h3>
            <p className="text-gray-500 text-sm mb-3">{background}</p>
            <p className="text-[#033C35] font-bold text-lg mb-4">Penghasilan: {profit}/bulan</p>
            <blockquote className="border-l-4 border-green-200 pl-4 italic text-gray-600">
                "{quote}"
            </blockquote>
        </div>
    </div>
);

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void; }> = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-200 py-4">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#033C35]">
            <span>{question}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </span>
        </button>
        {isOpen && <p className="mt-4 text-gray-600">{answer}</p>}
    </div>
);


const MitraPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        { q: "Apakah ada biaya franchise atau biaya bergabung?", a: "TIDAK ADA. Program mitra JelantahGO 100% gratis tanpa biaya franchise, pendaftaran, atau biaya tersembunyi apapun." },
        { q: "Berapa modal awal yang dibutuhkan?", a: "Modal minimal Rp 500.000 - 1.000.000 untuk jerigen/wadah, marketing material, dan operasional awal. Modal ini berputar cepat, biasanya balik dalam 2-4 minggu." },
        { q: "Apakah harus full time?", a: "Tidak harus. Banyak mitra sukses yang menjalankan sambil kerja utama. 2-3 jam per hari sudah cukup untuk mengumpulkan 500-1000L per bulan." },
        { q: "Wilayah mana saja yang bisa jadi mitra?", a: "Prioritas utama adalah Jabodetabek. Namun, kami juga terbuka untuk kota-kota besar di Jawa Barat dan Jawa Tengah." },
        { q: "Apakah ada target volume minimal?", a: "Tidak ada target wajib. Namun, kami merekomendasikan minimal 500L per bulan agar bisnis Anda cukup profitabel dan efisien." },
    ];

  return (
    <div className="bg-[#F9F8F4]">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="font-semibold tracking-widest text-[#033C35]">PROGRAM KEMITRAAN JELANTANGO</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#033C35] my-4 max-w-4xl mx-auto">
            Peluang Bisnis Pengepul Jelantah Modal Kecil, Untung Besar
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Jadilah mitra pengepul resmi dan raih penghasilan jutaan rupiah per bulan! Bergabunglah dengan 30+ mitra sukses kami dan dapatkan dukungan penuh dari JelantahGO.
          </p>
          <a href="#daftar" className="bg-[#033C35] text-white font-bold py-3 px-8 rounded-2xl text-lg hover:bg-[#1a4738] transition-all transform hover:scale-105">
              Daftar Jadi Mitra Sekarang
          </a>
        </div>
      </section>

      {/* "What is it?" Section */}
      <section className="py-20">
          <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center">
                  <h2 className="text-4xl font-bold text-[#033C35] mb-4">🤝 Apa Itu Program Mitra JelantahGO?</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      Sebuah kemitraan di mana Anda menjadi pengepul minyak jelantah resmi di wilayah Anda dengan konsep bisnis sederhana dan dukungan penuh dari kami.
                  </p>
              </div>
              <div className="my-12 bg-gray-800 text-white p-6 rounded-2xl font-mono text-sm sm:text-base">
                  <p>1. Anda kumpulkan jelantah dari masyarakat/warung</p>
                  <p className="pl-4">↓ Beli dengan harga <span className="text-yellow-300">Rp 6.000-7.000/L</span></p>
                  <p>2. Jual ke JelantahGO</p>
                  <p className="pl-4">↓ Harga jual <span className="text-green-400">Rp 7.500-8.500/L</span></p>
                  <p className="font-bold text-lg">3. Margin Keuntungan: <span className="text-cyan-400">Rp 1.000-2.000/L</span></p>
              </div>
          </div>
      </section>

      {/* Earning Potential Section */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-[#033C35] mb-4">💰 Potensi Penghasilan Anda</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-12">Simulasi keuntungan realistis berdasarkan performa mitra kami saat ini. Modal Anda bisa kembali dalam 1-2 bulan!</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  <EarningSimulationCard level="Mitra Pemula" volume="Target 500L/bulan" profit="Rp 750 Ribu" yearlyProfit="Rp 9 Juta" initialCapital="± Rp 500.000" />
                  <EarningSimulationCard level="Mitra Aktif" volume="Target 1000L/bulan" profit="Rp 2 Juta" yearlyProfit="Rp 24 Juta" initialCapital="± Rp 1.000.000" highlighted={true} />
                  <EarningSimulationCard level="Mitra Sukses" volume="Target 2000L/bulan" profit="Rp 5 Juta" yearlyProfit="Rp 60 Juta" initialCapital="± Rp 2.000.000" />
              </div>
          </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
          <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center text-[#033C35] mb-12">🎁 Benefit Eksklusif Menjadi Mitra</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <BenefitCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m-9 9h18" /></svg>} title="Support Marketing Digital" description="Dapatkan website gratis (nama.jelantahgo.com), listing Google Maps, dan social media kit untuk promosi." />
                  <BenefitCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></svg>} title="Training & Pendampingan" description="Training intensif 2 hari (teori & praktik) serta pendampingan berkelanjutan via grup WhatsApp eksklusif." />
                  <BenefitCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>} title="Tools & Peralatan" description="Subsidi 50% untuk timbangan digital, harga khusus untuk jerigen, dan desain gratis untuk banner/spanduk." />
                  <BenefitCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} title="Sistem Pembayaran Fleksibel" description="Pilih pembayaran tunai, transfer H+1, atau tempo pembayaran untuk menjaga cash flow bisnis Anda." />
                  <BenefitCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} title="Komunitas & Networking" description="Bergabung dalam grup eksklusif, event gathering rutin, dan dapatkan insight dari mitra-mitra senior." />
                  <BenefitCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M17 3l-1.172 1.172a4 4 0 01-5.656 0L9 3m9 18l-1.172-1.172a4 4 0 00-5.656 0L9 21" /></svg>} title="Bonus & Insentif" description="Dapatkan bonus volume bulanan, bonus konsistensi, dan bonus referral untuk setiap mitra baru yang Anda ajak." />
              </div>
          </div>
      </section>

      {/* How to Join Section */}
      <section id="daftar" className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
              <h2 className="text-4xl font-bold text-center text-[#033C35] mb-12">🚀 Cara Bergabung Menjadi Mitra</h2>
              <div className="space-y-10">
                  <StepCard step="01" title="Registrasi Awal" description="Isi form pendaftaran di website atau hubungi kami via WhatsApp dengan data diri dan motivasi Anda. Tim kami akan mereview dalam 1-2 hari kerja." />
                  <StepCard step="02" title="Interview & Seleksi" description="Tim kami akan melakukan interview via telepon atau video call untuk diskusi ekspektasi dan komitmen. Hasilnya akan diumumkan H+1." />
                  <StepCard step="03" title="Training & Onboarding" description="Anda akan diundang untuk mengikuti training intensif selama 2 hari, mendapatkan akses ke semua tools, dan menandatangani MOU kemitraan." />
                  <StepCard step="04" title="Kick Off & Go Live!" description="Mulai promosi di area Anda, kumpulkan jelantah pertama, dan terima keuntungan pertama Anda! Kami akan terus mendampingi Anda." />
              </div>
          </div>
      </section>
      
       {/* Case Studies Section */}
        <section className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-[#033C35] mb-12">📊 Kisah Sukses Mitra JelantahGO</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CaseStudyCard name="Pak Doni, Bekasi" background="Pegawai Swasta" profit="Rp 3 Juta+" quote="Penghasilan dari jelantah sudah melebihi gaji kantor dulu. Kuncinya konsisten dan jangan setengah-setengah." image="https://picsum.photos/seed/mitra1/600/400" />
                    <CaseStudyCard name="Ibu Rina, Tangerang" background="Ibu Rumah Tangga" profit="Rp 2 Juta+" quote="Bisnis ini pas banget buat IRT. Bisa sambil urus anak, waktunya fleksibel. Senang dapat penghasilan sekaligus bantu lingkungan." image="https://picsum.photos/seed/mitra2/600/400" />
                    <CaseStudyCard name="Andi, Depok" background="Mahasiswa" profit="Rp 2.5 Juta+" quote="Bisnis jelantah ini biayai kuliah saya sampai lulus. Modal kecil, untung lumayan. Sekarang mau jadi bisnis utama." image="https://picsum.photos/seed/mitra3/600/400" />
                </div>
            </div>
        </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-[#033C35] mb-12">❓ Pertanyaan Umum Program Mitra</h2>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
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
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Jangan Tunda Lagi! Daftar Sekarang!</h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
                    Semakin cepat Anda mulai, semakin cepat Anda meraih penghasilan. 1000 liter pertama bisa jadi Rp 2 juta di kantong Anda! Hubungi tim partnership kami sekarang.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20Saya%20tertarik%20bergabung%20jadi%20mitra." target="_blank" rel="noopener noreferrer" className="bg-white text-[#033C35] font-bold py-3 px-8 rounded-2xl text-lg hover:bg-gray-200 transition-all transform hover:scale-105">
                          Hubungi via WhatsApp
                      </a>
                      <Link to="/kontak" className="border-2 border-gray-400 text-white font-bold py-3 px-8 rounded-2xl text-lg hover:bg-white/10 transition-all transform hover:scale-105">
                          Lihat Info Kontak Lain
                      </Link>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default MitraPage;
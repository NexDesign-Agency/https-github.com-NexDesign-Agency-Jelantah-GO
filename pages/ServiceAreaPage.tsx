import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AreaCard: React.FC<{ title: string; districts: string[]; popular: string; responseTime: string; highlight?: boolean; children?: React.ReactNode }> = ({ title, districts, popular, responseTime, highlight, children }) => (
    <div className={`bg-white rounded-2xl shadow-lg border ${highlight ? 'border-[#033C35]' : 'border-gray-100'} overflow-hidden`}>
        <div className="p-6">
            <h3 className={`text-2xl font-bold mb-3 ${highlight ? 'text-[#033C35]' : 'text-[#033C35]'}`}>📍 {title}</h3>
            <div className="mb-4">
                <p className="font-semibold text-gray-700">Kecamatan yang dilayani:</p>
                <p className="text-gray-600 text-sm leading-relaxed">{districts.join(', ')}.</p>
            </div>
             <div className="mb-4">
                <p className="font-semibold text-gray-700">Area Populer:</p>
                <p className="text-gray-600 text-sm leading-relaxed">{popular}.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
                 <p className="font-semibold text-gray-700">Estimasi Waktu Respon:</p>
                <p className="text-gray-600 text-sm">{responseTime}</p>
            </div>
            {children}
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

const ServiceAreaPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const faqs = [
        { q: "Apakah ada perbedaan harga antar wilayah?", a: "Tidak. Harga sama untuk seluruh area layanan Jabodetabek. Rp 7.500-8.500/L tergantung volume, bukan lokasi." },
        { q: "Area saya jauh, apakah tetap gratis dijemput?", a: "Ya, tetap GRATIS untuk volume minimal 40 liter di seluruh area layanan kami." },
        { q: "Berapa lama waktu penjemputan untuk area jauh?", a: "Tergantung jarak. Area dekat (< 20 km): 1-2 hari. Area jauh (> 40 km): 2-5 hari. Detailnya bisa dilihat di tabel estimasi." },
        { q: "Bagaimana jika area saya belum dilayani?", a: "Anda memiliki 3 opsi: 1) Antar langsung ke drop point kami di Jakarta Utara, 2) Jadi mitra perintis di area Anda, 3) Daftar di waiting list untuk ekspansi wilayah kami." },
        { q: "Apakah melayani area susah akses (gang kecil)?", a: "Ya, selama kendaraan motor bisa masuk. Jika tidak, kita bisa bertemu di titik penjemputan (meeting point) di jalan besar terdekat." },
    ];
  return (
    <div className="bg-[#F9F8F4]">
        {/* Hero Section */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
            <p className="font-semibold tracking-widest text-[#033C35]">JANGKAUAN PENJEMPUTAN GRATIS</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#033C35] my-4 max-w-4xl mx-auto">
                Area Layanan JelantahGO di Jabodetabek
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Kami melayani penjemputan gratis (min. 40 liter) di seluruh Jakarta, Bogor, Depok, Tangerang, dan Bekasi. Lihat detail jangkauan kami di bawah ini.
            </p>
            </div>
        </section>
        
        {/* Detail Area Section */}
        <section className="py-20">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-4xl font-bold text-center text-[#033C35] mb-12">🗺️ Peta Area Layanan Lengkap</h2>
                <div className="space-y-12">
                     <AreaCard 
                        title="DKI Jakarta (Semua Wilayah)"
                        districts={["Gambir", "Tanah Abang", "Menteng", "Senen", "Cempaka Putih", "Johar Baru", "Kemayoran", "Sawah Besar", "Cengkareng", "Grogol Petamburan", "Taman Sari", "Tambora", "Kebon Jeruk", "Kalideres", "Palmerah", "Kembangan", "Kebayoran Baru & Lama", "Pesanggrahan", "Cilandak", "Pasar Minggu", "Jagakarsa", "Mampang Prapatan", "Pancoran", "Tebet", "Setiabudi", "Matraman", "Jatinegara", "Pulogadung", "Cakung", "Kramat Jati", "Makasar", "Pasar Rebo", "Ciracas", "Cipayung", "Duren Sawit", "Penjaringan", "Pademangan", "Tanjung Priok", "Koja", "Kelapa Gading", "Cilincing"]}
                        popular="Senayan, Menteng, Grogol, Kebon Jeruk, Cilandak, Tebet, Rawamangun, Kelapa Gading, Pluit, dan semua area populer lainnya."
                        responseTime="Same Day - 2 hari (tergantung lokasi)"
                        highlight
                     >
                        <div className="mt-4 bg-green-50 p-4 rounded-lg">
                            <p className="font-bold text-[#033C35]">⭐ Area Prioritas: Jakarta Utara</p>
                            <p className="text-sm text-[#033C35]">Karena dekat dengan kantor pusat kami di Tanjung Priok, area Jakarta Utara bisa mendapatkan layanan penjemputan di hari yang sama (same day pickup) untuk volume besar.</p>
                        </div>
                     </AreaCard>
                      <AreaCard 
                        title="Tangerang & Tangerang Selatan"
                        districts={["Tangerang Kota", "Ciledug", "Larangan", "Karawaci", "Cipondoh", "Serpong", "BSD", "Gading Serpong", "Alam Sutera", "Bintaro", "Pondok Aren", "Ciputat", "Pamulang", "Cikupa", "Balaraja"]}
                        popular="Lippo Karawaci, BSD City, Bintaro Jaya, Gading Serpong, Alam Sutera, Cikokol, Ciputat."
                        responseTime="1 - 3 hari"
                     />
                      <AreaCard 
                        title="Bekasi (Kota & Kabupaten)"
                        districts={["Bekasi Barat", "Bekasi Timur", "Bekasi Selatan", "Bekasi Utara", "Pondok Gede", "Jatiasih", "Cikarang", "Cibitung", "Tambun"]}
                        popular="Summarecon Bekasi, Harapan Indah, Pekayon, Jatiwaringin, Kawasan Industri Jababeka, MM2100, Lippo Cikarang."
                        responseTime="1 - 3 hari"
                     />
                     <AreaCard 
                        title="Depok & Bogor"
                        districts={["Pancoran Mas", "Beji", "Sukmajaya", "Cimanggis", "Sawangan", "Margonda", "Bogor Tengah", "Bogor Utara", "Cibinong", "Gunung Putri"]}
                        popular="Margonda Raya (sekitar UI & Gunadarma), Cinere, Sawangan, Bogor Kota, Cibinong."
                        responseTime="2 - 5 hari"
                     />
                </div>
            </div>
        </section>

        {/* Time Estimation Table Section */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-4xl font-bold text-center text-[#033C35] mb-12">⏱️ Estimasi Waktu Penjemputan</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left bg-white shadow-md rounded-lg">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-4 font-semibold text-[#033C35]">Area</th>
                                <th className="p-4 font-semibold text-[#033C35]">Jarak dari Kantor</th>
                                <th className="p-4 font-semibold text-[#033C35]">Waktu Respon</th>
                                <th className="p-4 font-semibold text-[#033C35]">Same Day Pickup?</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            <tr className="hover:bg-gray-50">
                                <td className="p-4 font-medium">Jakarta Utara</td>
                                <td className="p-4">0-10 km</td>
                                <td className="p-4">H+0 sampai H+1</td>
                                <td className="p-4 text-green-600 font-bold">✅ Ya (vol 200L+)</td>
                            </tr>
                             <tr className="hover:bg-gray-50">
                                <td className="p-4 font-medium">Jakarta Pusat, Barat, Timur</td>
                                <td className="p-4">10-25 km</td>
                                <td className="p-4">H+1 sampai H+2</td>
                                <td className="p-4 text-yellow-600 font-bold">⚠️ Kondisional</td>
                            </tr>
                             <tr className="hover:bg-gray-50">
                                <td className="p-4 font-medium">Jakarta Selatan, Depok</td>
                                <td className="p-4">15-40 km</td>
                                <td className="p-4">H+1 sampai H+3</td>
                                <td className="p-4 text-red-600 font-bold">❌ Tidak</td>
                            </tr>
                             <tr className="hover:bg-gray-50">
                                <td className="p-4 font-medium">Tangerang & Bekasi</td>
                                <td className="p-4">20-40 km</td>
                                <td className="p-4">H+2 sampai H+3</td>
                                <td className="p-4 text-red-600 font-bold">❌ Tidak</td>
                            </tr>
                             <tr className="hover:bg-gray-50">
                                <td className="p-4 font-medium">Bogor</td>
                                <td className="p-4">40-60 km</td>
                                <td className="p-4">H+3 sampai H+5</td>
                                <td className="p-4 text-red-600 font-bold">❌ Tidak</td>
                            </tr>
                        </tbody>
                    </table>
                     <p className="text-sm text-gray-500 mt-4">*H = Hari setelah konfirmasi booking. Waktu bisa lebih cepat tergantung rute kurir.</p>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl font-bold text-center text-[#033C35] mb-12">❓ Pertanyaan Umum Area Layanan</h2>
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
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Cek Ketersediaan Area Anda Sekarang!</h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
                    Tidak yakin apakah lokasi Anda terjangkau? Hubungi tim kami via WhatsApp untuk konfirmasi cepat.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="https://wa.me/6285183033995?text=Halo%20JelantahGO,%20apakah%20area%20saya%20di%20[alamat]%20terlayani?" target="_blank" rel="noopener noreferrer" className="bg-white text-[#033C35] font-bold py-3 px-8 rounded-2xl text-lg hover:bg-gray-200 transition-all transform hover:scale-105">
                          Tanya via WhatsApp
                      </a>
                      <Link to="/kontak" className="border-2 border-gray-400 text-white font-bold py-3 px-8 rounded-2xl text-lg hover:bg-white/10 transition-all transform hover:scale-105">
                          Info Kontak Lain
                      </Link>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default ServiceAreaPage;
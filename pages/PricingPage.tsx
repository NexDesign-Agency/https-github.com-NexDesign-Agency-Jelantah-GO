
import React from 'react';

const PriceTier: React.FC<{ volume: string; price: string; features: string[]; highlighted?: boolean }> = ({ volume, price, features, highlighted }) => (
  <div className={`bg-white p-8 rounded-3xl shadow-lg transition-transform hover:scale-105 flex flex-col ${highlighted ? 'border-2 border-green-500' : 'border-2 border-transparent'}`}>
    <div className="flex-grow">
      <p className="text-gray-500 uppercase text-sm font-semibold">{volume}</p>
      <p className="text-5xl font-extrabold text-[#1a4738] my-4">Rp {price}</p>
      <p className="text-gray-500 mb-6">per liter</p>
      <ul className="space-y-3 text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <a href="#" className="bg-[#1A4738] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-800 transition-colors text-center mt-8">
      Jadwalkan Penjemputan
    </a>
  </div>
);

const PricingPage: React.FC = () => {
  return (
    <div className="bg-[#F9F8F4] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1A4738] mb-4">Skema Harga Jelantah</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami menawarkan harga yang transparan dan kompetitif, disesuaikan dengan volume jelantah yang Anda jual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PriceTier 
            volume="Rumah Tangga"
            price="7.500"
            features={[
              "Volume 40–99 liter",
              "Penjemputan gratis se-Jabodetabek",
              "Pembayaran tunai/transfer",
              "Bukti serah terima standar"
            ]}
          />
          <PriceTier 
            volume="UMKM & Resto"
            price="8.000"
            features={[
              "Volume 100–199 liter",
              "Prioritas jadwal penjemputan",
              "Timbangan digital terkalibrasi",
              "Dukungan pelanggan khusus"
            ]}
            highlighted={true}
          />
          <PriceTier 
            volume="Industri & Hotel"
            price="8.500"
            features={[
              "Volume ≥ 200 liter",
              "Harga negosiatif untuk volume besar",
              "Kontrak kemitraan jangka panjang",
              "Sertifikat pengelolaan limbah B3"
            ]}
          />
        </div>
        
        <div className="mt-20 bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-[#1A4738] mb-6">Pertanyaan Umum (FAQ)</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Apakah ada biaya penjemputan?</h3>
              <p className="text-gray-600">Tidak, penjemputan gratis untuk volume minimal 40 liter di seluruh area layanan kami.</p>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-semibold text-lg text-gray-800">Bagaimana jika volume jelantah saya di bawah 40 liter?</h3>
              <p className="text-gray-600">Anda dapat mengumpulkannya terlebih dahulu hingga mencapai minimal volume, atau mengantarkannya langsung ke titik pengumpulan terdekat kami.</p>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-semibold text-lg text-gray-800">Apakah harga bisa berubah?</h3>
              <p className="text-gray-600">Ya, harga jelantah mengikuti harga pasar CPO (Crude Palm Oil) nasional. Namun, kami selalu berkomitmen untuk memberikan harga terbaik bagi mitra kami.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;


import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-[#1A4738] mb-4">Tentang JelantahGO</h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Kami adalah mitra terpercaya dalam pengelolaan minyak jelantah yang bertanggung jawab dan berkelanjutan.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-[#1A4738] mb-4">Misi Kami</h2>
            <p className="text-gray-700 mb-4">
              Misi JelantahGO adalah memberikan solusi pengelolaan limbah minyak jelantah yang efisien, transparan, dan menguntungkan bagi masyarakat serta ramah bagi lingkungan. Kami percaya bahwa limbah dapat diubah menjadi sumber daya berharga.
            </p>
            <p className="text-gray-700">
              Dengan mengubah jelantah menjadi biodiesel, kami berkontribusi dalam mengurangi emisi karbon dan ketergantungan pada bahan bakar fosil. Setiap liter jelantah yang kami kumpulkan adalah langkah kecil menuju planet yang lebih hijau.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src="https://picsum.photos/seed/about1/600/400" alt="Tim JelantahGO" className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/seed/about2/600/400" alt="Proses Pengelolaan Jelantah" className="rounded-2xl shadow-lg w-full h-auto" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#1A4738] mb-4">Visi & Nilai</h2>
            <p className="text-gray-700 mb-4">
              Visi kami adalah menjadi pemimpin dalam industri daur ulang minyak jelantah di Indonesia, menciptakan ekosistem ekonomi sirkular yang memberikan dampak positif bagi sosial dan lingkungan.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Integritas:</strong> Transparansi dan kejujuran dalam setiap transaksi.</li>
              <li><strong>Profesionalisme:</strong> Layanan penjemputan yang tepat waktu dan terstandarisasi.</li>
              <li><strong>Keberlanjutan:</strong> Komitmen penuh terhadap praktik ramah lingkungan.</li>
              <li><strong>Pemberdayaan:</strong> Membuka peluang ekonomi bagi mitra dan masyarakat.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

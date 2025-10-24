
import React from 'react';

const Step: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
    <div className="bg-green-100 text-green-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-[#1A4738] mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorksPage: React.FC = () => {
  return (
    <div className="bg-[#F9F8F4] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1A4738] mb-4">Cara Kerja Kami</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proses kami dirancang untuk menjadi mudah, cepat, dan transparan bagi Anda. Berikut adalah 4 langkah sederhana untuk menjual minyak jelantah Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Step 
            icon={<span className="text-3xl font-bold">1</span>}
            title="Kumpulkan Jelantah" 
            description="Simpan minyak bekas pakai Anda dalam wadah tertutup seperti jeriken. Pastikan tidak tercampur dengan air, sisa makanan, atau bahan kimia lain untuk menjaga kualitasnya." 
          />
          <Step 
            icon={<span className="text-3xl font-bold">2</span>}
            title="Hubungi & Jadwalkan" 
            description="Hubungi kami melalui WhatsApp. Informasikan volume jelantah dan alamat Anda. Tim kami akan segera merespon untuk mengkonfirmasi jadwal penjemputan yang sesuai." 
          />
          <Step 
            icon={<span className="text-3xl font-bold">3</span>}
            title="Proses Penjemputan" 
            description="Tim kurir profesional kami akan datang sesuai jadwal. Kami akan menimbang jelantah Anda dengan timbangan digital yang terkalibrasi untuk memastikan akurasi." 
          />
          <Step 
            icon={<span className="text-3xl font-bold">4</span>}
            title="Terima Pembayaran" 
            description="Setelah penimbangan selesai, kami akan langsung melakukan pembayaran secara tunai atau transfer. Anda juga akan menerima bukti serah terima resmi." 
          />
        </div>

        <div className="mt-20 text-center bg-white p-12 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#1A4738] mb-4">Siap Memulai?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Jadikan limbah dapur Anda sebagai sumber penghasilan tambahan sekaligus berkontribusi untuk lingkungan yang lebih baik.</p>
          <a href="#" className="bg-[#1A4738] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-800 transition-colors">
            Hubungi Kami Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;

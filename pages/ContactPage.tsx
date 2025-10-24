
import React from 'react';

const ContactInfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <div className="flex justify-center mb-4">
            <div className="bg-green-100 text-green-700 rounded-full w-16 h-16 flex items-center justify-center">
                {icon}
            </div>
        </div>
        <h3 className="text-xl font-semibold text-[#1A4738] mb-2">{title}</h3>
        <div className="text-gray-600">{children}</div>
    </div>
);

const ContactPage: React.FC = () => {
  return (
    <div className="py-20 bg-[#F9F8F4]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1A4738] mb-4">Hubungi Kami</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui informasi di bawah ini atau kirimkan pesan kepada kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ContactInfoCard
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            }
            title="WhatsApp"
          >
            <a href="#" className="hover:text-green-600">0851-8303-3995</a>
            <p className="text-sm">Senin - Sabtu, 08:00 - 17:00</p>
          </ContactInfoCard>
          <ContactInfoCard
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            }
            title="Email"
          >
            <a href="mailto:info.jelantahgo@gmail.com" className="hover:text-green-600">info.jelantahgo@gmail.com</a>
            <p className="text-sm">Respon dalam 24 jam kerja</p>
          </ContactInfoCard>
          <ContactInfoCard
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            }
            title="Alamat Kantor"
          >
            <p>Jakarta, Indonesia</p>
            <p className="text-sm">(Hanya kantor, tidak menerima jelantah)</p>
          </ContactInfoCard>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#1A4738] mb-8 text-center">Kirim Pesan</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nama Lengkap</label>
                <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Nama Anda" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Alamat Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="email@anda.com" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subjek</label>
              <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Subjek pesan Anda" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Pesan</label>
              <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Tuliskan pesan Anda di sini..."></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-[#1A4738] text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-green-800 transition-colors">
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

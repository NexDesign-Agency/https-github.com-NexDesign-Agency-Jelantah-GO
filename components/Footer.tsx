import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#033C35] text-gray-300">
      {/* Main footer content with dotted pattern */}
      <div className="bg-[url('https://www.transparenttextures.com/patterns/subtle-carbon.png')]">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">JelantahGO</h3>
              <p className="text-gray-400">
                Mengubah limbah menjadi berkah. Pengepul jelantah terpercaya di Jabodetabek.
              </p>
            </div>

            {/* Column 2: Navigasi */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Navigasi</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
                <li><Link to="/tentang" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/kontak" className="hover:text-white transition-colors">Kontak</Link></li>
              </ul>
            </div>

            {/* Column 3: Layanan */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/cara-kerja" className="hover:text-white transition-colors">Cara Kerja</Link></li>
                <li><Link to="/area-layanan" className="hover:text-white transition-colors">Area Layanan</Link></li>
                <li><Link to="/harga" className="hover:text-white transition-colors">Harga</Link></li>
                <li><Link to="/mitra" className="hover:text-white transition-colors">Jadi Mitra</Link></li>
              </ul>
            </div>

            {/* Column 4: Kontak */}
            <div className="md:col-span-2 lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-gray-400">
                  <li>WhatsApp: <a href="https://wa.me/6285183033995" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">0851-8303-3995</a></li>
                  <li>Email: <a href="mailto:info.jelantahgo@gmail.com" className="hover:text-white transition-colors">info.jelantahgo@gmail.com</a></li>
                  <li className="pt-2">Jl. Papanggo I No.250, Jakarta Utara</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      
      {/* Copyright section with solid background */}
      <div className="container mx-auto px-6">
        <div className="border-t border-gray-700 py-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} JelantahGO. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A4738] text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">JelantahGO</h3>
            <p className="max-w-xs">
              Pengepul minyak jelantah Jakarta & Jabodetabek. Jemput gratis, bayar tunai, ramah lingkungan.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li><Link to="/tentang" className="hover:text-white transition-colors">Tentang</Link></li>
              <li><Link to="/cara-kerja" className="hover:text-white transition-colors">Cara Kerja</Link></li>
              <li><Link to="/harga" className="hover:text-white transition-colors">Harga</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/kontak" className="hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li>WhatsApp: 0851-8303-3995</li>
              <li>Email: info.jelantahgo@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} JelantahGO. Semua hak cipta.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang', path: '/tentang' },
  { name: 'Cara Kerja', path: '/cara-kerja' },
  { name: 'Area Layanan', path: '/area-layanan' },
  { name: 'Harga', path: '/harga' },
  { name: 'Mitra', path: '/mitra' },
  { name: 'Blog', path: '/blog' },
  { name: 'Kontak', path: '/kontak' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkClass = 'text-white';
  const inactiveLinkClass = 'text-gray-300 hover:text-white transition-colors';

  return (
    <header className="bg-[#033C35]/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          JelantahGO
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#033C35] pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `text-lg ${isActive ? activeLinkClass : inactiveLinkClass}`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

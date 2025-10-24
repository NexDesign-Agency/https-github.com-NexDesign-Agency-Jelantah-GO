import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { BlogPost } from '../types';

const PillarArticleCard: React.FC<{ post: BlogPost | undefined, ctaText: string }> = ({ post, ctaText }) => {
  if (!post) return null;
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-[#033C35] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
      <img src={post.imageUrl} alt={post.title} className="w-full md:w-1/3 h-48 object-cover rounded-lg" />
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-[#033C35] mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.summary}</p>
        <Link to={`/blog/${post.id}`} className="inline-block bg-[#033C35] text-white font-bold py-2 px-6 rounded-full hover:bg-[#1a4738] transition-colors">
          {ctaText} &rarr;
        </Link>
      </div>
    </div>
  );
};

const SupportingArticleLink: React.FC<{ post: BlogPost | undefined }> = ({ post }) => {
  if (!post) return null;
  return (
    <Link to={`/blog/${post.id}`} className="block bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
      <p className="font-semibold text-[#033C35] group-hover:text-[#033C35]">{post.title}</p>
      <span className="text-sm text-[#033C35] font-medium">Baca Selengkapnya &rarr;</span>
    </Link>
  );
};

interface PillarSectionProps {
    pillarId: string;
    pillarCta: string;
    supportingIds: string[];
    category: string;
}

const PillarSection: React.FC<PillarSectionProps> = ({ pillarId, pillarCta, supportingIds, category }) => {
    const pillarPost = posts.find(p => p.id === pillarId);
    const supportingPosts = supportingIds.map(id => posts.find(p => p.id === id));
    
    return (
        <div>
            <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">🟧 {category}</h2>
            <PillarArticleCard post={pillarPost} ctaText={pillarCta} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {supportingPosts.map(post => post && <SupportingArticleLink key={post.id} post={post} />)}
            </div>
        </div>
    );
};


const BlogListPage: React.FC = () => {
    const sections: PillarSectionProps[] = [
        {
            category: "ARTIKEL PILAR",
            pillarId: "bisnis-pengepul-jelantah-2025",
            pillarCta: "Baca Blueprint Bisnisnya",
            supportingIds: [
                "panduan-memulai-bisnis-pengepul", "cara-negosiasi-harga-dengan-pengepul", "kisah-sukses-ibu-rina-mitra-pengepul", "checklist-peralatan-pengepul-jelantah-pemula", "5-skrip-template-penawaran-kerjasama-jelantah", "kisah-sukses-pak-doni-omzet-20-juta", "manajemen-logistik-pengepul-jelantah", "mitra-jelantahgo-vs-mandiri"
            ],
        },
        {
            category: "ARTIKEL PILAR LOKAL",
            pillarId: "jual-minyak-jelantah-jakarta-2025",
            pillarCta: "Baca Panduan Jakarta",
            supportingIds: [
                "pengepul-jelantah-jakarta-selatan", "harga-jual-minyak-jelantah-terbaik-di-jakarta-utara", "jemput-jelantah-gratis-jakarta-barat", "jual-minyak-jelantah-jakarta-timur", "manajemen-limbah-jelantah-jakarta-pusat"
            ],
        },
        {
            category: "ARTIKEL PILAR LOKAL",
            pillarId: "jual-minyak-jelantah-tangerang-tangsel-2025",
            pillarCta: "Baca Panduan Tangerang",
            supportingIds: [],
        },
        {
            category: "ARTIKEL PILAR LOKAL",
            pillarId: "jual-minyak-jelantah-bekasi-2025",
            pillarCta: "Baca Panduan Bekasi",
            supportingIds: [],
        },
        {
            category: "ARTIKEL PILAR LOKAL",
            pillarId: "jual-minyak-jelantah-depok-bogor-2025",
            pillarCta: "Baca Panduan Depok & Bogor",
            supportingIds: [],
        },
        {
            category: "ARTIKEL PILAR",
            pillarId: "panduan-terlengkap-jual-minyak-jelantah-2025",
            pillarCta: "Baca Panduan Lengkapnya",
            supportingIds: [
                "cara-menyimpan-minyak-jelantah", "cara-jual-minyak-jelantah-paling-menguntungkan", "10-cara-mengumpulkan-100-liter-jelantah", "kapan-waktu-terbaik-menjual-jelantah", "update-harga-minyak-jelantah-november-2025", "7-kesalahan-fatal-penjual-jelantah-pemula", "waspada-5-ciri-pengepul-jelantah-nakal"
            ],
        },
        {
            category: "ARTIKEL PILAR",
            pillarId: "jelantah-ancaman-vs-peluang",
            pillarCta: "Baca Analisis Mendalam",
            supportingIds: [
                "bahaya-buang-jelantah-sembarangan", "dampak-jelantah-pada-ekosistem-air", "mengenal-biodiesel-dari-jelantah", "program-b30-dan-peran-jelantah", "proses-ilmiah-jelantah-menjadi-biodiesel", "fatberg-monster-bawah-tanah", "5-bahaya-minyak-jelantah-bagi-kesehatan", "diy-sabun-lilin-dari-minyak-jelantah", "regulasi-limbah-b3-untuk-bisnis-kuliner"
            ],
        },
    ];

  return (
    <div className="bg-[#F9F8F4] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#033C35] mb-4">Blog & Artikel Edukasi</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan wawasan, panduan, dan berita terbaru seputar pengelolaan minyak jelantah dan industri daur ulang, yang disusun berdasarkan topik utama untuk kemudahan Anda.
          </p>
        </div>
        <div className="space-y-16">
          {sections.map((section, index) => <PillarSection key={index} {...section} />)}
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
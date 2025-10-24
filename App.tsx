
import React from 'react';
import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import MitraPage from './pages/MitraPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import ServiceAreaPage from './pages/ServiceAreaPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tentang" element={<AboutPage />} />
          <Route path="cara-kerja" element={<HowItWorksPage />} />
          <Route path="area-layanan" element={<ServiceAreaPage />} />
          <Route path="harga" element={<PricingPage />} />
          <Route path="mitra" element={<MitraPage />} />
          <Route path="blog" element={<BlogListPage />} />
          <Route path="blog/:postId" element={<BlogPostPage />} />
          <Route path="kontak" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;

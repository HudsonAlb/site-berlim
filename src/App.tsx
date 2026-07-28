import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import LogosMarquee from './components/LogosMarquee';
import AboutSummary from './components/AboutSummary';
import BDashSection from './components/BDashSection';
import SolutionsGrid from './components/SolutionsGrid';
import MiddleCTA from './components/MiddleCTA';
import SuccessCases from './components/SuccessCases';
import TestimonialsTabs from './components/TestimonialsTabs';
import BlogCarousel from './components/BlogCarousel';
import NewsDetailPage from './components/NewsDetailPage';
import Footer from './components/Footer';

export default function App() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  // If a news article page is selected, render the dedicated News Detail Page view
  if (selectedArticleId) {
    return (
      <NewsDetailPage 
        articleId={selectedArticleId} 
        onNavigateHome={() => setSelectedArticleId(null)} 
        onSelectArticle={(id) => setSelectedArticleId(id)} 
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-[#0052ff]/10 selection:text-[#0052ff]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Carousel Slider */}
      <HeroCarousel />

      {/* Partners / Logos Infinite Marquee */}
      <LogosMarquee />

      {/* About Summary / What We Do Section */}
      <AboutSummary />

      {/* Solutions / Marketing Services Grid */}
      <SolutionsGrid />

      {/* Proprietary Product BDash Section */}
      <BDashSection />

      {/* Social Proof Testimonials Interactive Tabs */}
      <TestimonialsTabs />

      {/* Success Metric Cases */}
      <SuccessCases />

      {/* News & Ideias (Berlim Events & Articles) */}
      <BlogCarousel onOpenArticle={(id) => setSelectedArticleId(id)} />

      {/* Conversion Banner Middle Page (Contact Form) */}
      <MiddleCTA />

      {/* Footer & Partner Seals Badges */}
      <Footer />
    </div>
  );
}

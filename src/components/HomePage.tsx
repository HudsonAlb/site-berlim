import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import HeroCarousel from './HeroCarousel';
import LogosMarquee from './LogosMarquee';
import AboutSummary from './AboutSummary';
import BDashSection from './BDashSection';
import SolutionsGrid from './SolutionsGrid';
import MiddleCTA from './MiddleCTA';
import SuccessCases from './SuccessCases';
// import TestimonialsTabs from './TestimonialsTabs';
import BlogCarousel from './BlogCarousel';
import Footer from './Footer';

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Land directly on the shared section when the page loads with a hash in the URL.
  // Re-applied for ~1.5s because images further down the page still shift layout
  // after the first paint, which would otherwise drift the scroll position.
  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.replace('#', '');

    let attempts = 0;
    const interval = setInterval(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'auto' });
      attempts++;
      if (attempts >= 15) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      {/* Success Metric Cases */}
      <SuccessCases />

      {/* News & Ideias (Berlim Events & Articles) */}
      <BlogCarousel onOpenArticle={(id) => navigate(`/news/${id}`)} />

      {/* Conversion Banner Middle Page (Contact Form) */}
      <MiddleCTA />

      {/* Social Proof Testimonials Interactive Tabs (Feedback Section) - Oculto temporariamente para o lançamento */}
      {/* <TestimonialsTabs /> */}

      {/* Footer & Partner Seals Badges */}
      <Footer />
    </div>
  );
}

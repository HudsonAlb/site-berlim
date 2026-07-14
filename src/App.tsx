import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import LogosMarquee from './components/LogosMarquee';
import AboutSummary from './components/AboutSummary';
import BDashSection from './components/BDashSection';
import SolutionsGrid from './components/SolutionsGrid';
import MiddleCTA from './components/MiddleCTA';
import SuccessCases from './components/SuccessCases';
import TestimonialsTabs from './components/TestimonialsTabs';
// import BlogCarousel from './components/BlogCarousel';
import Footer from './components/Footer';

export default function App() {
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

      {/* Conversion Banner Middle Page */}
      <MiddleCTA />

      {/* Market Insights & Blog Carousel (On stand-by)
      <BlogCarousel />
      */}

      {/* Footer & Partner Seals Badges */}
      <Footer />
    </div>
  );
}


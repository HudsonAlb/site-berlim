import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import LogosMarquee from './components/LogosMarquee';
import AboutSummary from './components/AboutSummary';
import BDashSection from './components/BDashSection';
import SolutionsGrid from './components/SolutionsGrid';
import MiddleCTA from './components/MiddleCTA';
import SuccessCases from './components/SuccessCases';
// import TestimonialsTabs from './components/TestimonialsTabs';
import BlogCarousel from './components/BlogCarousel';
import NewsDetailPage from './components/NewsDetailPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfUsePage from './components/TermsOfUsePage';
import BlogPage from './components/BlogPage';
import Footer from './components/Footer';

export default function App() {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState<boolean>(false);
  const [showTermsOfUse, setShowTermsOfUse] = useState<boolean>(false);
  const [showBlog, setShowBlog] = useState<boolean>(false);

  // If terms of use page is selected
  if (showTermsOfUse) {
    return (
      <TermsOfUsePage
        onNavigateHome={() => setShowTermsOfUse(false)}
        onOpenPrivacyPolicy={() => {
          setShowTermsOfUse(false);
          setShowPrivacyPolicy(true);
        }}
        onOpenBlog={() => {
          setShowTermsOfUse(false);
          setShowBlog(true);
        }}
      />
    );
  }

  // If blog page is selected
  if (showBlog) {
    return (
      <BlogPage
        onNavigateHome={() => setShowBlog(false)}
      />
    );
  }

  // If privacy policy page is selected
  if (showPrivacyPolicy) {
    return (
      <PrivacyPolicyPage
        onNavigateHome={() => setShowPrivacyPolicy(false)}
      />
    );
  }

  // If a news article page is selected, render the dedicated News Detail Page view
  if (selectedArticleId) {
    return (
      <NewsDetailPage 
        articleId={selectedArticleId} 
        onNavigateHome={() => setSelectedArticleId(null)} 
        onSelectArticle={(id) => setSelectedArticleId(id)} 
        onOpenBlog={() => {
          setSelectedArticleId(null);
          setShowBlog(true);
        }}
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-[#0052ff]/10 selection:text-[#0052ff]">
      {/* Navbar */}
      <Navbar onOpenBlog={() => setShowBlog(true)} />

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
      <BlogCarousel onOpenArticle={(id) => setSelectedArticleId(id)} />

      {/* Conversion Banner Middle Page (Contact Form) */}
      <MiddleCTA />

      {/* Social Proof Testimonials Interactive Tabs (Feedback Section) - Oculto temporariamente para o lançamento */}
      {/* <TestimonialsTabs /> */}

      {/* Footer & Partner Seals Badges */}
      <Footer 
        onOpenPrivacyPolicy={() => setShowPrivacyPolicy(true)} 
        onOpenBlog={() => setShowBlog(true)}
        onOpenTermsOfUse={() => setShowTermsOfUse(true)}
      />
    </div>
  );
}

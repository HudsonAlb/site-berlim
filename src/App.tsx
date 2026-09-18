import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import NewsDetailPage from './components/NewsDetailPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfUsePage from './components/TermsOfUsePage';
import BlogPage from './components/BlogPage';
import CompanyOnboardingPage from './components/CompanyOnboardingPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPage />} />
      <Route path="/news/:id" element={<NewsDetailPage />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
      <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
      <Route path="/onboarding" element={<CompanyOnboardingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

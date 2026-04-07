import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import CustomDashboardsPage from "./pages/CustomDashboardsPage";
import SEORankingPage from "./pages/SEORankingPage";
import BrandingDigitalPage from "./pages/BrandingDigitalPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import QualifyPage from "./pages/QualifyPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App overflow-x-hidden max-w-full">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/dashboards" element={<CustomDashboardsPage />} />
          <Route path="/services/seo-ranking" element={<SEORankingPage />} />
          <Route path="/services/branding-digital" element={<BrandingDigitalPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/qualify" element={<QualifyPage />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

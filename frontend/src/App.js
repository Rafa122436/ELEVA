import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import CustomDashboardsPage from "./pages/CustomDashboardsPage";
import SEORankingPage from "./pages/SEORankingPage";
import BrandingDigitalPage from "./pages/BrandingDigitalPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/dashboards" element={<CustomDashboardsPage />} />
          <Route path="/services/seo-ranking" element={<SEORankingPage />} />
          <Route path="/services/branding-digital" element={<BrandingDigitalPage />} />
          <Route path="/sobre" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

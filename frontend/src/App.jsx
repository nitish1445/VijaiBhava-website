import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DisclaimerModal from "./components/DisclaimerModal";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import ServiceDetail from "./pages/ServiceDetail";
import People from "./pages/People";
import LawyerDetail from "./pages/LawyerDetail";
import Awards from "./pages/Awards";
import Insights from "./pages/Insights";
import Career from "./pages/Career";
import CareerDetail from "./pages/CareerDetail";
import Contact from "./pages/Contact";
import DataProtectionPage from "./pages/DataProtectionPage";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <DisclaimerModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<LawyerDetail />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/careers/:slug" element={<CareerDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<DataProtectionPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a1628] text-center px-6 pt-24">
              <span className="section-label">404</span>
              <h1 className="font-serif text-6xl text-white font-light mb-4">Page Not Found</h1>
              <p className="text-white/50 text-sm mb-8">The page you are looking for does not exist.</p>
              <a href="/" className="btn-gold">Return Home</a>
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import ServiceAreas from "./pages/ServiceAreas";
import WhyTrustUs from "./pages/WhyTrustUs";
import Team from "./pages/Team";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { Toaster } from "./components/ui/sonner";

// Layout wrapper to conditionally render header/footer
function Layout({ children }) {
  const location = useLocation();
  const isTeamPage = location.pathname === '/team';

  return (
    <div className="flex flex-col min-h-screen">
      {!isTeamPage && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!isTeamPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/why-trust-us" element={<WhyTrustUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;

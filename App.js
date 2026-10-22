
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Programs from "./components/Programs";
import Highlights from "./components/Highlights";
import Facilities from "./components/Facilities";
import AdmissionProcess from "./components/AdmissionProcess";
import ImportantDates from "./components/ImportantDates";
import Documents from "./components/Documents";
import Fees from "./components/Fees";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal";

import "./App.css";

function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  function openEnquiry() {
    setIsEnquiryOpen(true);
  }

  function closeEnquiry() {
    setIsEnquiryOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = isEnquiryOpen ? "hidden" : "";

    function handleEscape(event) {
      if (event.key === "Escape") {
        closeEnquiry();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isEnquiryOpen]);

 return (
  <>
    <Navbar onEnquire={openEnquiry} />

    <main>
      <Hero onEnquire={openEnquiry} />

      <WhyChooseUs />

      <Programs />

      <Highlights />

      <Facilities />

      <AdmissionProcess />

      <div className="section info-grid">
        <ImportantDates />
        <Documents />
      </div>

      <Fees />

      <Testimonials />

      <FAQ />

      <FinalCTA onEnquire={openEnquiry} />
    </main>

    <Footer />

    {isEnquiryOpen && (
      <EnquiryModal onClose={closeEnquiry} />
    )}
  </>
);
}

export default App;

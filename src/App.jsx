import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Insights from "./pages/Insights/Insights";
import ProjectsArchive from "./pages/OurProjects/ProjectArchive/ProjectsArchive";
import ProjectSingle from "./pages/OurProjects/ProjectSingle/ProjectSingle";
import Categories from "./pages/Categories/Categories";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

/* ---------- Inner app: can safely use useLanguage ---------- */
function AppContent() {
  const location = useLocation();
  const { lang } = useLanguage(); // ✅ now inside Provider

  // AOS refresh on route change
  useEffect(() => {
    AOS.refresh();
  }, [location]);

  // Always scroll to the top when navigating to a new route
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  // AOS init once
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Update <html> and <body> when language changes
  useEffect(() => {
    const isArabic = lang === "ar";

    document.documentElement.lang = isArabic ? "ar" : "en";

    document.body.classList.toggle("font-zarid", isArabic);
    document.body.classList.toggle("font-sans", !isArabic);
  }, [lang]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/latest-news" element={<Insights />} />
        <Route path="/our-projects" element={<ProjectsArchive />} />
        <Route path="/our-projects/:sectorSlug/:locationSlug" element={<Categories />} />
        <Route path="/our-projects/:slug" element={<ProjectSingle />} />
      </Route>
    </Routes>
  );
}

/* ---------- Top-level App wraps everything in LanguageProvider ---------- */
function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;

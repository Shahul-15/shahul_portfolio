import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AnalyticsBackground from '../components/AnalyticsBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* High-performance canvas network background */}
      <AnalyticsBackground />

      {/* Sticky navigation header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

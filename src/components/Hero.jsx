import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { personalData } from '../data/personalData';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Electronics & Communication Engineer",
    "Python & Data Science Enthusiast",
    "Dashboard Designer",
    "Problem Solver"
  ];

  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];
    
    const tick = () => {
      if (!isDeleting) {
        setTypedText(currentFullText.substring(0, typedText.length + 1));
        if (typedText === currentFullText) {
          timer = setTimeout(() => setIsDeleting(true), 1800);
          return;
        }
      } else {
        setTypedText(currentFullText.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden px-6"
    >
      {/* Decorative dashboard background circles */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-red-600/5 blur-[150px] pointer-events-none" />

      {/* Main Container - Split grid layout */}
      <div className="max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-center lg:text-left w-full py-12">
        
        {/* Left Column: Bio Details (Spans 7 columns on large) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start order-2 lg:order-1">
          
          {/* Analytics Capsule Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/30 border border-red-500/20 text-red-500 text-xs font-semibold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(var(--accent),0.15)] animate-pulse"
          >
            <span className="w-2 h-2 rounded-full bg-red-500" />
            Ready to Work
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 select-none leading-tight"
          >
            Thabre Alam Shahul Hameed A 
            {/* <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-red-200 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(var(--accent),0.2)]">
              Meaningful Insights
            </span> */}
          </motion.h1>

          {/* Subtitle / Typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl font-mono text-neutral-300 h-12 flex items-center justify-center lg:justify-start mb-6 w-full"
          >
            <span>
              {typedText}
              <span className="text-red-500 animate-pulse font-bold ml-1">|</span>
            </span>
          </motion.div>

          {/* Short introduction paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base text-neutral-400 max-w-xl mb-10 leading-relaxed font-sans"
          >
            {personalData.subtitle}
          </motion.p>

          {/* Call to action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full"
          >
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(var(--accent),0.3)] hover:shadow-[0_0_30px_rgba(var(--accent),0.6)] hover:-translate-y-0.5 transition-all duration-300 group"
            >
              Contact
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/ThabreAlam.pdf"
              download="Thabre_Alam_Resume.pdf"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-600/50 text-white font-medium text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FiDownload className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Column: Premium Glowing Photo Frame (Spans 5 columns on large) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-red-600/5 rounded-full blur-3xl pointer-events-none scale-75" />
          
          {/* Tech Frame Container */}
          <div className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[360px] p-3 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_0_30px_rgba(var(--accent),0.1)] flex items-center justify-center group overflow-hidden">
            
            {/* Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500 rounded-tl-3xl opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500 rounded-tr-3xl opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500 rounded-bl-3xl opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500 rounded-br-3xl opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Inner Border outline */}
            <div className="absolute inset-2 border border-white/5 rounded-2xl group-hover:border-red-500/20 transition-colors pointer-events-none" />

            {/* Photo / Fallback Avatar */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/60 flex items-center justify-center">
              <img
                src="/shapic.jpeg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.nextSibling;
                  if (fallback) fallback.style.display = 'flex';
                }}
                alt={personalData.name}
                className="w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-100"
              />
              
              {/* Fallback SVGs inside the frame */}
              <div 
                style={{ display: 'none' }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center p-6 bg-gradient-to-b from-black/80 to-red-950/20"
              >
                <svg className="w-24 h-24 text-red-500/40 group-hover:text-red-500/80 transition-colors duration-500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="35" r="18" stroke="currentColor" strokeWidth="2" />
                  <path d="M20 80 C20 62, 35 55, 50 55 C65 55, 80 62, 80 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" className="animate-[spin_40s_linear_infinite]" />
                  <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="0.5" strokeDasharray="30 2" className="animate-[spin_20s_linear_infinite_reverse]" />
                </svg>
                <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">
                  <span className="text-red-500 animate-pulse">●</span> System Idle
                </div>
              </div>
            </div>

            {/* Glass highlight overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>

      {/* Floating Mouse scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Scroll</span>
        <div className="w-[18px] h-[30px] rounded-full border border-neutral-400 p-[3px] flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-red-500 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

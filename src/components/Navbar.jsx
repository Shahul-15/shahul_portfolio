import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { SiGoogleanalytics } from 'react-icons/si';

const navItems = [
  { label: 'Home', target: '#home' },
  { label: 'About', target: '#about' },
  { label: 'Skills', target: '#skills' },
  { label: 'Education', target: '#education' },
  { label: 'Internships', target: '#experience' },
  { label: 'Projects', target: '#projects' },
  { label: 'Certifications', target: '#certifications' },
  { label: 'Contact', target: '#contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track page scroll to add background opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to highlight active navigation link
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section occupies center of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navItems.forEach((item) => {
      const el = document.querySelector(item.target);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-red-600 origin-left z-50 shadow-[0_0_10px_rgb(var(--accent))]"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-lg bg-black/60 border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo / Branding */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative p-2 rounded-lg bg-red-600/10 border border-red-600/30 group-hover:border-red-600 transition-all duration-300">
              <SiGoogleanalytics className="text-red-500 w-5 h-5 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-lg bg-red-600/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-semibold text-white tracking-wider text-lg">
              SHAHUL<span className="text-red-500 font-bold">.</span>PORTFOLIO
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1 bg-white/5 border border-white/5 rounded-full p-1.5 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.target.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.target}
                    onClick={(e) => handleNavClick(e, item.target)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBG"
                        className="absolute inset-0 bg-red-600/80 rounded-full -z-10 shadow-[0_0_12px_rgba(var(--accent),0.4)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </div>
            {/* No theme switcher button needed */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-red-600/50 text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] bg-black/95 backdrop-blur-xl border-b border-white/10 z-30 p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.target.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.target}
                    onClick={(e) => handleNavClick(e, item.target)}
                    className={`py-2 px-4 rounded-lg font-medium text-sm tracking-wider uppercase transition-colors ${
                      isActive 
                        ? 'bg-red-600/20 text-red-400 border border-red-600/30' 
                        : 'text-neutral-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

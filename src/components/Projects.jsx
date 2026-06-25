import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectData } from '../data/projectData';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const categories = ["All", "Data Analytics", "ECE & VLSI Projects"];

// Inline SVGs to serve as high-end glowing background placeholders based on project category
const CategoryMockup = ({ category, title = "" }) => {
  const lowerTitle = title.toLowerCase();
  
  // 1. ECE/VLSI: FIR Filter (RTL Chip layout)
  if (lowerTitle.includes("vlsi") || lowerTitle.includes("filter") || lowerTitle.includes("verilog")) {
    return (
      <svg className="w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="70" y="35" width="60" height="50" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.2)" />
        {/* Pins */}
        <line x1="50" y1="45" x2="70" y2="45" stroke="var(--accent-hex)" strokeWidth="1.5" />
        <line x1="50" y1="60" x2="70" y2="60" stroke="var(--accent-hex)" strokeWidth="1.5" />
        <line x1="50" y1="75" x2="70" y2="75" stroke="var(--accent-hex)" strokeWidth="1.5" />
        <line x1="130" y1="45" x2="150" y2="45" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        <line x1="130" y1="60" x2="150" y2="60" stroke="var(--accent-hex)" strokeWidth="1.5" />
        <line x1="130" y1="75" x2="150" y2="75" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        {/* Core details */}
        <circle cx="100" cy="60" r="10" fill="rgba(var(--accent), 0.1)" stroke="var(--accent-hex)" strokeWidth="1" strokeDasharray="3 3"/>
        <text x="83" y="64" fill="#FFFFFF" fontSize="10" fontFamily="monospace">RTL</text>
      </svg>
    );
  }

  // 2. ECE/VLSI: Vehicle Number Plate Detection (OCR scanning mockup)
  if (lowerTitle.includes("plate") || lowerTitle.includes("detection") || lowerTitle.includes("vehicle")) {
    return (
      <svg className="w-full h-full opacity-35 group-hover:opacity-55 transition-opacity duration-500" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Bounding box for plate */}
        <rect x="35" y="35" width="130" height="50" rx="4" fill="rgba(var(--accent), 0.05)" stroke="var(--accent-hex)" strokeWidth="1.5" />
        {/* OCR corners (glowing target) */}
        <path d="M30 45 L30 30 L45 30" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M170 45 L170 30 L155 30" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 75 L30 90 L45 90" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M170 75 L170 90 L155 90" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        {/* Scanning laser line */}
        <line x1="30" y1="60" x2="170" y2="60" stroke="var(--accent-hex)" strokeWidth="1.5" strokeDasharray="5 3" />
        {/* OCR Plate Text representation */}
        <text x="50" y="66" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="bold" letterSpacing="1.5">TN 45 AB 1234</text>
        {/* Extra telemetry info */}
        <text x="40" y="47" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">CAMERA FEED: OK</text>
        <text x="125" y="80" fill="var(--accent-hex)" fontSize="6" fontFamily="monospace" fontWeight="bold">MATCH 98%</text>
      </svg>
    );
  }

  // 3. Data Analytics: AI Job Market (nodes + salary bar growth)
  if (lowerTitle.includes("job") || lowerTitle.includes("market") || lowerTitle.includes("hiring")) {
    return (
      <svg className="w-full h-full opacity-35 group-hover:opacity-55 transition-opacity duration-500" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Salary growth bars */}
        <rect x="25" y="75" width="8" height="20" rx="1" fill="rgba(255,255,255,0.1)" />
        <rect x="37" y="60" width="8" height="35" rx="1" fill="rgba(var(--accent), 0.2)" stroke="var(--accent-hex)" strokeWidth="0.5" />
        <rect x="49" y="45" width="8" height="50" rx="1" fill="rgba(var(--accent), 0.4)" stroke="var(--accent-hex)" strokeWidth="0.5" />
        <rect x="61" y="30" width="8" height="65" rx="1" fill="var(--accent-hex)" />
        
        {/* Node representing hiring cluster */}
        <circle cx="130" cy="50" r="16" fill="rgba(var(--accent), 0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx="130" cy="50" r="4" fill="#FFFFFF" />
        
        <circle cx="105" cy="80" r="8" fill="rgba(var(--accent), 0.1)" stroke="var(--accent-hex)" strokeWidth="1" />
        <circle cx="105" cy="80" r="2" fill="var(--accent-hex)" />
        
        <circle cx="155" cy="30" r="8" fill="rgba(var(--accent), 0.1)" stroke="var(--accent-hex)" strokeWidth="1" />
        <circle cx="155" cy="30" r="2" fill="var(--accent-hex)" />
        
        {/* Connecting lines */}
        <line x1="126" y1="54" x2="109" y2="76" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
        <line x1="134" y1="46" x2="151" y2="34" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
        
        <text x="120" y="95" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">Job Growth</text>
        <text x="120" y="105" fill="var(--accent-hex)" fontSize="8" fontFamily="monospace" fontWeight="bold">+18.5%</text>
      </svg>
    );
  }

  // 5. Data Analytics: Retail Inventory (Database / Stock)
  if (lowerTitle.includes("inventory") || lowerTitle.includes("retail") || lowerTitle.includes("stock")) {
    return (
      <svg className="w-full h-full opacity-35 group-hover:opacity-55 transition-opacity duration-500" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Database Cylinders */}
        <path d="M60 40 C 60 30, 100 30, 100 30 C 100 30, 140 30, 140 40 C 140 50, 100 50, 100 50 C 100 50, 60 50, 60 40 Z" fill="rgba(var(--accent), 0.1)" stroke="var(--accent-hex)" strokeWidth="1" />
        <path d="M60 40 L60 60 C 60 70, 100 70, 100 70 C 100 70, 140 70, 140 60 L140 40" stroke="var(--accent-hex)" strokeWidth="1" />
        <path d="M60 60 L60 80 C 60 90, 100 90, 100 90 C 100 90, 140 90, 140 80 L140 60" stroke="var(--accent-hex)" strokeWidth="1" strokeDasharray="3 2" />
        {/* Inner lines on DB */}
        <line x1="80" y1="58" x2="120" y2="58" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="80" y1="78" x2="120" y2="78" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        {/* Barcode / Stock box symbol */}
        <rect x="25" y="45" width="20" height="20" rx="2" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="30" y1="50" x2="40" y2="50" stroke="var(--accent-hex)" strokeWidth="1.5" />
        <line x1="30" y1="55" x2="35" y2="55" stroke="#FFFFFF" strokeWidth="1" />
        <line x1="30" y1="60" x2="38" y2="60" stroke="var(--accent-hex)" strokeWidth="1" />
        {/* Inventory optimization trend arrow */}
        <path d="M150 75 L165 60 L175 65 L190 50" stroke="var(--accent-hex)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M180 50 L190 50 L190 60" stroke="var(--accent-hex)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="148" y="85" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">OPTIMIZED</text>
        <text x="60" y="105" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">SQL DATABASE</text>
      </svg>
    );
  }
  
  // 4. Default Data Analytics
  if (category === "Data Analytics") {
    return (
      <svg className="w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 100 L50 70 L90 85 L130 40 L170 60 L190 20" stroke="var(--accent-hex)" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 100 L50 70 L90 85 L130 40 L170 60 L190 20 L190 110 L10 110 Z" fill="url(#grad)" opacity="0.1" />
        <circle cx="50" cy="70" r="3" fill="var(--accent-hex)" />
        <circle cx="90" cy="85" r="3" fill="var(--accent-hex)" />
        <circle cx="130" cy="40" r="3" fill="var(--accent-hex)" />
        <circle cx="170" cy="60" r="3" fill="var(--accent-hex)" />
        <circle cx="190" cy="20" r="4" fill="#FFFFFF" />
        {/* Scatter points */}
        <circle cx="30" cy="30" r="2" fill="rgba(255,255,255,0.3)" />
        <circle cx="70" cy="50" r="1.5" fill="rgba(255,255,255,0.3)" />
        <circle cx="110" cy="25" r="2.5" fill="rgba(255,255,255,0.2)" />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(var(--accent))' }} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  // Default/ECE Projects
  return (
    <svg className="w-full h-full opacity-30 group-hover:opacity-50 transition-opacity duration-500" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 60 Q 40 10, 80 60 T 150 60 T 190 60" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <path d="M10 60 Q 30 100, 70 60 T 130 60 T 190 60" stroke="var(--accent-hex)" strokeWidth="1.5" strokeDasharray="4 2" />
      <line x1="10" y1="60" x2="190" y2="60" stroke="rgba(255,255,255,0.1)" />
      <circle cx="70" cy="60" r="4" fill="#FFFFFF" />
      <circle cx="130" cy="60" r="4" fill="var(--accent-hex)" />
    </svg>
  );
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projectData
    : projectData.filter(proj => proj.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col mb-16">
        <span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2">// Selected Achievements</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Project Registry</h2>
        <div className="h-[2px] w-20 bg-red-600 mt-4 shadow-[0_0_10px_#ff2d2d]" />
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-12 bg-white/5 p-2 rounded-2xl border border-white/5 backdrop-blur-md w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
              activeFilter === cat
                ? 'bg-red-600 text-white shadow-[0_0_12px_rgba(255,45,45,0.3)]'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-red-600/30 hover:shadow-[0_4px_30px_rgba(255,45,45,0.03)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* SVG mock graph visual */}
                <div className="relative w-full h-[120px] rounded-xl bg-black/40 border border-white/5 mb-6 overflow-hidden flex items-center justify-center">
                  <CategoryMockup category={project.category} title={project.title} />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-neutral-900/80 text-neutral-400 border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-6">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-neutral-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-red-500 transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

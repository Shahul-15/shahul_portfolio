import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalData';
import { GiCpu, GiPieChart, GiCircuitry, GiClick } from 'react-icons/gi';

// Map pillars to icons
const pillarIcons = {
  "ECE Student": <GiCpu className="w-8 h-8 text-red-500" />,
  "Data Science Enthusiast": <GiPieChart className="w-8 h-8 text-red-500" />,
  "Dashboard Designer": <GiCircuitry className="w-8 h-8 text-red-500" />,
  "Problem Solver": <GiClick className="w-8 h-8 text-red-500" />
};

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-0 w-[200px] h-[200px] rounded-full bg-red-600/5 blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col mb-16">
        <span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2">// Profile Summary</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">About Me</h2>
        <div className="h-[2px] w-20 bg-red-600 mt-4 shadow-[0_0_10px_#ff2d2d]" />
      </div>

      {/* Grid Layout inspired by SaaS dashboards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        
        {/* Left Column: Bio Card (spans 1 row, 2 cols on wide) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 relative p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between overflow-hidden group shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        >
          {/* Subtle grid layout in background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-white mb-6 tracking-wide">
              Data-Driven Engineering Approach
            </h3>
            <p className="text-neutral-400 leading-relaxed text-sm md:text-base font-sans mb-8">
              {personalData.about.description}
            </p>
          </div>

          {/* Stats Summary Widget inside the bio card */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/5">
            {personalData.about.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">{stat.label}</span>
                <span className="text-2xl md:text-3xl font-bold font-mono text-white bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-red-600/5 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
        </motion.div>

        {/* Right Column: ECE Student (Pillar 1) */}
        <motion.div
          variants={itemVariants}
          className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-red-600/40 hover:shadow-[0_0_20px_rgba(255,45,45,0.1)] transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="p-3 bg-red-600/10 rounded-lg w-fit border border-red-600/20 mb-6">
              {pillarIcons["ECE Student"]}
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              {personalData.about.pillars[0].title}
            </h4>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {personalData.about.pillars[0].description}
            </p>
          </div>
          <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mt-6">Module 01</span>
        </motion.div>

        {/* Dynamic Analytics Pillar (Pillar 2) */}
        <motion.div
          variants={itemVariants}
          className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-red-600/40 hover:shadow-[0_0_20px_rgba(255,45,45,0.1)] transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="p-3 bg-red-600/10 rounded-lg w-fit border border-red-600/20 mb-6">
              {pillarIcons["Data Science Enthusiast"]}
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              {personalData.about.pillars[1].title}
            </h4>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {personalData.about.pillars[1].description}
            </p>
          </div>
          <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mt-6">Module 02</span>
        </motion.div>

        {/* Dashboard Designer (Pillar 3) */}
        <motion.div
          variants={itemVariants}
          className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-red-600/40 hover:shadow-[0_0_20px_rgba(255,45,45,0.1)] transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="p-3 bg-red-600/10 rounded-lg w-fit border border-red-600/20 mb-6">
              {pillarIcons["Dashboard Designer"]}
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              {personalData.about.pillars[2].title}
            </h4>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {personalData.about.pillars[2].description}
            </p>
          </div>
          <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mt-6">Module 03</span>
        </motion.div>

        {/* Problem Solver (Pillar 4) */}
        <motion.div
          variants={itemVariants}
          className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-red-600/40 hover:shadow-[0_0_20px_rgba(255,45,45,0.1)] transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="p-3 bg-red-600/10 rounded-lg w-fit border border-red-600/20 mb-6">
              {pillarIcons["Problem Solver"]}
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              {personalData.about.pillars[3].title}
            </h4>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {personalData.about.pillars[3].description}
            </p>
          </div>
          <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mt-6">Module 04</span>
        </motion.div>

      </motion.div>
    </section>
  );
}

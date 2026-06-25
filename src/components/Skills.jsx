import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData';
import { FiCode, FiBriefcase, FiTrendingUp, FiCpu } from 'react-icons/fi';

export default function Skills() {
  
  // FUTURE SCALABILITY GUIDE:
  // If you want to add a NEW skill category (e.g. "Cloud Services"):
  // 1. Add your list of skills in `src/data/skillsData.js` (e.g., cloud: ["AWS", "Azure"])
  // 2. Copy and paste one of the objects inside this `categories` array below:
  //    {
  //      title: "Cloud Services",
  //      icon: <FiCpu className="w-5 h-5 text-red-500" />,
  //      skills: skillsData.cloud
  //    }
  const categories = [
    {
      title: "Programming Languages & Libraries",
      icon: <FiCode className="w-5 h-5 text-red-500" />,
      skills: skillsData.programming
    },
    {
      title: "Tools & Software Suites",
      icon: <FiBriefcase className="w-5 h-5 text-red-500" />,
      skills: skillsData.tools
    },
    {
      title: "Analytics & Data Capabilities",
      icon: <FiTrendingUp className="w-5 h-5 text-red-500" />,
      skills: skillsData.analytics
    },
    {
      title: "ECE Core Engineering",
      icon: <FiCpu className="w-5 h-5 text-red-500" />,
      skills: skillsData.eceCore
    }
  ];

  return (
    <section id="skills" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[250px] h-[250px] rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col mb-16">
        <span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2">// Capabilities</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Skill Matrices</h2>
        <div className="h-[2px] w-20 bg-red-600 mt-4 shadow-[0_0_10px_rgb(var(--accent))]" />
      </div>

      {/* 2x2 Grid of Capability Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-red-600/30 hover:shadow-[0_4px_30px_rgba(var(--accent),0.03)] transition-all duration-300 flex flex-col group"
          >
            {/* Card Title + Icon */}
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
              <div className="p-2 bg-red-600/10 rounded-lg border border-red-500/20 text-red-500 group-hover:bg-red-600/25 transition-colors duration-300">
                {cat.icon}
              </div>
              {cat.title}
            </h3>

            {/* List of Skills (Flex-wrap Tags) */}
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3.5 py-2 rounded-xl text-xs font-medium bg-neutral-900/60 text-neutral-300 border border-white/5 hover:border-red-500/35 hover:text-white hover:bg-red-600/5 hover:shadow-[0_0_10px_rgba(var(--accent),0.15)] transition-all duration-300 select-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experienceData';
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col mb-16">
        <span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2">// Work History</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Internships & Experience</h2>
        <div className="h-[2px] w-20 bg-red-600 mt-4 shadow-[0_0_10px_#ff2d2d]" />
      </div>

      {/* Timeline Wrapper */}
      <div className="relative border-l border-white/10 md:translate-x-0 ml-4 md:ml-6 py-4 flex flex-col gap-12">
        {experienceData.map((exp, index) => {
          return (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-neutral-600 group-hover:border-red-500 transition-colors duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-red-500 shadow-[0_0_8px_#ff2d2d] transition-all duration-300" />
              </div>

              {/* Card Container */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-red-600/30 hover:shadow-[0_4px_30px_rgba(255,45,45,0.03)] transition-all duration-300"
              >
                {/* Ribbon Tag for current roles */}
                {/* {exp.period.includes('Present') && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase bg-red-600/20 text-red-400 border border-red-600/30 shadow-[0_0_10px_rgba(255,45,45,0.2)]">
                    Current
                  </span>
                )} */}

                <div className="flex flex-col gap-2 mb-6">
                  
                  {/* Role Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors flex items-center gap-2">
                    <FiBriefcase className="w-4 h-4 text-red-500" />
                    {exp.role}
                  </h3>

                  {/* Company Name */}
                  <span className="text-sm font-semibold text-neutral-200">
                    {exp.company}
                  </span>

                  {/* Metadata Row: Period & Location */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mt-2">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="w-3.5 h-3.5 text-neutral-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin className="w-3.5 h-3.5 text-neutral-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="flex flex-col gap-3 font-sans text-neutral-400 text-xs sm:text-sm">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-2 items-start leading-relaxed">
                      <span className="text-red-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_#ff2d2d]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

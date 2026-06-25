import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalData';
import { FaGraduationCap } from 'react-icons/fa';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-1/4 right-0 w-[200px] h-[200px] rounded-full bg-red-600/5 blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col mb-16">
        <span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2">// Academic History</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Education</h2>
        <div className="h-[2px] w-20 bg-red-600 mt-4 shadow-[0_0_10px_#ff2d2d]" />
      </div>

      {/* Education Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {personalData.education.map((edu, index) => {
          const isBE = edu.degree.includes('Bachelor');
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative p-8 rounded-2xl bg-white/5 border backdrop-blur-md flex flex-col justify-between overflow-hidden group transition-all duration-300 ${
                isBE 
                  ? 'border-red-500/30 shadow-[0_4px_30px_rgba(255,45,45,0.03)] hover:border-red-500' 
                  : 'border-white/10 hover:border-red-600/30'
              }`}
            >
              <div>
                {/* Academic Cap Icon */}
                <div className={`p-3 rounded-lg w-fit mb-6 flex items-center justify-center ${
                  isBE ? 'bg-red-600/20 border border-red-500/30 text-red-500' : 'bg-white/5 border border-white/15 text-white/70'
                }`}>
                  <FaGraduationCap className="w-6 h-6" />
                </div>

                {/* Degree / Certificate Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {edu.degree}
                </h3>
                
                {/* Major */}
                {edu.major && (
                  <p className="text-xs font-mono text-neutral-400 mb-4 uppercase tracking-wider">{edu.major}</p>
                )}
                
                {/* Institution name */}
                <p className="text-sm font-semibold text-neutral-300 mb-4">{edu.institution}</p>
                
                {/* Descriptive details */}
                <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-6">
                  {edu.details}
                </p>
              </div>

              {/* Footer row: Score & Timeline Info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                {edu.score ? (
                  <span className="text-sm font-bold font-mono text-white bg-red-600/10 border border-red-500/20 px-2 py-1 rounded text-red-400 shadow-[0_0_8px_rgba(255,45,45,0.1)]">
                    {edu.score}
                  </span>
                ) : (
                  <div />
                )}
                
                <div className="flex flex-col items-end text-[10px] font-mono text-neutral-500">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1 mt-1">
                    <FiMapPin className="w-3 h-3" />
                    {edu.location.split(',')[0]}
                  </span>
                </div>
              </div>

              {/* Glowing card overlay */}
              {isBE && (
                <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-red-600/5 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-all duration-500" />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

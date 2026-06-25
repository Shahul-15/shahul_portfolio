import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../data/certificationsData';
import { FiAward, FiArrowRight } from 'react-icons/fi';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[200px] h-[200px] rounded-full bg-red-600/5 blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col mb-16">
        <span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2">// Credentials & Achievements</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Certifications & Achievements</h2>
        <div className="h-[2px] w-20 bg-red-600 mt-4 shadow-[0_0_10px_#ff2d2d]" />
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-red-600/30 hover:shadow-[0_4px_30px_rgba(255,45,45,0.03)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header: Icon + Date */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-lg bg-red-600/10 border border-red-600/20 text-red-500 group-hover:bg-red-600/20 transition-all duration-300">
                  <FiAward className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xs font-mono text-neutral-500">
                  Issued: {cert.date}
                </span>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs font-semibold text-neutral-400 mb-6 uppercase tracking-wider">
                {cert.issuer}
              </p>

              {/* Skills Tag block */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {cert.skillsLearned.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-900 text-neutral-400 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Credential Link */}
            {cert.credentialUrl && cert.credentialUrl !== "#" && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-neutral-400 group-hover:text-white transition-colors"
              >
                Validate Credential
                <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

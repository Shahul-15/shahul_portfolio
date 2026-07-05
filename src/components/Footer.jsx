import React from 'react';
import { SiGoogleanalytics } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/5 bg-black/40 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo and signature */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-red-600/10 border border-red-500/20 text-red-500">
            <SiGoogleanalytics className="w-4 h-4" />
          </div>
          <span className="font-semibold text-xs text-white tracking-widest uppercase">
            Shahul<span className="text-red-500 font-bold">.</span>Portfolio
          </span>
        </div>

        {/* Passion message
        <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest text-center">
          Built with React & <span className="text-red-500">Data Driven Passion</span>
        </p> */}

        {/* Copyright & Credit */}
        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="text-[11px] text-neutral-400 font-mono uppercase tracking-widest">
            &copy; 2026 ALL RIGHTS RESERVED.
          </p>
          {/*
          <a
           href="https://medtech-peach.vercel.app/"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-xs font-sans font-bold text-red-500 hover:underline tracking-wide"
          >
            Design & Developed by MEDTECH
          </a> 
          */}
           <p className="text-xs font-sans font-bold text-red-500 tracking-wide">
            Design & Developed by Thabre Alam Shahul Hameed A
            </p>
        </div>

      </div>
    </footer>
  );
}

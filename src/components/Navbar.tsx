/**
 * Top Navigation Bar complying with the Top Bar Contract:
 * Zone 1: Single text element wordmark
 * Zone 2: 4-6 clean text navigation links
 * Zone 3: 1-2 primary actions (Mode Switcher & Quick Export)
 */

import React from 'react';

interface NavbarProps {
  onQuickExport?: () => void;
  copiedState?: boolean;
}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="text-lg font-bold tracking-tight text-white flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>SmartStep Footwear</span>
          </a>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-400 pl-2 border-l border-slate-700">
            KMUTNB / HW5
          </span>
        </div>

        {/* Zone 2: Navigation Links (Clean text with hover state) */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <a href="#problem" className="hover:text-cyan-400 transition-colors">
            Problem
          </a>
          <a href="#root-causes" className="hover:text-cyan-400 transition-colors">
            Root Causes
          </a>
          <a href="#solution" className="hover:text-cyan-400 transition-colors">
            Proposed Solution
          </a>
          <a href="#calculations" className="hover:text-cyan-400 transition-colors">
            Calculations
          </a>
          <a href="#iot-integration" className="hover:text-cyan-400 transition-colors">
            IoT Architecture
          </a>
          <a href="#references" className="hover:text-cyan-400 transition-colors">
            References
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2.5">
        </div>

      </div>
    </header>
  );
};

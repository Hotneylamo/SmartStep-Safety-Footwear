/**
 * Hero Section
 * Academic engineering header for KMUTNB Introduction to Engineering HW5
 * Adheres to ABET SO3 technical communication guidelines
 */

import React from 'react';
import { Cpu, ShieldCheck, Scale, Wifi } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="hero" className="relative pt-12 pb-20 bg-slate-900 text-white overflow-hidden border-b border-slate-800">
      {/* Background CAD grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
      
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academic Institutional Metadata Ribbon */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400 mb-6">
          <span className="text-slate-300">King Mongkut's University of Technology North Bangkok (KMUTNB)</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Department of Mechanical and Aerospace Engineering</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">Introduction to Engineering (HW5)</span>
        </div>

        {/* Primary Project Title */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight text-balance">
            SmartStep: IoT-Enabled Industrial Safety Footwear
          </h1>
          
          {/* Subtitle & Tagline */}
          <p className="mt-4 text-lg sm:text-xl font-medium text-cyan-400 leading-snug">
            Integrated Biomechanical Ankle Stabilization & Autonomous Edge Telemetry System
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            Mitigating musculoskeletal fatigue and severe subtalar inversion traumas through 
            autoclave-cured Carbon-Fiber Reinforced Polymer (CFRP) toe caps, articulated 
            6061-T6 aluminum bilateral support linkages, and real-time 100 Hz inertial edge sensing.
          </p>
        </div>

        {/* Core Technical Metric Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
              <Scale className="w-3.5 h-3.5 text-cyan-400" />
              <span>MASS REDUCTION</span>
            </div>
            <span className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              -312.5 g
            </span>
            <span className="text-xs text-slate-400 font-mono mt-0.5">
              &gt;75% lighter than steel cap
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>IMPACT RESISTANCE</span>
            </div>
            <span className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              101.8 J
            </span>
            <span className="text-xs text-slate-400 font-mono mt-0.5">
              ASTM F2413 drop test passed
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              <span>ANKLE INTEGRITY</span>
            </div>
            <span className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              FS = 2.21
            </span>
            <span className="text-xs text-slate-400 font-mono mt-0.5">
              6061-T6 aluminum hinge strut
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
              <Wifi className="w-3.5 h-3.5 text-cyan-400" />
              <span>EDGE TELEMETRY</span>
            </div>
            <span className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              100 Hz
            </span>
            <span className="text-xs text-slate-400 font-mono mt-0.5">
              ESP32 + MPU6050 fall detection
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

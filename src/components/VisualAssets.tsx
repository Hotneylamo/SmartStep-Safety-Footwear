/**
 * Visual Assets for ABET SO3 Documentation
 * Implements high-precision engineering schematics and CAD cross-sections
 * Strict ABET SO3 Rule: Figure Captions are placed strictly below the visual frame.
 */

import React from 'react';
import { Copy, Check, Eye } from 'lucide-react';

interface VisualFrameProps {
  figureNumber: number;
  title: string;
  caption: string;
  imagePrompt: string;
  onCopyPrompt: (prompt: string) => void;
  isCopied: boolean;
  children: React.ReactNode;
}

export const VisualAssetFrame: React.FC<VisualFrameProps> = ({
  figureNumber,
  title,
  caption,
  imagePrompt,
  onCopyPrompt,
  isCopied,
  children,
}) => {
  return (
    <figure className="my-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden shadow-xs">
      {/* Visual Canvas Display Frame */}
      <div className="relative w-full aspect-16/9 bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-800">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-25" />
        
        {/* Render child engineering schematic */}
        <div className="relative z-10 w-full h-full p-4 flex items-center justify-center">
          {children}
        </div>

        {/* CAD Dimension Overlay Markers */}
        <div className="absolute top-3 left-3 text-[10px] font-mono text-cyan-400/80 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
          ISO 9001 / ABET SO3 SCHEMATIC
        </div>

        <div className="absolute top-3 right-3 flex items-center gap-2">
          <button
            onClick={() => onCopyPrompt(imagePrompt)}
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded transition-colors"
            title="Copy high-detail Midjourney/DALL-E image prompt for Google Sites"
          >
            {isCopied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Prompt Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-cyan-400" />
                <span>Copy Image Prompt</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ABET SO3 Standard: Figure Caption PLACED STRICTLY BELOW THE FRAME */}
      <figcaption className="p-4 bg-slate-50 dark:bg-slate-900/90 text-left border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-baseline gap-2 mb-1.5">
          <span className="text-xs font-bold font-mono tracking-tight text-cyan-700 dark:text-cyan-400">
            Figure {figureNumber}:
          </span>
          <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">
            {title}
          </span>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
          {caption}
        </p>

        {/* Google Sites placement instruction */}
        <div className="mt-3 pt-2.5 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Google Sites Cue: [Insert Figure {figureNumber} graphic directly above this caption text block]</span>
          <span className="text-slate-400">Target Width: 100% / Centered</span>
        </div>
      </figcaption>
    </figure>
  );
};

/**
 * Schematic 1: Side-by-side Boot Comparison
 */
export const SchematicBootComparison: React.FC = () => {
  return (
    <svg viewBox="0 0 800 450" className="w-full h-full max-h-96" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background divider */}
      <line x1="400" y1="20" x2="400" y2="430" stroke="#334155" strokeDasharray="4 4" strokeWidth="1.5" />
      
      {/* LEFT: Conventional Boot */}
      <g transform="translate(40, 40)">
        <text x="160" y="25" fill="#94A3B8" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          CONVENTIONAL SAFETY FOOTWEAR
        </text>
        <text x="160" y="45" fill="#EF4444" fontSize="11" textAnchor="middle" fontFamily="monospace">
          Total Mass: 800 - 1,000 g / shoe
        </text>

        {/* Boot silhouette */}
        <path
          d="M40 280 C40 220 70 170 100 140 L100 80 L180 80 L180 150 C210 180 230 200 270 210 L300 210 C320 230 330 250 330 280 L40 280 Z"
          fill="#1E293B"
          stroke="#475569"
          strokeWidth="2"
        />
        {/* Dense heavy outsole */}
        <rect x="35" y="280" width="300" height="32" rx="4" fill="#0F172A" stroke="#EF4444" strokeWidth="2" />
        <text x="185" y="300" fill="#F87171" fontSize="10" textAnchor="middle" fontFamily="monospace">
          Dense Vulcanized Rubber (ρ ≈ 1.35 g/cm³)
        </text>

        {/* Steel Toe Cap highlight */}
        <path
          d="M260 210 C290 220 325 240 325 280 L250 280 C250 240 255 220 260 210 Z"
          fill="#334155"
          stroke="#F87171"
          strokeWidth="2.5"
        />
        <text x="288" y="255" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          STEEL CAP
        </text>
        <text x="288" y="268" fill="#FCA5A5" fontSize="8" textAnchor="middle" fontFamily="monospace">
          416.7 g
        </text>

        {/* Ankle vulnerability indicator */}
        <circle cx="140" cy="160" r="30" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
        <line x1="140" y1="130" x2="70" y2="105" stroke="#EF4444" strokeWidth="1.2" />
        <text x="65" y="98" fill="#F87171" fontSize="9" textAnchor="end" fontFamily="monospace">
          NO LATERAL SUPPORT
        </text>
        <text x="65" y="112" fill="#94A3B8" fontSize="8" textAnchor="end" fontFamily="monospace">
          Unconstrained Subtalar Sprain Risk
        </text>
      </g>

      {/* RIGHT: SmartStep Hybrid Boot */}
      <g transform="translate(440, 40)">
        <text x="160" y="25" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          SMARTSTEP ADVANCED FOOTWEAR
        </text>
        <text x="160" y="45" fill="#34D399" fontSize="11" textAnchor="middle" fontFamily="monospace">
          Mass Saved: -312.5 g (-75% cap mass)
        </text>

        {/* Modern boot silhouette */}
        <path
          d="M40 280 C40 220 70 170 100 140 L100 80 L180 80 L180 150 C210 180 230 200 270 210 L300 210 C320 230 330 250 330 280 L40 280 Z"
          fill="#0F172A"
          stroke="#0284C7"
          strokeWidth="2"
        />

        {/* Lightweight dual-density sole with heel cavity */}
        <rect x="35" y="280" width="300" height="32" rx="4" fill="#1E293B" stroke="#06B6D4" strokeWidth="1.5" />
        
        {/* IoT cavity in heel */}
        <rect x="50" y="284" width="70" height="24" rx="2" fill="#0369A1" stroke="#38BDF8" strokeWidth="1.5" />
        <text x="85" y="299" fill="#E0F2FE" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          ESP32 + IMU
        </text>

        {/* CFRP Toe Cap Highlight */}
        <path
          d="M260 210 C290 220 325 240 325 280 L250 280 C250 240 255 220 260 210 Z"
          fill="#064E3B"
          stroke="#10B981"
          strokeWidth="2.5"
        />
        <text x="288" y="255" fill="#ECFDF5" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          CFRP CAP
        </text>
        <text x="288" y="268" fill="#6EE7B7" fontSize="8" textAnchor="middle" fontFamily="monospace">
          104.2 g (Save 312.5g)
        </text>

        {/* 6061-T6 Aluminum Ankle Stabilizer */}
        <path
          d="M130 95 L145 95 L155 170 L140 170 Z"
          fill="#0284C7"
          stroke="#38BDF8"
          strokeWidth="2"
        />
        <circle cx="147" cy="170" r="7" fill="#F8FAFC" stroke="#0284C7" strokeWidth="2" />
        <path
          d="M140 170 L155 170 L170 230 L155 230 Z"
          fill="#0284C7"
          stroke="#38BDF8"
          strokeWidth="2"
        />
        
        {/* Label for hinge */}
        <line x1="147" y1="170" x2="210" y2="135" stroke="#38BDF8" strokeWidth="1.2" />
        <text x="215" y="130" fill="#38BDF8" fontSize="9" fontWeight="bold" fontFamily="monospace">
          6061-T6 HINGE PIN
        </text>
        <text x="215" y="143" fill="#94A3B8" fontSize="8" fontFamily="monospace">
          Locks Inversion ≤ 15° (FS = 2.21)
        </text>
      </g>
    </svg>
  );
};

/**
 * Schematic 2: CFRP Composite Cap & ASTM F2413 Test
 */
export const SchematicCfrpDetail: React.FC = () => {
  return (
    <svg viewBox="0 0 800 450" className="w-full h-full max-h-96" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cross section of CFRP composite toe cap */}
      <g transform="translate(60, 40)">
        <text x="180" y="25" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          CFRP 3K TWILL COMPOSITE TOE CAP ARCHITECTURE
        </text>

        {/* Drop impact test tup */}
        <path d="M140 45 L220 45 L200 90 L160 90 Z" fill="#475569" stroke="#94A3B8" strokeWidth="2" />
        <text x="180" y="70" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          22.7 kg TUP
        </text>
        
        {/* Energy arrow */}
        <line x1="180" y1="95" x2="180" y2="125" stroke="#F59E0B" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="195" y="115" fill="#FBBF24" fontSize="10" fontWeight="bold" fontFamily="monospace">
          101.8 J Drop Kinetic Energy
        </text>

        {/* CFRP Shell Profile */}
        <path
          d="M80 230 C80 150 140 130 180 130 C220 130 280 150 280 230 L250 230 C250 170 210 155 180 155 C150 155 110 170 110 230 Z"
          fill="#064E3B"
          stroke="#10B981"
          strokeWidth="2.5"
        />

        {/* Internal Clearance Zone (>12.7mm requirement) */}
        <rect x="130" y="180" width="100" height="50" rx="6" fill="#0F172A" stroke="#34D399" strokeDasharray="3 3" />
        <text x="180" y="200" fill="#34D399" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          CLEARANCE &gt; 12.7 mm
        </text>
        <text x="180" y="215" fill="#94A3B8" fontSize="8" textAnchor="middle" fontFamily="monospace">
          ASTM F2413 Safe Envelope
        </text>
      </g>

      {/* Material property comparison card */}
      <g transform="translate(430, 60)">
        <rect x="0" y="0" width="310" height="290" rx="8" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />
        <text x="20" y="35" fill="#F8FAFC" fontSize="12" fontWeight="bold" fontFamily="monospace">
          SPECIFIC PROPERTIES COMPARISON
        </text>

        {/* Table rows */}
        <text x="20" y="75" fill="#94A3B8" fontSize="10" fontFamily="monospace">PROPERTY</text>
        <text x="150" y="75" fill="#F87171" fontSize="10" fontFamily="monospace">STEEL (1020)</text>
        <text x="240" y="75" fill="#34D399" fontSize="10" fontFamily="monospace">CFRP MATRIX</text>
        <line x1="20" y1="85" x2="290" y2="85" stroke="#334155" strokeWidth="1" />

        <text x="20" y="115" fill="#E2E8F0" fontSize="10" fontFamily="monospace">Density (ρ)</text>
        <text x="150" y="115" fill="#FCA5A5" fontSize="10" fontFamily="monospace">7.85 g/cm³</text>
        <text x="240" y="115" fill="#6EE7B7" fontSize="10" fontFamily="monospace">1.55 g/cm³</text>

        <text x="20" y="150" fill="#E2E8F0" fontSize="10" fontFamily="monospace">Cap Mass</text>
        <text x="150" y="150" fill="#FCA5A5" fontSize="10" fontFamily="monospace">416.7 g</text>
        <text x="240" y="150" fill="#6EE7B7" fontSize="10" fontFamily="monospace">104.2 g (-75%)</text>

        <text x="20" y="185" fill="#E2E8F0" fontSize="10" fontFamily="monospace">Impact Cap.</text>
        <text x="150" y="185" fill="#FCA5A5" fontSize="10" fontFamily="monospace">Plastic def.</text>
        <text x="240" y="185" fill="#6EE7B7" fontSize="10" fontFamily="monospace">101.8 J Elastic</text>

        <text x="20" y="220" fill="#E2E8F0" fontSize="10" fontFamily="monospace">Thermal Cond.</text>
        <text x="150" y="220" fill="#FCA5A5" fontSize="10" fontFamily="monospace">High (Cold feet)</text>
        <text x="240" y="220" fill="#6EE7B7" fontSize="10" fontFamily="monospace">Low (Insulated)</text>

        <rect x="20" y="245" width="270" height="30" rx="4" fill="#064E3B" stroke="#059669" />
        <text x="155" y="264" fill="#ECFDF5" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          NET MASS DELTA: -312.5 g / FOOT
        </text>
      </g>
    </svg>
  );
};

/**
 * Schematic 3: 6061-T6 Aluminum Ankle Hinge & Biomechanical Range of Motion
 */
export const SchematicAnkleHinge: React.FC = () => {
  return (
    <svg viewBox="0 0 800 450" className="w-full h-full max-h-96" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sagittal Plane Freedom */}
      <g transform="translate(60, 40)">
        <text x="150" y="25" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          SAGITTAL FREEDOM (NORMAL GAIT)
        </text>
        
        {/* Foot contour */}
        <ellipse cx="150" cy="240" rx="100" ry="18" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
        
        {/* Lower Leg strut rotating forward/backward */}
        <line x1="150" y1="210" x2="150" y2="70" stroke="#64748B" strokeWidth="2" strokeDasharray="3 3" />
        
        {/* Dorsiflexion Arc 45° */}
        <path d="M150 100 A110 110 0 0 0 90 120" stroke="#10B981" strokeWidth="2.5" fill="none" />
        <text x="75" y="110" fill="#34D399" fontSize="10" fontWeight="bold" fontFamily="monospace">
          +45° Dorsiflexion
        </text>

        {/* Plantarflexion Arc 20° */}
        <path d="M150 100 A110 110 0 0 1 190 115" stroke="#10B981" strokeWidth="2.5" fill="none" />
        <text x="195" y="110" fill="#34D399" fontSize="10" fontWeight="bold" fontFamily="monospace">
          -20° Plantarflexion
        </text>

        {/* Pivot Hinge */}
        <circle cx="150" cy="210" r="10" fill="#0284C7" stroke="#F8FAFC" strokeWidth="2.5" />
        <text x="150" y="240" fill="#F8FAFC" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          STAINLESS PIVOT (Ø 4mm)
        </text>
      </g>

      {/* Frontal Plane Restriction (Arresting Inversion) */}
      <g transform="translate(440, 40)">
        <text x="150" y="25" fill="#F59E0B" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          FRONTAL PLANE INVERSION ARREST
        </text>

        {/* Rear Foot view */}
        <path d="M110 240 L190 240 L175 120 L125 120 Z" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
        
        {/* 6061-T6 Rigid Bilateral Braces */}
        <rect x="105" y="100" width="12" height="135" rx="3" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
        <rect x="183" y="100" width="12" height="135" rx="3" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
        
        {/* Mechanical Stop at 15 degrees */}
        <path d="M150 150 L120 185" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" />
        <text x="60" y="170" fill="#EF4444" fontSize="9" fontWeight="bold" fontFamily="monospace">
          STOP AT ≤ 15°
        </text>
        <text x="60" y="183" fill="#94A3B8" fontSize="8" fontFamily="monospace">
          Prevents ATFL Tear
        </text>

        {/* Stress calculation badge */}
        <rect x="25" y="270" width="250" height="46" rx="4" fill="#0F172A" stroke="#0284C7" strokeWidth="1.5" />
        <text x="150" y="288" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          6061-T6 BENDING SAFETY FACTOR
        </text>
        <text x="150" y="304" fill="#38BDF8" fontSize="10" textAnchor="middle" fontFamily="monospace">
          FS = 276 MPa / 125 MPa = 2.21 (PASS)
        </text>
      </g>
    </svg>
  );
};

/**
 * Schematic 4: IoT Electronic Architecture & Circuit Interconnects
 */
export const SchematicIoTCircuit: React.FC = () => {
  return (
    <svg viewBox="0 0 800 450" className="w-full h-full max-h-96" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* ESP32 Block */}
      <rect x="50" y="80" width="220" height="240" rx="8" fill="#0F172A" stroke="#0284C7" strokeWidth="2" />
      <rect x="70" y="95" width="60" height="40" rx="3" fill="#1E293B" stroke="#38BDF8" strokeWidth="1" />
      <text x="100" y="120" fill="#38BDF8" fontSize="8" textAnchor="middle" fontFamily="monospace">ANTENNA</text>
      <text x="160" y="140" fill="#F8FAFC" fontSize="13" fontWeight="bold" fontFamily="monospace">ESP32-WROOM-32D</text>
      <text x="160" y="156" fill="#94A3B8" fontSize="9" fontFamily="monospace">Xtensa Dual-Core @ 240MHz</text>

      {/* ESP32 Pin Labels */}
      <text x="250" y="190" fill="#F59E0B" fontSize="9" textAnchor="end" fontFamily="monospace">GPIO 21 (SDA)</text>
      <text x="250" y="215" fill="#38BDF8" fontSize="9" textAnchor="end" fontFamily="monospace">GPIO 22 (SCL)</text>
      <text x="250" y="240" fill="#EF4444" fontSize="9" textAnchor="end" fontFamily="monospace">3V3 (VCC)</text>
      <text x="250" y="265" fill="#64748B" fontSize="9" textAnchor="end" fontFamily="monospace">GND</text>
      <text x="250" y="290" fill="#10B981" fontSize="9" textAnchor="end" fontFamily="monospace">GPIO 19 (INT)</text>

      {/* MPU-6050 Block */}
      <rect x="420" y="110" width="180" height="190" rx="8" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
      <text x="510" y="140" fill="#ECFDF5" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
        MPU-6050 IMU
      </text>
      <text x="510" y="156" fill="#6EE7B7" fontSize="8" textAnchor="middle" fontFamily="monospace">
        3-Axis Accel + 3-Axis Gyro
      </text>

      {/* MPU-6050 Pins */}
      <text x="435" y="190" fill="#F59E0B" fontSize="9" fontFamily="monospace">SDA</text>
      <text x="435" y="215" fill="#38BDF8" fontSize="9" fontFamily="monospace">SCL</text>
      <text x="435" y="240" fill="#EF4444" fontSize="9" fontFamily="monospace">VCC</text>
      <text x="435" y="265" fill="#64748B" fontSize="9" fontFamily="monospace">GND</text>
      <text x="435" y="290" fill="#10B981" fontSize="9" fontFamily="monospace">INT</text>

      {/* Connecting Wires with colored traces */}
      {/* SDA Line */}
      <line x1="270" y1="187" x2="420" y2="187" stroke="#F59E0B" strokeWidth="2" />
      {/* SCL Line */}
      <line x1="270" y1="212" x2="420" y2="212" stroke="#38BDF8" strokeWidth="2" />
      {/* 3V3 Line */}
      <line x1="270" y1="237" x2="420" y2="237" stroke="#EF4444" strokeWidth="2" />
      {/* GND Line */}
      <line x1="270" y1="262" x2="420" y2="262" stroke="#64748B" strokeWidth="2" />
      {/* INT Line */}
      <line x1="270" y1="287" x2="420" y2="287" stroke="#10B981" strokeWidth="2" />

      {/* Power Supply Subsystem */}
      <g transform="translate(630, 110)">
        <rect x="0" y="0" width="135" height="190" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
        <text x="67" y="30" fill="#F8FAFC" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          POWER UNIT
        </text>
        
        {/* LiPo Battery */}
        <rect x="15" y="45" width="105" height="50" rx="4" fill="#0F172A" stroke="#38BDF8" />
        <text x="67" y="68" fill="#38BDF8" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          3.7V 850mAh
        </text>
        <text x="67" y="82" fill="#94A3B8" fontSize="7" textAnchor="middle" fontFamily="monospace">
          LiPo (3.14 Wh)
        </text>

        {/* TP4056 + DW01A */}
        <rect x="15" y="105" width="105" height="40" rx="4" fill="#0F172A" stroke="#10B981" />
        <text x="67" y="123" fill="#34D399" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          TP4056 + DW01A
        </text>
        <text x="67" y="136" fill="#94A3B8" fontSize="7" textAnchor="middle" fontFamily="monospace">
          Protection & Reg.
        </text>

        {/* Run-time spec */}
        <text x="67" y="168" fill="#F59E0B" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          T ≈ 14.2 Hours
        </text>
      </g>
    </svg>
  );
};

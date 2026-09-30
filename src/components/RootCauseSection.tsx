/**
 * Section 2: Root Causes
 * Rigorous engineering breakdown of material densities and structural limitations.
 */

import React from 'react';
import { Layers, Database, ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';
import { VisualAssetFrame, SchematicCfrpDetail } from './VisualAssets.tsx';

interface RootCauseSectionProps {
  onCopyPrompt: (prompt: string) => void;
  copiedPrompt: string | null;
}

export const RootCauseSection: React.FC<RootCauseSectionProps> = ({
  onCopyPrompt,
  copiedPrompt,
}) => {
  return (
    <section id="root-causes" className="py-16 bg-slate-50 dark:bg-slate-900/40 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2">
            <span>SECTION 02</span>
            <span aria-hidden="true">·</span>
            <span>SYSTEM FAILURE ANALYSIS</span>
            <span aria-hidden="true">·</span>
            <span>ROOT CAUSE IDENTIFICATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Root Causes: Material Density Inefficiency & Structural Absence
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            A systematic engineering failure analysis reveals that conventional safety footwear performance 
            is constrained by legacy material selection and the total omission of transverse plane joint reinforcement.
          </p>
        </div>

        {/* 2 Core Root Causes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Root Cause 1: Material Selection */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold block mb-2">
              ROOT CAUSE 01
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
              Monolithic Carbon Steel and High-Density Elastomers
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Conventional footwear manufacturers utilize low-cost structural carbon steel (AISI 1020, density 
              ρ ≈ 7.85 g/cm³) to fulfill ASTM F2413 impact criteria. Because steel exhibits an isotropic modulus 
              without high specific strength, an average toe cap requires 416.7 g of material to prevent inward collapse. 
              Additionally, monolithic vulcanized rubber soles (ρ ≈ 1.35 g/cm³) are molded across the entire footbed, 
              inflating total footwear mass to 800–1000 g per shoe.
            </p>

            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-mono space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Structural Steel Density:</span>
                <span className="text-slate-800 dark:text-slate-200 tabular-nums">7.85 g/cm³</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">CFRP Composite Density:</span>
                <span className="text-emerald-600 dark:text-emerald-400 tabular-nums font-semibold">1.55 g/cm³ (-80.2%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Average Steel Cap Tare Mass:</span>
                <span className="text-rose-600 dark:text-rose-400 tabular-nums font-semibold">416.7 g / unit</span>
              </div>
            </div>
          </div>

          {/* Root Cause 2: Structural Ankle Absence */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold block mb-2">
              ROOT CAUSE 02
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
              Total Absence of Mechanical Lateral Stabilization Linkages
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Traditional safety boot uppers are constructed from pliable full-grain leather or cordura nylon 
              stitched to a flexible counter. While this architecture allows plantarflexion and dorsiflexion, 
              it provides zero structural resistance against coronal (frontal) plane bending moments. 
              When a worker steps upon uneven debris, an uncontrolled inversion moment exceeding 10 N·m 
              rotates the subtalar joint past its physiological limit, causing immediate ATFL stretching or catastrophic rupture.
            </p>

            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-mono space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Upper Lateral Torsional Rigidity:</span>
                <span className="text-rose-600 dark:text-rose-400 tabular-nums font-semibold">&lt; 0.4 N·m/deg (Negligible)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">ATFL Yield Deformation Angle:</span>
                <span className="text-slate-800 dark:text-slate-200 tabular-nums">20.0° - 25.0°</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Subtalar Mechanical Stop:</span>
                <span className="text-rose-600 dark:text-rose-400 font-semibold">None (0% Structural Resistance)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Engineering Material & Structural Comparison Matrix */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs mb-10">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300">
                <th className="py-3 px-4 font-semibold">ENGINEERING PARAMETER</th>
                <th className="py-3 px-4 font-semibold text-rose-600 dark:text-rose-400">TRADITIONAL STEEL FOOTWEAR</th>
                <th className="py-3 px-4 font-semibold text-emerald-600 dark:text-emerald-400">SMARTSTEP PROPOSED SOLUTION</th>
                <th className="py-3 px-4 font-semibold">ENGINEERING DELTA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Toe Cap Material</td>
                <td className="py-3 px-4">AISI 1020 Carbon Steel</td>
                <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">3K Twill CFRP Epoxy Composite</td>
                <td className="py-3 px-4 text-slate-800 dark:text-slate-200">High specific modulus</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Toe Cap Mass</td>
                <td className="py-3 px-4 text-rose-600 dark:text-rose-400 tabular-nums">416.7 g</td>
                <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold tabular-nums">104.2 g</td>
                <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold tabular-nums">-312.5 g (-75.0%)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Total Shoe Mass</td>
                <td className="py-3 px-4 tabular-nums">800 - 1,000 g</td>
                <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold tabular-nums">487.5 - 687.5 g</td>
                <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold tabular-nums">-312.5 g / unit</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Lateral Ankle Stabilization</td>
                <td className="py-3 px-4 text-rose-600 dark:text-rose-400">None (Flexible leather/fabric)</td>
                <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">6061-T6 Aluminum Articulated Strut</td>
                <td className="py-3 px-4 text-slate-800 dark:text-slate-200">Hard stop at ≤ 15° inversion</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Safety Factor (Bending)</td>
                <td className="py-3 px-4 text-rose-600 dark:text-rose-400">Not Applicable (Unconstrained)</td>
                <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold tabular-nums">FS = 2.21</td>
                <td className="py-3 px-4 text-slate-800 dark:text-slate-200">σ_b = 125 MPa vs σ_y = 276 MPa</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Occupational Fall Telemetry</td>
                <td className="py-3 px-4 text-rose-600 dark:text-rose-400">Zero electronic sensing</td>
                <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">ESP32 + MPU-6050 6-DOF IMU</td>
                <td className="py-3 px-4 text-cyan-600 dark:text-cyan-400 font-semibold">Real-time 100 Hz fall alerts</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Visual Cue: Visual Asset Frame with Figure Caption strictly below frame */}
        <VisualAssetFrame
          figureNumber={2}
          title="Material Property Comparison and ASTM F2413 Kinetic Impact Clearance Zone"
          caption="Technical schematic detailing the structural laminate cross-section of the Carbon-Fiber Reinforced Polymer (CFRP) composite toe cap under ASTM F2413 101.8 J drop impact testing, verifying zero encroachment into the mandated 12.7 mm interior clearance envelope."
          imagePrompt="Detailed engineering cross-section of an advanced Carbon-Fiber Reinforced Polymer composite toe cap for a safety boot, showing carbon fiber layers in epoxy resin resisting a heavy drop test hammer. Clear CAD dimensions showing over 12.7mm of interior safety clearance, technical callouts in English with clean lines, dark blueprint background, precision mechanical drawing."
          onCopyPrompt={onCopyPrompt}
          isCopied={copiedPrompt?.includes("Material Property Comparison") ?? false}
        >
          <SchematicCfrpDetail />
        </VisualAssetFrame>

      </div>
    </section>
  );
};

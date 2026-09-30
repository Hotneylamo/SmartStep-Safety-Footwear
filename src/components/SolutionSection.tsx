/**
 * Section 3: Proposed Solution
 * Hybrid biomechanical architecture: CFRP composite toe cap + 6061-T6 aluminum ankle stabilization hinge.
 */

import React from 'react';
import { ShieldCheck, Compass, GitCommit, CheckCircle2, ChevronRight } from 'lucide-react';
import { VisualAssetFrame, SchematicAnkleHinge } from './VisualAssets.tsx';

interface SolutionSectionProps {
  onCopyPrompt: (prompt: string) => void;
  copiedPrompt: string | null;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({
  onCopyPrompt,
  copiedPrompt,
}) => {
  return (
    <section id="solution" className="py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2">
            <span>SECTION 03</span>
            <span aria-hidden="true">·</span>
            <span>SYSTEM DESIGN & IMPLEMENTATION</span>
            <span aria-hidden="true">·</span>
            <span>BIOMECHANICAL COUPLING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Proposed Solution: Hybrid CFRP Toe Cap & 6061-T6 Articulated Strut
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            To resolve distal inertia and lateral instability simultaneously, a hybrid mechanical 
            subsystem is engineered: an autoclave-cured CFRP protective cap replaces structural carbon 
            steel, coupled with a semi-rigid 6061-T6 aluminum bilateral ankle stabilization hinge.
          </p>
        </div>

        {/* 2 Subsystem Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Subsystem A: CFRP Toe Cap */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs font-mono text-slate-500 block">SUB-ASSEMBLY A</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  CFRP Composite Impact Enclosure
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              The toe protective dome is fabricated from pre-impregnated high-strength Toray T700 carbon 
              fibers in a 3K twill architecture impregnated with a toughened cycloaliphatic epoxy resin matrix. 
              The laminate is consolidated under 6.0 bar autoclave pressure at 135°C to achieve a fiber volume 
              fraction of 58%.
            </p>

            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold">•</span>
                <span><strong>Mass Delta:</strong> Net unit mass is restricted to 104.2 g, liberating 312.5 g per shoe (75.0% reduction) compared to steel.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold">•</span>
                <span><strong>Impact Attenuation:</strong> Kinetic energy is dissipated via progressive micro-cracking and interlaminar shear rather than catastrophic plastic deformation, satisfying ASTM F2413 (101.8 J).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold">•</span>
                <span><strong>Thermal Barrier:</strong> Non-metallic carbon-epoxy composite prevents thermal bridging, shielding digits from extreme ambient cold and electrical hazards.</span>
              </li>
            </ul>
          </div>

          {/* Subsystem B: 6061-T6 Aluminum Stabilization Strut */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400">
                <Compass className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs font-mono text-slate-500 block">SUB-ASSEMBLY B</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Semi-Rigid 6061-T6 Aluminum Ankle Stabilizer
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Lateral joint stabilization is accomplished through bilateral CNC-milled 6061-T6 aerospace aluminum 
              struts anchored between the footwear quarter and the rigid TPU heel counter. An articulated 
              Ø 4.0 mm 304 stainless-steel pivot pin is positioned coaxially with the physiological talocrural rotation axis.
            </p>

            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold">•</span>
                <span><strong>Dual-Axis Kinematics:</strong> Unrestricted sagittal rotation (+45° dorsiflexion, -20° plantarflexion) ensures natural walking biomechanics without stride inhibition.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold">•</span>
                <span><strong>Inversion Limit Stop:</strong> Integral mechanical stops rigidly lock coronal rotation at ≤ 15°, preventing excessive subtalar inversion where the ATFL is susceptible to rupture.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold">•</span>
                <span><strong>Safety Factor:</strong> Under peak dynamic lateral moment, maximum bending stress is 125 MPa against a yield threshold of 276 MPa (Safety Factor = 2.21).</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Descriptive Text-based Diagram: ASCII Mechanical Layout */}
        <div className="mb-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-200 p-6 overflow-x-auto">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs font-mono">
            <span className="text-cyan-400 font-bold">DESCRIPTIVE MECHANICAL SCHEMATIC (ASCII EXPLODED LAYOUT)</span>
            <span className="text-slate-400">PART: SMARTSTEP-ASM-REV1</span>
          </div>
          <pre className="font-mono text-xs leading-5 text-slate-300">
{`+-------------------------------------------------------------------------------------------------+
|                                 SMARTSTEP MECHANICAL ASSEMBLY                                  |
+-------------------------------------------------------------------------------------------------+

                      [Upper Shin Cuff Collar]
                                |
                   +------------+------------+
                   |                         |
            [Medial Strut]            [Lateral Strut]
            (6061-T6 Al)              (6061-T6 Al, 1.8mm thk)
                   |                         |
                   +-------[PIVOT PIN]-------+  <-- Coaxial with Talocrural Axis (Ø 4mm 304 SS)
                   |                         |      Permits: +45° / -20° Sagittal Gait
                   |   [Mechanical Stop]     |      Arrests: Inversion at ≤ 15° (FS = 2.21)
                   +------------+------------+
                                |
                      [Heel Counter Anchor]
                                |
  [Forefoot Enclosure]          |                [Heel Midsole]
+----------------------+        |          +------------------------------------+
|  CFRP 3K Twill Cap   | <======+========> | EVA Midsole Cavity (IP67 Potting)  |
|  Mass: 104.2 g       |   (Dual-Density   |  - ESP32-WROOM-32D Microcontroller |
|  Impact: 101.8 J     |     Shank Link)   |  - MPU-6050 6-Axis IMU Sensor      |
|  Clearance: >12.7 mm |                   |  - 3.7V 850mAh LiPo + TP4056 LDO   |
+----------------------+                   +------------------------------------+
`}
          </pre>
        </div>

        {/* Visual Cue: Visual Asset Frame with Figure Caption strictly below frame */}
        <VisualAssetFrame
          figureNumber={3}
          title="Kinematic Range of Motion and Coronal Plane Inversion Arrest Mechanism"
          caption="Kinematic layout of the 6061-T6 aluminum bilateral ankle stabilization brace with stainless pivot hinge pin. Normal sagittal articulation (+45° dorsiflexion, -20° plantarflexion) is unhindered, while coronal subtalar inversion is restricted to ≤ 15° by calibrated mechanical stops, maintaining a 2.21 Safety Factor against material yield."
          imagePrompt="Close-up engineering view of an ergonomic 6061-T6 aluminum alloy ankle stabilization bilateral brace with a controlled-flexibility pivot hinge pin integrated into the lateral quarter of an industrial safety boot, showing precision mechanical fastener, matte anodized aerospace aluminum finish, clean technical lighting, dimension callouts."
          onCopyPrompt={onCopyPrompt}
          isCopied={copiedPrompt?.includes("Kinematic Range of Motion") ?? false}
        >
          <SchematicAnkleHinge />
        </VisualAssetFrame>

      </div>
    </section>
  );
};

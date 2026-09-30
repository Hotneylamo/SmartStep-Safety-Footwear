/**
 * Engineering & Calculation Framework Component
 * Implements strict engineering data from HW3:
 * 1. Mass Reduction: 75% reduction saving 312.5g per shoe
 * 2. Impact Resistance: ASTM F2413 101.8 J drop test
 * 3. Structural Integrity: 6061-T6 aluminum ankle support with FS = 2.21 (125 MPa vs 276 MPa)
 */

import React, { useState } from 'react';
import { Scale, ShieldAlert, Cpu, Calculator, CheckCircle2, ArrowRight } from 'lucide-react';
import { VisualAssetFrame, SchematicBootComparison } from './VisualAssets.tsx';

interface CalculationSectionProps {
  onCopyPrompt: (prompt: string) => void;
  copiedPrompt: string | null;
}

export const CalculationSection: React.FC<CalculationSectionProps> = ({
  onCopyPrompt,
  copiedPrompt,
}) => {
  // Interactive Simulator State for Student HW5 Defense
  const [dailySteps, setDailySteps] = useState<number>(10000);
  const [appliedLateralMoment, setAppliedLateralMoment] = useState<number>(31.25); // N*m

  // Derived calculations
  const massSavedGrams = 312.5; // g per shoe
  const massSavedKg = (massSavedGrams * 2) / 1000; // 0.625 kg per pair
  // Energy saved per step: Lift work approx Delta M * g * h_lift (h ~ 0.08m)
  const joulesSavedPerDay = (massSavedKg * 9.80665 * 0.08 * dailySteps).toFixed(1);
  const kcalSavedPerDay = ((parseFloat(joulesSavedPerDay) / 4184) * 4).toFixed(1); // physiological approx

  // Dynamic Safety Factor based on moment
  // Design baseline: 31.25 N*m yields 125 MPa (c/I = 4.0e6 m^-3)
  const calculatedStressMpa = (appliedLateralMoment * 4.0).toFixed(1);
  const yieldStrengthMpa = 276.0;
  const currentSafetyFactor = (yieldStrengthMpa / parseFloat(calculatedStressMpa)).toFixed(2);
  const isSafe = parseFloat(currentSafetyFactor) >= 1.5;

  return (
    <section id="calculations" className="py-16 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2">
            <span>SECTION 04</span>
            <span aria-hidden="true">·</span>
            <span>EMPIRICAL VALIDATION</span>
            <span aria-hidden="true">·</span>
            <span>HW3 CORE SPECIFICATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering & Calculation Framework
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            The mechanical performance of the Integrated Advanced Safety Shoe is validated through 
            first-principles kinematic formulations, standardized ballistic drop energy absorption, 
            and continuum mechanics safety factor calculations adhering strictly to ASTM F2413 and ABET SO3 standards.
          </p>
        </div>

        {/* 3 Core Engineering Calculation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Mass Reduction */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">CALCULATION 01</span>
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>&gt;75% Mass Reduction</span>
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Protective Cap Mass Reduction
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Conventional Grade 1020 carbon steel toe caps possess an average mass of 416.7 g per unit. 
                By substituting with an autoclave-cured 3K twill Carbon-Fiber Reinforced Polymer (CFRP) 
                matrix, cap mass is decreased to 104.2 g.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 font-mono text-xs">
              <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500">M_steel:</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold tabular-nums">416.7 g</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500">M_CFRP:</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold tabular-nums">104.2 g</span>
              </div>
              <div className="flex justify-between py-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                <span>ΔM Saved:</span>
                <span className="tabular-nums">-312.5 g (-75.0%)</span>
              </div>
            </div>
          </div>

          {/* Card 2: Impact Energy Resistance */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">CALCULATION 02</span>
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ASTM F2413 Pass</span>
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Impact Energy Absorption
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                ASTM F2413 Section 5 mandates that the toe enclosure must withstand a dynamic kinetic 
                energy impact of 101.8 J delivered by a calibrated 22.7 kg steel drop tup without violating 
                the 12.7 mm interior clearance envelope.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 font-mono text-xs">
              <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500">Impactor Mass (m):</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold tabular-nums">22.7 kg (50 lb)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500">Drop Height (h):</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold tabular-nums">0.457 m (1.5 ft)</span>
              </div>
              <div className="flex justify-between py-1.5 font-bold text-cyan-600 dark:text-cyan-400">
                <span>E_k = m·g·h:</span>
                <span className="tabular-nums">101.8 J Withstood</span>
              </div>
            </div>
          </div>

          {/* Card 3: Structural Integrity & Factor of Safety */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">CALCULATION 03</span>
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>FS = 2.21 (&gt; 1.50)</span>
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Lateral Ankle Factor of Safety
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                The bilateral 6061-T6 aluminum alloy stabilization strut is subjected to peak bending 
                moments during simulated lateral slipping. Stresses are evaluated against the material 
                tensile yield strength (276 MPa).
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 font-mono text-xs">
              <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500">Yield Strength (σ_y):</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold tabular-nums">276.0 MPa</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800">
                <span className="text-slate-500">Bending Stress (σ_b):</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold tabular-nums">125.0 MPa</span>
              </div>
              <div className="flex justify-between py-1.5 font-bold text-cyan-600 dark:text-cyan-400">
                <span>FS = σ_y / σ_b:</span>
                <span className="tabular-nums">2.21 (Verified Safe)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Visual Cue: Visual Asset Frame with Figure Caption strictly below frame */}
        <VisualAssetFrame
          figureNumber={4}
          title="Free-Body Diagram and Impact Attenuation Profile Under ASTM F2413 Dynamic Load"
          caption="Mechanical schematic illustrating kinetic energy dissipation across the CFRP composite dome (101.8 J impact) and moment distribution along the 6061-T6 aluminum stabilization hinge under extreme subtalar inversion loading (σ_bending = 125 MPa, yield strength = 276 MPa, Safety Factor = 2.21)."
          imagePrompt="Technical engineering free-body diagram and stress distribution graph of an industrial safety boot during a 101.8 Joules ASTM F2413 impact drop test, showing vector arrows of force on the carbon-fiber composite toe cap and finite element bending stress analysis on the 6061-T6 aluminum ankle hinge pin with a factor of safety of 2.21. Crisp blue and slate technical CAD graphics, white background, millimeter dimension callouts."
          onCopyPrompt={onCopyPrompt}
          isCopied={copiedPrompt?.includes("101.8 Joules") ?? false}
        >
          <SchematicBootComparison />
        </VisualAssetFrame>

        {/* Interactive Biomechanical & Stress Evaluation Console */}
        <div className="mt-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                INTERACTIVE ENGINEERING SIMULATION TOOL
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                Kinematic Metabolic Savings & Lateral Stress Analyzer
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded border border-slate-700">
              Department of Mechanical and Aerospace Engineering, KMUTNB
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
            
            {/* Interactive Control 1: Gait Steps and Energy Saved */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300">Daily Worker Locomotion Volume:</span>
                <span className="text-cyan-400 font-bold tabular-nums">{dailySteps.toLocaleString()} steps/day</span>
              </div>
              <input
                type="range"
                min="2000"
                max="25000"
                step="500"
                value={dailySteps}
                onChange={(e) => setDailySteps(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>2,000 steps</span>
                <span>10,000 (Standard Shift)</span>
                <span>25,000 steps</span>
              </div>

              {/* Energy Results */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 block">WORK ENVELOPE SAVED</span>
                  <span className="text-xl font-bold font-mono text-emerald-400 tabular-nums">{joulesSavedPerDay}</span>
                  <span className="text-[11px] font-mono text-slate-500 ml-1">Joules</span>
                </div>
                <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 block">PHYSIOLOGICAL SAVING</span>
                  <span className="text-xl font-bold font-mono text-cyan-400 tabular-nums">~{kcalSavedPerDay}</span>
                  <span className="text-[11px] font-mono text-slate-500 ml-1">kcal/shift</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                According to Frederick (1985), every 100 g reduction in peripheral distal foot mass 
                decreases energetic consumption by approximately 1% during continuous walking. 
                Saving 625 g across both boots conserves considerable metabolic reserves across an 8-hour industrial shift.
              </p>
            </div>

            {/* Interactive Control 2: Applied Lateral Moment & Safety Factor Gauge */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300">Simulated Lateral Inversion Moment:</span>
                <span className="text-cyan-400 font-bold tabular-nums">{appliedLateralMoment.toFixed(2)} N·m</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="0.5"
                value={appliedLateralMoment}
                onChange={(e) => setAppliedLateralMoment(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>10.0 N·m (Mild stumble)</span>
                <span>31.25 N·m (HW3 Baseline)</span>
                <span>60.0 N·m (Severe trip)</span>
              </div>

              {/* Stress & Safety Factor Results */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 block">EVALUATED BENDING STRESS</span>
                  <span className="text-xl font-bold font-mono text-amber-400 tabular-nums">{calculatedStressMpa}</span>
                  <span className="text-[11px] font-mono text-slate-500 ml-1">MPa</span>
                </div>
                <div className={`p-3.5 rounded-lg border font-mono ${
                  isSafe ? 'bg-emerald-950/40 border-emerald-800 text-emerald-400' : 'bg-rose-950/40 border-rose-800 text-rose-400'
                }`}>
                  <span className="text-[11px] block opacity-80">SAFETY FACTOR (FS)</span>
                  <span className="text-xl font-bold tabular-nums">{currentSafetyFactor}</span>
                  <span className="text-[11px] ml-1.5 opacity-80">{isSafe ? 'VERIFIED' : 'BELOW 1.50'}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 font-mono">
                <span>Yield Criterion: σ_y = 276.0 MPa (6061-T6 Extruded Aluminum)</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

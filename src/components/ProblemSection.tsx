/**
 * Section 1: Problem Statement
 * Written in third-person passive voice adhering strictly to ABET SO3 guidelines.
 */

import React from 'react';
import { AlertTriangle, Activity, ShieldAlert, ArrowDownRight } from 'lucide-react';
import { VisualAssetFrame, SchematicBootComparison } from './VisualAssets.tsx';

interface ProblemSectionProps {
  onCopyPrompt: (prompt: string) => void;
  copiedPrompt: string | null;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({
  onCopyPrompt,
  copiedPrompt,
}) => {
  return (
    <section id="problem" className="py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2">
            <span>SECTION 01</span>
            <span aria-hidden="true">·</span>
            <span>PROBLEM FORMULATION</span>
            <span aria-hidden="true">·</span>
            <span>BIOMECHANICAL RISK ANALYSIS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Problem Statement: Musculoskeletal Fatigue & Lateral Instability
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            In industrial and civil construction environments, conventional safety footwear exposes 
            personnel to two primary biomechanical hazards: excessive distal mass causing chronic 
            musculoskeletal fatigue, and an absence of lateral mechanical stabilization resulting in 
            acute subtalar ankle sprains on unconsolidated or uneven terrain.
          </p>
        </div>

        {/* Dual Problem Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Sub-Problem A: Peripheral Mass & Gait Fatigue */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 rounded-lg bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400">
                <Activity className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs font-mono text-slate-500 block">HAZARD FACTOR A</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Peripheral Mass-Induced Musculoskeletal Fatigue
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Standard industrial protective boots exhibit an average tare mass of 800 g to 1,000 g per shoe. 
              Because this mass is positioned at the extreme distal end of the human lower-limb pendulum, 
              the moment of inertia of the lower leg is elevated significantly during the swing phase of the gait cycle.
            </p>

            <div className="space-y-2.5 bg-white dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-xs">
              <div className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Metabolic Expenditure:</strong> As demonstrated by Frederick (1985), every additional 100 g 
                  placed at the foot increases submaximal oxygen consumption (VO₂ uptake) by 1.0% to 1.2%.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Tibialis Anterior Fatigue:</strong> Repetitive dorsiflexion against high inertia leads to 
                  localized tibialis anterior muscular exhaustion, causing foot drop, decreased ground clearance, 
                  and heightened tripping frequency during extended 8-to-12 hour shifts.
                </span>
              </div>
            </div>
          </div>

          {/* Sub-Problem B: Subtalar Ankle Sprains */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 rounded-lg bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
                <ShieldAlert className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs font-mono text-slate-500 block">HAZARD FACTOR B</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Absence of Lateral Subtalar Joint Reinforcement
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Construction surfaces are characterized by unconsolidated gravel, rebar obstructions, and unpaved grades. 
              Traditional high-top work boots utilize flexible leather or synthetic textiles around the malleolus, 
              which provide negligible mechanical resistance against lateral inversion or eversion moments.
            </p>

            <div className="space-y-2.5 bg-white dark:bg-slate-950 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-xs">
              <div className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Ligamentous Rupture:</strong> Lateral ankle sprains represent over 25% of all occupational 
                  lost-time injuries in construction. When the foot unexpectedly rotates laterally beyond 20° to 30°, 
                  the anterior talofibular ligament (ATFL) is torn.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Secondary Fall Cascades:</strong> Acute lateral ankle instability frequently precipitates 
                  uncontrolled loss of equilibrium, causing secondary falls from height or collisions with industrial equipment.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Visual Cue: Visual Asset Frame with Figure Caption strictly below frame */}
        <VisualAssetFrame
          figureNumber={1}
          title="Comparative Biomechanical Stress and Mass Distribution in Industrial Safety Footwear"
          caption="Comparative cross-sectional schematic illustrating mass concentration zones and lateral joint kinematics. Conventional footwear concentrates 800–1000 g of mass with unreinforced lateral ankle axes, whereas the SmartStep design redistributes load through a lightweight composite toe cap and integrates a mechanical ankle hinge."
          imagePrompt="A professional engineering technical comparison rendering of industrial safety footwear. On the left side, a cutaway view of a heavy conventional steel-toe work boot showing a dense 416.7g steel toe cap, bulky rubber outsole, and unreinforced ankle fabric with red hazard arrows indicating lateral ankle twist. On the right side, the sleek SmartStep boot with dark carbon-fiber composite toe cap and an anodized 6061-T6 aluminum ankle hinge. Laboratory lighting, high detail, engineering CAD aesthetic."
          onCopyPrompt={onCopyPrompt}
          isCopied={copiedPrompt?.includes("Comparative Biomechanical") ?? false}
        >
          <SchematicBootComparison />
        </VisualAssetFrame>

      </div>
    </section>
  );
};

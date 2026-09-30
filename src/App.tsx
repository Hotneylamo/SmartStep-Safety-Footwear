/**
 * SmartStep: IoT-Enabled Industrial Footwear
 * Department of Mechanical and Aerospace Engineering, KMUTNB
 * Course: Introduction to Engineering (HW5)
 * Academic Rigor: Adheres strictly to ABET Student Outcome 3 (SO3)
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ProblemSection } from './components/ProblemSection.tsx';
import { RootCauseSection } from './components/RootCauseSection.tsx';
import { SolutionSection } from './components/SolutionSection.tsx';
import { CalculationSection } from './components/CalculationSection.tsx';
import { IoTIntegrationSection } from './components/IoTIntegrationSection.tsx';
import { TeamAndCitations } from './components/TeamAndCitations.tsx';
import { GoogleSitesExportStudio } from './components/GoogleSitesExportStudio.tsx';

export default function App() {
  const [activeView, setActiveView] = useState<'presentation' | 'studio'>('presentation');
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [quickCopied, setQuickCopied] = useState<boolean>(false);

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(prompt);
    setTimeout(() => setCopiedPrompt(null), 3000);
  };

  const handleQuickExport = () => {
    setActiveView('studio');
    setQuickCopied(true);
    setTimeout(() => setQuickCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans">
      
      {/* Top Bar Contract Navigation */}
      <Navbar
        onQuickExport={handleQuickExport}
        copiedState={quickCopied}
      />

      {/* Main View Router */}
      {activeView === 'studio' ? (
        <GoogleSitesExportStudio
          onBackToPresentation={() => setActiveView('presentation')}
        />
      ) : (
        <main className="flex-1">
          {/* Hero Banner */}
          <HeroSection />

          {/* Section 1: Problem Statement */}
          <ProblemSection
            onCopyPrompt={handleCopyPrompt}
            copiedPrompt={copiedPrompt}
          />

          {/* Section 2: Root Causes */}
          <RootCauseSection
            onCopyPrompt={handleCopyPrompt}
            copiedPrompt={copiedPrompt}
          />

          {/* Section 3: Proposed Solution */}
          <SolutionSection
            onCopyPrompt={handleCopyPrompt}
            copiedPrompt={copiedPrompt}
          />

          {/* Section 4: Engineering Calculations Framework */}
          <CalculationSection
            onCopyPrompt={handleCopyPrompt}
            copiedPrompt={copiedPrompt}
          />

          {/* Section 5: IoT Integration (HW5 Special Module) */}
          <IoTIntegrationSection
            onCopyPrompt={handleCopyPrompt}
            copiedPrompt={copiedPrompt}
          />

          {/* Section 6 & 7: Team Members & IEEE Citations */}
          <TeamAndCitations />
        </main>
      )}

      {/* Engineering Academic Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-8 px-4 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-white font-bold tracking-tight">
              SmartStep: IoT-Enabled Industrial Footwear Project
            </div>
            <div className="text-slate-500 text-[11px] mt-0.5">
              Department of Mechanical and Aerospace Engineering · Faculty of Engineering · KMUTNB
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Introduction to Engineering (HW5)</span>
            <span aria-hidden="true">·</span>
            <span>ABET SO3 Compliant</span>
            <span aria-hidden="true">·</span>
            <span>Academic Year 2026</span>
          </div>
        </div>
      </footer>

      {/* Floating Prompt Copied Toast */}
      {copiedPrompt && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white border border-cyan-500/40 px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 text-xs font-mono animate-in fade-in slide-in-from-bottom-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span>Image prompt copied to clipboard! Paste into Midjourney / DALL-E for Google Sites.</span>
        </div>
      )}

    </div>
  );
}

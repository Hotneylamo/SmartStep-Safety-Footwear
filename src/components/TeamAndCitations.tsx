/**
 * Team Members & IEEE Citation References Component
 * Concludes with IEEE-compliant reference entries for datasheets, standards, and literature.
 * Adheres strictly to ABET SO3 guidelines.
 */

import React, { useState } from 'react';
import { Users, BookOpen, Copy, Check, School } from 'lucide-react';
import { TEAM_MEMBERS, IEEE_CITATIONS } from '../types/engineering.ts';

export const TeamAndCitations: React.FC = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopyCitation = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="references" className="py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academic Team Information */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2">
            <span>PROJECT CONTRIBUTORS</span>
            <span aria-hidden="true">·</span>
            <span>HW5 SUBMISSION</span>
            <span aria-hidden="true">·</span>
            <span>ACADEMIC YEAR 2026</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
                <Users className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                <span>Engineering Design Team Members</span>
              </h2>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                Department of Mechanical and Aerospace Engineering, Faculty of Engineering, King Mongkut's University of Technology North Bangkok (KMUTNB)
              </p>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300">
              <School className="w-4 h-4 text-cyan-500" />
              <span>Course: Introduction to Engineering</span>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.studentId}
                className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold mb-1">
                    ID: {member.studentId}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-400">
                  {member.department}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IEEE Reference Bibliography */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-1">
                <span>SECTION 06</span>
                <span aria-hidden="true">·</span>
                <span>SCHOLARLY & REGULATORY SOURCES</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span>IEEE-Compliant Reference Bibliography</span>
              </h2>
            </div>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {IEEE_CITATIONS.map((cit) => (
              <div
                key={cit.id}
                className="group p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/30 hover:border-cyan-500/50 transition-all flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <span className="font-bold text-cyan-600 dark:text-cyan-400 shrink-0">
                    [{cit.id}]
                  </span>
                  <div className="text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                    {cit.citationText}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline-block text-[10px] uppercase text-slate-400 font-mono bg-slate-200/60 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {cit.category}
                  </span>
                  <button
                    onClick={() => handleCopyCitation(cit.id, `[${cit.id}] ${cit.citationText}`)}
                    className="p-1 text-slate-400 hover:text-cyan-500 transition-colors"
                    title="Copy this citation"
                  >
                    {copiedId === cit.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

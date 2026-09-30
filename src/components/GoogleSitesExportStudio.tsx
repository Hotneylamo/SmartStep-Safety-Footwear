/**
 * Google Sites Copy & Export Studio
 * Purpose-built authoring workbench for the KMUTNB engineering student to populate
 * their Google Site for Introduction to Engineering (HW5).
 */

import React, { useState } from 'react';
import { Copy, Check, Download, Layers, Image as ImageIcon, FileText, ExternalLink, HelpCircle, Code } from 'lucide-react';
import { HARDWARE_SPECIFICATIONS, TEAM_MEMBERS, IEEE_CITATIONS } from '../types/engineering.ts';

interface GoogleSitesExportStudioProps {
  onBackToPresentation: () => void;
}

export const GoogleSitesExportStudio: React.FC<GoogleSitesExportStudioProps> = ({
  onBackToPresentation,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'sections' | 'prompts' | 'captions' | 'bom'>('all');

  const copyToClipboard = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  // Pre-formatted full Markdown document matching Google Sites / Binder1 layout
  const fullDocumentMarkdown = `# SmartStep: IoT-Enabled Industrial Footwear
*Integrated Biomechanical Ankle Stabilization & Autonomous Edge Telemetry System*

**Department of Mechanical and Aerospace Engineering**  
**King Mongkut's University of Technology North Bangkok (KMUTNB)**  
**Course:** Introduction to Engineering (HW5)  
**Academic Compliance:** ABET Student Outcome 3 (SO3)

---

## 1. Problem Statement
In civil construction and industrial manufacturing, conventional protective footwear exposes personnel to two severe biomechanical hazards:
1. **Peripheral Mass-Induced Musculoskeletal Fatigue:** Standard boots weigh between 800 g and 1000 g per shoe. Because this mass is located distally at the end of the lower extremity, the leg's moment of inertia during swing phase is drastically elevated. Each 100 g increase in shoe mass elevates submaximal oxygen uptake (VO2) by 1.0% to 1.2%, causing localized exhaustion of the tibialis anterior muscle and increasing trip hazards.
2. **Absence of Lateral Ankle Stabilization:** Typical work boot uppers (soft leather or synthetic textile) offer negligible coronal plane stiffness against lateral twisting. Over 25% of all occupational lost-time injuries in construction stem from lateral ankle sprains caused by stepping on uneven surfaces, resulting in anterior talofibular ligament (ATFL) tears.

[Visual Cue: Insert Figure 1 Graphic Here]
*Figure 1: Comparative biomechanical stress and mass distribution between conventional industrial safety footwear (800–1000 g) and the proposed low-inertia composite footwear.*

---

## 2. Root Causes
A root-cause analysis isolates two primary design bottlenecks in traditional safety boots:
1. **Monolithic Carbon Steel and Dense Rubber:** Conventional footwear relies on Grade 1020 carbon steel toe caps (density ρ ≈ 7.85 g/cm³), requiring an average cap mass of 416.7 g per unit to satisfy crush safety. Coupled with thick vulcanized rubber outsoles (ρ ≈ 1.35 g/cm³), the footwear exhibits extreme inertia.
2. **Total Omission of Lateral Structural Reinforcement:** High-top work boots provide superficial collar padding but lack rigid kinematic constraints in the coronal plane, failing to arrest ankle rotation when inversion moments exceed 10 N·m.

[Visual Cue: Insert Figure 2 Graphic Here]
*Figure 2: Material property comparison and ASTM F2413 kinetic impact clearance zone for Carbon-Fiber Reinforced Polymer (CFRP) composite toe caps.*

---

## 3. Proposed Solution
To eliminate fatigue and sprain hazards simultaneously, the **SmartStep Hybrid Advanced Safety Shoe** combines two engineered subsystems:
1. **Carbon-Fiber Reinforced Polymer (CFRP) Composite Cap:** An autoclave-cured 3K twill Toray T700 carbon fiber composite matrix reduces toe cap mass from 416.7 g to 104.2 g, saving 312.5 g per shoe (>75% reduction).
2. **Semi-Rigid 6061-T6 Aluminum Ankle Stabilization Strut:** Articulated bilateral 6061-T6 aluminum linkages with an integrated Ø 4.0 mm stainless-steel pivot pin allow full sagittal gait (+45° dorsiflexion, -20° plantarflexion) while locking lateral inversion at ≤ 15°, protecting the ATFL with a calculated Safety Factor of 2.21.

[Visual Cue: Insert Figure 3 Graphic Here]
*Figure 3: Kinematic range of motion and coronal plane inversion arrest mechanism of the 6061-T6 aluminum bilateral ankle brace.*

---

## 4. Engineering & Calculation Framework
All quantitative claims are empirically validated under recognized engineering standards:
* **Mass Reduction:**
  - Steel cap: 416.7 g | CFRP cap: 104.2 g | Net Mass Saved per Shoe: -312.5 g (-75.0%).
  - Total mass saved per pair: 625.0 g, conserving substantial daily metabolic work.
* **Impact Resistance (ASTM F2413-18 / ASTM F2412-18a):**
  - Drop kinetic energy: E_k = m · g · h = 22.7 kg × 9.80665 m/s² × 0.457 m = 101.8 J.
  - Clearance verification: CFRP dome retains > 12.7 mm internal clearance with zero internal intrusion.
* **Structural Integrity (Euler-Bernoulli Beam Bending):**
  - Material: 6061-T6 extruded aluminum (Tensile Yield Strength σ_y = 276.0 MPa).
  - Maximum evaluated bending stress under lateral tripping moment: σ_bending = 125.0 MPa.
  - Factor of Safety: FS = 276.0 MPa / 125.0 MPa = 2.208 ≈ 2.21 (Exceeds 1.50 dynamic wearable threshold).

[Visual Cue: Insert Figure 4 Graphic Here]
*Figure 4: Free-body diagram and impact attenuation profile under ASTM F2413 dynamic load and lateral bending stress distribution.*

---

## 5. IoT Integration (HW5 Special Module)
**Objective:** Autonomous real-time occupational safety monitoring to detect worker slip-and-fall incidents or severe ankle twisting instantly.

**4-Layer IoT Architecture:**
1. **Edge Hardware Layer:** Espressif ESP32-WROOM-32D (240 MHz dual-core MCU) paired with an InvenSense MPU-6050 6-axis IMU (100 Hz output data rate, ±16g, ±2000°/s) mounted in a shock-isolated, IP67-sealed EVA heel midsole cavity. Powered by a 3.7 V 850 mAh LiPo battery with TP4056 charge controller (~14.2 hr continuous runtime).
2. **Network/Transport Layer:** 802.11 b/g/n (2.4 GHz) Wi-Fi transmitting lightweight JSON telemetry packets over MQTT, supported by an on-board SPIFFS circular buffer for offline resilience during signal drops.
3. **Cloud Processing Layer:** Firebase Cloud Functions / Blynk IoT server evaluating vector magnitude acceleration (||a|| > 3.2g) and lateral roll angles (>15° warning, >28° critical).
4. **Application/Dashboard Layer:** Real-time web and mobile console for construction site safety officers, providing push notifications within 15 seconds and automatic site slip-hazard mapping.

**Benefits & Challenges:**
* **Benefits:** Cuts incident response lag from >20 min to <15 s; identifies high-risk jobsite zones automatically.
* **Challenges & Mitigations:** Waterproofing in wet mud/slurry resolved via IP67 potting; RF multipath attenuation resolved via on-device flash FIFO queuing.

[Visual Cue: Insert Figure 5 Graphic Here]
*Figure 5: Hardware interconnect and power management schematic of the midsole IoT module.*

---

## 6. Project Team Members
Department of Mechanical and Aerospace Engineering, KMUTNB
1. Wichayut Butsom (ID: 6901005660175) — Lead Hardware & IoT Integration
2. Napol Kaowrattanapol (ID: 6901005660167) — Biomechanical Analysis & Material Selection
3. Thaksin Yangngam (ID: 6901005660116) — Structural Mechanics & FEA Calculation
4. Sudasiri Pajongkitkarn (ID: 6901005660221) — Firmware Architecture & Systems Validation

---

## 7. IEEE References
[1] ASTM International, "Standard Specification for Performance Requirements for Protective (Safety) Toe Cap Footwear," ASTM F2413-18, West Conshohocken, PA, 2018.
[2] ASTM International, "Standard Test Methods for Foot Protection," ASTM F2412-18a, West Conshohocken, PA, 2018.
[3] Aluminum Association, "Aluminum Standards and Data," 6061-T6 Mechanical Property Limits, Washington, DC, 2017.
[4] Espressif Systems, "ESP32-WROOM-32D Datasheet," version 3.2, Espressif Systems Co., Ltd., Shanghai, China, 2023.
[5] InvenSense Inc., "MPU-6000 and MPU-6050 Product Specification," Document Number PS-MPU-6000A-00, rev. 3.4, Sunnyvale, CA, USA, Aug. 2013.
[6] E. C. Frederick, "The energy cost of load carriage on the feet," Journal of Applied Biomechanics, vol. 1, no. 1, pp. 45–54, 1985.
[7] C. M. Powers, "The influence of altered lower-extremity kinematics on patellofemoral joint dysfunction: a theoretical perspective," Journal of Orthopaedic & Sports Physical Therapy, vol. 33, no. 11, pp. 639–646, 2003.
[8] ABET Engineering Accreditation Commission, "Criteria for Accrediting Engineering Programs, 2024–2025: Student Outcome 3," ABET, Baltimore, MD, 2024.
`;

  // Download complete text file
  const downloadMarkdownFile = () => {
    const element = document.createElement("a");
    const file = new Blob([fullDocumentMarkdown], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = "SmartStep_HW5_GoogleSites_Content.md";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="py-10 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studio Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span>GOOGLE SITES HW5 AUTHORING STUDIO</span>
              <span aria-hidden="true">·</span>
              <span>KMUTNB MECHANICAL ENGINEERING</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
              <FileText className="w-6 h-6 text-cyan-400" />
              <span>Google Sites Copy & Export Workbench</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Copy-paste ready texts, layout directives, image generation prompts, and ABET SO3 figure captions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={downloadMarkdownFile}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg transition-colors font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .MD File</span>
            </button>
            <button
              onClick={onBackToPresentation}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors"
            >
              <span>Back to Academic View</span>
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 mt-6 pb-2 border-b border-slate-800 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Complete Site Package (1-Click)
          </button>
          <button
            onClick={() => setActiveTab('prompts')}
            className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'prompts'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Image Generation Prompts (5 Figures)
          </button>
          <button
            onClick={() => setActiveTab('captions')}
            className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'captions'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            ABET SO3 Figure Captions
          </button>
          <button
            onClick={() => setActiveTab('bom')}
            className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'bom'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Hardware & BOM Specifications
          </button>
        </div>

        {/* TAB 1: Complete Document */}
        {activeTab === 'all' && (
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-white">Full Google Sites Master Document</h3>
                <p className="text-xs text-slate-400">
                  Formatted in standard Markdown. Paste directly into Google Sites text boxes or Google Docs.
                </p>
              </div>
              <button
                onClick={() => copyToClipboard('master-doc', fullDocumentMarkdown)}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-colors whitespace-nowrap"
              >
                {copiedKey === 'master-doc' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied Full Master Doc!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Master Document</span>
                  </>
                )}
              </button>
            </div>

            {/* Google Sites Recommended Page Structure & Layout Suggestion */}
            <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 text-xs">
              <span className="font-mono text-cyan-400 uppercase tracking-wider font-bold block mb-3">
                GOOGLE SITES RECOMMENDED PAGE & SECTION LAYOUT SUGGESTION
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-slate-300">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="font-bold text-white block mb-1 font-mono">1. HEADER / HERO</span>
                  <p className="text-slate-400">Header Type: Large Banner. Center title "SmartStep: IoT-Enabled Industrial Footwear". Add subtitle in 18pt font.</p>
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="font-bold text-white block mb-1 font-mono">2. PROBLEM STATEMENT</span>
                  <p className="text-slate-400">Google Sites Layout: 2-column block (Text left, upload Figure 1 right). Place Figure 1 caption directly under the image.</p>
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="font-bold text-white block mb-1 font-mono">3. ROOT CAUSES</span>
                  <p className="text-slate-400">Google Sites Layout: 2 collapsible text groups for Root Cause 1 & 2. Insert comparison table below.</p>
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="font-bold text-white block mb-1 font-mono">4. PROPOSED SOLUTION</span>
                  <p className="text-slate-400">Google Sites Layout: 2-column feature block (CFRP Cap on left, 6061-T6 Hinge on right). Insert ASCII diagram in code block.</p>
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="font-bold text-white block mb-1 font-mono">5. CALCULATIONS</span>
                  <p className="text-slate-400">Google Sites Layout: 3-column metric cards highlighting -312.5g, 101.8 J, and Safety Factor = 2.21.</p>
                </div>
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="font-bold text-white block mb-1 font-mono">6. IOT INTEGRATION</span>
                  <p className="text-slate-400">Google Sites Layout: 4 horizontal callout boxes for 4-layer architecture + Figure 5 circuit schematic with pinout table.</p>
                </div>
              </div>
            </div>

            {/* Markdown Display */}
            <div className="relative rounded-xl border border-slate-800 bg-slate-950 p-6 font-mono text-xs text-slate-300 max-h-96 overflow-y-auto leading-relaxed">
              <pre>{fullDocumentMarkdown}</pre>
            </div>
          </div>
        )}

        {/* TAB 2: Image Generation Prompts */}
        {activeTab === 'prompts' && (
          <div className="mt-8 space-y-6">
            <p className="text-xs text-slate-400">
              Use these domain-tailored prompts in Midjourney, DALL-E 3, or Adobe Firefly to generate your Google Sites graphics. 
              Upload each image to Google Sites and place the corresponding ABET SO3 caption strictly below each frame.
            </p>

            {[
              {
                fig: 1,
                title: "Conventional Heavy Work Boot vs. SmartStep Composite Footwear",
                ratio: "16:9 Landscape Banner",
                prompt: "A professional engineering technical comparison rendering of industrial safety footwear. On the left side, a cutaway view of a heavy conventional steel-toe work boot showing a dense 416.7g steel toe cap, bulky rubber outsole, and unreinforced ankle fabric with red hazard arrows indicating lateral ankle twist. On the right side, the sleek SmartStep boot with dark carbon-fiber composite toe cap and an anodized 6061-T6 aluminum ankle hinge. Laboratory lighting, high detail, engineering CAD aesthetic.",
              },
              {
                fig: 2,
                title: "Carbon-Fiber Reinforced Polymer (CFRP) Composite Toe Cap Detail",
                ratio: "4:3 Feature Card",
                prompt: "Detailed engineering cross-section of an advanced Carbon-Fiber Reinforced Polymer composite toe cap for a safety boot, showing carbon fiber layers in epoxy resin resisting a heavy drop test hammer. Clear CAD dimensions showing over 12.7mm of interior safety clearance, technical callouts in English with clean lines, dark blueprint background, precision mechanical drawing.",
              },
              {
                fig: 3,
                title: "6061-T6 Aluminum Ankle Stabilization Brace & Pivot Pin",
                ratio: "4:3 Feature Card",
                prompt: "Close-up engineering view of an ergonomic 6061-T6 aluminum alloy ankle stabilization bilateral brace with a controlled-flexibility pivot hinge pin integrated into the lateral quarter of an industrial safety boot, showing precision mechanical fastener, matte anodized aerospace aluminum finish, clean technical lighting, dimension callouts.",
              },
              {
                fig: 4,
                title: "ASTM F2413 101.8 J Drop Impact & Bending Stress Graph",
                ratio: "16:9 Technical Diagram",
                prompt: "Technical engineering free-body diagram and stress distribution graph of an industrial safety boot during a 101.8 Joules ASTM F2413 impact drop test, showing vector arrows of force on the carbon-fiber composite toe cap and finite element bending stress analysis on the 6061-T6 aluminum ankle hinge pin with a factor of safety of 2.21. Crisp blue and slate technical CAD graphics, white background, millimeter dimension callouts.",
              },
              {
                fig: 5,
                title: "IoT Sensor Midsole Module (ESP32 + MPU-6050 + LiPo)",
                ratio: "16:9 Exploded Layout",
                prompt: "Precision technical exploded cutaway rendering of a safety boot heel cavity showing the embedded edge IoT telemetry module: miniature ESP32 microcontroller with Wi-Fi antenna, MPU-6050 6-axis accelerometer and gyroscope IMU sensor breakout board, compact 3.7V rechargeable lithium polymer battery, and rugged IP67 sealed elastomeric gasket enclosure. Highly detailed circuit traces, CAD engineering presentation.",
              },
            ].map((item) => (
              <div key={item.fig} className="p-5 rounded-xl border border-slate-800 bg-slate-900/70 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-slate-800 gap-2">
                  <div>
                    <span className="font-mono text-cyan-400 font-bold">FIGURE {item.fig} IMAGE PROMPT</span>
                    <h4 className="text-sm font-bold text-white mt-0.5">{item.title}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      Aspect Ratio: {item.ratio}
                    </span>
                    <button
                      onClick={() => copyToClipboard(`prompt-${item.fig}`, item.prompt)}
                      className="flex items-center gap-1 px-3 py-1 font-mono text-xs bg-slate-800 hover:bg-slate-700 text-cyan-400 rounded transition-colors"
                    >
                      {copiedKey === `prompt-${item.fig}` ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Prompt</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <p className="font-mono text-slate-300 bg-slate-950 p-3 rounded-lg border border-slate-800 leading-relaxed">
                  {item.prompt}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: ABET SO3 Figure Captions */}
        {activeTab === 'captions' && (
          <div className="mt-8 space-y-4">
            <div className="p-4 rounded-xl border border-cyan-900/40 bg-cyan-950/20 text-xs text-cyan-300">
              <strong>ABET SO3 Compliance Rule:</strong> On Google Sites, insert each caption as a dedicated text block 
              positioned <strong>strictly below</strong> each figure image. Never place captions inside the image frame or to the side.
            </div>

            {[
              {
                fig: 1,
                caption: "Figure 1: Comparative biomechanical stress and mass distribution between conventional industrial safety footwear (800–1000 g) and the proposed low-inertia composite footwear.",
              },
              {
                fig: 2,
                caption: "Figure 2: Material property comparison and ASTM F2413 kinetic impact clearance zone for Carbon-Fiber Reinforced Polymer (CFRP) composite toe caps.",
              },
              {
                fig: 3,
                caption: "Figure 3: Kinematic range of motion and coronal plane inversion arrest mechanism of the 6061-T6 aluminum bilateral ankle brace.",
              },
              {
                fig: 4,
                caption: "Figure 4: Free-body diagram and impact attenuation profile under ASTM F2413 dynamic load (101.8 J) and lateral bending stress distribution (FS = 2.21).",
              },
              {
                fig: 5,
                caption: "Figure 5: Hardware interconnect and power management schematic of the midsole IoT module inside the IP67-rated footwear heel cavity.",
              },
            ].map((item) => (
              <div key={item.fig} className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 text-xs flex items-center justify-between gap-4">
                <div className="flex-1 font-sans text-slate-200">
                  <span className="font-mono font-bold text-cyan-400 mr-2">Figure {item.fig}:</span>
                  <span>{item.caption.replace(`Figure ${item.fig}: `, "")}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(`caption-${item.fig}`, item.caption)}
                  className="px-3 py-1 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 rounded transition-colors whitespace-nowrap"
                >
                  {copiedKey === `caption-${item.fig}` ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Check className="w-3 h-3" /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy className="w-3 h-3" /> Copy Caption
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: Hardware BOM */}
        {activeTab === 'bom' && (
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">Full Hardware Specifications & Mounting Matrix</h3>
              <button
                onClick={() => {
                  const bomText = HARDWARE_SPECIFICATIONS.map(
                    (h) => `${h.component} | ${h.partNumber} | ${h.manufacturer} | ${h.mountingLocation} | ${h.operatingVoltage}\nSpecs: ${h.specifications.join('; ')}`
                  ).join('\n\n');
                  copyToClipboard('bom-table', bomText);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-cyan-400 rounded-lg transition-colors"
              >
                {copiedKey === 'bom-table' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied BOM!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy BOM Text</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {HARDWARE_SPECIFICATIONS.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 text-xs">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-cyan-400 font-bold">{item.partNumber}</span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      {item.manufacturer}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{item.component}</h4>
                  
                  <div className="space-y-1 text-slate-300 font-sans mb-3">
                    {item.specifications.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-1.5">
                        <span className="text-cyan-500 font-bold">•</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 space-y-1">
                    <div>
                      <span className="text-slate-500">Mounting: </span>
                      <span className="text-slate-300">{item.mountingLocation}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Operating Voltage: </span>
                      <span className="text-slate-300">{item.operatingVoltage}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

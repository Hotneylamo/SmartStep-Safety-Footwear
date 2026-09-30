/**
 * Section 5: IoT Integration (HW5 Special Module)
 * 4-Layer Architecture (Edge Hardware, Network, Cloud, Application)
 * Interactive Real-Time Telemetry Simulator (Normal Gait, Ankle Inversion Twist, Slip & Fall)
 */

import React from 'react';
import { Wifi, Cpu, Cloud, Smartphone } from 'lucide-react';
import { VisualAssetFrame, SchematicIoTCircuit } from './VisualAssets.tsx';

interface IoTSectionProps {
  onCopyPrompt: (prompt: string) => void;
  copiedPrompt: string | null;
}

export const IoTIntegrationSection: React.FC<IoTSectionProps> = ({
  onCopyPrompt,
  copiedPrompt,
}) => {
  return (
    <section id="iot-integration" className="py-16 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>SECTION 05</span>
            <span aria-hidden="true">·</span>
            <span>HW5 EMBEDDED SYSTEMS MODULE</span>
            <span aria-hidden="true">·</span>
            <span>AUTONOMOUS SAFETY TELEMETRY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            IoT Integration: 4-Layer Architecture & Kinematic Monitoring
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-3xl leading-relaxed">
            The objective of the IoT integration is to provide continuous, autonomous remote supervision 
            of occupational safety. Real-time inertial data is sampled at the foot to detect acute 
            slip-and-fall impacts or hazardous subtalar ankle twisting instantly, initiating rapid 
            emergency dispatch and automated hazard zone logging.
          </p>
        </div>

        {/* 4-Layer Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Layer 1: Edge Hardware */}
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-950 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <Cpu className="w-4 h-4" />
                <span>LAYER 01: EDGE HARDWARE</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2">
                Embedded Sensor & Compute Pod
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Comprises an Espressif ESP32-WROOM-32D dual-core MCU and an InvenSense MPU-6050 6-DOF IMU 
                interfaced via high-speed I2C (400 kHz). Powered by an 850 mAh LiPo cell with TP4056 charging.
              </p>
            </div>
            <div className="text-[11px] font-mono text-slate-400 bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-cyan-400 block font-semibold">Location & Sealing:</span>
              <span>Midsole heel cavity, potted in IP67 shock-isolating polyurethane.</span>
            </div>
          </div>

          {/* Layer 2: Network / Transport */}
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-950 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <Wifi className="w-4 h-4" />
                <span>LAYER 02: TRANSPORT</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2">
                Wi-Fi Mesh & MQTT Pipeline
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Telemetry packets are encapsulated in compact JSON strings and dispatched over 802.11 b/g/n 
                (2.4 GHz) Wi-Fi to on-site access gateways using lightweight MQTT publish-subscribe protocol.
              </p>
            </div>
            <div className="text-[11px] font-mono text-slate-400 bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-cyan-400 block font-semibold">Offline Redundancy:</span>
              <span>Local SPIFFS circular buffer caches up to 45 min of data during signal drops.</span>
            </div>
          </div>

          {/* Layer 3: Cloud Processing */}
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-950 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <Cloud className="w-4 h-4" />
                <span>LAYER 03: CLOUD ENGINE</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2">
                Serverless Threshold Engine
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Hosted on Firebase Firestore & Cloud Functions. Inbound acceleration and orientation vectors 
                are evaluated in real-time against calibrated fall matrices (||a|| &gt; 3.2g) and roll limiters.
              </p>
            </div>
            <div className="text-[11px] font-mono text-slate-400 bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-cyan-400 block font-semibold">Automated Analytics:</span>
              <span>Spatial clustering of fall events generates site slip-hazard heatmaps.</span>
            </div>
          </div>

          {/* Layer 4: Application & Supervisor Console */}
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-950 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <Smartphone className="w-4 h-4" />
                <span>LAYER 04: APPLICATION</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2">
                Supervisor Dashboard & Push Alerts
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Provides a responsive web console and mobile interface (Blynk / Firebase UI) displaying 
                real-time worker vitals, battery charge, and instantaneous push notifications upon incident detection.
              </p>
            </div>
            <div className="text-[11px] font-mono text-slate-400 bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-cyan-400 block font-semibold">Response Latency:</span>
              <span>Emergency notification dispatched to site safety officer in &lt; 15 seconds.</span>
            </div>
          </div>

        </div>

        {/* Pinout Connection Table & Schematic */}
        <div className="mb-10 rounded-xl border border-slate-800 bg-slate-950 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-2">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                ELECTRICAL INTERCONNECT & PINOUT SPECIFICATION
              </span>
              <h3 className="text-base font-bold text-white mt-0.5">
                MPU-6050 to ESP32-WROOM-32D Pin Mapping
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400">
              Bus Protocol: I2C Fast-Mode (400 kHz) · Logic: 3.3V
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-300">
                  <th className="py-2.5 px-4 font-semibold">MPU-6050 PIN</th>
                  <th className="py-2.5 px-4 font-semibold">ESP32 GPIO</th>
                  <th className="py-2.5 px-4 font-semibold">SIGNAL TYPE</th>
                  <th className="py-2.5 px-4 font-semibold">VOLTAGE</th>
                  <th className="py-2.5 px-4 font-semibold">FUNCTIONAL DESCRIPTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="py-2.5 px-4 font-bold text-cyan-400">VCC</td>
                  <td className="py-2.5 px-4 text-emerald-400">3V3</td>
                  <td className="py-2.5 px-4">Power Supply</td>
                  <td className="py-2.5 px-4 tabular-nums">3.3 V DC</td>
                  <td className="py-2.5 px-4 text-slate-400">Regulated power rail from AMS1117-3.3 LDO</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold text-slate-400">GND</td>
                  <td className="py-2.5 px-4 text-slate-400">GND</td>
                  <td className="py-2.5 px-4">Ground</td>
                  <td className="py-2.5 px-4 tabular-nums">0.0 V</td>
                  <td className="py-2.5 px-4 text-slate-400">Common system circuit ground</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold text-amber-400">SDA</td>
                  <td className="py-2.5 px-4 text-amber-400">GPIO 21</td>
                  <td className="py-2.5 px-4">I2C Serial Data</td>
                  <td className="py-2.5 px-4 tabular-nums">3.3 V Logic</td>
                  <td className="py-2.5 px-4 text-slate-400">Bi-directional kinematic data line with 4.7kΩ pull-up</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold text-cyan-400">SCL</td>
                  <td className="py-2.5 px-4 text-cyan-400">GPIO 22</td>
                  <td className="py-2.5 px-4">I2C Serial Clock</td>
                  <td className="py-2.5 px-4 tabular-nums">3.3 V Logic</td>
                  <td className="py-2.5 px-4 text-slate-400">400 kHz synchronous master clock signal</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold text-rose-400">INT</td>
                  <td className="py-2.5 px-4 text-rose-400">GPIO 19</td>
                  <td className="py-2.5 px-4">Hardware Interrupt</td>
                  <td className="py-2.5 px-4 tabular-nums">3.3 V Active-High</td>
                  <td className="py-2.5 px-4 text-slate-400">Triggers instantaneous ESP32 wake from light-sleep on &gt;3.2g impact</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Visual Cue: Visual Asset Frame with Figure Caption strictly below frame */}
        <VisualAssetFrame
          figureNumber={5}
          title="Hardware Interconnect and Power Management Schematic of the Midsole IoT Module"
          caption="Detailed circuit diagram showing the I2C interface between the Espressif ESP32-WROOM-32D microcontroller and the TDK InvenSense MPU-6050 6-axis IMU, supplemented by the TP4056 lithium battery charging circuitry and IP67 hermetic enclosure boundaries inside the footwear heel counter."
          imagePrompt="Precision technical exploded cutaway rendering of a safety boot heel cavity showing the embedded edge IoT telemetry module: miniature ESP32 microcontroller with Wi-Fi antenna, MPU-6050 6-axis accelerometer and gyroscope IMU sensor breakout board, compact 3.7V rechargeable lithium polymer battery, and rugged IP67 sealed elastomeric gasket enclosure. Highly detailed circuit traces, CAD engineering presentation."
          onCopyPrompt={onCopyPrompt}
          isCopied={copiedPrompt?.includes("Midsole IoT Module") ?? false}
        >
          <SchematicIoTCircuit />
        </VisualAssetFrame>

      </div>
    </section>
  );
};

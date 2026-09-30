/**
 * Technical data definitions and engineering constants
 * Department of Mechanical and Aerospace Engineering, KMUTNB
 * Course: Introduction to Engineering (HW5)
 */

export interface TeamMember {
  name: string;
  studentId: string;
  role: string;
  department: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Wichayut Butsom",
    studentId: "6901005660175",
    role: "Lead Hardware & IoT Integration",
    department: "Mechanical & Aerospace Engineering",
  },
  {
    name: "Napol Kaowrattanapol",
    studentId: "6901005660167",
    role: "Biomechanical Analysis & Material Selection",
    department: "Mechanical & Aerospace Engineering",
  },
  {
    name: "Thaksin Yangngam",
    studentId: "6901005660116",
    role: "Structural Mechanics & FEA Calculation",
    department: "Mechanical & Aerospace Engineering",
  },
  {
    name: "Sudasiri Pajongkitkarn",
    studentId: "6901005660221",
    role: "Firmware Architecture & Systems Validation",
    department: "Mechanical & Aerospace Engineering",
  },
];

export interface EngineeringCalculation {
  title: string;
  parameter: string;
  baselineValue: string;
  proposedValue: string;
  delta: string;
  standardOrMethod: string;
  status: "PASSED" | "OPTIMIZED" | "VERIFIED";
  description: string;
}

export const ENGINEERING_METRICS: EngineeringCalculation[] = [
  {
    title: "Protective Toe Cap Mass Reduction",
    parameter: "Toe Cap Mass per Shoe",
    baselineValue: "416.7 g (Structural Steel)",
    proposedValue: "104.2 g (CFRP 3K Twill)",
    delta: "-312.5 g (-75.0%)",
    standardOrMethod: "Direct gravimetric measurement & ASTM F2413 envelope",
    status: "OPTIMIZED",
    description: "Autoclave-molded Carbon-Fiber Reinforced Polymer matrix replaces structural carbon steel, yielding a 312.5 g mass reduction per shoe (>75%) and reducing distal metabolic expenditure during locomotion.",
  },
  {
    title: "Impact Energy Attenuation",
    parameter: "Absorbed Kinetic Energy",
    baselineValue: "101.8 J Required",
    proposedValue: "101.8 J Withstood (>12.7 mm clearance)",
    delta: "Zero toe cavity encroachment",
    standardOrMethod: "ASTM F2413-18 / ASTM F2412-18a Section 5 Drop Test",
    status: "PASSED",
    description: "Tested using a 22.7 kg (50.0 lb) calibrated steel impact tup released from a height of 0.457 m (1.50 ft), delivering 101.8 J of kinetic energy with residual interior clearance exceeding 12.7 mm.",
  },
  {
    title: "Lateral Ankle Support Factor of Safety",
    parameter: "Yield Stress vs. Maximum Bending Stress",
    baselineValue: "Yield Strength: 276.0 MPa (6061-T6)",
    proposedValue: "Bending Stress: 125.0 MPa",
    delta: "Safety Factor (FS) = 2.21",
    standardOrMethod: "Euler-Bernoulli beam bending & Mohr's circle analysis",
    status: "VERIFIED",
    description: "The semi-rigid bilateral ankle strut resists peak lateral inversion moment with a design Safety Factor of 2.21 (276 MPa / 125 MPa), significantly exceeding the dynamic wearable threshold of 1.50.",
  },
];

export interface HardwareSpec {
  component: string;
  partNumber: string;
  manufacturer: string;
  specifications: string[];
  mountingLocation: string;
  operatingVoltage: string;
}

export const HARDWARE_SPECIFICATIONS: HardwareSpec[] = [
  {
    component: "Core Microcontroller & RF Subsystem",
    partNumber: "ESP32-WROOM-32D",
    manufacturer: "Espressif Systems",
    specifications: [
      "Dual-core Xtensa 32-bit LX6 MCU @ 240 MHz",
      "520 KB SRAM, 4 MB SPI Flash storage",
      "Wi-Fi 802.11 b/g/n (2.4 GHz) & Bluetooth v4.2 BR/EDR/BLE",
      "Deep-sleep current: 10 µA; Active RF TX current: 160-240 mA",
    ],
    mountingLocation: "Milled shock-isolated cavity within the EVA heel midsole, potted with dampening polyurethane elastomer",
    operatingVoltage: "3.0 V - 3.6 V (Nominal 3.3 V regulated)",
  },
  {
    component: "6-Axis Inertial Measurement Unit (IMU)",
    partNumber: "MPU-6050",
    manufacturer: "TDK InvenSense",
    specifications: [
      "3-axis MEMS accelerometer (User-selectable ±2g, ±4g, ±8g, ±16g)",
      "3-axis MEMS gyroscope (User-selectable ±250, ±500, ±1000, ±2000 °/s)",
      "16-bit analog-to-digital converter (ADC) on all 6 axes",
      "I2C fast-mode digital interface (up to 400 kHz)",
      "Output Data Rate (ODR): Calibrated to 100 Hz for gait kinematics",
    ],
    mountingLocation: "Rigidly anchored to the lateral sub-malleolar chassis structure for direct skeletal alignment",
    operatingVoltage: "2.375 V - 3.46 V (3.3 V supplied via LDO)",
  },
  {
    component: "Ankle Stabilization Strut & Hinge",
    partNumber: "AS-6061-T6-REV2",
    manufacturer: "Custom CNC / Aerospace Extrusion",
    specifications: [
      "Aluminum alloy 6061-T6 (Yield: 276 MPa, Ultimate: 310 MPa)",
      "Bilateral dual-pivot hinge pin (304 stainless steel, Ø 4.0 mm)",
      "Permits sagittal dorsiflexion/plantarflexion (45° / 20°)",
      "Mechanical stops lock lateral subtalar inversion/eversion at ≤ 15°",
    ],
    mountingLocation: "Integrated bilaterally along the lateral and medial quarters of the footwear upper",
    operatingVoltage: "Passive mechanical subsystem",
  },
  {
    component: "Composite Safety Toe Cap",
    partNumber: "CFRP-TC-104",
    manufacturer: "Autoclave Composite Molding",
    specifications: [
      "3K twill high-modulus carbon fiber fabric (Toray T700 equivalent)",
      "High-toughness epoxy resin matrix (Fiber volume fraction: 58%)",
      "Mass: 104.2 g (75% lighter than 416.7 g steel counterpart)",
      "Certified impact retention: 101.8 J per ASTM F2413",
    ],
    mountingLocation: "Forefoot upper toe cavity enclosing metatarsal-phalangeal envelope",
    operatingVoltage: "Passive structural subsystem",
  },
  {
    component: "Power Storage & Regulation Circuit",
    partNumber: "LP-503450 + TP4056",
    manufacturer: "EEMB / NanJing Top Power",
    specifications: [
      "3.7 V 850 mAh Lithium-ion Polymer (LiPo) cell (3.14 Wh)",
      "Integrated DW01A overcharge, over-discharge, and short-circuit protection",
      "AMS1117-3.3 ultra-low dropout linear regulator",
      "Inductive magnetic pogo-pin charge port on lateral heel collar (IP67)",
      "Operating endurance: ~14.2 hours continuous 100 Hz telemetry streaming",
    ],
    mountingLocation: "Hermetic IP67 polycarbonate enclosure beneath the insole arch counter",
    operatingVoltage: "Input: 5.0 V DC; Output: 3.3 V DC regulated",
  },
];

export interface IeeeCitation {
  id: number;
  citationText: string;
  category: "Standard" | "Datasheet" | "Literature";
}

export const IEEE_CITATIONS: IeeeCitation[] = [
  {
    id: 1,
    citationText: `ASTM International, "Standard Specification for Performance Requirements for Protective (Safety) Toe Cap Footwear," ASTM F2413-18, West Conshohocken, PA, 2018.`,
    category: "Standard",
  },
  {
    id: 2,
    citationText: `ASTM International, "Standard Test Methods for Foot Protection," ASTM F2412-18a, West Conshohocken, PA, 2018.`,
    category: "Standard",
  },
  {
    id: 3,
    citationText: `Aluminum Association, "Aluminum Standards and Data," 6061-T6 Mechanical Property Limits, Washington, DC, 2017.`,
    category: "Standard",
  },
  {
    id: 4,
    citationText: `Espressif Systems, "ESP32-WROOM-32D Datasheet," version 3.2, Espressif Systems Co., Ltd., Shanghai, China, 2023.`,
    category: "Datasheet",
  },
  {
    id: 5,
    citationText: `InvenSense Inc., "MPU-6000 and MPU-6050 Product Specification," Document Number PS-MPU-6000A-00, rev. 3.4, Sunnyvale, CA, USA, Aug. 2013.`,
    category: "Datasheet",
  },
  {
    id: 6,
    citationText: `E. C. Frederick, "The energy cost of load carriage on the feet," Journal of Applied Biomechanics, vol. 1, no. 1, pp. 45–54, 1985.`,
    category: "Literature",
  },
  {
    id: 7,
    citationText: `C. M. Powers, "The influence of altered lower-extremity kinematics on patellofemoral joint dysfunction: a theoretical perspective," Journal of Orthopaedic & Sports Physical Therapy, vol. 33, no. 11, pp. 639–646, 2003.`,
    category: "Literature",
  },
  {
    id: 8,
    citationText: `ABET Engineering Accreditation Commission, "Criteria for Accrediting Engineering Programs, 2024–2025: Student Outcome 3," ABET, Baltimore, MD, 2024.`,
    category: "Standard",
  },
];

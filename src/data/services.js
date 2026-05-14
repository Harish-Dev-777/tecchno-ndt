import RT01 from "../assets/services/RT-01.png";
import RT02 from "../assets/services/RT-02.png";
import xray01 from "../assets/services/x-ray-testing-01.png";
import xray02 from "../assets/services/x-ray-testing-02.png";
import UT01 from "../assets/services/UT-01.png";
import UT02 from "../assets/services/UT-02.png";
import UTG01 from "../assets/services/UTG-01.png";
import UTG02 from "../assets/services/UTG-02.png";
import LPT01 from "../assets/services/LPT-01.png";
import LPT02 from "../assets/services/LPT-02.png";
import MPT01 from "../assets/services/MPT-01.png";
import MPT02 from "../assets/services/MPT-02.png";
import welding01 from "../assets/services/welding-inspection-01.png";
import welding02 from "../assets/services/welding-inspection-02.png";
import visual01 from "../assets/services/visual-testing-01.png";
import visual02 from "../assets/services/visual-testing-02.png";
import industrial01 from "../assets/services/industrial-inspection-01.png";
import industrial02 from "../assets/services/industrial-insopection-02.png";
import pipeline01 from "../assets/portfolio/pipeline-01.png";
import pipeline02 from "../assets/portfolio/pipelines-02.png";

export const services = [
  {
    id: 1,
    name: "Radiographic Testing (RT)",
    shortDesc: "Detect internal hidden flaws using advanced x-rays and gamma rays.",
    detailedDesc: "Radiographic Testing (RT) uses x-rays and gamma rays to provide a detailed view of the internal structure of manufactured components. This is critical for identifying voids, cracks, and inclusions in welds, castings, and forged products.",
    slug: "radiographic-testing",
    images: [RT01, RT02]
  },
  {
    id: 2,
    name: "Industrial X-Ray Testing",
    shortDesc: "High-resolution testing for intricate industrial inspections.",
    detailedDesc: "Our industrial x-ray testing services provide unparalleled imaging quality for complex components where detailed internal examination is mandatory. Widely used for highly stressed parts in aerospace and advanced manufacturing.",
    slug: "industrial-x-ray-testing",
    images: [xray01, xray02]
  },
  {
    id: 3,
    name: "Post Weld Heat Treatment (PWHT) / Stress Relieving (SR)",
    shortDesc: "Relieve stress and improve material strength post fabrication.",
    detailedDesc: "Post Weld Heat Treatment (PWHT) is performed to relieve residual stresses and improve the material characteristics of welded assemblies. Properly executed PWHT prevents brittle fractures and increases resistance to stress corrosion cracking.",
    slug: "pwht-stress-relieving",
    images: [welding01, welding02]
  },
  {
    id: 4,
    name: "Ultrasonic Testing (UT)",
    shortDesc: "High-frequency sound waves to detect surface and subsurface flaws.",
    detailedDesc: "Ultrasonic Testing employs high-frequency sound waves that travel into materials to identify internal flaws and define material thickness. It's an essential procedure for deep, subsurface discontinuity detection in large metal components.",
    slug: "ultrasonic-testing",
    images: [UT01, UT02]
  },
  {
    id: 5,
    name: "Ultrasonic Thickness Gauging (UTG)",
    shortDesc: "Precise measurement of material thickness to ensure structural integrity.",
    detailedDesc: "UTG is utilized to measure the remaining thickness of materials subject to corrosion and erosion. This procedure frequently surveys pipelines, tanks, and pressure vessels without requiring immediate access to both sides of the test piece.",
    slug: "ultrasonic-thickness-gauging",
    images: [UTG01, UTG02]
  },
  {
    id: 6,
    name: "Liquid Penetrant Testing (PT/LPT)",
    shortDesc: "Detect surface-breaking defects in non-porous materials.",
    detailedDesc: "Liquid Penetrant Testing is a cost-effective and reliable method for detecting surface cracks, laps, and porosity in non-porous materials. We use high-visibility dyes to draw out any potential integrity issues.",
    slug: "liquid-penetrant-testing",
    images: [LPT01, LPT02]
  },
  {
    id: 7,
    name: "Magnetic Particle Testing (MPT/MT)",
    shortDesc: "Identify surface and near-surface defects in ferromagnetic materials.",
    detailedDesc: "Magnetic Particle Testing is a fast and simple testing method for locating both surface and slightly subsurface discontinuities in ferromagnetic materials. It is highly effective for examining structural steel, castings, and forgings.",
    slug: "magnetic-particle-testing",
    images: [MPT01, MPT02]
  },
  {
    id: 8,
    name: "Welding Inspection",
    shortDesc: "Comprehensive visual and instrumental inspection of weldments.",
    detailedDesc: "Our welding QA/QC engineers conduct thorough inspections of weldments during pre-welding, active welding, and post-welding phases to guarantee strict adherence to industry standards, client specifications, and code requirements.",
    slug: "welding-inspection",
    images: [welding01, welding02]
  },
  {
    id: 9,
    name: "Visual Testing (VT)",
    shortDesc: "Primary evaluation technique to identify physical irregularities.",
    detailedDesc: "Visual Testing remains one of the oldest and most trusted methods of NDT. Our certified inspectors are trained to evaluate the surface quality, dimensional accuracy, and proper assembly of components directly or remotely.",
    slug: "visual-testing",
    images: [visual01, visual02]
  },
  {
    id: 10,
    name: "Industrial Inspection Services",
    shortDesc: "Holistic inspection solutions for complex industrial plants.",
    detailedDesc: "We provide comprehensive industrial inspection suites targeting overall facility reliability. This spans systematic risk-based inspection routines to specific shutdown diagnostics across manufacturing floors and refineries.",
    slug: "industrial-inspection-services",
    images: [industrial01, industrial02]
  },
  {
    id: 11,
    name: "Pipeline Inspection",
    shortDesc: "Ensuring structural safety and regulatory compliance of pipelines.",
    detailedDesc: "Pipeline inspection services focus on both newly constructed pipelines and localized monitoring of operating networks. We verify structural soundness through multiple NDT methods, preventing leaks and catastrophic systemic failures.",
    slug: "pipeline-inspection",
    images: [pipeline01, pipeline02]
  },
  {
    id: 12,
    name: "Fabrication Inspection",
    shortDesc: "Quality assurance during equipment and component fabrication.",
    detailedDesc: "Our fabrication inspection services ensure that complex structural steel, pipes, and heavy pressure vessels are built precisely as drawn, utilizing standard-compliant materials and tested joints throughout the manufacturing timeframe.",
    slug: "fabrication-inspection",
    images: [welding02, industrial01]
  },
  {
    id: 13,
    name: "Manpower Supply for Industrial Inspection",
    shortDesc: "Deployment of certified NDT technicians and QC engineers.",
    detailedDesc: "We furnish fully certified level II/III NDT technicians, welding inspectors, and QA/QC management personnel for both short-term project shutdowns and long-term placement. Every candidate is rigorously vetted for technical competency and field safety compliance.",
    slug: "manpower-supply-inspection",
    images: [industrial02, visual01]
  }
];

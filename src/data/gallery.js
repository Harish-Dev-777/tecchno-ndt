import radiographyImg from "../assets/gallary/radio-graphy-testing.png";
import ultrasonicImg from "../assets/gallary/ultrosonic-testing.png";
import magneticImg from "../assets/gallary/magnet-particle-testing.png";
import penetrantImg from "../assets/gallary/liquid-penterant-testing.png";
import hardnessImg from "../assets/gallary/hardnes-testing.png";
import utgImg from "../assets/gallary/utg-thickness.png";
import stressImg from "../assets/gallary/stress-reveling.png";
import xrayImg from "../assets/gallary/xray-testing.png";
import pipelineImg from "../assets/gallary/pipeline-inspection.png";
import fabricationImg from "../assets/gallary/fabrication-inspection.png";
import penetarantTestingImg from "../assets/gallary/penetarant-testing.png";
import eddyTestingImg from "../assets/gallary/eddy-testing.png";
import office01 from "../assets/aboutus/about-01.png";
import office02 from "../assets/aboutus/about-02.png";
import office03 from "../assets/aboutus/about-03.png";
import office04 from "../assets/aboutus/about-04.png";
import office05 from "../assets/aboutus/about-05.png";

const idGen = { current: 1 };
const nextId = () => idGen.current++;

export const gallery = [
  // NDT Testing
  { id: nextId(), src: radiographyImg, alt: "Radiography testing procedure", category: "NDT Testing" },
  { id: nextId(), src: ultrasonicImg, alt: "Ultrasonic Pipeline Testing", category: "NDT Testing" },
  { id: nextId(), src: magneticImg, alt: "Magnetic Particle detection", category: "NDT Testing" },
  { id: nextId(), src: penetrantImg, alt: "Liquid Penetrant close up", category: "NDT Testing" },
  { id: nextId(), src: hardnessImg, alt: "Hardness testing setup", category: "NDT Testing" },
  { id: nextId(), src: utgImg, alt: "UTG Thickness Measurement", category: "NDT Testing" },
  { id: nextId(), src: penetarantTestingImg, alt: "Penetrant inspection process", category: "NDT Testing" },
  { id: nextId(), src: eddyTestingImg, alt: "Eddy Current testing setup", category: "NDT Testing" },

  // Equipment
  { id: nextId(), src: stressImg, alt: "Stress relieving PWHT equipment", category: "Equipment" },
  { id: nextId(), src: xrayImg, alt: "X-ray testing equipment", category: "Equipment" },
  { id: nextId(), src: pipelineImg, alt: "Pipeline inspection tools", category: "Equipment" },
  { id: nextId(), src: fabricationImg, alt: "Fabrication inspection", category: "Equipment" },

  // Office
  { id: nextId(), src: office01, alt: "TNTS office workspace", category: "Office" },
  { id: nextId(), src: office02, alt: "Team workspace", category: "Office" },
  { id: nextId(), src: office03, alt: "Technical consultation area", category: "Office" },
  { id: nextId(), src: office04, alt: "Engineering office", category: "Office" },
  { id: nextId(), src: office05, alt: "Project management office", category: "Office" },
];

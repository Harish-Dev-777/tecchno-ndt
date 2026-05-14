const idGen = { current: 1 };
const nextId = () => idGen.current++;

export const gallery = [
  // NDT Testing
  { id: nextId(), src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=80", alt: "X-Ray Inspection procedure", category: "NDT Testing" },
  { id: nextId(), src: "https://images.unsplash.com/photo-1533280053912-32b50ea9b22e?w=1000&q=80", alt: "Ultrasonic Pipeline Testing", category: "NDT Testing" },
  { id: nextId(), src: "https://images.unsplash.com/photo-1504313264104-af8c558c49e2?w=1000&q=80", alt: "Magnetic Particle detection", category: "NDT Testing" },
  { id: nextId(), src: "https://images.unsplash.com/photo-1581090122319-8fab9228e988?w=1000&q=80", alt: "Liquid Penetrant close up", category: "NDT Testing" },
  { id: nextId(), src: "https://images.unsplash.com/photo-1516214157053-431804f535ad?w=1000&q=80", alt: "Hardness testing setup", category: "NDT Testing" },
  { id: nextId(), src: "https://images.unsplash.com/photo-1621644788102-1f3a55b1fec3?w=1000&q=80", alt: "UTG Thickness Measurement on tank", category: "NDT Testing" },

  // Equipment
  { id: nextId(), src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1000&q=80", alt: "Advanced PWHT Equipment", category: "Equipment" },
  { id: nextId(), src: "https://images.unsplash.com/photo-1563854580649-6f5dfb82c2b3?w=1000&q=80", alt: "Induction Weld Preheating tools", category: "Equipment" },
  { id: nextId(), src: "https://images.unsplash.com/photo-1581093057864-1cfd4d8c01de?w=1000&q=80", alt: "Ultrasonic Probes", category: "Equipment" },
  { id: nextId(), src: "https://images.unsplash.com/photo-1574689049887-21a1cefa2af5?w=1000&q=80", alt: "Industrial X-Ray generator", category: "Equipment" },
  { id: nextId(), src: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=1000&q=80", alt: "Calibration blocks and scopes", category: "Equipment" },

  // Office
  { id: nextId(), src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1000&q=80", alt: "TNTS Office workspace", category: "Office" },
  { id: nextId(), src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80", alt: "Technical support desk", category: "Office" },
  { id: nextId(), src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1000&q=80", alt: "Team meeting room", category: "Office" },
  { id: nextId(), src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1000&q=80", alt: "Quality control center", category: "Office" },
];

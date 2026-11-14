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
import eddyTestingImg from "../assets/gallary/eddy-testing.png";
import penetarantTestingImg from "../assets/gallary/penetarant-testing.png";
import radiographyImg from "../assets/gallary/radio-graphy-testing.png";
import ultrasonicImg from "../assets/gallary/ultrosonic-testing.png";
import magneticImg from "../assets/gallary/magnet-particle-testing.png";
import penetrantImg from "../assets/gallary/liquid-penterant-testing.png";
import utgImg from "../assets/gallary/utg-thickness.png";
import stressImg from "../assets/gallary/stress-reveling.png";
import xrayImg from "../assets/gallary/xray-testing.png";
import pipelineGalleryImg from "../assets/gallary/pipeline-inspection.png";
import fabricationGalleryImg from "../assets/gallary/fabrication-inspection.png";
import fabrication01 from "../assets/services/fabrication-inspection-01.png";
import ECT02 from "../assets/services/eddy-testing.png";

export const services = [
  {
    id: 1,
    name: "Radiographic Testing (RT)",
    shortDesc: "Detect internal hidden flaws using advanced x-rays and gamma rays.",
    detailedDesc: "Radiographic Testing (RT) uses x-rays and gamma rays to provide a detailed view of the internal structure of manufactured components. This is critical for identifying voids, cracks, and inclusions in welds, castings, and forged products.",
    longDesc: "Radiographic Testing (RT) or Industrial Radiography, is a non-destructive testing (NDT) method of inspecting materials for hidden flaws by using the ability of short wavelength electromagnetic radiation (high energy photons) to penetrate various materials.\n\nThere are two different radioactive sources available for industrial use; X-ray and Gamma-ray. These radiation sources use higher energy level, i.e. shorter wavelength, versions of the electromagnetic waves. Because of the radioactivity involved in radiography testing, it is of paramount importance to ensure that the Local Rules is strictly adhered during operation.\n\nThe choice of radiation sources and their strength depends on a variety of factors including size of the component and the material thickness. Within the broad group of X-Ray and Gamma ray sources are a variety of camera choices with varying radiation strengths.\n\nFor most situations, the types and maximum quantities of radioactive materials possessed, the manner in which they may be used, and the individuals authorized to use radioactive materials are stipulated in the form of a \"specific\" license from the appropriate regulatory authority.\n\nThe advantage of Radiographic testing is inspection of a wide variety of material types with varying density, ability to inspect assembled components, minimum surface preparation required, sensitivity to changes in thickness corrosion, voids, cracks and material density changes, the ability to detect both surface and subsurface defects and the ability to provide a permanent record of the inspection.",
    slug: "radiographic-testing",
    images: [RT01, radiographyImg],
    alt: "Radiographic testing inspection for internal weld defects"
  },
  {
    id: 2,
    name: "Industrial X-Ray Testing",
    shortDesc: "High-resolution testing for intricate industrial inspections.",
    detailedDesc: "Our industrial x-ray testing services provide unparalleled imaging quality for complex components where detailed internal examination is mandatory. Widely used for highly stressed parts in aerospace and advanced manufacturing.",
    longDesc: "Industrial X-Ray testing is an advanced form of Radiographic Testing that focuses on high-resolution imaging for critical industrial components. Utilizing high-energy X-ray generators, this method allows for the identification of extremely fine internal defects in complex geometries and high-density materials.\n\nOur industrial X-ray services are designed to meet the stringent requirements of the aerospace, defense, and power generation industries. We specialize in inspecting high-stress components such as turbine blades, electronic assemblies, and specialized alloys where traditional NDT methods might lack the necessary sensitivity.\n\nThe high precision of X-ray imaging provides our clients with definitive data on material health, allowing for proactive maintenance and the prevention of catastrophic failures. All inspections are performed by certified technicians using state-of-the-art digital and film-based imaging systems.",
    slug: "industrial-x-ray-testing",
    images: [xray01, xrayImg],
    alt: "High-resolution industrial x-ray testing for aerospace components"
  },
  {
    id: 3,
    name: "Post Weld Heat Treatment (PWHT) / Stress Relieving (SR)",
    shortDesc: "Relieve stress and improve material strength post fabrication.",
    detailedDesc: "Post Weld Heat Treatment (PWHT) is performed to relieve residual stresses and improve the material characteristics of welded assemblies. Properly executed PWHT prevents brittle fractures and increases resistance to stress corrosion cracking.",
    longDesc: "Stress relief or Post weld heat treatment (PWHT) is a method for reducing and redistributing the residual stresses in the material that have been introduced by welding. Post Weld Heat Treatment (PWHT) reduces the residual stresses formed during welding. It also restores the macro structure of the steel. Mandatory in high pressure applications, constructors have to strictly follow PWHT requirements to avoid component failures. PWHT eliminates the effects by heating, soaking, and cooling the weld area in a controlled manner to temperatures below the first transformation point, giving the macro structure sufficient time to readjust to its original state and removing the residual stress.\n\nThe extent of relaxation of the residual stresses depends on the material type and composition, the temperature of PWHT and the soaking time at that temperature. A commonly used guideline for PWHT is that the joint should be soaked at peak temperature for 1 hour for each 25mm (1 inch) of thickness, although for certain cases a minimum soak time will be specified.\n\nIn addition to reduction and redistribution of residual stresses, PWHT at higher temperatures permits some tempering, precipitation or ageing effects to occur. These metallurgical changes can reduce the hardness of the as-welded structure, improving ductility and reducing the risks of brittle fracture. In some steels, however, ageing/precipitation processes can cause deterioration in the mechanical properties of the steel, in which case, specialist advice should be taken on the appropriate times and temperatures to use.",
    slug: "pwht-stress-relieving",
    images: [stressImg, welding01],
    alt: "Post weld heat treatment and stress relieving for industrial piping"
  },
  {
    id: 4,
    name: "Ultrasonic Testing (UT)",
    shortDesc: "High-frequency sound waves to detect surface and subsurface flaws.",
    detailedDesc: "Ultrasonic Testing employs high-frequency sound waves that travel into materials to identify internal flaws and define material thickness. It's an essential procedure for deep, subsurface discontinuity detection in large metal components.",
    longDesc: "Ultrasonic testing (UT) is a non - destructive testing technique based on the propagation of ultrasonic waves in the object or material tested. In most common UT applications, very short ultrasonic pulse- waves with center frequencies ranging from 0.1-15 MHz, and occasionally up to 50 MHz, are transmitted into materials to detect internal flaws or to characterize materials. A common example is ultrasonic thickness measurement, which tests the thickness of the test object, for example, to monitor pipework corrosion.\n\nUltrasonic testing is a method in which beams of high frequency sound waves that are introduced into the material being tested are used to detect surface and sub-surface flaws. The sound waves travel through the materials with some attenuation of energy and are reflected at interfaces. The reflected beam is detected and analyzed to define the presence and location of flaws.\n\nUltrasonic waves are almost completely reflected at metal gas interfaces. Partial reflection occurs at metal liquid or metal solid interfaces, with the specific percentage of reflected energy depending mainly on the ratios of certain properties of the matter on opposite sides of the interface.",
    slug: "ultrasonic-testing",
    images: [UT01, ultrasonicImg],
    alt: "Ultrasonic testing for subsurface flaw detection in metal plates"
  },
  {
    id: 5,
    name: "Ultrasonic Thickness Gauging (UTG)",
    shortDesc: "Precise measurement of material thickness to ensure structural integrity.",
    detailedDesc: "UTG is utilized to measure the remaining thickness of materials subject to corrosion and erosion. This procedure frequently surveys pipelines, tanks, and pressure vessels without requiring immediate access to both sides of the test piece.",
    longDesc: "Ultrasonic Thickness Gauging (UTG) is a highly precise measurement technique used to monitor the structural integrity of industrial assets over time. By measuring the time it takes for an ultrasonic pulse to travel through a material and reflect back, we can calculate its thickness with extraordinary accuracy.\n\nThis method is particularly valuable for monitoring the internal corrosion and erosion of pipework, pressure vessels, and storage tanks. Because UTG only requires access to one side of the test object, it is an ideal solution for inspecting operational assets without the need for costly shutdowns or disassembly.\n\nRegular UTG surveys are a cornerstone of any comprehensive asset integrity program, providing the data necessary to predict remaining service life and comply with industry safety regulations. Our gauges are calibrated to specific material types to ensure the highest possible measurement reliability.",
    slug: "ultrasonic-thickness-gauging",
    images: [UTG01, utgImg],
    alt: "Ultrasonic thickness gauging for pipeline corrosion monitoring"
  },
  {
    id: 6,
    name: "Liquid Penetrant Testing (PT/LPT)",
    shortDesc: "Detect surface-breaking defects in non-porous materials.",
    detailedDesc: "Liquid Penetrant Testing is a cost-effective and reliable method for detecting surface cracks, laps, and porosity in non-porous materials. We use high-visibility dyes to draw out any potential integrity issues.",
    longDesc: "Penetrant testing (PT), also called Liquid Penetrant Inspection (LPI) or Dye penetrant inspection (DPI) is a non - destructive method for finding discontinuities that are open to the surface of solid and essentially non-porous materials. Indications of flaws can be found regardless of the size, configuration, internal structure, or chemical composition of work piece being tested and regardless of flaw orientation. Liquid penetrant can seep into (and be drawn into) various types of minute surface openings (reportedly, as fine as 4micro inch in width) by capillary action. Because of this, the process is well suited for the detection of all types of surface cracks, laps, porosity, shrinkage areas, lamination and similar discontinuities in casting, forgings, welds and other product forms. Dye penetrant inspection is used extensively for the testing of wrought and cast products of ferrous and non- ferrous metals, powder metallurgy parts, and ceramics and glass objects.\n\nIn practice, the liquid penetrant inspection process is relatively simple. Equipment generally is simpler and less costly than that for most other NDT methods. When used on ferromagnetic steels, in some instances, the sensitivity of liquid penetrant test is better than that of magnetic particle testing.\n\nThe major limitation of liquid penetrant testing is that, it can detect only imperfections that are open to the surface. Another factor that may inhibit the effectiveness of liquid penetrant testing is the surface roughness of the object being tested. Rough or porous surfaces are likely to produce false indication.",
    slug: "liquid-penetrant-testing",
    images: [LPT01, LPT02],
    alt: "Liquid penetrant testing for surface crack detection in metal"
  },
  {
    id: 7,
    name: "Magnetic Particle Testing (MPT/MT)",
    shortDesc: "Identify surface and near-surface defects in ferromagnetic materials.",
    detailedDesc: "Magnetic Particle Testing is a fast and simple testing method for locating both surface and slightly subsurface discontinuities in ferromagnetic materials. It is highly effective for examining structural steel, castings, and forgings.",
    longDesc: "Magnetic particle Inspection (MPI) is a non - destructive testing (NDT) process for detecting surface and slightly subsurface discontinuities in ferromagnetic materials such as iron, nickel, cobalt, and some of their alloys. These materials lose their ferromagnetic properties above a characteristic temperature called the Curie point which is approximately 760◦ C for most of the ferromagnetic material. The process puts a magnetic field into the part. The piece can be magnetized by direct or indirect magnetization.\n\nDirect magnetization occurs when the electric current is passed through the test object and a magnetic field is formed in the material. Indirect magnetization occurs when no electric current is passed through the test object, but a magnetic field is applied from an outside source. The magnetic lines of force are perpendicular to the direction of the electric current which may be either alternating current (AC) or some form of direct current (DC) (rectified AC).\n\nIt depends for its operation on the fact that when the material or part under test is magnetized, discontinuities that lie in a cause leakage field to the direction of the magnetic field will cause a leakage field to be formed at and above the surface of the part. The presence of this leakage field, and therefore the presence of the discontinuity, is detected by the use of finely divided ferromagnetic particle applied over the surface, some of the particle being gathered and held by the leakage field. This magnetically held collection of particle forms an outline of the discontinuity and generally indicates its location, size, shape and extent. Magnetic particles are applied over a surface as dry particles, or as wet particle in a liquid.",
    slug: "magnetic-particle-testing",
    images: [MPT01, magneticImg],
    alt: "Magnetic particle testing for structural steel inspection"
  },
  {
    id: 8,
    name: "Welding Inspection",
    shortDesc: "Comprehensive visual and instrumental inspection of weldments.",
    detailedDesc: "Our welding QA/QC engineers conduct thorough inspections of weldments during pre-welding, active welding, and post-welding phases to guarantee strict adherence to industry standards, client specifications, and code requirements.",
    longDesc: "Welding Inspection is a critical quality control process that ensures weldments meet the required safety standards and engineering specifications. Our inspectors oversee every stage of the welding process, from initial material preparation to final surface evaluation.\n\nWe provide comprehensive QA/QC oversight based on major industry codes including ASME, AWS, and API. Our inspection routines include verifying welder qualifications, monitoring pre-heat and interpass temperatures, and conducting final visual and non-destructive evaluations.\n\nBy identifying weld defects such as porosity, slag inclusions, and lack of fusion early in the fabrication process, we help our clients avoid expensive rework and ensure the long-term reliability of their structures. Our goal is to provide absolute assurance that every weld is a quality weld.",
    slug: "welding-inspection",
    images: [welding01, welding02],
    alt: "Professional welding inspection and QA/QC services"
  },
  {
    id: 9,
    name: "Visual Testing (VT)",
    shortDesc: "Primary evaluation technique to identify physical irregularities.",
    detailedDesc: "Visual Testing remains one of the oldest and most trusted methods of NDT. Our certified inspectors are trained to evaluate the surface quality, dimensional accuracy, and proper assembly of components directly or remotely.",
    longDesc: "Visual Testing (VT) is the most fundamental and widely used NDT method, providing immediate feedback on the physical condition of a component. Our inspectors utilize their extensive training and specialized tools to identify surface defects, dimensional variances, and signs of operational wear.\n\nIn addition to direct visual inspection, we utilize Remote Visual Inspection (RVI) tools such as borescopes and drones to examine areas that are otherwise inaccessible. This allows us to inspect internal piping, large storage tanks, and high-elevation structures without compromising personnel safety.\n\nVT is often the first step in a multi-method inspection program, identifying areas of concern that require further specialized testing. Our visual inspection reports provide clear, photographic evidence and technical commentary to support maintenance decision-making.",
    slug: "visual-testing",
    images: [visual01, visual02],
    alt: "Visual testing inspection for surface quality evaluation"
  },
  {
    id: 10,
    name: "Industrial Inspection Services",
    shortDesc: "Holistic inspection solutions for complex industrial plants.",
    detailedDesc: "We provide comprehensive industrial inspection suites targeting overall facility reliability. This spans systematic risk-based inspection routines to specific shutdown diagnostics across manufacturing floors and refineries.",
    longDesc: "Industrial Inspection Services encompass a holistic approach to facility and asset reliability. We provide specialized inspection teams that can handle full-scale plant shutdowns, scheduled maintenance outages, and ongoing risk-based inspection (RBI) programs.\n\nOur service goes beyond simple flaw detection; we provide asset integrity management solutions that help industrial operators optimize their maintenance budgets and extend the life of their equipment. We serve a wide range of sectors including petrochemical, power generation, and heavy manufacturing.\n\nBy combining multiple NDT methods with engineering expertise, we provide a clear picture of overall facility health. Our technical reports are designed to be actionable, helping plant managers prioritize repairs and maintain strict adherence to environmental and safety standards.",
    slug: "industrial-inspection-services",
    images: [industrial01, industrial02],
    alt: "Comprehensive industrial plant inspection services"
  },
  {
    id: 11,
    name: "Pipeline Inspection",
    shortDesc: "Ensuring structural safety and regulatory compliance of pipelines.",
    detailedDesc: "Pipeline inspection services focus on both newly constructed pipelines and localized monitoring of operating networks. We verify structural soundness through multiple NDT methods, preventing leaks and catastrophic systemic failures.",
    longDesc: "Pipeline Inspection services are vital for ensuring the structural integrity, safety, and regulatory compliance of both newly constructed pipelines and existing networks. We utilize a range of NDT methods, including Ultrasonic Testing (UT), Radiographic Testing (RT), and Magnetic Particle Testing (MPT), to detect corrosion, welding defects, and structural irregularities.\n\nOur specialized pipeline inspection routines are designed to identify potential points of failure before they lead to leaks or catastrophic environmental events. This includes systematic monitoring of wall thickness, weld quality assessments, and protective coating evaluations.\n\nServing the Oil & Gas, water distribution, and chemical processing industries, our teams are equipped to handle inspections across varied terrains and challenging environments. Our comprehensive reports provide the critical data needed for maintenance scheduling, risk-based inspection (RBI) planning, and lifecycle extension strategies.",
    slug: "pipeline-inspection",
    images: [pipelineGalleryImg, pipeline01],
    alt: "Pipeline integrity inspection and maintenance services"
  },
  {
    id: 12,
    name: "Fabrication Inspection",
    shortDesc: "Quality assurance during equipment and component fabrication.",
    detailedDesc: "Our fabrication inspection services ensure that complex structural steel, pipes, and heavy pressure vessels are built precisely as drawn, utilizing standard-compliant materials and tested joints throughout the manufacturing timeframe.",
    longDesc: "Fabrication Inspection provides third-party quality assurance during the manufacturing of industrial components and structural steel. We verify that every aspect of the fabrication process—from raw material receipt to final assembly—adheres strictly to the project's engineering drawings and specifications.\n\nOur inspectors monitor material certifications, fit-up tolerances, and dimensional accuracy to ensure that the final product will integrate perfectly into the larger industrial system. We specialize in the oversight of pressure vessels, heavy structural frames, and complex piping spools.\n\nThis proactive approach to quality control reduces the risk of onsite installation delays and ensures that all fabricated components meet the expected service life. We provide detailed documentation packages that serve as a permanent record of quality for the lifecycle of the asset.",
    slug: "fabrication-inspection",
    images: [fabricationGalleryImg, fabrication01],
    alt: "Fabrication inspection for structural steel and pressure vessels"
  },
  {
    id: 13,
    name: "Manpower Supply for Industrial Inspection",
    shortDesc: "Deployment of certified NDT technicians and QC engineers.",
    detailedDesc: "We furnish fully certified level II/III NDT technicians, welding inspectors, and QA/QC management personnel for both short-term project shutdowns and long-term placement. Every candidate is rigorously vetted for technical competency and field safety compliance.",
    longDesc: "Our Manpower Supply service provides industrial operators with immediate access to highly qualified and certified technical personnel. We specialize in the deployment of NDT Level II/III technicians, Welding Inspectors (CSWIP/AWS), and experienced QA/QC engineers.\n\nEvery professional in our network is rigorously vetted for both technical competency and safety leadership. We understand that industrial projects often operate on tight timelines, which is why we offer flexible staffing solutions for short-term shutdowns, emergency repairs, and long-term project placements.\n\nBy partnering with TechnoNDT for your technical staffing needs, you gain the benefit of our internal training and quality standards. Our personnel arrive on-site ready to integrate into your workflow, bringing the expertise necessary to maintain the highest levels of quality and safety.",
    slug: "manpower-supply-inspection",
    images: [industrial02, visual01],
    alt: "Certified NDT technicians and QC engineers manpower supply"
  },
  {
    id: 14,
    name: "Eddy Current Testing (ECT)",
    shortDesc: "Electromagnetic induction to detect flaws in conductive materials.",
    detailedDesc: "Eddy-current testing (ECT) is used in nondestructive testing (NDT) making use of electromagnetic induction to detect and characterize surface and sub-surface flaws in conductive materials.",
    longDesc: "Eddy-current testing (ECT) used in nondestructive testing (NDT) making use of electromagnetic induction to detect and characterize surface and sub-surface flaws in conductive materials. Eddy current inspection can be used to find finest surface and subsurface flaws in any conductive material.\n\nThe principle is that a coil of conductive wire is excited with an alternating electrical current. This wire coil produces an alternating magnetic field around itself in the direction ascertained by the right-hand rule. The magnetic field oscillates at the same frequency as the current running through the coil. When the coil approaches a conductive material, currents opposed to the ones in the coil are induced in the material — eddy currents.\n\nVariations in the electrical conductivity and magnetic permeability of the test object, and the presence of defects causes a change in eddy current and a corresponding change in phase and amplitude that can be detected by measuring the impedance changes in the coil, which is a telltale sign of the presence of defects.\n\nECT is electrical in nature, it is limited to conductive material. There are also physical limits to generating eddy currents and depth of penetration. Eddy current NDT method has applications in Aerospace Component Inspections, Heat exchanger tube inspections and other critical engineering applications.",
    slug: "eddy-current-testing",
    images: [eddyTestingImg, ECT02], 
    alt: "Eddy current testing for conductive material inspection"
  }
];

// FUTURE SCALABILITY GUIDE:
// To add a new project in the future:
// 1. Copy one of the blocks starting with `{` and ending with `},`
// 2. Paste it in this array.
// 3. Update the fields: `id`, `title`, `category` (must be: "Data Analytics" or "ECE & VLSI Projects"), `description`, `techStack` tags, `demo` link, and optional `images` array.
// 4. To add images: put the image files (e.g. sales1.png) in public/projects/ folder, and add their paths like: images: ["/projects/sales1.png"]
export const projectData = [
  {
    id: 1,
    title: "Sales Performance Analytics Dashboard",
    category: "Data Analytics",
    description: "Developed an interactive Excel dashboard to analyze online sales performance across multiple platforms. Identified revenue trends, customer purchasing behavior, product category performance, and regional sales patterns through dynamic visualizations.",
    techStack: [
      "Microsoft Excel",
      "Pivot Tables",
      "Pivot Charts",
      "Data Cleaning",
      "Slicers",
      "Dashboard Design"
    ],
    demo: "#",
    images: ["./sp1.jpeg"]
  },
  {
    id: 2,
    title: "Student Startup Ecosystem Analysis",
    category: "Data Analytics",
    description: "Built a multi-page Power BI dashboard to analyze startup projects, innovation scores, funding trends, incubation support, and institutional participation. Delivered actionable insights into startup growth and project success factors.",
    techStack: [
      "Power BI",
      "Power Query",
      "DAX",
      "Data Modeling",
      "Data Visualization",
      "Business Intelligence"
    ],
    demo: "#",
    images: [
      "./sp21.jpeg",
      "./sp22.jpeg",
      "./sp23.jpeg"
    ]
  },
  {
    id: 3,
    title: "AI Job Market Intelligence Dashboard",
    category: "Data Analytics",
    description: "Designed an end-to-end analytics solution using SQL and Power BI to explore global AI hiring trends, salary distributions, skill demand, and company hiring patterns. Enabled data-driven insights into the evolving AI job market.",
    techStack: [
      "MySQL",
      "SQL",
      "Power BI",
      "Power Query",
      "DAX",
      "Stored Procedures",
      "CTEs",
      "Data Visualization"
    ],
    demo: "#",
    images: ["./sp31.jpeg","./sp32.jpeg"]
  },
  {
    id: 4,
    title: "Digital VLSI Implementation of FIR Filter",
    category: "ECE & VLSI Projects",
    description: "Designed a high-speed, parallel Finite Impulse Response (FIR) filter in Verilog HDL. Optimised arithmetic operations using pipelined registers and Wallace-tree multipliers to minimize propagation delay.",
    techStack: ["Verilog HDL", "ModelSim", "Xilinx Vivado", "Digital Electronics"],
    demo: "#",
    images: []
  },
  {
    id: 5,
    title: "Vehicle Number Plate Detection System",
    category: "ECE & VLSI Projects",
    description: "Developed an automated Vehicle Number Plate Detection (VNPD) system capable of recognizing vehicle registration numbers and validating authorized vehicles. Integrated image processing concepts with embedded hardware to automate vehicle access control and monitoring.",
    techStack: [
      "PIC16F877A",
      "Embedded C",
      "UART Communication",
      "LCD Interface",
      "OCR",
      "Computer Vision",
      "Image Processing",
      "ANPR"
    ],
    demo: "#",
    images: []
  },
  {
    id: 6,
    title: "Tech Dining System",
    category: "ECE & VLSI Projects",
    description: "Designed and developed a sustainable digital dining solution for restaurants using Design Thinking and Agile methodologies. The system features a digital menu, QR-based payments, food waste monitoring, energy-efficient recommendations, and eco-friendly dining practices to enhance customer experience while promoting sustainability.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Web Design",
      "QR Code Integration",
      "UPI Payment Integration",
      "Design Thinking",
      "Agile Methodology"
    ],
    demo: "#",
    images: []
  }
];

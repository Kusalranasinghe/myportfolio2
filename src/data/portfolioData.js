export const personalInfo = {
  name: "Kusal Ranasinghe",
  fullName: "Dananjaya Kusal Ranasinghe",
  tagline: "Computer Science Undergraduate | Full-Stack Software Engineer | Startup Co-Founder",
  shortBio: "Undergraduate in Computer Science, Mathematics, & Physics at the University of Sri Jayewardenepura. Co-Founder of Kubi Forge. Passionate about architecting scalable full-stack applications, intelligent AI workflows, and modern digital experiences.",
  avatar: "/assets/kusal-photo.jpg",
  email: "dananjayakusal39@gmail.com",
  phone: "+94 78 799 6831",
  whatsappNumber: "94787996831",
  whatsappUrl: "https://wa.me/94787996831?text=Hi%20Kusal,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!",
  linkedinUrl: "https://www.linkedin.com/in/kusal-ranasinghe", // user can update with exact slug
  githubUrl: "https://github.com/kusalranasinghe",
  location: "Sri Lanka",
  status: "Open for Opportunities & Collaborations",
  roles: [
    "Full-Stack Developer",
    "Co-Founder @ Kubi Forge",
    "Spring Boot & React Specialist",
    "AI-Augmented Software Engineer",
    "UI/UX Designer (Figma)"
  ],
  stats: [
    { label: "Core Technologies", value: "12+", suffix: " Techs", highlight: "Fullstack" },
    { label: "Tech Startup", value: "Kubi Forge", suffix: "", highlight: "Co-Founder" },
  ]
};

export const educationData = [
  {
    institution: "University of Sri Jayewardenepura (USJ)",
    shortName: "USJ",
    degree: "BSc in Computer Science",
    fields: "Computer Science, Mathematics, & Physics",
    period: "2025 - Present",
    status: "Currently Reading (Undergraduate)",
    location: "Nugegoda, Sri Lanka",
    badge: "Undergraduate Degree",
    badgeColor: "cyan",
    description: "Enrolled in rigorous computer science education integrated with deep mathematical foundation and theoretical physics. Studying advanced data structures, algorithm design, software engineering methodologies, distributed systems, and computational theory.",
    achievements: [
      "Specializing across Computer Science, Pure & Applied Mathematics, and Physics",
      "Building enterprise software architectures and academic computing research projects",
      "Active participant in tech symposiums, code hackathons, and developer communities"
    ]
  },
  {
    institution: "IMBS Green Campus",
    shortName: "IMBS",
    degree: "Diploma in Information Technology (DIT)",
    fields: "Information Technology & Software Systems",
    period: "2024 - 2025",
    status: "Graduated",
    location: "Sri Lanka",
    badge: "GPA: 3.54",
    badgeColor: "emerald",
    description: "Completed intensive technical diploma covering modern software engineering, relational database design, client-server architectures, and enterprise programming with exceptional academic distinction.",
    achievements: [
      "Graduated with an outstanding Cumulative GPA of 3.54",
      "Mastered Fullstack Web Development, Object-Oriented Programming, and SQL Databases",
      "Developed end-to-end practical capstone software systems"
    ]
  },
  {
    institution: "Ananda Sastralaya, Mathugama",
    shortName: "ASM",
    degree: "Secondary & Collegiate Education (Grade 6 - 13)",
    fields: "G.C.E. Advanced Level (A/L) & Ordinary Level (O/L)",
    period: "Collegiate Years",
    status: "Completed",
    location: "Mathugama, Sri Lanka",
    badge: "Secondary & High School",
    badgeColor: "purple",
    description: "Developed strong scientific analytical skills, mathematical problem-solving, and disciplined academic foundation through the G.C.E. Advanced Level and Ordinary Level examinations.",
    achievements: [
      "Excelled in G.C.E. O/L and qualified for Physical Science Stream in G.C.E. A/L",
      "Actively engaged in school science societies, ICT clubs, and extracurricular activities"
    ]
  },
  {
    institution: "Kalutara Gnanodaya College",
    shortName: "KGC",
    degree: "Primary Education (Grade 1 - 5)",
    fields: "Primary Foundations",
    period: "Primary School",
    status: "Completed",
    location: "Kalutara, Sri Lanka",
    badge: "Primary Education",
    badgeColor: "blue",
    description: "Built foundational linguistic, analytical, and moral groundwork during the formative primary school years with high academic discipline.",
    achievements: [
      "Successfully faced Grade 5 Scholarship Examination",
      "Cultivated early passion for mathematics and computer technology"
    ]
  }
];

export const startupData = {
  name: "Kubi Forge",
  email: "kubiforge@gmail.com",
  githubUrl: "https://github.com/KubiForge",
  liveUrl: "https://kubiforge.vercel.app",
  tagline: "Pioneering Next-Gen Software Solutions & Digital Craftsmanship",
  role: "Co-Founder & Lead Software Architect",
  founded: "Active Venture",
  description: "Kubi Forge is a technology venture and digital solutions organization dedicated to engineering reliable, scalable, and beautifully designed software products. We transform innovative ideas into production-ready platforms using modern web stacks, cloud databases, and AI-accelerated workflows.",
  services: [
    {
      title: "Enterprise Web Applications",
      desc: "Robust full-stack platforms powered by React, Java Spring Boot, and scalable RESTful APIs."
    },
    {
      title: "UI/UX & Interactive Design",
      desc: "High-fidelity Figma prototypes, intuitive human-centered design systems, and responsive interfaces."
    },
    {
      title: "Database & Cloud Architecture",
      desc: "Efficient relational schema design, database performance tuning, and secure data storage."
    },
    {
      title: "AI-Augmented Digital Systems",
      desc: "Integrating modern LLM workflows (Gemini, Claude, ChatGPT) to boost system intelligence and productivity."
    }
  ],
  stats: [
    { label: "Vision", value: "Global Impact" },
    { label: "Delivery", value: "Agile & Fast" },
    { label: "Code Quality", value: "Clean & Tested" }
  ]
};

export const skillsData = {
  categories: [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend & UI/UX" },
    { id: "backend", label: "Backend & DB" },
    { id: "ai", label: "AI & Modern Tools" }
  ],
  items: [
    { name: "Java (Spring Boot)", category: "backend", level: 90, icon: "Coffee", color: "from-orange-500 to-amber-600", desc: "Enterprise backend APIs, Spring Security, JPA/Hibernate, Microservices" },
    { name: "React.js", category: "frontend", level: 92, icon: "Code2", color: "from-cyan-400 to-blue-500", desc: "SPA development, Hooks, State Management, Modern Component Architecture" },
    { name: "JavaScript (ES6+)", category: "languages", level: 90, icon: "FileCode", color: "from-yellow-400 to-amber-500", desc: "Async/await, DOM manipulation, functional programming, event loops" },
    { name: "Python", category: "languages", level: 86, icon: "Terminal", color: "from-blue-500 to-emerald-400", desc: "Automation scripts, data processing, backend services, algorithmic problem solving" },
    { name: "C & C#", category: "languages", level: 82, icon: "Cpu", color: "from-purple-500 to-indigo-600", desc: "Low-level system logic, OOP principles, memory management, .NET fundamentals" },
    { name: "PHP", category: "backend", level: 80, icon: "Server", color: "from-indigo-400 to-purple-600", desc: "Server-side scripting, MVC architectures, dynamic web applications" },
    { name: "SQL & Databases", category: "backend", level: 88, icon: "Database", color: "from-teal-400 to-emerald-500", desc: "MySQL, relational modeling, complex joins, indexing, query optimization" },
    { name: "HTML5 & CSS3", category: "frontend", level: 95, icon: "Layout", color: "from-rose-500 to-pink-600", desc: "Semantic markup, modern layouts (Flexbox, Grid), CSS animations, responsive UI" },
    { name: "Figma (UI/UX)", category: "frontend", level: 88, icon: "Figma", color: "from-pink-500 to-violet-500", desc: "User journey mapping, wireframing, high-fidelity prototypes, design systems" },
    { name: "Claude, ChatGPT, Gemini", category: "ai", level: 94, icon: "Sparkles", color: "from-emerald-400 to-cyan-500", desc: "Advanced prompt engineering, agentic development, AI-assisted architecture" },
    { name: "Full-Stack Development", category: "backend", level: 90, icon: "Layers", color: "from-sky-400 to-indigo-500", desc: "End-to-end lifecycle from architecture to deployment and maintenance" },
    { name: "Mathematics & Physics", category: "languages", level: 85, icon: "Atom", color: "from-violet-400 to-fuchsia-600", desc: "Deep analytical thinking, numerical methods, logical problem decomposition" }
  ]
};

export const projectsData = [
  {
    id: "flood-relief",
    title: "Flood Relief Support Center",
    tagline: "Emergency disaster logistics and humanitarian support platform",
    category: "Fullstack Web App",
    featured: true,
    imageBg: "from-blue-900/60 to-cyan-900/40",
    badge: "Disaster Tech",
    tags: ["React", "Spring Boot", "SQL", "Emergency Logistics", "REST API"],
    description: "A mission-critical disaster management and relief coordination system engineered to connect displaced flood victims, regional volunteer units, and humanitarian organizations in real-time. Features automated rescue request dispatching, supply inventory tracking, and geographical hotspot visualization.",
    keyFeatures: [
      "Real-time emergency SOS request logging with geographical coordinates",
      "Volunteer and rescue team allocation and operational dispatch dashboard",
      "Essential supplies (food, medicine, clean water) inventory management system",
      "Secure administrative control room with live situational analytics"
    ],
    techStack: ["React.js", "Java Spring Boot", "MySQL", "Tailwind CSS", "RESTful Architecture"],
    githubUrl: "https://github.com/kusalranasinghe/flood-relief-support-center",
    liveUrl: "#",
    impact: "Provides rapid, transparent aid delivery during extreme monsoonal flood emergencies in Sri Lanka."
  },
  {
    id: "fuelgo",
    title: "FuelGo",
    tagline: "Smart fuel queue management and station quota optimization platform",
    category: "Enterprise System",
    featured: true,
    imageBg: "from-amber-900/60 to-orange-900/40",
    badge: "Smart Logistics",
    tags: ["Java", "Spring Boot", "SQL", "React", "Queue Management"],
    description: "An intelligent digital queue and quota management solution designed to tackle fuel distribution crises. FuelGo empowers station managers to monitor live stock levels, issue digital queue tokens, and eliminate hours of congestion through predictable scheduling algorithms.",
    keyFeatures: [
      "Dynamic token generation system based on vehicle category and fuel quota",
      "Live fuel availability indicators with automated status notifications",
      "Station manager dashboard for real-time bowser delivery tracking",
      "Preventive anti-hoarding verification and vehicle quota enforcement"
    ],
    techStack: ["Java Spring Boot", "SQL Relational DB", "React Frontend", "Tailwind CSS"],
    githubUrl: "https://github.com/kusalranasinghe/fuelgo-management",
    liveUrl: "#",
    impact: "Drastically reduced station wait times and promoted transparent, fair fuel rationing."
  },
  {
    id: "cineru-26",
    title: "Cineru-26",
    tagline: "Next-gen cinema booking, movie discovery & film community experience",
    category: "Creative Media Platform",
    featured: true,
    imageBg: "from-purple-900/60 to-pink-900/40",
    badge: "Media & Entertainment",
    tags: ["React", "UI/UX Design", "Figma", "PHP/SQL", "Interactive UI"],
    description: "A sleek, immersive cinematic portal and reservation system engineered for movie lovers. Cineru-26 combines interactive visual seat selection, synchronized trailer previews, community critique reviews, and an ultra-fast ticketing checkout flow.",
    keyFeatures: [
      "Interactive 2D theater seating map with instant seat reservation lock",
      "Rich media showcases with trailers, ratings, cast profiles, and reviews",
      "Custom UI/UX system prototyped entirely in Figma before pixel-perfect code implementation",
      "User profile management for ticket history, bookmarks, and favorite genres"
    ],
    techStack: ["React.js", "Figma Design System", "PHP Backend", "MySQL", "Modern CSS"],
    githubUrl: "https://github.com/kusalranasinghe/cineru-26",
    liveUrl: "#",
    impact: "Delivered a cinema-going experience with zero friction and high visual polish."
  },
  {
    id: "kubi-forge-core",
    title: "Kubi Forge Digital Ecosystem",
    tagline: "The official technology & software venture launchpad",
    category: "Startup Platform",
    featured: false,
    imageBg: "from-emerald-900/60 to-teal-900/40",
    badge: "Venture Core",
    tags: ["Fullstack", "React", "Cloud Architecture", "Branding", "UI/UX"],
    description: "The core digital infrastructure powering Kubi Forge, facilitating software client onboardings, agile project showcase displays, and tech consulting pipelines with integrated AI workflows.",
    keyFeatures: [
      "Showcase of modern digital products developed under the Kubi Forge brand",
      "Client inquiry tracking and automated project scope estimation tool",
      "High performance, SEO-optimized responsive web architecture"
    ],
    techStack: ["React", "Tailwind CSS", "Serverless / Node", "Figma"],
    githubUrl: startupData.githubUrl,
    liveUrl: startupData.liveUrl,
    impact: "Serves as the launchpad for innovative software projects created by Kusal and collaborators."
  }
];

export const terminalCommands = {
  help: "Available commands:\n  • about      : Learn about Kusal\n  • edu        : Academic credentials\n  • skills     : Tech stack overview\n  • projects   : Featured project catalog\n  • startup    : About Kubi Forge\n  • contact    : Reach out via WhatsApp/Email\n  • clear      : Clear the terminal screen\n  • sudo hire  : Special command for recruiters!",
  about: "Kusal Ranasinghe - Undergraduate at University of Sri Jayewardenepura (USJ) studying Computer Science, Mathematics, & Physics. Co-Founder of Kubi Forge.",
  edu: "1. BSc Computer Science - University of Sri Jayewardenepura (2025 - Present)\n2. Ananda Sastralaya Mathugama (Grade 6-13, O/L & A/L)\n3. Kalutara Gnanodaya College (Grade 1-5)",
  skills: "Languages: Java, JavaScript, Python, C, C#, PHP, SQL\nFrontend: React, HTML5, CSS3, Tailwind CSS\nBackend: Spring Boot, REST APIs, MySQL\nDesign: Figma (UI/UX)\nAI Tools: Claude, ChatGPT, Gemini, Prompt Engineering",
  projects: "1. Flood Relief Support Center (Emergency logistics & crisis coordination)\n2. FuelGo (Smart fuel queue & quota management system)\n3. Cineru-26 (Cinematic booking and media platform)\n4. Kubi Forge Platform (Startup technology suite)",
  startup: "Kubi Forge - A software venture founded by Kusal Ranasinghe dedicated to building robust digital solutions, enterprise web apps, and AI-accelerated products.",
  contact: "Email: dananjayakusal39@gmail.com\nWhatsApp: +94 78 799 6831 (0787996831)\nLocation: Sri Lanka\nLinkedIn: https://www.linkedin.com/in/kusal-ranasinghe",
  "sudo hire": "🎉 ACCESS GRANTED! You have discovered the easter egg! Kusal is ready for your team. Click the 'Hire Me' or WhatsApp button to get in touch right away!",
};

export const profile = {
  id: "1",
  name: "Ratish Timalsina",
  title: "Information Technology Student & Full-Stack Developer",
  summary:
    "Information Technology student (B.S., May 2027) with hands-on experience in networking, system administration, web development, database design, and technical support. Skilled in building full-stack applications, troubleshooting technology issues, and supporting reliable IT solutions.",
  email: "ratishtimalsina66@gmail.com",
  phone: "+1 573-355-2475",
  location: "Toledo, Ohio",
  github: "https://github.com/ratishtimalsina66",
  linkedin: "https://www.linkedin.com/in/ratish-timalsina-037633292",
};

export const skills = [
  { id: "1", name: "Help Desk / IT Support", category: "IT Support" },
  { id: "2", name: "Hardware Diagnostics", category: "IT Support" },
  { id: "3", name: "Windows", category: "IT Support" },
  { id: "4", name: "macOS", category: "IT Support" },

  { id: "5", name: "TCP/IP", category: "Networking" },
  { id: "6", name: "DNS", category: "Networking" },
  { id: "7", name: "DHCP", category: "Networking" },
  { id: "8", name: "VPN", category: "Networking" },

  { id: "9", name: "HTML", category: "Development" },
  { id: "10", name: "CSS", category: "Development" },
  { id: "11", name: "JavaScript", category: "Development" },
  { id: "12", name: "TypeScript", category: "Development" },
  { id: "13", name: "React", category: "Development" },
  { id: "14", name: "C#", category: "Development" },
  { id: "15", name: "ASP.NET MVC", category: "Development" },

  { id: "16", name: "SQL Server", category: "Database & Tools" },
  { id: "17", name: "GitHub", category: "Database & Tools" },
  { id: "18", name: "Azure", category: "Database & Tools" },
  { id: "19", name: "VS Code", category: "Database & Tools" },

  {
    id: "20",
    name: "Generative AI Tools",
    category: "AI & Emerging Technologies",
  },
  {
    id: "21",
    name: "Prompt Engineering",
    category: "AI & Emerging Technologies",
  },
  {
    id: "22",
    name: "AI-Assisted Development",
    category: "AI & Emerging Technologies",
  },
  {
    id: "23",
    name: "Azure AI Services",
    category: "AI & Emerging Technologies",
  },
  {
    id: "24",
    name: "Azure AI Search",
    category: "AI & Emerging Technologies",
  },
  {
    id: "25",
    name: "Computer Vision / OCR",
    category: "AI & Emerging Technologies",
  },
  {
    id: "26",
    name: "Speech AI Integration",
    category: "AI & Emerging Technologies",
  },
  {
    id: "27",
    name: "KNIME Data Mining",
    category: "AI & Emerging Technologies",
  },
  {
    id: "28",
    name: "K-Means Clustering",
    category: "AI & Emerging Technologies",
  },
  {
    id: "29",
    name: "Principal Component Analysis (PCA)",
    category: "AI & Emerging Technologies",
  },
];

export const projects = [
  {
    id: "1",
    slug: "reccenter-management-system",
    title: "RecCenter Management System",
    description:
      "Full-stack ASP.NET MVC and SQL Server application for managing members, memberships, classes, registrations, facilities, equipment, and reporting.",
    imageUrl: "/ratishportfolio/projects/rec-center.png",
    tags: ["ASP.NET MVC", "C#", "SQL Server", "CSS"],
    repoUrl: "",
    projectUrl: "",
    highlights: [
      "Member records, memberships, and class registrations backed by a normalized SQL Server schema",
      "Facility and equipment tracking to support day-to-day recreation center operations",
      "Admin-facing reporting views for usage and membership data",
      "Server-rendered Razor views following the ASP.NET MVC pattern for controllers, models, and views",
    ],
    longDescription:
      "RecCenter Management System is a full-stack web application built to run the day-to-day operations of a university recreation center. It centralizes the workflows staff would otherwise juggle across spreadsheets and paper forms: enrolling members, managing membership types and renewals, scheduling classes, handling registrations, and keeping track of which facilities and equipment are in use.\n\nThe backend follows the classic ASP.NET MVC pattern — controllers coordinate requests, models map to a relational SQL Server schema designed around members, memberships, classes, registrations, facilities, and equipment, and Razor views render the admin-facing screens. Reporting views pull aggregated data (active memberships, class attendance, equipment usage) so staff can make decisions without writing raw SQL.\n\nThis project was built as a database-design-first exercise: getting the entity relationships and constraints right before layering the MVC application on top, which is why the SQL Server schema is the backbone of the whole system.",
  },
  {
    id: "2",
    slug: "timalsina-masala-pasal",
    title: "Timalsina Masala Pasal",
    description:
      "Responsive spice store website featuring product displays, modern navigation, and a clean customer-focused interface.",
    imageUrl: "/ratishportfolio/projects/timalsina-masala.png",
    tags: ["HTML", "CSS", "JavaScript"],
    repoUrl:
      "https://github.com/ratishtimalsina66/timalsina-masala-pasal",
    projectUrl:
      "https://timalsina-masala-pasal-fmdzhpcpaugnb5e2.eastus-01.azurewebsites.net",
    highlights: [
      "Responsive product catalog and storefront layout built with vanilla HTML, CSS, and JavaScript",
      "Clean, customer-focused navigation designed for browsing spice products",
      "Deployed live on Azure App Service",
    ],
    longDescription:
      "Timalsina Masala Pasal is a responsive storefront website for a family spice brand. It presents the product catalog with clear imagery, modern navigation, and a layout tuned for customers browsing on both desktop and mobile.\n\nThe site is built with vanilla HTML, CSS, and JavaScript — no framework overhead — which kept the project focused on responsive layout techniques, semantic markup, and a clean, fast-loading customer experience. It's deployed live on Azure App Service.",
  },
  {
    id: "3",
    slug: "divine-brows-and-lashes",
    title: "Divine Brows and Lashes",
    description:
      "Modern salon website with responsive design, service presentation, and polished visual styling.",
    imageUrl: "/ratishportfolio/projects/divine-brows.png",
    tags: ["HTML", "CSS", "JavaScript"],
    repoUrl: "",
    projectUrl: "",
    highlights: [
      "Service menu and pricing presentation for a beauty studio",
      "Responsive, mobile-first layout with polished visual styling",
      "Built with vanilla HTML, CSS, and JavaScript",
    ],
    longDescription:
      "Divine Brows and Lashes is a marketing website built for a beauty studio specializing in brow and lash services. The goal was a clean, modern storefront that presents the service menu, pricing, and studio branding in a way that builds trust with prospective clients before they book an appointment.\n\nThe layout is fully responsive and mobile-first, since most salon clients browse and book from their phones. It's built with vanilla HTML, CSS, and JavaScript, with an emphasis on polished visual styling — custom typography, spacing, and imagery — over framework tooling.",
  },
  {
    id: "4",
    slug: "field-journal",
    title: "Field Journal",
    description:
      "Web application project focused on structured content, responsive interfaces, and practical frontend development.",
    imageUrl: "/ratishportfolio/projects/field-journal.png",
    tags: ["React", "TypeScript", "CSS"],
    repoUrl: "https://github.com/ratishtimalsina66/field-journal",
    projectUrl: "https://ratishtimalsina66.github.io/field-journal",
    highlights: [
      "Built with React and TypeScript for structured, component-driven content",
      "Responsive interfaces designed for readable, journal-style content",
      "Deployed live on GitHub Pages",
    ],
    longDescription:
      "Field Journal is a frontend web application focused on presenting structured, journal-style content through a clean, responsive interface. It was built with React and TypeScript to practice component-driven development and type-safe frontend code.\n\nThe project emphasizes practical frontend fundamentals: componentizing content, keeping layouts responsive across screen sizes, and structuring a small React + TypeScript codebase in a maintainable way. It's deployed live on GitHub Pages.",
  },
  {
    id: "5",
    slug: "pharmacy-prescription-system",
    title: "Pharmacy Prescription System",
    description:
      "Database design project modeling doctors, patients, pharmacies, prescriptions, and medication pickup workflows.",
    imageUrl:
      "/ratishportfolio/projects/medrx-pharmacy-prescriptions.png",
    tags: ["SQL", "Database Design", "ERD"],
    repoUrl: "",
    projectUrl: "",
    highlights: [
      "Entity-relationship modeling for doctors, patients, pharmacies, and prescriptions",
      "Normalized relational schema designed to avoid data redundancy and anomalies",
      "SQL queries covering prescription lookups, refill tracking, and medication pickup workflows",
    ],
    longDescription:
      "Pharmacy Prescription System is a database design project that models how prescriptions move through the real world: a doctor prescribes a medication, a patient selects a pharmacy, and that pharmacy fills and dispenses the prescription. The project's core deliverable is an entity-relationship diagram covering doctors, patients, pharmacies, prescriptions, and medications, normalized to eliminate redundant and inconsistent data.\n\nOn top of the schema, the project includes SQL queries for the operations a pharmacy system actually needs — looking up a patient's active prescriptions, tracking refills, and confirming medication pickups. It was built as a database design and SQL exercise rather than a full application, with the emphasis on getting the relational model and query logic correct.",
  },
  {
    id: "6",
    slug: "rubricguardian",
    title: "RubricGuardian — AI Assignment Compliance Checker",
    description:
      "AI-powered tool that checks student assignments against rubric requirements. Multi-service architecture with an ASP.NET Core MVC front end, a Python FastAPI analysis service, SQL Server storage, and LLM API integration for automated compliance feedback.",
    imageUrl: "/ratishportfolio/projects/RubricGuardian.png",
    tags: [
      "ASP.NET Core",
      "Python",
      "FastAPI",
      "SQL Server",
      "LLM API",
    ],
    repoUrl: "https://github.com/ratishtimalsina66/RubricGuardian",
    projectUrl: "https://rubricguardian.azurewebsites.net/",
    highlights: [
      "ASP.NET Core MVC front end for uploading assignments and rubrics and reviewing compliance feedback",
      "Separate Python FastAPI service handling document analysis and LLM-based rubric checking",
      "SQL Server storage for assignments, rubrics, and compliance results",
      "LLM API integration to generate automated, rubric-aligned feedback",
    ],
    longDescription:
      "RubricGuardian is an AI-powered tool that checks student assignments against instructor-defined rubric requirements and returns automated compliance feedback. It's built as a multi-service application rather than a single monolith, reflecting how the analysis workload (document parsing, LLM calls) is kept separate from the request/response web layer.\n\nThe front end is an ASP.NET Core MVC application where users upload an assignment and its rubric and review the resulting feedback. A dedicated Python FastAPI service handles the heavier analysis work — extracting content from submissions and calling an LLM API to evaluate the assignment against each rubric criterion. SQL Server persists assignments, rubrics, and compliance results between the two services.\n\nThe project is live and deployed on Azure App Service.",
  },
];

export const experience = [
  {
    id: "1",
    position: "Information Technology Student",
    company: "University of Toledo",
    duration: "2023 - Present",
    location: "Toledo, Ohio",
    description:
      "Building practical experience across IT support, networking, database systems, web development, cloud technologies, troubleshooting, and full-stack application development.",
  },
];

export const education = [
  {
    id: "1",
    degree: "Bachelor of Science in Information Technology",
    institution: "University of Toledo",
    duration: "Expected May 2027",
  },
];
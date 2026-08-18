export const DATA = {
  personal: {
    name: "Love Ghariwala",
    role: "Frontend & Backend Developer (Next.js Specialist)",
    bio: "I specialize in building scalable and visually appealing web applications using Next.js and Tailwind CSS. I focus on clean architecture, reusable components, and performance-driven UI.",
    avatar: "/profile/gta_character_love_ghariwala.png",
    location: "Surat, Gujarat, India",

    email: "llghariwala@gmail.com",
    availability: "Available for new projects",
  },
  social: [
    { name: "GitHub", url: "https://github.com/loveghariwala", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/love-ghariwala-66477133a", icon: "linkedin" },
  ],
  skills: [
    {
      category: "Frontend Architecture",
      icon: "layout",
      color: "#ff007f",
      description: "Building responsive, accessible, and high-performance user interfaces.",
      items: [
        "Next.js (App Router, SSR, SSG)",
        "React.js",
        "Redux Toolkit",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Framer Motion",
        "HTML5 & CSS3",
        "Responsive Web Design",
        "SEO Optimization",
        "Web Accessibility (WCAG 2.1)",
      ],
    },
    {
      category: "Backend & APIs",
      icon: "server",
      color: "#00f0ff",
      description: "Engineering scalable server architectures, secure APIs, and integrations.",
      items: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "Django",
        "RESTful API Design",
        "API Security",
        "Authentication & Authorization (JWT, OAuth)",
        "Payment Gateway Integration (Razorpay, Stripe)",
        "Webhooks",
        "Middleware",
      ],
    },
    {
      category: "Databases & Caching",
      icon: "database",
      color: "#ffcc00",
      description: "Data modeling, indexing, relational and NoSQL storage with caching.",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "SQL & NoSQL",
        "Redis Caching",
        "Row Level Security (RLS)",
        "Database Indexing & Query Optimization",
        "Aggregation Pipelines",
        "Data Modeling",
      ],
    },
    {
      category: "AI & Vector Search",
      icon: "bot",
      color: "#a855f7",
      description: "Semantic search, vector embeddings, and retrieval-augmented generation.",
      items: [
        "Hugging Face Transformers (Sentence Embeddings)",
        "Qdrant Vector Database",
        "Semantic Search",
        "RAG (Retrieval-Augmented Generation)",
        "Vector Similarity Search",
        "HNSW Indexing",
      ],
    },
    {
      category: "DevOps, Cloud & Tools",
      icon: "cloud",
      color: "#55ff55",
      description: "Deployment automation, containerization, CI/CD, and developer tooling.",
      items: [
        "Git & GitHub",
        "Vercel",
        "Railway",
        "Docker",
        "CI/CD Pipelines",
        "Postman",
        "Webpack",
        "Unit Testing",
        "Agile / Scrum Methodology",
      ],
    },
  ],
  projects: [
    {
      slug: "neocinematv",
      title: "NeoCinemaTV",
      description: "A premium, ad-free cinema streaming platform and intelligent AI discovery system. Integrates Next.js and FastAPI to deliver server-side rendered pages, a custom-sandboxed media streaming engine, and a semantic search engine powered by Hugging Face sentence-transformers and Qdrant vector databases.",
      image: "/neomovies/Screenshot from 2026-05-18 16-07-34.png",
      screenshots: [
        "/neomovies/Screenshot from 2026-05-18 16-07-34.png",
        "/neomovies/screencapture-neocinematv-dh7c9m5rq-loveghariwalas-projects-vercel-app-2026-05-18-16_12_58.png",
        "/neomovies/screencapture-neocinematv-vercel-app-movies-2026-05-18-16_04_29.png",
        "/neomovies/screencapture-neocinematv-vercel-app-search-2026-05-18-16_05_32.png",
        "/neomovies/screencapture-neocinematv-vercel-app-series-124364-2026-05-18-16_04_59.png",
        "/neomovies/screencapture-neocinematv-vercel-app-series-2026-05-18-16_04_11.png"
      ],
      tags: ["Next.js", "FastAPI", "MongoDB", "Tailwind", "Hugging Face", "Qdrant"],
      link: "https://www.neocinematv.com/",
      github: "https://github.com/loveghariwala/neocinema",
      challenges: [
        "Securing HTML5 sandboxed iframes to block popup redirect ads.",
        "Bypassing server sandbox-detection blocks using stream fallovers.",
        "Developing secure FastAPI proxy routes to hide TMDB API keys.",
        "Implementing MongoDB aggregators as failover database solutions."
      ],
      learnings: [
        "Generating 384-dimensional theme vector embeddings using Hugging Face.",
        "Applying Qdrant similarity searches to fetch matches under 50ms.",
        "Hardening iframe security models and custom CORS credentials.",
        "Building ultra-fast JSON endpoints using FastAPI router schemas."
      ],
      impact: "Launched a state-of-the-art cinema platform featuring a zero-ad media environment and a dynamic, sub-50ms semantic recommendations grid with a 100% responsive fluid UI."
    },
    {
      slug: "babyowl-ecommerce",
      title: "BabyOwl E-commerce",
      description: "Premium eyewear platform utilizing a glassmorphism design system. Features a yellow & white high-end aesthetic with advanced lens filtering.",
      image: "/babyowl/1.png",
      screenshots: [
        "/babyowl/Screenshot from 2026-04-16 15-18-34.png",
        "/babyowl/Screenshot from 2026-04-16 15-19-27.png",
        "/babyowl/Screenshot from 2026-04-16 15-20-05.png",
        "/babyowl/Screenshot from 2026-04-16 15-21-18.png",
        "/babyowl/Screenshot from 2026-04-16 15-21-23.png",
        "/babyowl/Screenshot from 2026-04-16 15-17-17.png",
        "/babyowl/Screenshot from 2026-04-16 15-18-44.png",
        "/babyowl/Screenshot from 2026-04-16 15-19-41.png"
      ],
      tags: ["Next.js", "Supabase", "PostgreSQL", "Tailwind"],
      link: "https://babyowl.vercel.app/",
      github: "https://github.com/loveghariwala",
      challenges: [
        "First time using Supabase and PostgreSQL",
        "Handling cart logic for authenticated and guest users",
        "Implementing Row Level Security (RLS)",
        "Integrating payment gateway with multiple approaches",
        "Managing complex product variants and custom user inputs"
      ],
      learnings: [
        "Gained experience in full-stack architecture",
        "Learned database design and Supabase integration",
        "Handled real-world debugging and R&D",
        "Understood role-based access control"
      ],
      impact: "Successfully built a robust MVP that handles 1000+ variants with seamless payment integration."
    },
    {
      slug: "shreeji-sewing-machine",
      title: "Shreeji Sewing Machine",
      description: "Product-based website with detailed UI, animations, backend APIs, and SEO optimization.",
      image: "/sewing/Screenshot from 2026-04-16 15-14-46.png",
      screenshots: [
        "/sewing/Screenshot from 2026-04-16 15-15-34.png"
      ],
      tags: ["Next.js", "REST APIs", "Tailwind", "SEO"],
      link: "https://www.shreejisewingmachine.com/",
      github: "https://github.com/loveghariwala",
      challenges: [
        "Building backend APIs in Next.js for the first time",
        "Handling SEO issues like sitemap and robots.txt errors",
        "Creating high-end animations and UI consistency"
      ],
      learnings: [
        "Learned API route handling in Next.js",
        "Understood SEO fundamentals and indexing",
        "Improved animation and UI polishing skills"
      ],
      impact: "Boosted product visibility by 40% through SEO optimization and interactive product showcases."
    },
    {
      slug: "magicmind-infotech",
      title: "MagicMind Infotech",
      description: "Responsive corporate website focusing on clean UI, structured layout, and dynamic slug-based routing.",
      image: "/magic/Screenshot from 2026-04-16 15-12-21.png",
      screenshots: [
        "/magic/Screenshot from 2026-04-16 15-12-40.png",
        "/magic/Screenshot from 2026-04-16 15-13-05.png"
      ],
      tags: ["Next.js", "React.js", "Tailwind", "Responsive"],
      link: "https://www.magicmindinfotech.com/",
      github: "https://github.com/loveghariwala",
      challenges: [
        "Understanding dynamic routing (slug-based pages)",
        "Handling responsive design issues across devices",
        "Structuring project folders properly"
      ],
      learnings: [
        "Implemented Next.js dynamic routing",
        "Improved responsive design skills",
        "Learned scalable project structure"
      ],
      impact: "Delivered a modern brand identity that improved user engagement by 25%."
    },
    {
      slug: "personal-portfolio",
      title: "Personal Portfolio",
      description: "Modern portfolio built with App Router, focusing on clean architecture and high-end animations.",
      image: "/profile/2.png",
      screenshots: [
        "/profile/2.png",
      ],
      tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
      link: "https://loveportfolio.vercel.app/",
      github: "https://github.com/loveghariwala",
      challenges: [
        "Designing scalable component architecture",
        "Implementing smooth animations and interactions",
        "Using AI prompts effectively for development"
      ],
      learnings: [
        "Improved modular component design",
        "Learned animation techniques using modern tools",
        "Explored AI-assisted development workflows"
      ],
      impact: "Created a high-conversion digital presence that showcases technical depth and design sense."
    },
  ],
  education: [
    {
      institution: "Parul University",
      degree: "Bachelor of Technology",
      period: "2021 - 2025 (Dec)",
      cgpa: "7.78",
    }
  ],
  experience: [
    {
      company: "iTact Solutions",
      role: "Web Development Intern",
      period: "Mar 2025 - May 2025",
      description: "Worked as a MERN Stack developer, building full-stack applications and contributing to various internal and client-facing web projects.",
    },
    {
      company: "DivTech System",
      role: "Back End & Front End Developer (Intern)",
      period: "Sep 2025 - Present",
      description: "Developing modern web applications using Next.js and Tailwind CSS. Building scalable architectures and integrating high-performance frontend components.",
    },

  ],

  contact: {
    title: "Ready to make history?",
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's build something iconic.",
  }
};

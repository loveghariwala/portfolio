export const DATA = {
  personal: {
    name: "Love Ghariwala",
    role: "Full Stack Developer",
    bio: "Results-driven Full Stack Developer with hands-on experience architecting and deploying 5+ production-grade web applications using Next.js, React, TypeScript, Node.js, and FastAPI. Skilled in designing scalable backend systems with PostgreSQL and MongoDB, building AI-powered recommendation engines with vector databases, and implementing secure payment gateways processing 10,000+ transactions. Proven ability to optimize application performance and API response times, increase organic search visibility by 40%, and deliver clean, maintainable code with a focus on security, accessibility, and CI/CD automation.",
    avatar: "/profile/love_ghariwala.jpg",
    location: "Surat, Gujarat, India",
    phone: "+91 8200834970",
    email: "llghariwala@gmail.com",
    portfolio: "lovable-teal-one.vercel.app",
    availability: "Available for new projects",
  },
  social: [
    { name: "GitHub", url: "https://github.com/loveghariwala", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/loveghariwala", icon: "linkedin" },
  ],
  skills: [
    {
      category: "Frontend",
      icon: "layout",
      color: "#8b5cf6",
      description: "Building responsive, accessible, and high-performance user interfaces.",
      items: [
        "Next.js",
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Framer Motion",
        "SEO",
        "WCAG 2.1",
      ],
    },
    {
      category: "Backend & APIs",
      icon: "server",
      color: "#06b6d4",
      description: "Engineering scalable server architectures, secure APIs, and integrations.",
      items: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "RESTful API",
        "Razorpay",
        "Stripe",
      ],
    },
    {
      category: "Databases",
      icon: "database",
      color: "#f59e0b",
      description: "Data modeling, indexing, relational and NoSQL storage with caching.",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "Redis",
        "SQL",
        "NoSQL",
      ],
    },
    {
      category: "AI & Vector Search",
      icon: "bot",
      color: "#a855f7",
      description: "Semantic search, vector embeddings, and retrieval-augmented generation.",
      items: [
        "Hugging Face",
        "Qdrant",
        "Agentic AI",
        "AI Agents",
      ],
    },
    {
      category: "DevOps & Cloud",
      icon: "cloud",
      color: "#10b981",
      description: "Deployment automation, containerization, CI/CD, and developer tooling.",
      items: [
        "Git",
        "GitHub",
        "Vercel",
        "Railway",
        "Docker",
        "CI/CD",
        "Cloudflare",
        "Postman",
      ],
    },
    {
      category: "Methodologies",
      icon: "layout",
      color: "#3b82f6",
      description: "Agile product lifecycle, code quality, and performance optimization.",
      items: [
        "Agile",
        "Scrum",
        "Code Reviews",
        "Performance Optimization",
      ],
    },
  ],
  projects: [
    {
      slug: "neocinematv",
      title: "NeoCinemaTV",
      subtitle: "AI-Powered Streaming Platform",
      description: "A premium, cinema trailers streaming platform and intelligent AI discovery system. Integrates Next.js and FastAPI to deliver server-side rendered pages, a custom-sandboxed media streaming engine, and a semantic search engine powered by Hugging Face sentence-transformers and Qdrant vector databases.",
      image: "/neomovies/Screenshot from 2026-05-18 16-07-34.png",
      screenshots: [
        "/neomovies/Screenshot from 2026-05-18 16-07-34.png",
        "/neomovies/screencapture-neocinematv-dh7c9m5rq-loveghariwalas-projects-vercel-app-2026-05-18-16_12_58.png",
        "/neomovies/screencapture-neocinematv-vercel-app-movies-2026-05-18-16_04_29.png",
        "/neomovies/screencapture-neocinematv-vercel-app-search-2026-05-18-16_05_32.png",
        "/neomovies/screencapture-neocinematv-vercel-app-series-124364-2026-05-18-16_04_59.png",
        "/neomovies/screencapture-neocinematv-vercel-app-series-2026-05-18-16_04_11.png"
      ],
      tags: ["Next.js 14", "FastAPI", "MongoDB", "Redis", "Qdrant", "Hugging Face", "Vercel", "Railway"],
      link: "https://www.neocinematv.com/",
      github: "https://github.com/loveghariwala/neocinema",
      bullets: [
        "Built an AI-powered recommendation engine using Hugging Face (all-MiniLM-L6-v2) and Qdrant vector database, generating 384-dimensional vector embeddings to enable semantic search based on plot nuance and mood analysis.",
        "Engineered a high-performance backend with FastAPI, Redis caching, and MongoDB, optimizing vector indexing for instant, relevant similarity queries across 10,000+ content entries.",
        "Secured API infrastructure via custom proxy routes and implemented automatic failover mechanisms across 3+ streaming servers, ensuring 99.5% stream reliability for concurrent users.",
        "Deployed a scalable platform with automated CI/CD pipelines on Vercel and Railway, serving personalized content through a responsive Next.js 14 interface with SSR and dynamic OG meta tags."
      ],
      challenges: [
        "Securing HTML5 sandboxed iframes to block popup redirect ads.",
        "Bypassing server sandbox-detection blocks using stream fallovers.",
        "Resolving deployment issues of high CPU execution time and Error 1102 (worker resource limits exceeded).",
        "Optimizing server execution bottlenecks and caching pathways to significantly lower CPU usage and resolve deployment resource limits."
      ],
      learnings: [
        "Generating 384-dimensional theme vector embeddings using Hugging Face.",
        "Enforcing strict iframe sandbox rules, Content Security Policies (CSP), and CORS security to neutralize malicious redirects.",
        "Implementing multi-tier caching and response memoization to drastically lower server request rates and optimize compute efficiency.",
        "Architecting resilient stream fallback pipelines with FastAPI async routers for seamless, sub-second media playback."
      ],
      impact: "Delivered a cinema trailer streaming platform featuring multi-genre filters for precise discovery and fast AI recommendations, while optimizing server execution to resolve deployment bottlenecks and minimize server load."
    },
    {
      slug: "babyowl-ecommerce",
      title: "BabyOwl E-Commerce",
      subtitle: "High-End Eyewear Platform",
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
      tags: ["Next.js", "Supabase", "PostgreSQL", "Razorpay", "Tailwind CSS", "Vercel"],
      link: "https://babyowl.co.in",
      github: "https://github.com/loveghariwala",
      bullets: [
        "Built a premium e-commerce platform using Next.js and Supabase with advanced product filtering, custom lens configuration, and secure Razorpay payment integration processing 500+ orders.",
        "Implemented Row Level Security (RLS) policies in Supabase PostgreSQL to enforce strict data isolation and privacy for authenticated and guest users across 10+ database tables.",
        "Designed a complex cart logic system handling 100+ product variants, custom user inputs, dynamic pricing calculations, and multi-step checkout processes with real-time inventory validation.",
        "Delivered a production-ready MVP within 4 weeks, capable of handling high-volume transactions and complex product configurations with 99.9% checkout success rate."
      ],
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
      subtitle: "Product Showcase & SEO Platform",
      description: "Product-based website with detailed UI, animations, backend APIs, and SEO optimization.",
      image: "/sewing/Screenshot from 2026-04-16 15-14-46.png",
      screenshots: [
        "/sewing/Screenshot from 2026-04-16 15-15-34.png"
      ],
      tags: ["Next.js", "Node.js", "CSS3 Animations", "JSON-LD", "Vercel"],
      link: "https://www.shreejisewingmachine.com/",
      github: "https://github.com/loveghariwala",
      bullets: [
        "Developed a high-performance product website using Next.js with interactive 3D CSS animations, detailed UI components, and backend API integration serving 1,000+ monthly visitors.",
        "Optimized SEO infrastructure by resolving sitemap errors, configuring robots.txt, and implementing JSON-LD structured data, boosting product page visibility by 40% on Google Search.",
        "Created responsive, cross-browser-compatible animations and ensured UI consistency across desktop, tablet, and mobile devices, improving user engagement metrics by 25%."
      ],
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
      subtitle: "Corporate Brand & Web Architecture",
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
  ],
  education: [
    {
      institution: "Parul Institute of Technology",
      location: "Vadodara, Gujarat, India",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      period: "08/2021 – 06/2025",
      cgpa: "7.78 / 10.00",
    }
  ],
  experience: [
    {
      company: "Divtech System",
      role: "Jr. Full Stack Developer",
      location: "Surat, Gujarat, India",
      period: "09/2025 – 10/2026",
      description: "Architected and deployed 3+ production-grade web applications using Next.js 14, TypeScript, and Supabase. Engineered secure RESTful APIs using FastAPI and Node.js, reducing API response latency by 40%. Integrated Razorpay and Stripe processing 10,000+ transactions with zero data loss. Implemented advanced SEO boosting organic search visibility by 40%.",
      bullets: [
        "Architected and deployed 3+ production-grade web applications using Next.js 14, TypeScript, and Supabase, managing full-lifecycle development from requirements gathering to deployment and post-launch optimization.",
        "Engineered secure RESTful APIs using FastAPI and Node.js, optimizing complex PostgreSQL queries with indexing strategies that reduced API response latency by 40% while maintaining 99.9% uptime across all services.",
        "Integrated Razorpay and Stripe payment gateways with robust error handling, retry logic, and transaction security protocols, successfully processing 10,000+ transactions with zero data loss.",
        "Spearheaded advanced SEO strategies including dynamic sitemap generation, Open Graph meta tag optimization, and JSON-LD structured data implementation, resulting in a 40% increase in organic search visibility.",
        "Developed 15+ responsive, accessible UI components adhering to WCAG 2.1 standards, collaborating with cross-functional teams of designers and backend engineers to deliver pixel-perfect interfaces."
      ]
    },
    {
      company: "iTact Solutions",
      role: "Web Development Intern",
      location: "Surat, Gujarat, India",
      period: "03/2025 – 05/2025",
      description: "Developed and maintained 2 full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js) serving 500+ daily active users. Collaborated with senior engineers to reduce bug reports by 25% through systematic code reviews. Integrated 5+ third-party APIs and reduced query execution time by 30%.",
      bullets: [
        "Developed and maintained 2 full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js) for internal tools and client-facing production environments serving 500+ daily active users.",
        "Collaborated with senior engineers and cross-functional teams to design and implement responsive, accessible web interfaces, reducing bug reports by 25% through systematic code reviews.",
        "Integrated 5+ third-party APIs (payment, analytics, notification) and optimized MongoDB aggregation pipelines, reducing average query execution time by 30% while ensuring data integrity and security.",
        "Contributed to Agile/Scrum development processes including daily standups, sprint planning, and retrospectives, improving team velocity by 15% through efficient task prioritization."
      ]
    },
  ],
  certifications: [
    {
      name: "Apna College DSA Certificate",
      issuer: "Apna College",
      year: "2022"
    },
    {
      name: "The Complete Full Stack Development",
      issuer: "Udemy",
      year: "2024"
    }
  ],
  languages: [
    { name: "English", level: "Proficient", rating: 4 },
    { name: "Hindi", level: "Native", rating: 5 },
    { name: "Gujarati", level: "Native", rating: 5 }
  ],
  achievements: [
    {
      title: "Surpassed 100,000 pageviews",
      description: "Surpassed 100,000 pageviews on neocinematv.com in a single month on Cloudflare — a first-time milestone for the domain."
    }
  ],
  contact: {
    title: "Ready to make history?",
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's build something iconic.",
  }
};

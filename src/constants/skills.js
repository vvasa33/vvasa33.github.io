export const skillsData = [
  {
    category: "Frontend Engineering",
    color: "bg-cmyk-cyan",
    items: [
      {
        name: "React / Next.js",
        description: "Building performant, server-rendered applications with React Server Components, custom hooks, and modern suspense patterns for seamless UX.",
        context: "Used to build the core architecture of this portfolio and several client dashboards, leveraging ISR for optimal performance."
      },
      {
        name: "TypeScript",
        description: "Architecting scalable codebases with strict type safety, advanced generics, and exhaustive pattern matching to catch errors at compile time.",
        context: "Migrated a legacy JS codebase to TS, reducing runtime errors by 40% and improving developer velocity."
      },
      {
        name: "Tailwind CSS",
        description: "Rapidly prototyping and shipping pixel-perfect, responsive designs using a utility-first approach and custom design system configurations.",
        context: "Created the 'Newspaper' design system for this site, utilizing custom config for the CMYK color palette."
      },
      {
        name: "Framer Motion",
        description: "Crafting fluid, physics-based animations and complex layout transitions to create delightful, interactive user experiences.",
        context: "Implemented the scroll-linked animations and the interactive classifieds section you are currently using."
      },
      {
        name: "Redux Toolkit",
        description: "Managing complex global application state with efficient slices, async thunks, and normalized data structures.",
        context: "Managed application state for a complex e-commerce checkout flow, handling optimistic updates and cart synchronization."
      },
      {
        name: "WebGL / Three.js",
        description: "Developing immersive 3D experiences, custom shaders, and performant visualizations directly in the browser.",
        context: "Built a 3D product configurator for a retail client, allowing users to customize materials and colors in real-time."
      }
    ]
  },
  {
    category: "Backend Systems",
    color: "bg-cmyk-magenta",
    items: [
      {
        name: "Node.js / Express",
        description: "Designing scalable, event-driven RESTful APIs and microservices capable of handling high-concurrency workloads.",
        context: "Developed a real-time notification service handling 10k+ concurrent connections using WebSockets."
      },
      {
        name: "Python / Django",
        description: "Building robust, secure backend systems with rapid development cycles, utilizing Django's ORM and batteries-included philosophy.",
        context: "Architected a content management system for a media company, utilizing Django Admin for internal workflows."
      },
      {
        name: "PostgreSQL",
        description: "Architecting normalized database schemas, optimizing complex SQL queries, and ensuring data integrity with ACID transactions.",
        context: "Optimized slow-running reporting queries, reducing execution time from 12s to 300ms via indexing strategies."
      },
      {
        name: "Redis",
        description: "Implementing high-speed caching layers, session management, and real-time pub/sub messaging systems.",
        context: "Implemented a session store and API rate limiter to protect backend resources from abuse."
      },
      {
        name: "Docker / K8s",
        description: "Containerizing applications for consistent environments and orchestrating scalable deployments across clusters.",
        context: "Containerized a microservices suite and set up a local development environment that mirrors production."
      },
      {
        name: "GraphQL",
        description: "Creating flexible, strongly-typed APIs that allow clients to request exactly the data they need, eliminating over-fetching.",
        context: "Designed a unified graph API aggregating data from multiple legacy REST services."
      }
    ]
  },
  {
    category: "DevOps & Strategy",
    color: "bg-highlighter-green",
    items: [
      {
        name: "Git / CI/CD",
        description: "Automating testing, build, and deployment pipelines to ensure code quality and rapid, reliable release cycles.",
        context: "Set up GitHub Actions pipelines for automated linting, testing, and deployment to AWS."
      },
      {
        name: "AWS / Cloud",
        description: "Architecting serverless and cloud-native solutions using EC2, S3, Lambda, and DynamoDB for high availability.",
        context: "Deployed a serverless image processing pipeline using S3 triggers and Lambda functions."
      },
      {
        name: "System Design",
        description: "Planning distributed systems with a focus on scalability, fault tolerance, load balancing, and data consistency.",
        context: "Designed the architecture for a high-availability chat application, ensuring eventual consistency."
      },
      {
        name: "Agile / Scrum",
        description: "Leading and collaborating in iterative development cycles, prioritizing transparency, adaptability, and continuous improvement.",
        context: "Acted as Scrum Master for a team of 5, facilitating sprint planning and retrospectives."
      },
      {
        name: "UI / UX Design",
        description: "Bridging the gap between engineering and design principles to ensure intuitive, accessible, and aesthetic user interfaces.",
        context: "Conducted user research and wireframing for the redesign of a legacy internal tool."
      },
      {
        name: "Technical Writing",
        description: "Documenting complex architectures, APIs, and developer guides to facilitate team onboarding and knowledge sharing.",
        context: "Authored comprehensive API documentation and 'Getting Started' guides for a public-facing SDK."
      }
    ]
  }
];

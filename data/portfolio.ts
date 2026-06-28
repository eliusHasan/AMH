export interface Project {
  id: string;
  title: string;
  description: string;
  category: "ai" | "web" | "mobile" | "cloud";
  categoryLabel: string;
  metrics: { label: string; value: string };
  tags: string[];
  features: string[];
  imageUrl: string;
  clientName: string;
  duration: string;
  link?: string;
}

export const portfolioProjects: Project[] = [
  {
    id: "ai-copilot",
    title: "Enterprise Document AI Copilot",
    description: "An AI-powered document intelligence system designed for a global legal firm, processing millions of pages using LLMs for rapid contract analysis and risk identification.",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    metrics: { label: "Analysis Time Reduced", value: "85%" },
    tags: ["Next.js", "Python", "LlamaIndex", "VectorDB", "FastAPI"],
    features: [
      "Semantic search across multi-format documents (PDF, Word, Scans)",
      "Automated risk scoring and clause extraction",
      "Interactive natural language Q&A dashboard",
      "Enterprise audit logs and granular access controls"
    ],
    imageUrl: "/services-ai.png",
    clientName: "Apex Legal Partners",
    duration: "4 Months",
  },
  {
    id: "ecom-platform",
    title: "Next-Gen SaaS E-Commerce Suite",
    description: "A highly scalable B2B & B2C e-commerce platform built for a premium luxury retail brand, utilizing Next.js Server Components and global edge deployment for instant page loads.",
    category: "web",
    categoryLabel: "Web Development",
    metrics: { label: "Conversion Rate Improvement", value: "+42%" },
    tags: ["React", "Next.js", "Tailwind CSS", "Stripe", "Node.js"],
    features: [
      "Global CDN caching with ISR (Incremental Static Regeneration)",
      "Predictive autocomplete search using Elasticsearch",
      "Omnichannel cart synchronization across devices",
      "Dynamic price localization based on georeferencing"
    ],
    imageUrl: "/services-web.png",
    clientName: "Velluto Luxury Goods",
    duration: "6 Months",
  },
  {
    id: "health-tracker",
    title: "IoT Health Monitoring Native App",
    description: "A secure React Native application connecting to wearable heart-rate monitors and biometrics gear, delivering real-time vitals diagnostics and emergency alert routing.",
    category: "mobile",
    categoryLabel: "Mobile Applications",
    metrics: { label: "Active Daily Users", value: "250K+" },
    tags: ["React Native", "TypeScript", "Bluetooth LE", "WebSockets", "iOS/Android"],
    features: [
      "Low-energy Bluetooth sensor pairing and background sync",
      "Real-time telemetry rendering at 60 FPS",
      "HIPAA-compliant end-to-end data encryption",
      "Automated SMS/Voice emergency notifications to caretakers"
    ],
    imageUrl: "/services-mobile.png",
    clientName: "Sync Health Technologies",
    duration: "5 Months",
  },
  {
    id: "cloud-migration",
    title: "Zero-Downtime Multi-Cloud Migration",
    description: "Architecture overhaul and cloud migration of a large financial transaction database to AWS and Azure, moving from legacy servers to a serverless microservices setup.",
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    metrics: { label: "Infrastructure Costs Cut", value: "48%" },
    tags: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions"],
    features: [
      "Infrastructure as Code (IaC) deployment with Terraform",
      "Blue-Green zero-downtime deployment pipelines",
      "Automated auto-scaling scaling policies during traffic spikes",
      "Real-time centralized log auditing with Datadog"
    ],
    imageUrl: "/services-cloud.png",
    clientName: "Nexus Financial Services",
    duration: "3 Months",
  }
];

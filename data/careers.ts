export interface JobRole {
  id: string;
  title: string;
  department: "Engineering" | "Design" | "Product" | "QA";
  location: string;
  type: "Full-Time" | "Contract" | "Part-Time";
  salary: string;
  experience: string;
  summary: string;
  requirements: string[];
  responsibilities: string[];
}

export const openPositions: JobRole[] = [
  {
    id: "lead-ai-engineer",
    title: "Lead AI Systems Engineer",
    department: "Engineering",
    location: "Dhaka, Bangladesh / Remote",
    type: "Full-Time",
    salary: "$90,000 - $130,000",
    experience: "5+ Years",
    summary: "We are seeking a Lead AI Systems Engineer to architect and build next-generation document intelligence models and multi-agent RAG orchestrators for our global enterprise clientele.",
    requirements: [
      "Extensive experience building production-level AI solutions using LLMs (GPT, Claude, Llama).",
      "Deep understanding of vector databases (Pinecone, Qdrant, pgvector) and search index frameworks.",
      "Proficient in Python, FastAPI, and model deployment pipelines.",
      "Familiarity with agentic frameworks like LangChain, CrewAI, or AutoGen."
    ],
    responsibilities: [
      "Design and fine-tune scalable Retrieval-Augmented Generation (RAG) pipelines.",
      "Collaborate with frontend engineers to integrate AI models cleanly into React interfaces.",
      "Optimize inference latencies and design fail-safe backup system chains.",
      "Mentor junior developers and establish AI software engineering standards."
    ]
  },
  {
    id: "senior-frontend-dev",
    title: "Senior Frontend Developer (Next.js / React)",
    department: "Engineering",
    location: "Dhaka, Bangladesh / Hybrid",
    type: "Full-Time",
    salary: "$60,000 - $85,000",
    experience: "4+ Years",
    summary: "Join us to build pixel-perfect, highly animated, and fast web applications. You will be responsible for creating modern consumer and enterprise UIs using React, TypeScript, and Framer Motion.",
    requirements: [
      "Expert knowledge of React, Next.js (App Router), TypeScript, and Tailwind CSS.",
      "Proven experience building responsive, accessible interfaces (semantic HTML, WCAG AA standards).",
      "Proficient with animation libraries like Framer Motion or GSAP.",
      "Familiarity with state management libraries and REST/GraphQL integrations."
    ],
    responsibilities: [
      "Develop reusable, high-performance UI components.",
      "Ensure web applications reach a minimum Lighthouse rating of 95 across all audits.",
      "Work closely with UI/UX designers to translate Figma mockups into interactive code.",
      "Conduct code reviews and optimize bundle sizes."
    ]
  },
  {
    id: "cloud-devops-architect",
    title: "Cloud & DevOps Solutions Architect",
    department: "Engineering",
    location: "Dhaka, Bangladesh / Remote",
    type: "Full-Time",
    salary: "$80,000 - $110,000",
    experience: "5+ Years",
    summary: "Looking for an infrastructure specialist to automate deployments, orchestrate Kubernetes clusters, and build robust CI/CD pipelines across AWS and Azure environments.",
    requirements: [
      "Strong background in cloud administration (AWS, Google Cloud, Azure).",
      "Expertise in Infrastructure as Code (IaC) using Terraform.",
      "Hands-on experience managing container systems (Docker, Kubernetes/EKS).",
      "Experience setting up secure CI/CD pipelines (GitHub Actions, GitLab CI)."
    ],
    responsibilities: [
      "Design, build, and maintain highly available cloud systems.",
      "Optimize resource usage to decrease client cloud costs.",
      "Monitor cluster performance, configure alerts, and conduct security reviews.",
      "Establish automated disaster recovery procedures."
    ]
  }
];

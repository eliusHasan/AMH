export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "AI" | "Web Dev" | "Cloud" | "Design";
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  readTime: string;
  imageUrl: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "harnessing-generative-ai-for-enterprise",
    title: "Harnessing Generative AI for Enterprise: A Practical Roadmap",
    excerpt: "Discover how mid-sized and large enterprises are integrating LLMs into internal workflows securely without risking intellectual property leakages.",
    content: `
Enterprise interest in Generative AI has transitioned from pilot experiments to full-scale production integrations. However, the path to deploying Large Language Models (LLMs) at scale is fraught with regulatory, security, and architectural hurdles.

### The Security Dilemma
The primary concern for any enterprise adopting Generative AI is data privacy. Feeding proprietary client files or source code into public commercial APIs poses a catastrophic data leak risk. To solve this, leading firms are adopting:
1. **Private Tenant Deployments**: Hosting models inside secure virtual networks (VPCs) on AWS or Azure.
2. **Retrieval-Augmented Generation (RAG)**: Separating data from model parameters, injecting documents dynamically into local contexts rather than retraining public models.
3. **Data Anonymization Proxies**: Scrubbing personally identifiable information (PII) before it leaves the internal firewalls.

### Designing a Scalable RAG System
Retrieval-Augmented Generation is the industry standard for querying internal databases. A high-performing RAG pipeline consists of:
*   **Optimal Chunking Strategies**: Splitting documents into overlapping semantic blocks to preserve context.
*   **Vector Embeddings**: Translating text into dense mathematical vectors stored in specialized databases.
*   **Hybrid Search**: Combining keyword search (BM25) with vector semantic search to achieve maximum relevance.
*   **Re-ranking Models**: Fine-tuning search results with secondary ranking layers (like Cohere ReRank) before prompts reach the LLM.

### What Lies Ahead
As we look forward, the shift from standalone chat interfaces to autonomous, multi-agent AI workflows is accelerating. AI agents can now reason, call external APIs, check logs, and run code to solve complex, multi-step backend operations without human intervention.
    `,
    category: "AI",
    publishedAt: "June 25, 2026",
    author: {
      name: "Dr. Aris Thorne",
      role: "Head of AI Research",
      avatarUrl: "/team/aris.webp"
    },
    readTime: "6 Min Read",
    imageUrl: "/blog/enterprise-ai.webp",
    featured: true
  },
  {
    slug: "nextjs-15-performance-optimization",
    title: "Next.js 15 Performance: Inside Static & Dynamic Rendering",
    excerpt: "An deep dive into caching shifts, partial pre-rendering (PPR), and custom optimizations to hit perfect scores in Core Web Vitals.",
    content: `
Next.js 15 introduces powerful enhancements to how developers compile and deploy performant applications. Mastering these features is essential to achieve top-tier Google Lighthouse performance.

### Caching Behaviors Explained
One of the most notable changes in recent updates is the shift in fetch request caching. Unlike previous versions where \`fetch\` cached results by default, Next.js now defaults to dynamic, uncached requests (\`cache: 'no-store'\`). This prevents stale data issues out-of-the-box but requires intentional optimization for static content:
1. **Explicit Caching**: Declare \`next: { revalidate: 3600 }\` for API-driven assets that change infrequently.
2. **Static Route Handlers**: Use static variables (\`export const dynamic = 'force-static'\`) to pre-render route segments during compile time.

### Partial Pre-rendering (PPR)
Partial Pre-rendering is the holy grail of modern layouts. It allows Next.js to render static parts of a page instantly (such as a navbar, hero text, and outline cards) while streaming in dynamic content (like user carts or personalized greetings) as they resolve on the server.
*   Enclose dynamic subcomponents in React \`Suspense\` boundaries.
*   Next.js compiles the static shell, serving it instantly from the nearest Edge location, making user-perceived load times (First Contentful Paint) drop under 200ms.

### Optimizing Images and Fonts
*   **next/image**: Always provide explicit sizes layouts for responsive images, preventing Layout Shift (CLS).
*   **next/font**: Leverage local font files or Google Font wrappers which inline styles automatically, removing font download roundtrips.
    `,
    category: "Web Dev",
    publishedAt: "June 18, 2026",
    author: {
      name: "Elius Ahmed",
      role: "Lead Software Architect",
      avatarUrl: "/team/elius.webp"
    },
    readTime: "5 Min Read",
    imageUrl: "/blog/nextjs15.webp",
  },
  {
    slug: "migrating-monolith-to-serverless-kubernetes",
    title: "Migrating Legacy Monoliths to Serverless Kubernetes",
    excerpt: "A practical guide to containerizing backend services, setting up Terraform templates, and running dynamic, auto-scaling clusters.",
    content: `
Transitioning a legacy on-premise monolith to a cloud-native architecture can feel overwhelming. Here is a proven, step-by-step framework to containerize your services and deploy them to modern Kubernetes clusters.

### Step 1: Microservices Deconstruction
Do not try to rewrite the whole system at once. Instead, apply the **Strangler Fig Pattern**:
*   Identify high-value, isolated subservices (e.g. email delivery, payment verification).
*   Carve them out into independent codebase repositories.
*   Use an API Gateway (like Kong or NGINX) to route traffic to the new services while the main workload runs on the monolith.

### Step 2: Containerization & Infrastructure as Code (IaC)
Build optimized Docker containers using multi-stage builds. This keeps image sizes small and secures your runtime from dev-dependency security gaps.
Next, define all your resources (VPC, database, load balancers, DNS) in **Terraform**. IaC ensures that environment setups are reproducible, eliminating the "works on my machine" syndrome.

### Step 3: Kubernetes Auto-scaling (KEDA)
To keep costs low, deploy Kubernetes Event-driven Autoscaling (KEDA). It allows your nodes to scale down to zero when idle and burst to hundreds of pods instantly during traffic spikes.
    `,
    category: "Cloud",
    publishedAt: "May 29, 2026",
    author: {
      name: "Marcus Vance",
      role: "Principal Cloud Engineer",
      avatarUrl: "/team/marcus.webp"
    },
    readTime: "8 Min Read",
    imageUrl: "/blog/cloud-kubernetes.webp",
  }
];
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

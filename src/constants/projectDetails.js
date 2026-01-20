export const projectDetails = {
   "delytics": {
        "title": "Delytics",
        "status": "Development",
        "summary": "A comprehensive logistics management platform for tracking tenants, regions, hubs, agents, and deliveries. Provides dashboards and analytics for operational insights.",
        "techStack": {
            "frontend": ["Next.js", "React", "Material UI", "Tailwind CSS"],
            "backend": ["Next.js API Routes", "Prisma", "PostgreSQL"],
            "infra": ["Vercel", "Supabase (Database)"],
            "ai": []
        },
        "problem": {
            "issue": "Logistics companies struggled with fragmented data across multiple delivery partners, making it impossible to get a real-time overview of fleet efficiency.",
            "bottleneck": "Existing solutions were either too generic or too expensive for mid-sized enterprises, often lacking the specific route-level analytics needed for optimization.",
            "motivation": "I saw an opportunity to build a data-agnostic platform that could ingest telemetry from any source and provide a unified, performant dashboard."
        },
        "approach": {
            "strategy": "Utilized Next.js App Router for a unified full-stack application, ensuring type safety and seamless data flow from database to UI.",
            "decisions": "Chose PostgreSQL for robust relational data modeling. Used Material UI and Tailwind CSS for a rapid, responsive, and consistent design system.",
            "tradeoffs": "Prioritized a monolithic architecture initially to maximize development velocity and simplify deployment over complex microservices."
        },
        "ownership": "I built Delytics from the ground up. This included defining the data schema, implementing the full stack with Next.js and Prisma, and designing the dashboard UI.",
        "architecture": {
            "overview": "A monolithic Next.js application leveraging Server Components for performance and API routes for data mutations.",
            "flow": "User Interaction -> Next.js API Route -> Prisma Client -> PostgreSQL Database.",
            "rationale": "Selected to minimize latency and ensure end-to-end type safety across the application."
        },
        "features": [
            {
                "title": "Dashboard Analytics",
                "why": "Customizable widget-based dashboards displaying real-time aggregated data for tenants and regions.",
                "detail": "Provides immediate visibility into key operational metrics.",
            },
            {
                "title": "Delivery Management",
                "why": "Ensures accountability and tracks SLA adherence.",
                "detail": "Comprehensive tracking of deliveries with status monitoring, agent assignment, and historical logs."
            },
            {
                "title": "Automated Exports",
                "why": "Facilitates offline analysis and reporting.",
                "detail": "System for generating and downloading detailed reports based on custom filters and time ranges."
            }
        ],
        "performance": {
            "optimizations": "Implemented server-side rendering (SSR) and efficient database indexing to handle complex queries.",
            "scalability": "Designed with stateless API routes to allow seamless horizontal scaling on serverless infrastructure.",
            "cost": "Leveraged Vercel and Supabase for a cost-effective, consumption-based hosting model."
        },
        "learnings": {
            "challenges": "Managing complex state and filters across different dashboard widgets and data tables.",
            "lessons": "Gained deep experience in data modeling with Prisma and building performant server-rendered applications with Next.js.",
            "improvements": "If rebuilding, I would explore TRPC for even tighter type integration between client and server."
        },
        "gallery": [
            { "url": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200", "caption": "Real-time logistics monitoring dashboard." },
            { "url": "https://images.unsplash.com/photo-1590601401321-b847171d1ee4?auto=format&fit=crop&q=80&w=1200", "caption": "Detailed delivery analytics and reporting interface." },
            { "url": "https://images.unsplash.com/photo-1512418490979-92798cccf340?auto=format&fit=crop&q=80&w=1200", "caption": "Mobile-responsive driver views." }
        ],
        "next": ["Integration with third-party logistics APIs", "Predictive maintenance alerts", "Mobile driver application"]
    },
    "sandy-said-so": {
        title: "Sandy said so",
        status: "Live",
        summary: "An interactive, social card game platform where 'Sandy' (an imaginary host) compels players to perform tasks or answer questions based on shared personal experiences.",
        techStack: {
            frontend: ["React.js", "Framer Motion", "Tailwind CSS"],
            backend: ["Node.js", "Socket.io", "MongoDB"],
            infra: ["DigitalOcean", "Redis"],
            ai: ["OpenAI API for custom task generation"]
        },
        problem: {
            issue: "Standard card games often feel repetitive or lack a personal connection between players in remote settings.",
            bottleneck: "Existing digital board games were either too complex to set up or didn't leverage the shared history of the group.",
            motivation: "I wanted to create a game that felt 'alive' and adaptive, using AI to tailor tasks to the specific group dynamic."
        },
        approach: {
            strategy: "Developed a real-time sync engine using WebSockets to ensure every player sees the same 'Sandy' prompt simultaneously.",
            decisions: "Used React's state management to handle complex game flows and Framer Motion for high-quality card animations.",
            tradeoffs: "Focused on mobile-web experience first, as most players use their phones while playing in a group."
        },
        ownership: "Full end-to-end ownership. I conducted the initial game design research, built the real-time engine, and deployed the application for public use.",
        architecture: {
            overview: "Real-time client-server architecture powered by WebSockets for instant state synchronization.",
            flow: "Player action -> Socket.io message -> Server logic updates room state -> Broadcast to all room members.",
            rationale: "WebSocket was chosen over Polling to provide the 'party game' responsiveness required for a smooth social experience."
        },
        features: [
            {
                title: "Real-time Synchronization",
                why: "Ensures the party stays together on the same turn.",
                detail: "Built on Socket.io with custom room management and automatic reconnection logic."
            },
            {
                title: "AI Task Generator",
                why: "Prevents the game from ever feeling repetitive.",
                detail: "Integrates OpenAI with structured prompting to generate context-aware dares and questions."
            },
            {
                title: "Animated Card UI",
                why: "Makes the digital game feel tactile and premium.",
                detail: "Leveraged Framer Motion for layout transitions and 60fps card flip animations."
            }
        ],
        performance: {
            optimizations: "Used Redis for temporary session and room storage to achieve sub-50ms state updates.",
            scalability: "Implemented a sticky-session load balance strategy to handle thousands of concurrent game rooms.",
            cost: "Optimized AI token usage by caching results for common game categories."
        },
        learnings: {
            challenges: "Synchronizing state across low-latency mobile networks in real-time was a significant hurdle.",
            lessons: "Learned the intricacies of WebSocket room management and the power of AI in enhancing social entertainment.",
            improvements: "I would implement a more robust offline-state recovery for players with extremely poor connections."
        },
        gallery: [
            { url: "https://images.unsplash.com/photo-1610819013498-8fad1138865c?auto=format&fit=crop&q=80&w=1200", caption: "Interactive card flip mechanics and real-time social gameplay." },
            { url: "https://images.unsplash.com/photo-1626775238053-4315516eba73?auto=format&fit=crop&q=80&w=1200", caption: "AI-powered task generation interface tailored to player groups." },
            { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200", caption: "Thematic dark-mode UI with motion-rich transitions." }
        ],
        next: ["Expansion packs for specific group types", "Integrated video chat", "Global leaderboard for 'Chaotic' playstyles"]
    }
}

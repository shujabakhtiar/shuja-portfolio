export const projectDetails = {
    "delytics": {
        title: "Delytics",
        status: "Live",
        summary: "A high-performance platform providing real-time delivery analytics and operational insights for enterprise logistics. Designed to handle large data volumes and provide actionable metrics for fleet management.",
        techStack: {
            frontend: ["Vue.js 3", "Tailwind CSS", "Vite"],
            backend: ["Node.js", "Express", "MongoDB"],
            infra: ["AWS EC2", "Docker", "Nginx"],
            ai: ["Proprietary Route Optimization Algorithms"]
        },
        problem: {
            issue: "Logistics companies struggled with fragmented data across multiple delivery partners, making it impossible to get a real-time overview of fleet efficiency.",
            bottleneck: "Existing solutions were either too generic or too expensive for mid-sized enterprises, often lacking the specific route-level analytics needed for optimization.",
            motivation: "I saw an opportunity to build a data-agnostic platform that could ingest telemetry from any source and provide a unified, performant dashboard."
        },
        approach: {
            strategy: "Built with a micro-services architecture in mind, focusing on a robust data ingestion layer capable of handling high-frequency updates.",
            decisions: "Chose MongoDB for its flexible schema to accommodate varied telemetry data formats. Used Vue 3's Composition API for highly reactive dashboard components.",
            tradeoffs: "Prioritized real-time visibility over deep archival search initially to ensure maximum performance for active delivery monitoring."
        },
        ownership: "I built Delytics from the ground up as a solo engineer. This included defining the product roadmap, designing the system architecture, implementing the full stack, and managing the initial deployments.",
        architecture: {
            overview: "A distributed system comprising a real-time ingestion engine, a centralized database, and a reactive frontend dashboard.",
            flow: "Telemetry data flow from delivery vehicles -> Ingestion API -> Real-time processing -> MongoDB storage -> WebSocket broadcast to Frontend.",
            rationale: "Selected a event-driven architecture to minimize latency between vehicle movement and dashboard updates."
        },
        features: [
            {
                title: "Live Fleet Mapping",
                why: "Enables dispatchers to see every vehicle in real-time.",
                detail: "Implemented using Mapbox GL JS with custom WebGL layers for rendering 1000+ moving markers smoothly."
            },
            {
                title: "Route Efficiency Analytics",
                why: "Identifies underperforming routes to save fuel and time.",
                detail: "Calculated server-side using geographic intersections between actual telemetry and planned routes."
            },
            {
                title: "Automated Reporting",
                why: "Reduces manual data entry for logistics managers.",
                detail: "A periodic worker service that generates PDF summaries using Puppeteer for accurate visual reproduction of charts."
            }
        ],
        performance: {
            optimizations: "Implemented virtual scrolling for large data tables and optimized MongoDB indexes for time-series telemetry data.",
            scalability: "Designed the ingestion layer to be stateless, allowing it to scale horizontally behind an AWS ALB.",
            cost: "Used AWS Lambda for low-frequency background tasks to keep fixed infrastructure costs minimal."
        },
        learnings: {
            challenges: "Handling sporadic data bursts during peak hours required implementing a reliable queuing system.",
            lessons: "Gained deep experience in managing real-time data at scale and the importance of observability in distributed systems.",
            improvements: "If rebuilding today, I would explore using TimescaleDB for more efficient time-series querying."
        },
        gallery: [
            { url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200", caption: "Real-time logistics monitoring dashboard with live vehicle tracking." },
            { url: "https://images.unsplash.com/photo-1590601401321-b847171d1ee4?auto=format&fit=crop&q=80&w=1200", caption: "Detailed route analytics and efficiency reporting interface." },
            { url: "https://images.unsplash.com/photo-1512418490979-92798cccf340?auto=format&fit=crop&q=80&w=1200", caption: "Mobile-responsive driver views for on-the-go telemetry monitoring." }
        ],
        next: ["Integration with third-party logistics APIs", "Predictive maintenance alerts", "Mobile driver application"]
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

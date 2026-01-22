import dashboardVideo from '@/assets/highlights/delytics/dashboard.mov'
import paginationVideo from '@/assets/highlights/delytics/pagination.mov'
import sandyAiVideo from '@/assets/highlights/sandy/aiCreation.mov'
import sandyGameVideo from '@/assets/highlights/sandy/gameEngine.mov'

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
        "highlights": [
            {
                "title": "Real-Time Fleet Tracking",
                "image": dashboardVideo,
                "points": [
                    "Live geolocation updates of all active deliveries on an interactive map.",
                    "Instant status changes reflected across all dashboard widgets without page reloads.",
                    "Color-coded markers indicating delivery status (Pending, In-Transit, Delivered, Delayed)."
                ]
            },
            {
                "title": "Automated Route Optimization",
                "image": paginationVideo,
                "points": [
                    "Intelligent grouping of deliveries based on proximity and traffic conditions.",
                    "Reduction in fuel costs and delivery times by up to 15%.",
                    "One-click assignment of optimized routes to available drivers."
                ]
            }
        ],
        "next": ["Integration with third-party logistics APIs", "Predictive maintenance alerts", "Mobile driver application"]
    },
   "sandy-said-so": {
        "title": "Sandy said so",
        "status": "Live",
        "summary": "An interactive, social card game platform where 'Sandy' (an imaginary host) compels players to perform tasks or answer questions based on shared personal experiences.",
        "techStack": {
            "frontend": ["Next.js", "React", "Tailwind CSS"],
            "backend": ["Next.js API Routes", "Prisma", "PostgreSQL"],
            "infra": ["Vercel", "Supabase"],
            "ai": ["Gemini API for custom game generation", "prompt engineering"]
        },
        "problem": {
            "issue": "Standard card games often feel repetitive or lack a personal connection between players in remote settings.",
            "bottleneck": "Existing digital board games were either too complex to set up or didn't leverage the shared history of the group.",
            "motivation": "I wanted to create a game that felt 'alive' and adaptive, using AI to tailor tasks to the specific group dynamic."
        },
        "approach": {
            "strategy": "Leveraged Supabase for authentication and database management to rapid prototype the social experience.",
            "decisions": "Used Next.js for a unified full-stack application and Tailwind CSS for rapid UI development.",
            "tradeoffs": "Focused on mobile-web experience first."
        },
        "ownership": "Full end-to-end ownership. Conducted initial game design research and built the application.",
        "architecture": {
            "overview": "Next.js application with Supabase for authentication and database interactions.",
            "flow": "Client -> Next.js API Routes / Server Actions -> Prisma/Supabase -> Database.",
            "rationale": "Leveraged Next.js serverless capabilities for scalability and ease of deployment."
        },
        "features": [
            {
                "title": "AI Task Generator",
                "why": "Prevents the game from ever feeling repetitive.",
                "detail": "Integrates Google Gemini API with structured prompting to generate context-aware dares and questions."
            },
            {
                "title": "Supabase Authentication",
                "why": "Secure and scalable user management.",
                "detail": "Implemented using Supabase Auth integration."
            },
            {
                "title": "Responsive UI",
                "why": "Ensures playability on mobile devices.",
                "detail": "Built with Tailwind CSS for a mobile-first responsive design."
            }
        ],
        "performance": {
            "optimizations": "",
            "scalability": "Serverless architecture on Vercel allows for automatic scaling.",
            "cost": ""
        },
        "learnings": {
            "challenges": "",
            "lessons": "Learned the intricacies of integrating generative AI into a social game context.",
            "improvements": ""
        },
        "gallery": [
            { "url": "https://images.unsplash.com/photo-1626775238053-4315516eba73?auto=format&fit=crop&q=80&w=1200", "caption": "AI-powered task generation interface." },
            { "url": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200", "caption": "Thematic UI." },
            { "url": "https://images.unsplash.com/photo-1610819013498-8fad1138865c?auto=format&fit=crop&q=80&w=1200", "caption": "Interactive social gameplay." }
        ],
        "highlights": [
            {
                "title": "AI-Powered \"Sandy\" Persona",
                "image": sandyAiVideo,
                "points": [
                    "Dynamically generates unique dares and questions based on the current group vibe.",
                    "Uses Google Gemini API to create context-aware content that feels personal and spontaneous.",
                    "Adapts the 'spiciness' level of challenges based on user preferences."
                ]
            },
            {
                "title": "Seamless Cross-Device Play",
                "image": sandyGameVideo,
                "points": [
                    "Mobile-first design ensures a smooth experience on any smartphone.",
                    "Real-time state synchronization allows all players to see the same card at the same time.",
                    "No app download required – play instantly via the browser."
                ]
            }
        ],
        "next": ["Expansion packs", "Integrated video chat"]
    }
}

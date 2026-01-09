<template>
    <Section title="" subtitle="" description="" :border-radius-on-bottom="true" :disable-snap="true">
        <div class="w-full h-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 mt-4 lg:mt-0 pb-20">
            <!-- Left Side: Hero Text -->
            <div class="hidden lg:flex flex-1 flex-col justify-center lg:pt-12 select-none">
                <h1 class="text-section-h2 font-section leading-none">
                    <div class="block">Full-Stack</div>
                    <div class="block">Enterprise</div>
                    <div class="block whitespace-nowrap">AI Solutions/</div>
                </h1>
            </div>

            <!-- Right Side: Skills Grid -->
            <div class="flex-1 w-full max-w-4xl flex flex-col gap-16 pt-8 lg:pt-0">
                <div class="flex justify-start lg:justify-start">
                    <h2 class="text-6xl md:text-7xl font-bold text-white tracking-tighter">Skills</h2>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12">
                    <div v-for="(category, index) in categories" :key="index" class="flex flex-col gap-6">
                        <h3 class="text-lg font-bold text-white tracking-wide leading-tight min-h-[3rem] flex items-end pb-2 border-b border-white/10">
                            {{ category.title }}
                        </h3>
                        <ul class="flex flex-col gap-3">
                            <li v-for="item in category.items" :key="item" 
                                class="text-gray-400 hover:text-white transition-colors duration-300 font-mono text-base md:text-lg">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Section>
</template>

<script>
    import Section from "@/components/common/Section.vue";
    
    export default {
        name: "ArsenalSection",
        components: {
            Section,
        },
        data() {
            return {
                categories: [
                    {
                        title: "Web App Development",
                        items: [
                            "React", "Vue JS", "Next JS", "Nuxt JS", "HTML 5", "CSS", "Tailwind CSS", "Particle.Js", "Node.js", 
                            "Rest API", "Express.js", "Fastify", "Prisma", "TypeORM", "Laravel"
                        ]
                    },
                    {
                        title: "Programming Languages",
                        items: [
                            "JavaScript", "TypeScript", "Java", "Python", "PHP", 
                            "HTML", "CSS", "MySQL", "PostgreSQL", "MongoDB"
                        ]
                    },
                    {
                        title: "Software Engineering & Delivery",
                        items: [
                            "Agile & Scrum", "System Design", "Scalable Architecture", 
                            "API Design", "Microservices", "Design Patterns", "AI Integration", 
                            "CI/CD Pipelines", "Docker", "AWS", "Performance Optimization", 
                            "Security", "Auth", "Code Reviews", "Documentation"
                        ]
                    }
                ]
            }
        }
    }
</script>
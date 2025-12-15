<template>
    <Section :title="$t('projects.title')">
        <div class="flex justify-end">
            <div class="flex flex-row gap-2 max-w-[40%]">
                <p>{{ $t('projects.label') }}</p>
                <p>{{ $t('projects.description') }}</p>
            </div>
        </div>
        <div class="flex flex-col relative" @mouseleave="hoveredIndex = null">
            <!-- Shared Moving Border -->
            <div
                class="absolute w-full h-48 pointer-events-none transition-all duration-300 ease-out z-10"
                :class="hoveredIndex !== null ? 'opacity-100' : 'opacity-0'"
                :style="{ top: `${hoveredIndex * 12}rem` }"
            >
                <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-500"></div>
                <div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-500"></div>
                <div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-500"></div>
                <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-500"></div>
            </div>

            <ProjectCard
                v-for="(project, index) in projects"
                :key="index"
                :title="project.title"
                :description="project.description"
                :tags="project.tags"
                :liveSite="project.liveSite"
                :imageColor="project.imageColor"
                @mouseenter="hoveredIndex = index"
            />
        </div>
    </Section>
</template>
<script>
    import Section from "@/components/common/Section.vue";
    import ProjectCard from "@/components/cards/ProjectCard.vue";
export default {
    name: "ProjectsSection",
    components: {
        Section,    
        ProjectCard,
    },
    data() {
        return {
            hoveredIndex: null,
            projects: [
                {
                    title: "Lumora",
                    description: "",
                    tags: ["Vue js", "Node js", "MongoDB"],
                    liveSite: "https://lumora.com",
                    imageColor: "bg-blue-500",
                },
                {
                    title: "Alexdota",
                    description: "",
                    tags: ["React js", "Node js", "MongoDB"],
                    liveSite: "https://alexdota.com",
                    imageColor: "bg-red-500",
                },
                {
                    title: "AI Chatbot",
                    description: "",
                    tags: ["React js", "Node js", "MongoDB"],
                    liveSite: "https://ai-chatbot.com",
                    imageColor: "bg-yellow-500",
                },
            ]
        };
    },
}
</script>

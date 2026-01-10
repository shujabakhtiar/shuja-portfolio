<template>
    <Section :id="id" :title="$t('projects.title')" :description="$t('projects.description')" :subtitle="$t('projects.label')">
        <!-- Desktop Version -->
        <div v-if="!isMobile" class="flex flex-col relative" @mouseleave="hoveredIndex = null">
            <!-- Shared Moving Border -->
            <div
                class="absolute w-full h-96 lg:h-48 pointer-events-none transition-all duration-300 ease-out z-10"
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

        <!-- Mobile Version -->
        <ProjectsSectionMobile v-else />
    </Section>
</template>

<script>
import Section from "@/components/common/Section.vue";
import ProjectCard from "@/components/cards/ProjectCard.vue";
import ProjectsSectionMobile from "@/components/sections/ProjectsSectionMobile.vue";
import { projects } from "@/constants/projects";

export default {
    name: "ProjectsSection",
    components: {
        Section,    
        ProjectCard,
        ProjectsSectionMobile,
    },
    props: {
        id: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            hoveredIndex: null,
            isMobile: false,
            projects
        };
    },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobile);
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth <= 768;
        }
    }
}
</script>

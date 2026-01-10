<template>
    <div class="projects-section-mobile relative flex flex-col gap-8">
        <!-- Shared Moving Corners -->
        <div
            class="absolute w-full pointer-events-none transition-all duration-500 ease-in-out z-20 overflow-visible"
            :style="borderStyle"
        >
            <div class="absolute -top-[4px] -left-[4px] w-10 h-10 border-t-2 border-l-2 border-white"></div>
            <div class="absolute -top-[4px] -right-[4px] w-10 h-10 border-t-2 border-r-2 border-white"></div>
            <div class="absolute -bottom-[4px] -left-[4px] w-10 h-10 border-b-2 border-l-2 border-white"></div>
            <div class="absolute -bottom-[4px] -right-[4px] w-10 h-10 border-b-2 border-r-2 border-white"></div>
        </div>

        <div 
            v-for="(project, index) in projects" 
            :key="index"
            :ref="el => cardRefs[index] = el"
            class="project-item-container transition-all duration-500"
            @click="handleCardClick(index)"
        >
            <ProjectCardMobile
                :title="project.title"
                :description="project.description"
                :tags="project.tags"
                :liveSite="project.liveSite"
                :imageColor="project.imageColor"
                :slug="project.slug"
                :is-expanded="selectedIndex === index"
                @close="handleClose(index)"
            />
        </div>
    </div>
</template>

<script>
import ProjectCardMobile from "@/components/cards/ProjectCardMobile.vue";
import { projects } from "@/constants/projects";

export default {
    name: "ProjectsSectionMobile",
    components: {
        ProjectCardMobile
    },
    data() {
        return {
            projects,
            selectedIndex: null,
            cardRefs: [],
            resizeObserver: null,
            borderStyle: {
                top: '0px',
                height: '0px',
                opacity: 0
            }
        };
    },
    watch: {
        selectedIndex: {
            handler() {
                this.updateBorder();
            },
            immediate: false
        }
    },
    mounted() {
        this.setupResizeObserver();
        // Initial border position
        setTimeout(() => {
            this.updateBorder();
        }, 300);
    },
    beforeUnmount() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    },
    methods: {
        setupResizeObserver() {
            this.resizeObserver = new ResizeObserver(() => {
                this.updateBorder();
            });
            // Observe all card containers
            this.$nextTick(() => {
                this.cardRefs.forEach(el => {
                    if (el) this.resizeObserver.observe(el);
                });
            });
        },
        handleCardClick(index) {
            this.selectedIndex = index;
            this.updateBorder();
        },
        handleClose(index) {
            if (this.selectedIndex === index) {
                this.selectedIndex = null;
                this.updateBorder();
            }
        },
        updateBorder() {
            if (this.selectedIndex === null) {
                this.borderStyle = { ...this.borderStyle, opacity: 0 };
                return;
            }
            const el = this.cardRefs[this.selectedIndex];
            const parent = this.$el;
            if (el && parent) {
                // Using offsetTop/Height is often more stable in relative parent containers
                // but we add a small correction if needed
                this.borderStyle = {
                    top: `${el.offsetTop}px`,
                    height: `${el.offsetHeight}px`,
                    opacity: 1
                };
            }
        }
    }
}
</script>

<style scoped>
.projects-section-mobile {
    width: 100%;
}
.project-item-container {
    cursor: pointer;
}
</style>

<template>
    <div 
        ref="cardContainer"
        :class="[
            'experience-card-wrapper relative',
            isLeft ? 'flex-row' : 'flex-row-reverse'
        ]"
    >
        <!-- Collapsible Details Section -->
        <div 
            class="details-section flex w-full gap-4 transition-all duration-700 overflow-visible"
            :class="[isLeft ? 'flex-row' : 'flex-row-reverse']"
            :style="{
                opacity: isCollapsed ? 0 : 1,
                pointerEvents: isCollapsed ? 'none' : 'auto'
            }"
        >
            <!-- Description & Tags -->
            <div :class="[
                'flex flex-col gap-4 flex-1',
                isLeft ? 'pr-8 items-start text-left' : 'pl-8 items-start text-left'
            ]">
                <ul class="list-disc list-outside ml-5 space-y-3 my-4 marker:text-gray-500">
                    <li v-for="desc in description" :key="desc" class="text-gray-300 text-base leading-relaxed">
                        {{ desc }}
                    </li>
                </ul>

                <div ref="tagsSection" class="flex flex-wrap gap-3 mt-2">
                    <Tag v-for="tag in skillTags" :key="tag">
                        {{ tag }}
                    </Tag>
                </div>
            </div>

            <!-- Spacer for Timeline -->
            <div class="flex-none w-12"></div>

            <!-- Spacer for Date -->
            <div class="flex-1"></div>
        </div>
    </div>
</template>

<script>
import Tag from '../common/Tag.vue';

export default {
    name: "ExperienceCard",
    components: {
        Tag
    },
    props: {
        role: String,
        company: String,
        duration: String,
        description: Array,
        skillTags: Array,
        logo: String,
        isLeft: {
            type: Boolean,
            default: true
        },
        isLast: {
            type: Boolean,
            default: false
        },
        cardIndex: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            isCollapsed: false,
            observer: null
        };
    },
    mounted() {
        this.setupIntersectionObserver();
    },
    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    methods: {
        setupIntersectionObserver() {
            // Last card never collapses
            if (this.isLast) {
                return;
            }

            const options = {
                root: null,
                rootMargin: '0px 0px -40% 0px',
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1]
            };

            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    // Only expand when card is well in view (more than 40% visible)
                    const isWellInView = entry.isIntersecting && entry.intersectionRatio > 0.4;
                    
                    if (isWellInView) {
                        this.isCollapsed = false;
                    }
                });
            }, options);

            if (this.$refs.cardContainer) {
                this.observer.observe(this.$refs.cardContainer);
            }
        }
    }
}
</script>

<style scoped>
.experience-card-wrapper {
    margin-bottom: 6rem;
}

/* Last card has shorter height for smooth transition to next section */
.experience-card-wrapper:last-child {
    margin-bottom: 2rem;
}

.sticky-header {
    position: sticky;
    z-index: 20;
    /* Headers always stay visible, never disappear */
    visibility: visible !important;
    opacity: 1 !important;
    /* Solid background to hide content scrolling behind */
}

.details-section {
    position: relative;
    z-index: 10;
    margin-top: 2rem;
    transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

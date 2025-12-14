<template>
    <div 
        ref="cardContainer"
        :class="[
            'experience-card-wrapper relative',
            isLeft ? 'flex-row' : 'flex-row-reverse'
        ]"
    >
        <!-- Sticky Header Section -->
        <div 
            :class="[
                'sticky-header flex w-full items-start gap-4 transition-all duration-700 ease-out',
                isLeft ? 'flex-row' : 'flex-row-reverse'
            ]"
            :style="{ 
                top: `${(cardIndex * 120)}px`,
                zIndex: 20 + cardIndex
            }"
        >
            <!-- Content Header (Role & Company) -->
            <div :class="[
                'flex bg-black flex-col gap-1 flex-1 transition-all duration-700',
                isLeft ? 'pr-8 items-start text-left' : 'pl-8 items-start text-left'
            ]">
                <h3 :class="[
                    'font-bold text-white leading-tight transition-all duration-700',
                    isCollapsed ? 'text-3xl' : 'text-5xl'
                ]">{{ role }}</h3>
                <h4 :class="[
                    'text-gray-400 transition-all duration-700',
                    isCollapsed ? 'text-base' : 'text-xl'
                ]">{{ company }}</h4>
            </div>

            <!-- Timeline Icon -->
            <div class="flex-none flex justify-center relative self-start">
                <div :class="[
                    'rounded-full border-2 border-orange-500 bg-[#0a0a0a] z-10 flex items-center justify-center overflow-hidden transition-all duration-700',
                    isCollapsed ? 'w-10 h-10' : 'w-12 h-12'
                ]">
                    <img v-if="logo && logo.startsWith('http')" :src="logo" class="w-full h-full object-cover" alt="Company Logo" />
                    <span :class="[
                        'text-orange-500 font-bold transition-all duration-700',
                        isCollapsed ? 'text-xs' : 'text-sm'
                    ]">{{ company.substring(0,2).toUpperCase() }}</span>
                </div>
            </div>

            <!-- Date Block -->
            <div :class="[
                'flex flex-col pt-2 flex-1 transition-all duration-700',
                isLeft ? 'pl-8 items-start text-left' : 'pr-8 items-end text-right'
            ]">
                <span :class="[
                    'text-white font-bold transition-all duration-700',
                    isCollapsed ? 'text-lg' : 'text-2xl'
                ]">{{ duration }}</span>
            </div>
        </div>

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
    min-height: 80vh;
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

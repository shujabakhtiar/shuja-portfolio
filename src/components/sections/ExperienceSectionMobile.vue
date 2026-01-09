<template>
    <div class="experience-section-mobile py-8">
        <div class="relative flex flex-col gap-0 items-start">
            <template v-for="(exp, index) in experienceList" :key="exp.id">
                <!-- Sticky Header -->
                <div 
                    class="sticky w-full z-20"
                    :style="{
                        top: `${index * 56}px`,
                        zIndex: 20 + index
                    }"
                >
                    <ExperienceHeaderMobile
                        :role="exp.role"
                        :company="exp.company"
                        :duration="exp.duration"
                        :logo="exp.logo"
                        :is-compact="index < activeIndex"
                    />
                </div>

                <!-- Scrollable Body -->
                <div 
                    :ref="(el) => setBodyRef(el, index)"
                    class="w-full relative z-10"
                >
                    <ExperienceCardMobile
                        :description="exp.description"
                        :skillTags="exp.skillTags"
                    />
                </div>
            </template>
            
            <!-- End Marker -->
            <div ref="endMarker" class="h-1 w-full relative z-0 -mt-16"></div>
        </div>
    </div>
</template>

<script>
import ExperienceCardMobile from "@/components/cards/ExperienceCardMobile.vue";
import ExperienceHeaderMobile from "@/components/cards/ExperienceHeaderMobile.vue";
import { experienceList } from "@/constants/experience";

export default {
    name: "ExperienceSectionMobile",
    components: {
        ExperienceCardMobile,
        ExperienceHeaderMobile
    },
    data() {
        return {
            experienceList,
            activeIndex: 0,
            bodyRefs: [],
            observer: null,
            lastScrollY: 0,
            isScrollingDown: true
        }
    },
    beforeUpdate() {
        this.bodyRefs = [];
    },
    mounted() {
        this.setupObserver();
        window.addEventListener('scroll', this.handleScroll);
        this.lastScrollY = window.scrollY;
    },
    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        setBodyRef(el, index) {
            if (el) this.bodyRefs[index] = el;
        },
        handleScroll() {
            const currentScrollY = window.scrollY;
            this.isScrollingDown = currentScrollY > this.lastScrollY;
            this.lastScrollY = currentScrollY;
        },
        setupObserver() {
            const options = {
                root: null,
                rootMargin: '-30% 0px -10% 0px', // Adjusted for mobile screen height
                threshold: 0
            };

            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        let index = -1;
                        if (entry.target === this.$refs.endMarker) {
                            index = this.experienceList.length;
                        } else {
                            index = this.bodyRefs.findIndex(ref => ref === entry.target);
                        }

                        if (index !== -1) {
                            if (this.isScrollingDown && index > this.activeIndex) {
                                this.activeIndex = index;
                            } else if (!this.isScrollingDown && index < this.activeIndex) {
                                this.activeIndex = index;
                            }
                        }
                    }
                });
            }, options);

            this.bodyRefs.forEach(ref => {
                if (ref) this.observer.observe(ref);
            });
            
            if (this.$refs.endMarker) {
                this.observer.observe(this.$refs.endMarker);
            }
        }
    }
}
</script>

<style scoped>
.experience-section-mobile {
    width: 100%;
}
</style>

<template>
    <Section :title="$t('experience.title')" :subtitle="$t('experience.label')" :description="$t('experience.description')">
       <!-- Desktop Version -->
       <div v-if="!isMobile" class="relative flex flex-col gap-0 items-center">
         <!-- Central Line Background -->
         <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-border-strong opacity-30"></div>

         <template v-for="(exp, index) in experienceList" :key="exp.id">
             <!-- Sticky Header -->
             <div 
                 class="sticky w-full"
                 :style="{
                     top: `${index * 64}px`,
                     zIndex: 20 + index
                 }"
             >
                 <ExperienceHeader
                     :role="exp.role"
                     :company="exp.company"
                     :duration="exp.duration"
                     :logo="exp.logo"
                     :is-left="index % 2 === 0"
                     :is-compact="index < activeIndex"
                 />
             </div>

             <!-- Scrollable Body -->
             <div 
                 :ref="(el) => setBodyRef(el, index)"
                 class="w-full relative z-10"
                 :style="{
                     background: 'linear-gradient(90deg, var(--bg-section) calc(50% - 1px), transparent calc(50% - 1px), transparent calc(50% + 1px), var(--bg-section) calc(50% + 1px))'
                 }"
             >
                 <ExperienceCard
                     :role="exp.role"
                     :company="exp.company"
                     :duration="exp.duration"
                     :description="exp.description"
                     :skillTags="exp.skillTags"
                     :logo="exp.logo"
                     :is-left="index % 2 === 0"
                     :is-last="index === experienceList.length - 1"
                     :card-index="index"
                 />
             </div>
         </template>
         
         <!-- End Marker to trigger last card shrink -->
         <div ref="endMarker" class="h-1 w-full relative z-0 -mt-32"></div>
       </div>

       <!-- Mobile Version -->
       <ExperienceSectionMobile v-else />
    </Section>
</template>
<script>
import ExperienceCard from "@/components/cards/ExperienceCard.vue";
import ExperienceHeader from "@/components/cards/ExperienceHeader.vue";
import ExperienceSectionMobile from "@/components/sections/ExperienceSectionMobile.vue";
import Section from "@/components/common/Section.vue";
import { experienceList } from "@/constants/experience";

export default {
    name: "ExperienceSection",
    components: {
        ExperienceCard,
        ExperienceHeader,
        ExperienceSectionMobile,
        Section,
    },
    data() {
      return {
        activeIndex: 0,
        bodyRefs: [],
        observer: null,
        lastScrollY: 0,
        isScrollingDown: true,
        isMobile: false,
        experienceList
      }
    },
    beforeUpdate() {
        this.bodyRefs = [];
    },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
        if (!this.isMobile) {
            this.setupObserver();
            window.addEventListener('scroll', this.handleScroll);
            this.lastScrollY = window.scrollY;
        }
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobile);
        if (this.observer) {
            this.observer.disconnect();
        }
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        setBodyRef(el, index) {
            if (el) this.bodyRefs[index] = el;
        },
        checkMobile() {
            this.isMobile = window.innerWidth <= 768;
        },
        handleScroll() {
            const currentScrollY = window.scrollY;
            this.isScrollingDown = currentScrollY > this.lastScrollY;
            this.lastScrollY = currentScrollY;
        },
        setupObserver() {
            const options = {
                root: null,
                // Adjusted rootMargin for precise control
                // Top: -45% (Delays expansion on scroll up until card is halfway down)
                // Bottom: -10% (Triggers shrink immediately on scroll down)
                rootMargin: '-45% 0px -10% 0px',
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
                            // Only update activeIndex if it aligns with scroll direction
                            // Shrinking (increasing activeIndex) should only happen when scrolling DOWN
                            // Growing (decreasing activeIndex) should only happen when scrolling UP
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
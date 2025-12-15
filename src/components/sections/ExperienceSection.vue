<template>
   <Section :title="$t('experience.title')">
      <div class="flex justify-end mb-12">
        <div class="flex flex-row gap-2 max-w-[40%] text-right">
          <p class="text-gray-400">{{ $t('experience.label') }}</p>
          <div>
          <p class="text-gray-500 text-sm">{{ $t('experience.description') }}</p>
          </div>
        </div>
      </div>
      <div class="relative flex flex-col gap-0 items-center">
        <!-- Central Line Background -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-orange-500/30"></div>

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
   </Section>
</template>
<script>
import ExperienceCard from "@/components/cards/ExperienceCard.vue";
import ExperienceHeader from "@/components/cards/ExperienceHeader.vue";
import Section from "@/components/common/Section.vue";

export default {
    name: "ExperienceSection",
    components: {
        ExperienceCard,
        ExperienceHeader,
        Section,
    },
    data() {
      return {
        activeIndex: 0,
        bodyRefs: [],
        observer: null,
        experienceList: [
           {
            id: 1,
            role: "Mid-level Software Engineer",
            company: "Awsales - Nova Lima, Brazil (Hybrid)",
            duration: "Jul 2025 - Present",
            logo: "https://ui-avatars.com/api/?name=Aw&background=0D8ABC&color=fff", // Placeholder
            description: [
              "Develop and maintain an AI-powered marketing platform used by top Brazilian influencers to manage campaigns.",
              "Build and optimize features using Next.js, React, and TypeScript, focusing on performance and scalability.",
              "Work on frontend performance improvements using SSR, code splitting, and optimized rendering."
            ],
            skillTags: ["NextJS", "TypeScript", "React", "Jest", "Docker", "PostgreSQL"]
           },
           {
            id: 2,
            role: "Software Engineer",
            company: "Abrasel - Belo Horizonte, Brazil (On-site)",
            duration: "Apr 2024 - Jul 2025",
            logo: "https://ui-avatars.com/api/?name=Ab&background=FF5722&color=fff", // Placeholder
            description: [
              "Develop and maintain applications used by over 45,000 users, using Next.js, Node.js, and TypeScript.",
              "Use AWS services such as Lambda, S3, EC2, and SQS to create scalable and efficient solutions.",
              "Implement CI/CD pipelines with GitHub Actions, AWS Cloud, and GitHub Webhooks."
            ],
            skillTags: ["NextJS", "Node.js", "TypeScript", "AWS", "CI/CD"]
           },
           {
            id: 3,
            role: "Software Engineer",
            company: "Abrasel - Belo Horizonte, Brazil (On-site)",
            duration: "Apr 2024 - Jul 2025",
            logo: "https://ui-avatars.com/api/?name=Ab&background=FF5722&color=fff", // Placeholder
            description: [
              "Develop and maintain applications used by over 45,000 users, using Next.js, Node.js, and TypeScript.",
              "Use AWS services such as Lambda, S3, EC2, and SQS to create scalable and efficient solutions.",
              "Implement CI/CD pipelines with GitHub Actions, AWS Cloud, and GitHub Webhooks."
            ],
            skillTags: ["NextJS", "Node.js", "TypeScript", "AWS", "CI/CD"]
           }
        ]
      }
    },
    beforeUpdate() {
        this.bodyRefs = [];
    },
    mounted() {
        this.setupObserver();
    },
    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    methods: {
        setBodyRef(el, index) {
            if (el) this.bodyRefs[index] = el;
        },
        setupObserver() {
            const options = {
                root: null,
                // Adjusted rootMargin for better scroll-up behavior
                // Top: -20% (triggers expansion earlier when scrolling up)
                // Bottom: -45% (keeps shrink trigger reasonable when scrolling down)
                rootMargin: '-20% 0px -45% 0px',
                threshold: 0
            };

            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === this.$refs.endMarker) {
                            this.activeIndex = this.experienceList.length;
                        } else {
                            const index = this.bodyRefs.findIndex(ref => ref === entry.target);
                            if (index !== -1) {
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
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

        <ExperienceCard
            v-for="(exp, index) in experienceList" 
            :key="exp.id"
            :role="exp.role"
            :company="exp.company"
            :duration="exp.duration"
            :description="exp.description"
            :skillTags="exp.skillTags"
            :logo="exp.logo"
            :is-left="index % 2 === 0"
            :is-last="index === experienceList.length - 1"
        />
      </div>
   </Section>
</template>
<script>
import ExperienceCard from "@/components/cards/ExperienceCard.vue";
import Section from "@/components/common/Section.vue";

export default {
    name: "ExperienceSection",
    components: {
        ExperienceCard,
        Section,
    },
    data() {
      return {
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
    }
}
</script>
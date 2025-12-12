<script setup>
import NameCard from "@/components/NameCard.vue";
import AboutCard from "@/components/AboutCard.vue";
import ProjectsCard from "@/components/ProjectsCard.vue";
import ExperienceCard from "@/components/ExperienceCard.vue";
import SkillsetCard from "@/components/SkillsetCard.vue";
import BlogsCard from "@/components/BlogsCard.vue";
</script>

<template>
  <main class="bg-neutral-950 text-white">
    <div class="grid grid-cols-3 grid-rows-2 gap-4 [grid-auto-rows:200px]">
      <!-- Row 1 -->
      <NameCard />
      <AboutCard />
      <ProjectsCard />

      <!-- Row 2 -->
      <ExperienceCard />
      <SkillsetCard />
      <BlogsCard />
    </div>
  </main>
</template>

<style>
/* Global resets if needed, though Tailwind handles most */
body {
  margin: 0;
  padding: 0;
  background-color: #0a0a0a; /* Matches neutral-950 */
}
</style>

<script setup>
import NameCard from './components/NameCard.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Skillset from './components/Skillset.vue'
import Blogs from './components/Blogs.vue'
</script>

<template>
  <main class="h-screen w-screen bg-neutral-950 text-white p-4 md:p-6 overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 md:gap-6 h-full w-full max-w-7xl mx-auto">
      <!-- Row 1 -->
      <NameCard />
      <About />
      <Projects />
      
      <!-- Row 2 -->
      <Experience />
      <Skillset />
      <Blogs />
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

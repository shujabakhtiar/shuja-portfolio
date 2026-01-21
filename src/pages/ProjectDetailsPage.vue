<template>
  <div class="min-h-screen bg-[#0C0F0A] text-white px-6 py-12 lg:px-24 lg:py-24 font-body relative">
    <HamburgerMenu :navOptions="mainNavOptions" :showButton="true" />
    
    <!-- Desktop Section Navigation -->
    <nav class="hidden lg:flex fixed right-12 top-1/2 -translate-y-1/2 flex-col items-end gap-4 z-40">
      <div class="flex flex-col items-end gap-3 pr-4 border-r border-zinc-900">
        <a 
          v-for="section in sectionNavOptions" 
          :key="section.label" 
          @click.prevent="handleSectionClick(section.link)"
          class="text-[10px] text-zinc-600 hover:text-[#E2C7CF] transition-all duration-300 font-mono tracking-widest uppercase cursor-pointer hover:translate-x-[-4px]"
        >
          {{ section.label }}
        </a>
      </div>
    </nav>
    <div v-if="project" class="max-w-4xl mx-auto space-y-20 animate-fade-in">
      <!-- Header -->
      <header class="space-y-8">
        <router-link to="/#projects" class="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-300 mb-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover:-translate-x-1 transition-transform">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Projects
        </router-link>
        
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <h1 class="text-4xl lg:text-8xl font-black uppercase tracking-tighter">{{ project.title }}</h1>
            <span class="px-3 py-1 rounded-full border border-zinc-700 text-xs font-mono uppercase tracking-widest text-zinc-400">
              {{ project.status }}
            </span>
          </div>
          <p class="text-xl lg:text-2xl text-zinc-400 font-medium leading-relaxed max-w-2xl">
            {{ project.summary }}
          </p>
          <div class="pt-4 flex items-center gap-6">
            <a 
              :href="project.liveSite" 
              target="_blank"
              class="flex items-center gap-2 px-6 py-3 bg-[#E2C7CF] text-black font-bold rounded-full hover:scale-105 transition-transform duration-300"
            >
              <span class="text-sm uppercase tracking-widest">Visit Live Site</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          </div>
        </div>
      </header>

      <!-- Tech Stack -->
      <section class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 py-12 border-y border-zinc-900">
        <div v-for="(items, category) in project.techStack" :key="category" class="space-y-4">
          <h3 class="text-xs font-bold uppercase tracking-widest text-[#E2C7CF]">{{ category }}</h3>
          <ul class="flex flex-wrap gap-x-4 gap-y-2 md:block md:space-y-1">
            <li v-for="item in items" :key="item" class="text-zinc-400 font-mono text-sm whitespace-nowrap">{{ item }}</li>
          </ul>
        </div>
      </section>

      <!-- Problem & Motivation -->
      <section id="problem" class="space-y-8">
        <h2 class="text-3xl font-bold tracking-tight">Problem & Motivation</h2>
        <div class="grid md:grid-cols-2 gap-12 text-zinc-400 leading-relaxed text-lg">
          <p>{{ project.problem.issue }}</p>
          <div class="space-y-6">
            <p>{{ project.problem.bottleneck }}</p>
            <p class="text-white font-medium italic border-l-2 border-[#E2C7CF] pl-6 uppercase text-sm tracking-wide">
              {{ project.problem.motivation }}
            </p>
          </div>
        </div>
      </section>

      <!-- Highlights -->
      <div id="highlights">
        <ProjectHighlights :project="project" />
      </div>

      <!-- Approach -->
      <section id="approach" class="space-y-8 border-t border-zinc-900 pt-16">
        <h2 class="text-3xl font-bold tracking-tight">Solution & Approach</h2>
        <div class="grid md:grid-cols-3 gap-12 text-zinc-400">
          <div class="space-y-4">
            <h4 class="text-white font-bold uppercase text-xs tracking-widest">Strategy</h4>
            <p>{{ project.approach.strategy }}</p>
          </div>
          <div class="space-y-4">
            <h4 class="text-white font-bold uppercase text-xs tracking-widest">Decisions</h4>
            <p>{{ project.approach.decisions }}</p>
          </div>
          <div class="space-y-4">
            <h4 class="text-white font-bold uppercase text-xs tracking-widest">Tradeoffs</h4>
            <p>{{ project.approach.tradeoffs }}</p>
          </div>
        </div>
      </section>

      <!-- Ownership -->
      <section id="ownership" class="bg-zinc-900/30 p-12 rounded-2xl border border-zinc-800/50 space-y-6">
        <h2 class="text-2xl font-bold tracking-tight">My Role & Ownership</h2>
        <p class="text-zinc-400 text-lg leading-relaxed">{{ project.ownership }}</p>
      </section>

      <!-- Architecture -->
      <section id="architecture" class="space-y-8">
        <h2 class="text-3xl font-bold tracking-tight">Architecture & System Design</h2>
        <div class="space-y-12">
          <p class="text-zinc-400 text-lg max-w-2xl">{{ project.architecture.overview }}</p>
          <div class="p-8 bg-zinc-900 rounded-xl font-mono text-sm text-[#E2C7CF] border border-zinc-800">
            <div class="flex items-center gap-4">
              <span class="opacity-50">Flow:</span>
              <span>{{ project.architecture.flow }}</span>
            </div>
          </div>
          <p class="text-zinc-400 text-lg">{{ project.architecture.rationale }}</p>
        </div>
      </section>





      <!-- Performance & Learnings -->
      <div class="grid md:grid-cols-2 gap-16 pt-16 border-t border-zinc-900">
        <section class="space-y-8">
          <h2 class="font-bold uppercase tracking-widest text-[#E2C7CF] text-xs">Optimization & Scale</h2>
          <div class="space-y-6 text-zinc-400">
            <p>{{ project.performance.optimizations }}</p>
            <p>{{ project.performance.scalability }}</p>
            <p>{{ project.performance.cost }}</p>
          </div>
        </section>
        <section class="space-y-8">
          <h3 class="font-bold uppercase tracking-widest text-[#E2C7CF] text-xs">Challenges & Lessons</h3>
          <div class="space-y-6 text-zinc-400">
            <p>{{ project.learnings.challenges }}</p>
            <p>{{ project.learnings.lessons }}</p>
            <p class="italic">Alternative: {{ project.learnings.improvements }}</p>
          </div>
        </section>
      </div>

      <!-- Call to Action / Visit -->
      <section id="demo" class="mt-20 p-16 rounded-3xl bg-zinc-900 border border-zinc-800 text-center space-y-8 animate-pulse-slow">
        <div class="space-y-4">
          <h2 class="text-3xl lg:text-6xl font-black uppercase tracking-tighter">Experience it live</h2>
          <p class="text-zinc-400 text-lg max-w-xl mx-auto">
            Get a hands-on feel for the performance and user experience I've built into {{ project.title }}.
          </p>
        </div>
        <a 
          :href="project.liveSite" 
          target="_blank"
          class="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#E2C7CF] transition-all duration-500 transform hover:scale-95"
        >
          Explore Demo
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      </section>

      <!-- Footer -->
      <footer class="pt-24 pb-12 text-center space-y-12">
        <div class="space-y-4">
          <p class="text-xs uppercase tracking-[0.4em] text-zinc-600">What's Next</p>
          <div class="flex flex-wrap justify-center gap-4">
            <span v-for="item in project.next" :key="item" class="px-6 py-2 rounded-full bg-zinc-900 text-zinc-400 text-sm font-medium">
              {{ item }}
            </span>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
          <router-link 
            v-if="prevProjectSlug"
            :to="'/project/' + prevProjectSlug" 
            class="group flex items-center gap-4 px-8 py-4 border border-zinc-800 rounded-full text-zinc-400 hover:text-white hover:border-zinc-500 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover:-translate-x-1 transition-transform">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span class="font-bold uppercase tracking-widest text-xs">Previous Project</span>
          </router-link>

          <router-link 
            v-if="nextProjectSlug"
            :to="'/project/' + nextProjectSlug" 
            class="px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-[#E2C7CF] transition-colors duration-300 rounded-full text-sm"
          >
            Next Project
          </router-link>
          
          <router-link 
            to="/#projects" 
            class="inline-block px-12 py-4 border border-zinc-700 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-full text-sm"
          >
            Return to projects
          </router-link>
        </div>
      </footer>
    </div>
    
    <div v-else class="min-h-screen flex items-center justify-center">
      <div class="text-center space-y-4">
        <h2 class="text-2xl font-bold opacity-50">Project insight loading...</h2>
        <router-link to="/#projects" class="text-[#E2C7CF] hover:underline uppercase text-xs tracking-widest font-bold">Return to projects</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { projectDetails } from '@/constants/projectDetails'
import { projects } from '@/constants/projects'
import HamburgerMenu from '@/components/navigation/HamburgerMenu.vue'
import ProjectHighlights from '@/components/sections/ProjectHighlights.vue'
import { scrollToSection } from '@/utils/scroll'

const route = useRoute()
const project = computed(() => {
  const baseInfo = projects.find(p => p.slug === route.params.slug)
  const detailedInfo = projectDetails[route.params.slug]
  return baseInfo && detailedInfo ? { ...baseInfo, ...detailedInfo } : null
})



const prevProjectSlug = computed(() => {
  const currentSlug = route.params.slug
  const currentIndex = projects.findIndex(p => p.slug === currentSlug)
  if (currentIndex > 0) {
    return projects[currentIndex - 1].slug
  }
  return null
})

const nextProjectSlug = computed(() => {
  const currentSlug = route.params.slug
  const currentIndex = projects.findIndex(p => p.slug === currentSlug)
  if (currentIndex !== -1 && currentIndex < projects.length - 1) {
    return projects[currentIndex + 1].slug
  }
  return null
})

const mainNavOptions = [
  { label: "Home", link: "/#home" },
  { label: "Experience", link: "/#experience" },
  { label: "Projects", link: "/#projects" },
  { label: "Skills", link: "/#services" },
  { label: "Contact", link: "/#contact" }
]

const sectionNavOptions = [
  { label: "Intro", link: "#problem" },
  { label: "Highlights", link: "#highlights" },
  { label: "Approach", link: "#approach" },
  { label: "Ownership", link: "#ownership" },
  { label: "Systems", link: "#architecture" },
  { label: "Live Demo", link: "#demo" }
]

const handleSectionClick = (link) => {
  scrollToSection(link)
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

h1, h2, h3 {
  font-family: "Archivo", sans-serif;
}

.animate-pulse-slow {
  animation: pulseSlow 4s infinite ease-in-out;
}

@keyframes pulseSlow {
  0%, 100% { border-color: rgba(39, 39, 42, 1); }
  50% { border-color: rgba(226, 199, 207, 0.3); }
}
</style>

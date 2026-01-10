<template>
  <div class="min-h-screen bg-[#0C0F0A] text-white px-6 py-12 lg:px-24 lg:py-24 font-body relative">
    <HamburgerMenu :navOptions="projectNavOptions" :showButton="true" />
    <div v-if="project" class="max-w-4xl mx-auto space-y-20 animate-fade-in">
      <!-- Header -->
      <header class="space-y-8">
        <router-link to="/" class="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-300 mb-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover:-translate-x-1 transition-transform">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Work
        </router-link>
        
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <h1 class="text-6xl lg:text-8xl font-black uppercase tracking-tighter">{{ project.title }}</h1>
            <span class="px-3 py-1 rounded-full border border-zinc-700 text-xs font-mono uppercase tracking-widest text-zinc-400">
              {{ project.status }}
            </span>
          </div>
          <p class="text-xl lg:text-2xl text-zinc-400 font-medium leading-relaxed max-w-2xl">
            {{ project.summary }}
          </p>
        </div>
      </header>

      <!-- Tech Stack -->
      <section class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-zinc-900">
        <div v-for="(items, category) in project.techStack" :key="category" class="space-y-3">
          <h3 class="text-xs font-bold uppercase tracking-widest text-[#E2C7CF]">{{ category }}</h3>
          <ul class="space-y-1">
            <li v-for="item in items" :key="item" class="text-zinc-400 font-mono text-sm">{{ item }}</li>
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

      <!-- Features -->
      <section id="features" class="space-y-12 border-t border-zinc-900 pt-16">
        <h2 class="text-3xl font-bold tracking-tight">Key Features</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="feature in project.features" :key="feature.title" class="p-8 border border-zinc-900 hover:border-[#E2C7CF]/30 transition-colors duration-500 rounded-xl space-y-4 group">
            <h3 class="text-xl font-bold group-hover:text-[#E2C7CF] transition-colors">{{ feature.title }}</h3>
            <p class="text-zinc-400 leading-relaxed">{{ feature.why }}</p>
            <div class="pt-4 text-xs font-mono text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
              Technical: {{ feature.detail }}
            </div>
          </div>
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
        <router-link 
          v-if="nextProjectSlug"
          :to="'/project/' + nextProjectSlug" 
          class="inline-block px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-[#E2C7CF] transition-colors duration-300 rounded-full text-sm"
        >
          Next Project
        </router-link>
        <router-link 
          v-else
          to="/" 
          class="inline-block px-12 py-4 border border-zinc-700 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-full text-sm"
        >
          Return home
        </router-link>
      </footer>
    </div>
    
    <div v-else class="min-h-screen flex items-center justify-center">
      <div class="text-center space-y-4">
        <h2 class="text-2xl font-bold opacity-50">Project insight loading...</h2>
        <router-link to="/" class="text-[#E2C7CF] hover:underline uppercase text-xs tracking-widest font-bold">Return Home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projectDetails } from '@/constants/projectDetails'
import { projects } from '@/constants/projects'
import HamburgerMenu from '@/components/navigation/HamburgerMenu.vue'

const route = useRoute()
const project = computed(() => projectDetails[route.params.slug])

const nextProjectSlug = computed(() => {
  const currentSlug = route.params.slug
  const currentIndex = projects.findIndex(p => p.slug === currentSlug)
  if (currentIndex !== -1 && currentIndex < projects.length - 1) {
    return projects[currentIndex + 1].slug
  }
  return null
})

const projectNavOptions = [
  { label: "Problem", link: "#problem" },
  { label: "Approach", link: "#approach" },
  { label: "Ownership", link: "#ownership" },
  { label: "Architecture", link: "#architecture" },
  { label: "Features", link: "#features" },
  { label: "Back Home", link: "/" }
]
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
</style>

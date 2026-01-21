<template>
  <section v-if="project.highlights && project.highlights.length > 0" class="space-y-20 border-t border-zinc-900 pt-16">
    <div class="space-y-4">
      <h2 class="text-3xl font-bold tracking-tight">Project Highlights</h2>
      <p class="uppercase tracking-widest text-xs font-bold text-zinc-500">Key Features & Flows</p>
    </div>

    <div v-for="(highlight, index) in project.highlights" :key="index" class="grid lg:grid-cols-5 gap-12 items-center">
      <!-- Left Side: Visual (Image/GIF) -->
      <div 
        class="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl aspect-video group lg:col-span-3"
        :class="{ 'lg:order-last': index % 2 !== 0 }"
      >
        <img 
          :src="highlight.image" 
          :alt="highlight.title"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <!-- Right Side: Content -->
      <div class="space-y-8 lg:col-span-2">
        <h3 class="text-2xl font-bold text-white">{{ highlight.title }}</h3>
        
        <ul class="space-y-6">
          <li v-for="(point, pIndex) in highlight.points" :key="pIndex" class="flex gap-4 group/item">
            <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover/item:bg-[#E2C7CF] transition-colors duration-300 flex-shrink-0"></span>
            <span class="text-zinc-400 leading-relaxed text-lg group-hover/item:text-zinc-300 transition-colors duration-300">
              {{ point }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

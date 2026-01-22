<template>
  <section v-if="project.highlights && project.highlights.length > 0" class="space-y-20 border-t border-zinc-900 pt-16">
    <div class="space-y-4">
      <h2 class="text-3xl font-bold tracking-tight">Project Highlights</h2>
      <p class="uppercase tracking-widest text-xs font-bold text-zinc-500">Key Features & Flows</p>
    </div>

    <!-- Single Highlight Preview -->
    <div v-if="project.highlights.length > 0" class="grid lg:grid-cols-5 gap-12 items-center">
      <!-- Left Side: Visual (Image/Video) -->
      <div 
        @click="openModal(0)"
        class="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl aspect-video group lg:col-span-3 cursor-zoom-in"
      >
        <video
          v-if="isVideo(project.highlights[0].image)"
          :src="project.highlights[0].image"
          autoplay
          loop
          muted
          playsinline
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        ></video>
        <img 
          v-else
          :src="project.highlights[0].image" 
          :alt="project.highlights[0].title"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span class="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-medium text-sm border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            View {{ project.highlights.length }} Highlights
          </span>
        </div>
      </div>

      <!-- Right Side: Content -->
      <div class="space-y-8 lg:col-span-2">
        <div 
          @click="openModal(0)"
          class="space-y-4 cursor-pointer group/content"
        >
          <h3 class="text-2xl font-bold text-white group-hover/content:text-[#E2C7CF] transition-colors duration-300">{{ project.highlights[0].title }}</h3>
          
          <ul class="space-y-6">
            <li v-for="(point, pIndex) in project.highlights[0].points" :key="pIndex" class="flex gap-4 group/item">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover/item:bg-[#E2C7CF] transition-colors duration-300 flex-shrink-0"></span>
              <span class="text-zinc-400 leading-relaxed text-lg group-hover/item:text-zinc-300 transition-colors duration-300">
                {{ point }}
              </span>
            </li>
          </ul>
        </div>

        <button 
          v-if="project.highlights.length > 1"
          @click="openModal(0)"
          class="flex items-center gap-2 text-[#E2C7CF] font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all duration-300 group/btn"
        >
          View all {{ project.highlights.length }} highlights
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </div>

    <!-- Full Screen Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="activeIndex !== null" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/90 backdrop-blur-xl" @click="closeModal"></div>

          <!-- content wrapper -->
          <div class="relative w-full max-w-7xl mx-auto h-full max-h-[90vh] flex flex-col pointer-events-none">
            
            <!-- Modal Header (Controls) -->
            <div class="flex justify-between items-start mb-8 pointer-events-auto z-10">
               <div class="space-y-2">
                 <span class="text-zinc-500 font-mono text-xs uppercase tracking-widest block">
                    Highlight {{ activeIndex + 1 }} / {{ project.highlights.length }}
                 </span>
                 <h2 class="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                   {{ activeHighlight.title }}
                 </h2>
               </div>

               <button 
                 @click="closeModal"
                 class="p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 group"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:rotate-90 transition-transform duration-300"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
               </button>
            </div>

            <!-- Main Content Area -->
            <div class="flex-1 min-h-0 grid lg:grid-cols-12 gap-8 pointer-events-auto">
              
              <!-- Navigation Left -->
              <div class="hidden lg:flex col-span-1 items-center justify-start">
                 <button 
                  @click.stop="prevHighlight"
                  class="p-4 rounded-full border border-zinc-800 text-zinc-500 hover:text-white hover:border-[#E2C7CF] hover:bg-[#E2C7CF]/10 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
              </div>

              <!-- Visual & Details -->
            <div class="col-span-12 lg:col-span-10 grid lg:grid-cols-12 gap-8 lg:gap-16 items-center h-full overflow-y-auto lg:overflow-visible">
                
                <!-- Image (Larger Real Estate) -->
                <div class="lg:col-span-8 w-full h-full max-h-[60vh] lg:max-h-none flex items-center">
                   <div class="relative w-full h-auto max-h-full overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl bg-zinc-900">
                      <video
                        v-if="isVideo(activeHighlight.image)"
                        :src="activeHighlight.image"
                        autoplay
                        loop
                        muted
                        playsinline
                        class="w-full h-full object-contain bg-zinc-950"
                      ></video>
                      <img 
                        v-else
                        :src="activeHighlight.image" 
                        :alt="activeHighlight.title"
                        class="w-full h-full object-contain bg-zinc-950"
                      />
                   </div>
                </div>

                 <!-- Details -->
                <div class="lg:col-span-4 space-y-8 pb-8 lg:pb-0">
                  <div class="space-y-6">
                    <div v-for="(point, idx) in activeHighlight.points" :key="idx" class="flex gap-4">
                       <div class="mt-2 w-2 h-2 rounded-full bg-[#E2C7CF] flex-shrink-0"></div>
                       <p class="text-zinc-300 text-lg md:text-xl leading-relaxed">
                         {{ point }}
                       </p>
                    </div>
                  </div>
                </div>

              </div>

               <!-- Navigation Right -->
               <div class="hidden lg:flex col-span-1 items-center justify-end">
                 <button 
                  @click.stop="nextHighlight"
                  class="p-4 rounded-full border border-zinc-800 text-zinc-500 hover:text-white hover:border-[#E2C7CF] hover:bg-[#E2C7CF]/10 transition-all duration-300"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>

            </div>

            <!-- Mobile Navigation Bottom -->
            <div class="flex lg:hidden justify-between items-center py-6 pointer-events-auto">
               <button 
                  @click.stop="prevHighlight"
                  class="p-4 rounded-full border border-zinc-800 text-zinc-500 hover:text-white hover:border-[#E2C7CF] transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </button>
                <span class="text-sm font-mono text-zinc-500">Swipe or Tap</span>
               <button 
                  @click.stop="nextHighlight"
                  class="p-4 rounded-full border border-zinc-800 text-zinc-500 hover:text-white hover:border-[#E2C7CF] transition-all"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
            </div>

          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const activeIndex = ref(null)

const activeHighlight = computed(() => {
  if (activeIndex.value === null) return null
  return props.project.highlights[activeIndex.value]
})

const openModal = (index) => {
  activeIndex.value = index
  document.body.style.overflow = 'hidden' // Prevent scrolling
}

const closeModal = () => {
  activeIndex.value = null
  document.body.style.overflow = '' // Restore scrolling
}

const isVideo = (url) => {
  if (!url) return false
  return typeof url === 'string' && (url.toLowerCase().endsWith('.mov') || url.toLowerCase().endsWith('.mp4') || url.toLowerCase().endsWith('.webm'))
}

const nextHighlight = () => {
  if (activeIndex.value === null) return
  if (activeIndex.value < props.project.highlights.length - 1) {
    activeIndex.value++
  } else {
    activeIndex.value = 0 // Loop back
  }
}

const prevHighlight = () => {
  if (activeIndex.value === null) return
  if (activeIndex.value > 0) {
    activeIndex.value--
  } else {
    activeIndex.value = props.project.highlights.length - 1 // Loop to end
  }
}

const handleKeydown = (e) => {
  if (activeIndex.value === null) return
  
  switch(e.key) {
    case 'Escape':
      closeModal()
      break
    case 'ArrowRight':
      nextHighlight()
      break
    case 'ArrowLeft':
      prevHighlight()
      break
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = '' // Cleanup in case component unmounts while modal is open
})
</script>

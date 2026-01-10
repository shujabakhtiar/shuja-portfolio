<template>
    <Teleport to="body">
        <div>
            <div class="fixed top-2 md:top-4 right-4 z-[1000] transition-all duration-500 ease-out"
                 :class="showButton || isOpen ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'">
                <HamburgerButton :active="isOpen" @toggle="toggleMenu" />
            </div>
            
            <div 
                class="fixed inset-0 z-[999] transition-transform duration-500 ease-in-out bg-black/40 backdrop-blur-md overflow-y-auto"
                :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
            >
                <div class="min-h-screen w-full flex flex-col items-end justify-center gap-8">
                   <div class="lg:w-[40%] md:w-[60%] sm:w-[70%] p-6 w-full flex flex-col items-start justify-center gap-8">
                     <a 
                        v-for="option in navOptions" 
                        :key="option.label"
                        :href="option.link"
                        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter cursor-pointer relative group text-white transition-all duration-300 hover:text-white/70 text-center"
                        @click="handleNavClick(option.link)"
                    >
                        {{ option.label }}
                        <span class="absolute left-0 bottom-0 w-0 h-[2px] sm:h-[3px] md:h-[4px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    
                    <div class="mt-12 text-sm font-mono text-gray-400 flex flex-col items-start gap-2">
                         <p class="text-xs opacity-60">EMAIL ADDRESS</p>
                         <a href="mailto:shujabakhtiar98@gmail.com" class="text-white hover:underline mb-4">shujabakhtiar98@gmail.com</a>
                         
                         <div class="flex gap-4 uppercase text-xs font-bold tracking-widest mt-4">
                             <a href="https://www.linkedin.com/in/shujabakhtiar/" target="_blank" class="hover:underline text-white">LinkedIn</a>
                             <a href="https://github.com/shujabakhtiar" target="_blank" class="hover:underline text-white">Github</a>
                         </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script>
import HamburgerButton from '@/components/common/HamburgerButton.vue';

export default {
    name: "HamburgerMenu",
    components: {
        HamburgerButton
    },
    props: {
        navOptions: {
            type: Array,
            required: true,
        },
        showButton: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleMenu(val) {
            if (typeof val === 'boolean') {
                this.isOpen = val;
            } else {
                this.isOpen = !this.isOpen;
            }
        },
        handleNavClick(link) {
            this.toggleMenu(false);
            // Delay slightly to allow menu transition or just start scrolling
            setTimeout(() => {
                this.scrollToSection(link);
            }, 300);
        },
        scrollToSection(link) {
            const id = link.startsWith('#') ? link.substring(1) : null;
            if (!id) return;
            
            const element = document.getElementById(id);
            if (!element) return;

            const targetPosition = element.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 1000;
            let start = null;

            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const ease = (t) => 1 - Math.pow(1 - t, 4);
                const currentProgress = Math.min(progress / duration, 1);
                const easedProgress = ease(currentProgress);

                window.scrollTo(0, startPosition + distance * easedProgress);

                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            };

            window.requestAnimationFrame(step);
        }
    }
}
</script>
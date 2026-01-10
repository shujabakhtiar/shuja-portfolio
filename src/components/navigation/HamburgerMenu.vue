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
                        @click.prevent="handleNavClick(option.link)"
                    >
                        {{ option.label }}
                        <span class="absolute left-0 bottom-0 w-0 h-[2px] sm:h-[3px] md:h-[4px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    
                    <div class="mt-12 text-sm font-mono text-gray-400 flex flex-col items-start gap-2">
                         <p class="text-xs opacity-60">EMAIL ADDRESS</p>
                         <div class="flex items-center gap-3 mb-4 group/email">
                            <a href="mailto:shujabakhtiar98@gmail.com" class="text-white hover:underline text-lg md:text-xl">shujabakhtiar98@gmail.com</a>
                            <button 
                                @click="copyEmail" 
                                class="relative p-2 rounded-md hover:bg-white/10 transition-colors pointer-events-auto"
                                aria-label="Copy email"
                            >
                                <svg v-if="!isCopied" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 group-hover/email:text-white transition-colors">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#E2C7CF]">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                
                                <!-- Tooltip -->
                                <Transition
                                    enter-active-class="transition duration-200 ease-out"
                                    enter-from-class="opacity-0 -translate-y-2"
                                    enter-to-class="opacity-100 -translate-y-0"
                                    leave-active-class="transition duration-200 ease-in"
                                    leave-from-class="opacity-100 -translate-y-0"
                                    leave-to-class="opacity-0 -translate-y-2"
                                >
                                    <span 
                                        v-if="isCopied" 
                                        class="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#E2C7CF] text-black text-[10px] font-black tracking-widest rounded-full shadow-xl whitespace-nowrap"
                                    >
                                        COPIED
                                    </span>
                                </Transition>
                            </button>
                         </div>
                         
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
import { scrollToSection } from '@/utils/scroll';

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
            isOpen: false,
            isCopied: false
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
            
            if (link.startsWith('#')) {
                // Internal section jump
                setTimeout(() => {
                    this.scrollToSection(link);
                }, 300);
            } else if (link.startsWith('/')) {
                // Route navigation
                this.$router.push(link);
            } else {
                 this.scrollToSection(link);
            }
        },
        async copyEmail() {
            try {
                await navigator.clipboard.writeText('shujabakhtiar98@gmail.com');
                this.isCopied = true;
                setTimeout(() => {
                    this.isCopied = false;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        },
        scrollToSection(link) {
            scrollToSection(link);
        }
    }
}
</script>
<template>
    <footer id="contact" class="w-full bg-[#EBEBE9] text-[#2D2D2D] py-24 px-10 lg:px-20 relative">
        <div class="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between gap-16 md:gap-8">
            <!-- Menu Column -->
            <div class="flex-1">
                <div class="w-full border-t border-black/10 py-6">
                    <h3 class="text-xs font-bold uppercase tracking-[0.2em] mb-10 opacity-60">Menu</h3>
                    <ul class="flex flex-col gap-4">
                        <li v-for="item in menuItems" :key="item.label" class="text-[#4A4A4A] hover:text-black transition-all duration-300 cursor-pointer text-xl font-medium" @click.prevent="scrollToSection(item.link)">
                            <a :href="item.link" @click.prevent>{{ item.label }}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Socials Column -->
            <div class="flex-1 flex flex-col">
                <div class="w-full border-t border-black/10 py-6">
                    <h3 class="text-xs font-bold uppercase tracking-[0.2em] mb-10 opacity-60">Socials</h3>
                    <ul class="flex flex-col gap-4">
                        <li v-for="social in socials" :key="social.name" class="flex items-center gap-3 text-[#4A4A4A] hover:text-black transition-all duration-300 group/social">
                            <a 
                                :href="social.link" 
                                :target="social.link.startsWith('mailto') ? '' : '_blank'"
                                class="text-xl font-medium"
                            >
                                {{ social.name }}
                            </a>
                            
                            <!-- Copy Button for Email
                            <div v-if="social.link.startsWith('mailto')" class="relative">
                                <button 
                                    @click="copyEmail(social.name)" 
                                    class="p-2 rounded-md hover:bg-black/5 transition-colors"
                                    aria-label="Copy email"
                                >
                                    <svg v-if="!isCopied" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-40 group-hover/social:opacity-100 transition-opacity">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                    </svg>
                                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
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
                                            class="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-[10px] font-black tracking-widest rounded-full shadow-xl whitespace-nowrap"
                                        >
                                            COPIED
                                        </span>
                                    </Transition>
                                </button>
                            </div>-->
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Empty space for layout balance or additional content -->
            <div class="flex-1 hidden md:block"></div>
        </div>

        <!-- Back to Top Button -->
        <button 
            @click="scrollToTop"
            class="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-16 h-16 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-all duration-300 group"
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                class="transform group-hover:-translate-y-1 transition-transform duration-300"
            >
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
        </button>
    </footer>
</template>

<script>
import { scrollToTop, scrollToSection } from "@/utils/scroll";

export default {
    name: "Footer",
    data() {
        return {
            isCopied: false,
            menuItems: [
                { label: "Home", link: "#home" },
                { label: "Experience", link: "#experience" },
                { label: "Projects", link: "#works" },
                { label: "Skills", link: "#services" },
                { label: "Contact", link: "#contact" }
            ],
            socials: [
                { name: "Linkedin", link: "https://www.linkedin.com/in/shujabakhtiar/" },
                { name: "Github", link: "https://github.com/shujabakhtiar" },
                { name: "shujabakhtiar98@gmail.com", link: "mailto:shujabakhtiar98@gmail.com" }
            ]
        };
    },
    methods: {
        scrollToTop() {
            scrollToTop();
        },
        async copyEmail(email) {
            try {
                await navigator.clipboard.writeText(email);
                this.isCopied = true;
                setTimeout(() => {
                    this.isCopied = false;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy email: ', err);
            }
        },
        scrollToSection(link) {
            scrollToSection(link);
        }
    }
};
</script>

<style scoped>
/* No specific styles needed beyond Tailwind */
</style>

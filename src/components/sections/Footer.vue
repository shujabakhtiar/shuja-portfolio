<template>
    <footer id="contact" class="w-full bg-[#EBEBE9] text-[#2D2D2D] py-24 px-10 lg:px-20 relative">
        <div class="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between gap-16 md:gap-8">
            <!-- Menu Column -->
            <div class="flex-1">
                <div class="w-full border-t border-black/10 py-6">
                    <h3 class="text-xs font-bold uppercase tracking-[0.2em] mb-10 opacity-60">Menu</h3>
                    <ul class="flex flex-col gap-4">
                        <li v-for="item in menuItems" :key="item.label" class="text-[#4A4A4A] hover:text-black transition-all duration-300 cursor-pointer text-xl font-medium">
                            <a :href="item.link">{{ item.label }}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Socials Column -->
            <div class="flex-1 flex flex-col">
                <div class="w-full border-t border-black/10 py-6">
                    <h3 class="text-xs font-bold uppercase tracking-[0.2em] mb-10 opacity-60">Socials</h3>
                    <ul class="flex flex-col gap-4">
                        <li v-for="social in socials" :key="social.name" class="text-[#4A4A4A] hover:text-black transition-all duration-300 cursor-pointer text-xl font-medium">
                            <a :href="social.link" :target="social.link.startsWith('mailto') ? '' : '_blank'">{{ social.name }}</a>
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
export default {
    name: "Footer",
    data() {
        return {
            menuItems: [
                { label: "Home", link: "#home" },
                { label: "Projects", link: "#works" },
                { label: "Experience", link: "#experience" },
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
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
};
</script>

<style scoped>
/* No specific styles needed beyond Tailwind */
</style>

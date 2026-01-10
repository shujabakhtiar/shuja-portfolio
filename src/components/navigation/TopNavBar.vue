<template>
    <nav 
        class="w-screen fixed top-0 left-0 z-50 h-16 p-4 flex items-center justify-between transition-all duration-700 ease-out delay-[2000ms]"
        :class="isMounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'"
    >
        <div 
            class="xl:text-[32px] 2xl:text-[40px] font-[600] text-heading text-black transition-all duration-500 ease-out"
            :class="isScrolled ? '-translate-y-20 opacity-0' : 'translate-y-0 opacity-100'"
        >
            {{ $t('hero.name') }}
        </div>
        <ul 
            class="hidden lg:flex flex-row gap-2 items-center transition-all duration-500 ease-out"
            :class="isScrolled ? '-translate-y-20 opacity-0' : 'translate-y-0 opacity-100'"
        >
            <li v-for="option in navOptions" :key="option.label" @click="scrollToSection(option.link)">
                {{ option.label }}
            </li>
            <li class="!p-0 hover:!bg-transparent">
                <LanguageSwitcher />
            </li>
        </ul>
        <HamburgerMenu :navOptions="navOptions" :showButton="isScrolled || isMobile" />
    </nav>
</template>
<script>
import LanguageSwitcher from "@/components/common/LanguageSwitcher.vue";
import HamburgerMenu from "@/components/navigation/HamburgerMenu.vue";
import { scrollToSection } from "@/utils/scroll";

export default {
    name: "TopNavBar",
    components: {
        LanguageSwitcher,
        HamburgerMenu
    },
    data() {
        return {
            isMounted: false,
            isScrolled: false,
            isMobile: false,
            navOptions: [
                {
                    label: "Home",
                    link: "#home",
                },
                {
                    label: "Experience",
                    link: "#experience",
                },
                {
                    label: "Projects",
                    link: "#works",
                },
                {
                    label: "Skills",
                    link: "#services",
                },
                {
                    label: "Contact",
                    link: "#contact",
                },
            ]
        };
    },
    mounted() {
        setTimeout(() => {
            this.isMounted = true;
        }, 100);
        this.checkMobile();
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.checkMobile);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.checkMobile);
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > (window.innerHeight - 100);
        },
        checkMobile() {
            this.isMobile = window.innerWidth < 1024;
        },
        scrollToSection(link) {
            scrollToSection(link);
        }
    }
}
</script>
<style scoped>
li {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #000;
    padding: 10px 15px;
}

li:hover {
    color: #0e08086d;
}
</style>
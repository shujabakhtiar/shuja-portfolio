<template>
    <nav 
        class="w-screen fixed top-0 left-0 z-50 h-16 p-4 flex items-center justify-between transition-all duration-700 ease-out delay-[2000ms]"
        :class="isMounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'"
    >
        <div 
            class="xl:text-[32px] 2xl:text-[40px] font-[600] text-heading italic text-black transition-all duration-500 ease-out"
            :class="isScrolled ? '-translate-y-20 opacity-0' : 'translate-y-0 opacity-100'"
        >
            {{ $t('hero.name') }}
        </div>
        <ul 
            class="flex flex-row gap-2 items-center transition-all duration-500 ease-out"
            :class="isScrolled ? '-translate-y-20 opacity-0' : 'translate-y-0 opacity-100'"
        >
            <li v-for="option in navOptions" :key="option">
                {{ option.label }}
            </li>
            <li class="!p-0 hover:!bg-transparent">
                <LanguageSwitcher />
            </li>
        </ul>
        <HamburgerMenu :navOptions="navOptions" :showButton="isScrolled" />
    </nav>
</template>
<script>
import LanguageSwitcher from "@/components/common/LanguageSwitcher.vue";
import HamburgerMenu from "@/components/navigation/HamburgerMenu.vue";

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
            navOptions: [
                {
                    label: "Home",
                    link: "/home",
                },
                {
                    label: "Projects",
                    link: "/home",
                },
                {
                    label: "Experience",
                    link: "/home",
                },
                {
                    label: "Skills",
                    link: "/home",
                },
                {
                    label: "Contact",
                    link: "/home",
                },
            ]
        };
    },
    mounted() {
        setTimeout(() => {
            this.isMounted = true;
        }, 100);
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // Check if we've scrolled past the hero section (viewport height)
            // Adding a small buffer (e.g., 100px) or using exactly window.innerHeight
            this.isScrolled = window.scrollY > (window.innerHeight - 100);
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
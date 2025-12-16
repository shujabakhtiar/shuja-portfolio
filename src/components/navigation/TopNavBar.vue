<template>
    <nav 
        class="w-screen fixed top-0 left-0 z-50 h-16 p-4 flex items-center justify-between transition-all duration-700 ease-out delay-[2000ms]"
        :class="isMounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'"
    >
        <div class="xl:text-[32px] 2xl:text-[40px] font-[600] text-heading text-black">
            {{ $t('hero.name') }}
        </div>
        <ul class="flex flex-row  gap-2 items-center">
            <li>{{ $t('nav.home') }}</li>
            <li>{{ $t('nav.projects') }}</li>
            <li>{{ $t('nav.experience') }}</li>
            <li>{{ $t('nav.skills') }}</li>
            <li>{{ $t('nav.contact') }}</li>
            <li class="!p-0 hover:!bg-transparent">
                <LanguageSwitcher />
            </li>
        </ul>
    </nav>
</template>
<script>
import LanguageSwitcher from "@/components/common/LanguageSwitcher.vue";

export default {
    name: "TopNavBar",
    components: {
        LanguageSwitcher
    },
    data() {
        return {
            isMounted: false,
        };
    },
    mounted() {
        setTimeout(() => {
            this.isMounted = true;
        }, 100);
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
<template>
    <div class="flex flex-col h-screen">
        <div class="w-screen">
            <TopNavBar/>
            <HeroSection/>
            <AboutSection/>

        </div>
    </div>
</template>
<script>
import TopNavBar from "@/components/navigation/TopNavBar.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
export default {
    name: "HomePage",
    components: {
        TopNavBar,
        HeroSection,
        AboutSection,
    },
}
</script>
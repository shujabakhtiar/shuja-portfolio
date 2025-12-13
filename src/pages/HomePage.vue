<template>
    <div class="flex flex-col h-screen">
        <div class="w-screen">
            <TopNavBar/>
            <HeroSection/>
            <AboutSection/>
            <ExperienceSection/>
        </div>
    </div>
</template>
<script>
import TopNavBar from "@/components/navigation/TopNavBar.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
export default {
    name: "HomePage",
    components: {
        TopNavBar,
        HeroSection,
        AboutSection,
        ExperienceSection,
    },
}
</script>
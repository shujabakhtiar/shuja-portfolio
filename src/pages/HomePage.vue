<template>
    <div class="flex flex-col h-screen">
        <div class="w-screen">
            <TopNavBar/>
            <HeroSection/>
            <AboutSection/>
            <ExperienceSection/>
            <ProjectsSection/>
            <ArsenalSection/>
            <ContactSection/>
        </div>
    </div>
</template>
<script>
import TopNavBar from "@/components/navigation/TopNavBar.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import ExperienceSection from "@/components/sections/ExperienceSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import ArsenalSection from "@/components/sections/ArsenalSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";

export default {
    name: "HomePage",
    components: {
        TopNavBar,
        HeroSection,
        AboutSection,
        ExperienceSection,
        ProjectsSection,
        ArsenalSection,
        ContactSection,
    },
}
</script>
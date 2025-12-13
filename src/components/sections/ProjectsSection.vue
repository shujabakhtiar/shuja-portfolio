<template>
    <Section :title="$t('projects.title')">
        <div class="flex justify-end">
            <div class="flex flex-row gap-2 max-w-[40%]">
                <p>{{ $t('projects.label') }}</p>
                <p>{{ $t('projects.description') }}</p>
            </div>
        </div>
        <div>
            <ProjectCard/>
        </div>
    </Section>
</template>
<script>
    import Section from "@/components/common/Section.vue";
    import ProjectCard from "@/components/cards/ProjectCard.vue";
export default {
    name: "ProjectsSection",
    components: {
        Section,    
        ProjectCard,
    },
}
</script>

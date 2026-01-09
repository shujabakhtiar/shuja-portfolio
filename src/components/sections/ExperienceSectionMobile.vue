<template>
    <div class="experience-section-mobile px-4 py-8">
        <div class="relative flex flex-col gap-0 items-start">
            <template v-for="exp in experienceList" :key="exp.id">
                <ExperienceCardMobile
                    :role="exp.role"
                    :company="exp.company"
                    :duration="exp.duration"
                    :description="exp.description"
                    :skillTags="exp.skillTags"
                    :logo="exp.logo"
                />
            </template>
        </div>
    </div>
</template>

<script>
import ExperienceCardMobile from "@/components/cards/ExperienceCardMobile.vue";
import { experienceList } from "@/constants/experience";

export default {
    name: "ExperienceSectionMobile",
    components: {
        ExperienceCardMobile
    },
    data() {
        return {
            experienceList
        }
    }
}
</script>

<style scoped>
.experience-section-mobile {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}
</style>

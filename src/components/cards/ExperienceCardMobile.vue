<template>
    <div class="experience-card-mobile relative pl-8 pb-12 border-l-2 border-border-strong last:pb-0">
        <!-- Connector Point -->
        <div class="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-border-strong">
            <div class="absolute inset-0 rounded-full bg-border-strong animate-ping opacity-20"></div>
        </div>

        <!-- Header Information -->
        <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full overflow-hidden border border-strong bg-neutral-900 p-1 flex-shrink-0">
                <img :src="logo" :alt="company" class="w-full h-full object-contain rounded-full" />
            </div>
            <div class="flex flex-col">
                <h3 class="font-bold text-white text-xl leading-tight">{{ role }}</h3>
                <p class="text-gray-400 text-sm">{{ company }}</p>
                <span class="text-accent text-sm font-medium mt-1">{{ duration }}</span>
            </div>
        </div>

        <!-- Description -->
        <ul class="list-disc list-outside ml-5 space-y-3 mb-6 marker:text-gray-500">
            <li v-for="desc in description" :key="desc" class="text-gray-300 text-sm leading-relaxed">
                {{ desc }}
            </li>
        </ul>

        <!-- Skills -->
        <div class="flex flex-wrap gap-2">
            <Tag v-for="tag in skillTags" :key="tag" class="text-xs py-1 px-2">
                {{ tag }}
            </Tag>
        </div>
    </div>
</template>

<script>
import Tag from '../common/Tag.vue';

export default {
    name: "ExperienceCardMobile",
    components: {
        Tag
    },
    props: {
        role: String,
        company: String,
        duration: String,
        description: Array,
        skillTags: Array,
        logo: String
    }
}
</script>

<style scoped>
.experience-card-mobile {
    transition: all 0.3s ease;
}

.text-accent {
    color: var(--color-primary, #0D8ABC); /* Fallback to a blue if variable not set */
}
</style>

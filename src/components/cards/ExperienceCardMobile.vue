<template>
    <div class="experience-card-mobile relative pb-8">
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
        description: Array,
        skillTags: Array
    }
}
</script>

<style scoped>
.experience-card-mobile {
    transition: all 0.3s ease;
}
</style>

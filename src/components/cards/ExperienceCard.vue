<template>
    <div :class="[
        'flex w-full group items-start gap-4',
        isLeft ? 'flex-row' : 'flex-row-reverse'
    ]">
         
        <!-- Content Block -->
        <div :class="[
            'flex flex-col gap-4 pb-16 flex-1',
            isLeft ? 'pr-8 items-start text-left' : 'pl-8 items-start text-left'
        ]">
            <div class="flex flex-col items-start gap-1">
                <h3 class="text-5xl font-bold text-white leading-tight">{{ role }}</h3>
                <h4 class="text-gray-400 text-xl">{{ company }}</h4>
            </div>
            
            <ul class="list-disc list-outside ml-5 space-y-3 my-4 marker:text-gray-500">
                 <li v-for="desc in description" :key="desc" class="text-gray-300 text-base leading-relaxed">
                    {{ desc }}
                 </li>
            </ul>

            <div class="flex flex-wrap gap-3 mt-2">
                <Tag v-for="tag in skillTags" :key="tag" customClasses="!bg-orange-500 !text-white !border-none !text-sm !px-4 !py-1.5">
                    {{ tag }}
                </Tag>
            </div>
        </div>

        <!-- Timeline Icon -->
        <div class="flex-none flex justify-center relative self-start">
             <div class="w-12 h-12 rounded-full border-2 border-orange-500 bg-[#0a0a0a] z-10 flex items-center justify-center overflow-hidden">
                <img v-if="logo && logo.startsWith('http')" :src="logo" class="w-full h-full object-cover" alt="Company Logo" />
                <span v-else class="text-orange-500 text-sm font-bold">{{ company.substring(0,2).toUpperCase() }}</span>
             </div>
        </div>

        <!-- Date Block -->
        <div :class="[
            'flex flex-col pt-2 flex-1',
            isLeft ? 'pl-8 items-start text-left' : 'pr-8 items-end text-right'
        ]">
            <span class="text-white font-bold text-2xl">{{ duration }}</span>
            <!-- Optional: Calculate duration length if needed, for now placeholder or omitted if not passed -->
            <!-- <span class="text-gray-500 text-base">1 year 3 month</span> -->
        </div>
    </div>
</template>
<script>
import Tag from '../common/Tag.vue';

export default {
    name: "ExperienceCard",
    components: {
        Tag
    },
    props: {
        role: String,
        company: String,
        duration: String,
        description: Array,
        skillTags: Array,
        logo: String,
        isLeft: {
            type: Boolean,
            default: true
        }
    },
}
</script>

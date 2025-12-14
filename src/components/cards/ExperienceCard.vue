<template>
    <div :class="[
        'flex w-full group items-start gap-4',
        isLeft ? 'flex-row' : 'flex-row-reverse'
    ]">
         
        <!-- Content Block -->
        <div :class="[
            'flex flex-col gap-2 pb-12 flex-1',
            isLeft ? 'pr-8 items-start text-left' : 'pl-8 items-start text-left'
        ]">
            <div class="flex flex-col items-start">
                <h3 class="text-xl font-bold text-white">{{ role }}</h3>
                <h4 class="text-gray-400 text-sm">{{ company }}</h4>
            </div>
            
            <ul class="list-disc list-outside ml-4 space-y-2 my-2 marker:text-gray-500">
                 <li v-for="desc in description" :key="desc" class="text-gray-300 text-sm leading-relaxed">
                    {{ desc }}
                 </li>
            </ul>

            <div class="flex flex-wrap gap-2 mt-2">
                <Tag v-for="tag in skillTags" :key="tag" color="orange" customClasses="!bg-orange-500 !text-white !border-none !text-xs !px-3 !py-1">
                    {{ tag }}
                </Tag>
            </div>
        </div>

        <!-- Timeline Icon -->
        <div class="flex-none flex justify-center relative self-start">
             <div class="w-10 h-10 rounded-full border-2 border-orange-500 bg-[#0a0a0a] z-10 flex items-center justify-center overflow-hidden">
                <img v-if="logo && logo.startsWith('http')" :src="logo" class="w-full h-full object-cover" alt="Company Logo" />
                <span v-else class="text-orange-500 text-xs font-bold">{{ company.substring(0,2).toUpperCase() }}</span>
             </div>
        </div>

        <!-- Date Block -->
        <div :class="[
            'flex flex-col pt-1 flex-1',
            isLeft ? 'pl-8 items-start text-left' : 'pr-8 items-end text-right'
        ]">
            <span class="text-white font-bold text-base">{{ duration }}</span>
            <!-- Optional: Calculate duration length if needed, for now placeholder or omitted if not passed -->
            <!-- <span class="text-gray-500 text-sm">1 year 3 month</span> -->
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

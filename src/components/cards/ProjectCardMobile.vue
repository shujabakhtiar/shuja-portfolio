<template>
    <div 
        class="project-card-mobile flex flex-col gap-4 p-6 transition-all duration-500 rounded-lg overflow-hidden relative"
        :class="isExpanded ? 'bg-neutral-900/80 backdrop-blur-sm' : 'bg-transparent'"
    >
        <!-- Close Button -->
        <button 
            v-if="isExpanded"
            @click.stop="$emit('close')"
            class="absolute top-4 right-4 p-1 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 z-40"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <!-- Header Info -->
        <div class="flex justify-between items-center w-full relative z-30">
            <h3 
                class="font-bold transition-all duration-700 ease-out"
                :class="isExpanded ? 'text-4xl text-white' : 'text-2xl text-gray-500 py-2'"
            >
                {{ title }}
            </h3>
        </div>

        <!-- Content Area (Image & Details) -->
        <div 
            class="transition-all duration-700 ease-in-out flex flex-col items-center gap-6"
            :style="contentStyle"
        >
            <!-- Image Center (16:9) -->
            <div 
                class="w-full aspect-video rounded-xl shadow-2xl transition-all duration-700 transform flex items-center justify-center overflow-hidden"
                :class="[isExpanded ? 'scale-100 opacity-100' : 'scale-75 opacity-0']"
            >
                <img :src="image" :alt="title" class="w-full h-full object-cover" />
            </div>

            <!-- Description -->
            <p 
                class="text-gray-300 text-center text-sm leading-relaxed transition-opacity duration-500 px-2"
                :class="isExpanded ? 'opacity-100' : 'opacity-0'"
            >
                {{ description }}
            </p>

            <!-- Chips Bottom -->
            <div 
                class="flex flex-wrap justify-center gap-2 transition-all duration-500 delay-100"
                :class="isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
            >
                <Tag v-for="tag in tags" :key="tag" class="text-xs">{{ tag }}</Tag>
            </div>

            <!-- Links -->
            <div v-if="isExpanded" class="flex flex-col items-center gap-4 mt-2">
                <a 
                    :href="liveSite" 
                    target="_blank"
                    class="text-accent underline underline-offset-8 text-sm font-medium"
                >
                    Visit Live Project
                </a>
                <router-link 
                    :to="'/project/' + slug"
                    class="px-8 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest"
                >
                    Read More
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Tag from "@/components/common/Tag.vue";

export default {
    name: "ProjectCardMobile",
    components: {
        Tag
    },
    props: {
        title: String,
        description: String,
        tags: Array,
        liveSite: String,
        imageColor: String,
        image: String,
        slug: String,
        isExpanded: Boolean
    },
    computed: {
        contentStyle() {
            return {
                maxHeight: this.isExpanded ? '1000px' : '0px',
                opacity: this.isExpanded ? '1' : '0',
                marginTop: this.isExpanded ? '1.5rem' : '0px'
            };
        }
    }
}
</script>

<style scoped>
.project-card-mobile {
    min-height: 80px;
}
.text-accent {
    color: var(--color-primary, #0D8ABC);
}
</style>

<template>
    <div
        class="relative flex flex-col lg:flex-row justify-between items-center cursor-pointer py-8 h-96 lg:h-48"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        @mousemove="handleMouseMove">
        <div class="grid items-center pl-4">
            <!-- Title -->
            <Transition
                leave-active-class="transition duration-300 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
                enter-active-class="transition duration-500 ease-out delay-300"
                enter-from-class="opacity-0 -translate-y-8 translate-x-4"
                enter-to-class="opacity-100 translate-y-0 translate-x-0">
                <div
                    v-show="!isHovered"
                    class="font-bold text-7xl z-10 text-gray-500 col-start-1 row-start-1">
                    {{ title }}
                </div>
            </Transition>

            <!-- Hovered Title -->
            <Transition
                enter-active-class="transition duration-500 ease-out"
                enter-from-class="opacity-0 translate-y-8 -translate-x-4"
                enter-to-class="opacity-100 translate-y-0 translate-x-0"
                leave-active-class="transition duration-300 ease-in"
                leave-from-class="opacity-100 translate-y-0 translate-x-0"
                leave-to-class="opacity-0 translate-y-8 -translate-x-4">
                <div
                    v-show="isHovered"
                    class="font-bold text-8xl z-10 text-white col-start-1 row-start-1">
                    {{ title }}
                </div>
            </Transition>
        </div>

        <!-- Cursor Following Div -->
        <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 scale-50"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-50">
            <div 
                v-show="isHovered"
                class="cursor-follower w-[400px] z-0 aspect-video absolute pointer-events-none rounded-lg shadow-2xl overflow-hidden"
                :style="{
                    left: `${mouseX}px`,
                    top: `${mouseY}px`,
                    transform: 'translate(-50%, -50%)',
                }"
            >
                <video
                    v-if="image && (image.endsWith('.mov') || image.endsWith('.mp4'))"
                    :src="image"
                    autoplay
                    loop
                    muted
                    playsinline
                    class="w-full h-full object-cover"
                ></video>
                <img v-else :src="image" :alt="title" class="w-full h-full object-cover" />
            </div>
        </Transition>

        <!-- Details -->
        <div class="flex flex-col z-10 gap-2 text-left items-start justify-start pr-4">
            <Transition
                enter-active-class="transition-all duration-500 ease-out delay-100"
                enter-from-class="opacity-0 translate-x-10"
                enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 translate-x-10"
            >
                <div v-show="isHovered" class="text-neutral-400 z-10 text-lg max-w-[450px] break-words">
                    {{ description }}
                </div>
            </Transition>

            <Transition
                enter-active-class="transition-all duration-500 ease-out"
                enter-from-class="opacity-0 translate-x-10"
                enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 translate-x-10"
            >
                <div v-show="isHovered" class="flex flex-row z-10 gap-2">
                    <Tag v-for="tag in tags" :key="tag">{{ tag }}</Tag>
                </div>
            </Transition>

            <Transition
                enter-active-class="transition-all duration-500 ease-out delay-200"
                enter-from-class="opacity-0 translate-x-10"
                enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 translate-x-10"
            >
                <div v-show="isHovered" class="flex items-center gap-6 mt-4 z-10">
                    <a 
                        :href="liveSite" 
                        target="_blank"
                        class="text-lg underline decoration-1 underline-offset-4 hover:text-white transition-colors"
                    >
                        Visit Live Project
                    </a>
                    <router-link 
                        :to="'/project/' + slug"
                        class="flex items-center gap-2 group/btn px-6 py-2 rounded-full border border-zinc-700 hover:border-[#E2C7CF] transition-all duration-300 pointer-events-auto"
                    >
                        <span class="text-sm font-bold uppercase tracking-widest group-hover/btn:text-[#E2C7CF]">Read More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover/btn:translate-x-1 transition-transform group-hover/btn:stroke-[#E2C7CF]">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </router-link>
                </div>
            </Transition>
        </div>
    </div>
</template>
<script>
    import Tag from "@/components/common/Tag.vue";
export default {
    name: "ProjectCard",
    components: {
        Tag,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tags: {
            type: Array,
            required: true,
        },
        liveSite: {
            type: String,
            required: true,
        },
        imageColor: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            isHovered: false,
            mouseX: 0,
            mouseY: 0,
            targetX: 0,
            targetY: 0,
            rafId: null
        };
    },
    mounted() {
        // Initialize at center so it originates from center instead of top-left (0,0)
        const rect = this.$el.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        this.mouseX = centerX;
        this.mouseY = centerY;
        this.targetX = centerX;
        this.targetY = centerY;

        this.animate();
    },
    beforeUnmount() {
        if (this.rafId) cancelAnimationFrame(this.rafId);
    },
    methods: {
        handleMouseMove(event) {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Relaxed dampening (0.4) allows more movement while keeping it centered
            const dampening = 0.4;
            
            this.targetX = centerX + (x - centerX) * dampening;
            this.targetY = centerY + (y - centerY) * dampening;
        },
        animate() {
            // Smooth lerp: current = current + (target - current) * factor
            // 0.1 gives a nice weighty feel
            const factor = 0.1;
            
            this.mouseX += (this.targetX - this.mouseX) * factor;
            this.mouseY += (this.targetY - this.mouseY) * factor;
            
            this.rafId = requestAnimationFrame(this.animate);
        }
    }
}
</script>

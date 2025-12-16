<template>
    <div
        class="relative flex flex-row justify-between items-center cursor-pointer py-8 h-48"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        @mousemove="handleMouseMove">
        <div class="grid items-center pl-4">
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
                class="cursor-follower w-[400px] z-0 aspect-video absolute pointer-events-none rounded-lg shadow-2xl"
                :class="imageColor"
                :style="{
                    left: `${mouseX}px`,
                    top: `${mouseY}px`,
                    transform: 'translate(-50%, -50%)'
                }"
            ></div>
        </Transition>

        <div class="flex flex-col gap-2 text-right justify-start">
            <Transition
                enter-active-class="transition-all duration-500 ease-out delay-100"
                enter-from-class="opacity-0 translate-x-10"
                enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 translate-x-10"
            >
                <div v-show="isHovered" class="text-neutral-400 z-10 text-lg">
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
                <div v-show="isHovered" class="flex flex-row gap-2">
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
                <div v-show="isHovered" class="flex justify-start text-lg underline decoration-1 underline-offset-4">
                    {{ liveSite }}
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

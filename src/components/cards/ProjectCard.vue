<template>
    <div
        class="relative flex flex-row justify-between items-center cursor-pointer py-8 h-48"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        @mousemove="handleMouseMove"
    >
        <div class="grid items-center pl-4">
            <Transition
                leave-active-class="transition duration-300 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
                enter-active-class="transition duration-500 ease-out delay-300"
                enter-from-class="opacity-0 -translate-y-8 translate-x-4"
                enter-to-class="opacity-100 translate-y-0 translate-x-0"
            >
                <div
                    v-show="!isHovered"
                    class="font-bold text-7xl text-gray-500 col-start-1 row-start-1"
                >
                    {{ title }}
                </div>
            </Transition>

            <Transition
                enter-active-class="transition duration-500 ease-out"
                enter-from-class="opacity-0 translate-y-8 -translate-x-4"
                enter-to-class="opacity-100 translate-y-0 translate-x-0"
                leave-active-class="transition duration-300 ease-in"
                leave-from-class="opacity-100 translate-y-0 translate-x-0"
                leave-to-class="opacity-0 translate-y-8 -translate-x-4"
            >
                <div
                    v-show="isHovered"
                    class="font-bold text-8xl text-white col-start-1 row-start-1"
                >
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
            leave-to-class="opacity-0 scale-50"
        >
            <div 
                v-show="isHovered"
                class="cursor-follower w-[400px] h-[250px] absolute pointer-events-none rounded-lg"
                :class="imageColor"
                :style="{
                    left: `${mouseX}px`,
                    top: `${mouseY}px`,
                    transform: 'translate(-50%, -50%)',
                    transition: 'left 0.2s ease-out, top 0.2s ease-out'
                }"
            >
            </div>
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
                <div v-show="isHovered" class="text-neutral-400 text-lg">
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
    data() {
        return {
            isHovered: false,
            mouseX: 0,
            mouseY: 0,
        };
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
    methods: {
        handleMouseMove(event) {
            // Get mouse position relative to the card
            const rect = event.currentTarget.getBoundingClientRect();
            this.mouseX = event.clientX - rect.left;
            this.mouseY = event.clientY - rect.top;
        }
    }
}
</script>

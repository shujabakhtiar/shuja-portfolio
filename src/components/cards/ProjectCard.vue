<template>
    <div
        class="relative flex flex-row justify-between items-center cursor-pointer py-8 h-48"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
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
                    Lumora
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
                    Lumora
                </div>
            </Transition>
        </div>

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
                    <span> React js </span> •
                    <span> Node js </span> •
                    <span> MongoDB </span>
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
                    <Tag>UI UX</Tag>
                    <Tag>Full Stack</Tag>
                    <Tag>2023</Tag>
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
                    Live site
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
        };
    },
}
</script>

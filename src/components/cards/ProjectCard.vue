<template>
    <div
        class="flex flex-row justify-between items-center cursor-pointer py-8 perspective-[1000px]"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <div
            class="font-bold transition-all duration-500 ease-in-out origin-center"
            :class="isHovered ? 'text-8xl text-white [transform:rotateX(360deg)]' : 'text-7xl text-gray-500'"
        >
            Lumora
        </div>

        <div class="flex flex-col gap-2 text-right justify-start">
            <Transition
                enter-active-class="transition-all duration-500 ease-out delay-100"
                enter-from-class="opacity-0 translate-x-10"
                enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition-all duration-200 ease-in"
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
                leave-active-class="transition-all duration-200 ease-in"
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
                leave-active-class="transition-all duration-200 ease-in"
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

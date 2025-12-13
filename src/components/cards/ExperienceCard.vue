<template>
    <div class="flex flex-col gap-2 w-full">
        <h3 class="text-4xl font-bold">{{ role }}</h3>
        <div class="flex flex-row justify-between items-center text-gray-400 text-xl">
            <span>{{ company }}</span>
            <span>{{ duration }}</span>
        </div>
        <p class="text-gray-300 mt-2">{{ description }}</p>
    </div>
</template>
<script>
export default {
    name: "ExperienceCard",
    props: {
        role: String,
        company: String,
        duration: String,
        description: String,
    },
}
</script>

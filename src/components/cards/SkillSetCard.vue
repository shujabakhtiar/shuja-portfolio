<template>
    <div class="flex flex-col gap-6">
        <h2 class="text-6xl font-bold">
            {{ title }}
        </h2>
        <p class="text-gray-400 text-xl">{{ description }}</p>
        <div class="flex flex-row gap-6" v-for="skill in skills">
          <div>{{ skill.id }}</div>
          <div>{{ skill.name }}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SkillSetCard",
    props: {
        title: String,
        description: String,
        skills: Array,
    },
}
</script>
<template>
    <nav class="fixed top-0 left-0 z-50 w-screen h-16 p-4 flex items-center justify-end">
        <ul class="flex flex-row  gap-2">
            <li>Home</li>
            <li>Projects</li>
            <li>Experience</li>
            <li>Skills</li>
            <li>Contact</li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: "TopNavBar",
}
</script>
<style scoped>
li {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #000;
    padding: 10px 15px;
}

li:hover {
    color: #0e08086d;
}
</style>
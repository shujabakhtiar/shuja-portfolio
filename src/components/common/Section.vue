<template>
    <div class="w-screen min-h-screen section text-white about-section"
    :class="borderRadiusOnTop ? 'rounded-t-3xl' : '', borderRadiusOnBottom ? 'rounded-b-3xl' : ''">
    <div class="flex flex-col py-16 px-10 gap-16">
      <div class="text-8xl font-bold">{{ title }}</div>
      <slot name="default"></slot>
    </div>
    </div>
</template>
<script>
export default {
    name: "Section",
    props: {
        title: {
            type: String,
            required: true
        },
        borderRadiusOnTop: {
            type: Boolean,
            default: false
        },
        borderRadiusOnBottom: {
            type: Boolean,
            default: false
        },
    }
}
</script>   
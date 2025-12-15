<template>
    <div class="w-screen min-h-screen section text-white about-section"
    :class="borderRadiusOnTop ? 'rounded-t-3xl' : '', borderRadiusOnBottom ? 'rounded-b-3xl' : ''">
    <div class="flex flex-col py-16 px-10 gap-16">
      <div class="text-8xl font-bold">{{ title }}</div>
      <div class="grid-gap flex grid-cols-12 sm:justify-end lg:grid">
        <div class="col-span-7 col-start-1 flex flex-col gap-9 sm:col-start-6 sm:flex-row">
          <p class="text-gray-400">{{ subtitle }}</p>
          <div class="w-full max-w-[35ch] text-balance font-medium leading-base">
          <p class="text-gray-500 text-sm">{{ description }}</p>
          </div>
        </div>
      </div>
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
        subtitle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>   
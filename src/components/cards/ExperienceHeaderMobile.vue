<template>
    <div 
        class="experience-header-mobile flex items-center gap-4 transition-all duration-500 ease-out"
        :class="[
            isCompact ? 'py-2' : 'py-6'
        ]"
        :style="{
            backgroundColor: 'var(--bg-section)'
        }"
    >
        <div 
            class="rounded-full overflow-hidden border border-strong bg-neutral-900 p-1 transition-all duration-500 flex-shrink-0"
            :class="isCompact ? 'w-10 h-10' : 'w-12 h-12'"
        >
            <img 
                :src="logo" 
                :alt="company"
                class="w-full h-full object-contain rounded-full"
            />
        </div>

        <div class="flex flex-col flex-1 min-w-0">
            <h3 
                class="font-bold text-white transition-all duration-500 truncate"
                :class="isCompact ? 'text-lg' : 'text-xl'"
            >
                {{ role }}
            </h3>
            <div 
                class="flex flex-col transition-all duration-500"
                :class="isCompact ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100 mt-1'"
            >
                <p class="text-gray-400 text-sm truncate">{{ company }}</p>
                <p class="text-accent text-xs font-medium mt-1">{{ duration }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ExperienceHeaderMobile",
    props: {
        role: { type: String, required: true },
        company: { type: String, required: true },
        duration: { type: String, required: true },
        logo: { type: String, required: true },
        isCompact: { type: Boolean, default: false }
    }
}
</script>

<style scoped>
.text-accent {
    color: var(--color-primary, #0D8ABC);
}
</style>

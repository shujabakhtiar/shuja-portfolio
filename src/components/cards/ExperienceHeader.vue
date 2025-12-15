<template>
    <div 
        class="experience-header flex w-full items-start gap-4 transition-all duration-700 ease-out"
        :class="[
            isLeft ? 'flex-row' : 'flex-row-reverse',
            isCompact ? 'py-2' : 'py-6'
        ]"
        :style="{
            background: 'linear-gradient(90deg, var(--bg-section) calc(50% - 1px), transparent calc(50% - 1px), transparent calc(50% + 1px), var(--bg-section) calc(50% + 1px))'
        }"
    >
        <!-- Content Header (Role & Company) -->
        <div :class="[
            'flex flex-col gap-1 flex-1 transition-all duration-700',
            isLeft ? 'pr-8 items-start text-left' : 'pl-8 items-end text-right'
        ]">
            <h3 :class="[
                'font-bold text-white leading-tight transition-all duration-700',
                isLeft ? 'origin-left' : 'origin-right',
                isCompact ? 'text-2xl' : 'text-4xl md:text-5xl'
            ]">
                {{ role }}
            </h3>
            <p :class="[
                'text-gray-400 font-light transition-all duration-700',
                isCompact ? 'text-sm mt-0' : 'text-xl mt-2'
            ]">
                {{ company }}
            </p>
        </div>

        <!-- Logo -->
        <div class="relative flex-shrink-0">
            <div :class="[
                'rounded-full overflow-hidden border-2 border-orange-500/20 bg-neutral-900 p-1 transition-all duration-700',
                isCompact ? 'w-12 h-12' : 'w-16 h-16'
            ]">
                <img 
                    :src="logo" 
                    :alt="company"
                    class="w-full h-full object-contain rounded-full"
                />
            </div>
            <!-- Connector Line Point -->
            <div 
                class="absolute top-1/2 w-4 h-4 rounded-full bg-orange-500 transform -translate-y-1/2"
                :class="isLeft ? '-right-10' : '-left-10'"
            >
                <div class="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-20"></div>
            </div>
        </div>

        <!-- Date -->
        <div :class="[
            'flex-1 transition-all duration-700',
            isLeft ? 'pl-8 text-left' : 'pr-8 text-right',
            isCompact ? 'pt-1' : 'pt-2'
        ]">
            <span :class="[
                'text-white font-medium tracking-wide transition-all duration-700',
                isCompact ? 'text-lg' : 'text-2xl'
            ]">
                {{ duration }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "ExperienceHeader",
    props: {
        role: { type: String, required: true },
        company: { type: String, required: true },
        duration: { type: String, required: true },
        logo: { type: String, required: true },
        isLeft: { type: Boolean, default: true },
        isCompact: { type: Boolean, default: false }
    }
}
</script>

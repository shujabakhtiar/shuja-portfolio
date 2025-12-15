<template>
    <div 
    class="w-screen h-screen hero-theme overflow-hidden transition-all duration-700 ease-out"
    :class="isMounted ? 'translate-y-0' : 'translate-y-full'"
    :style="{ borderRadius: isMounted ? '0' : '50% 50% 0 0 / 100% 100% 0 0' }">
        <div class="w-full h-full flex flex-col items-center justify-center px-5">
            <div>
                Contact Me Box
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ContactSection"
    }
</script>
    
<template>
 <div 
    class="w-screen h-screen hero-theme overflow-hidden transition-all duration-700 ease-out"
    :class="isMounted ? 'translate-y-0' : 'translate-y-full'"
    :style="{ borderRadius: isMounted ? '0' : '50% 50% 0 0 / 100% 100% 0 0' }"
 >
    <div class="w-full h-full flex flex-col items-center justify-center px-5">
      <div class="mb-12 w-full justify-start">
        <div class="w-full lg:w-[50%]">
            <h1 class="text-hero-title font-hero uppercase text-black [text-shadow:2px_2px_0_#000]">
            <span 
                v-for="(char, index) in $t('hero.role').split('')" 
                :key="index"
                class="inline-block overflow-hidden align-bottom"
            >
                <span 
                    class="inline-block transition-transform duration-500 ease-out"
                    :class="showContent ? 'translate-y-0' : 'translate-y-full'"
                    :style="{ transitionDelay: `${index * 30}ms` }"
                >
                    {{ char === ' ' ? '&nbsp;' : char }}
                </span>
            </span>
        </h1>
        </div>
      </div>
      <div class="absolute left-0 bottom-[60px] right-0 flex 
                items-end lg:items-start justify-between px-[30px] lg:px-[60px]">
        <div class="h-[80px] w-[80px] xl:h-[100px] xl:w-[100px] 2xl:w-[125px] 2xl:h-[125px] flex items-center justify-center relative">
            <div class="animate-[spin_10s_linear_infinite]">
                <svg height="100" width="100">
                    <path id="ellipse-id-r2-" style="fill: none;" d="M0 50a50 50 0 1 0 100 0a50 50 0 1 0 -100 0"></path>
                    <text style="font-size: 11px; letter-spacing: 6.5px; fill: #000;">
                        <textPath xlink:href="#ellipse-id-r2-" startOffset="0">
                            <tspan>SCROLL DOWN SCROLL DOWN</tspan>
                        </textPath>
                    </text>
                </svg>
            </div>
            <div class="absolute inset-0 flex items-center justify-center">
                 <img src="/icons/asterisk.svg" alt="asterisk" class="w-4 h-4 object-contain">
            </div>
        </div>
        <div 
            class="flex items-center justify-center text-black justify-self-end gap-4 transition-all duration-700 ease-out delay-700"
            :class="showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
        >
          <div class="block lg:hidden">
            <div class="flex gap-4">
                <img src="/icons/linkedin.svg" alt="LinkedIn" class="w-6 h-6" />
                <img src="/icons/github.svg" alt="GitHub" class="w-6 h-6" />
            </div>
          </div>
          <div class="hidden lg:flex gap-4">
              <p class="font-body-strong tracking-tight-xl text-black">{{ $t('hero.links.linkedin') }}</p>
              <p class="font-body-strong tracking-tight-xl text-black">{{ $t('hero.links.github') }}</p>
          </div>
        </div>
      </div>
    </div>
 </div>
</template>
<script>
export default {
    name: "HeroSection",
    data() {
        return {
            isMounted: false,
            showContent: false,
        };
    },
    mounted() {
        setTimeout(() => {
            this.isMounted = true;
            setTimeout(() => {
                this.showContent = true;
            }, 700);
        }, 100);
    }
}
</script>


<style scoped>
  .hero-theme {
    background-color: #e8e8e2;
  }
</style>

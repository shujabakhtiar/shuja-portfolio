<template>
 <div 
    class="w-screen h-screen hero-theme overflow-hidden transition-all duration-700 ease-out"
    :class="isMounted ? 'translate-y-0' : 'translate-y-full'"
    :style="{ borderRadius: isMounted ? '0' : '50% 50% 0 0 / 100% 100% 0 0' }"
 >
    <div class="w-full h-full flex flex-col items-center justify-center px-5">
      <div class="mb-12 text-center">
        <h1>
            <span 
                v-for="(char, index) in $t('hero.name').split('')" 
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
        <p class="text-2xl flex justify-center">
            <span 
                v-for="(char, index) in $t('hero.role').split('')" 
                :key="index"
                class="inline-block overflow-hidden align-bottom"
            >
                <span 
                    class="inline-block transition-transform duration-500 ease-out"
                    :class="showContent ? 'translate-y-0' : 'translate-y-full'"
                    :style="{ transitionDelay: `${(index * 20) + 300}ms` }"
                >
                    {{ char === ' ' ? '&nbsp;' : char }}
                </span>
            </span>
        </p>
      </div>
      <div class="grid grid-cols-3 w-full items-center">
        <div class="hero-container justify-self-start text-left overflow-hidden">
            <p 
                class="transition-transform duration-700 ease-out delay-700"
                :class="showContent ? 'translate-y-0' : 'translate-y-full'"
            >
              {{ $t('hero.description') }}
            </p>
        </div>
        <div 
            class="hero-container justify-self-center transition-all duration-700 ease-out delay-700"
            :class="showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'"
        >
            Image
        </div>
        <div 
            class="hero-container justify-self-end gap-4 transition-all duration-700 ease-out delay-700"
            :class="showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
        >
          <p>{{ $t('hero.links.linkedin') }}</p>
          <p>{{ $t('hero.links.github') }}</p>
          <p>{{ $t('hero.links.twitter') }}</p>
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
  h1 {
    text-transform: uppercase;
    font-size: 10rem;
    font-weight: 1000;
    letter-spacing: -0.02em;
    color: #000;
    text-shadow: 2px 2px 0 #000;
  }

  p {
    font-weight: 500;
    letter-spacing: -0.02em;
    color: #000;
  }

  .hero-container {
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

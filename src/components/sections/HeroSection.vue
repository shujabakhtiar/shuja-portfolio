<template>
 <div class="w-screen h-screen">
    <div class="w-full h-full flex flex-col items-center justify-center px-5">
      <div class="mb-12">
        <h1 class="text-9xl">{{ $t('hero.name') }}</h1>
        <p class="text-2xl flex-end">{{ $t('hero.role') }}</p>
      </div>
      <div class="grid grid-cols-3 w-full items-center">
        <p class="hero-container justify-self-start text-left">
          {{ $t('hero.description') }}
        </p>
        <div class="hero-container justify-self-center">Image</div>
        <div class="hero-container justify-self-end gap-4">
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
}
</script>

<style scoped>
  h1 {
    font-weight: 900;
    letter-spacing: -0.02em;
    color: #000;
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

<template>
   <div class="w-screen min-h-screen bg-black text-white about-section">
    <div class="flex flex-col py-16 px-10 gap-16">
      <div class="text-8xl font-bold">{{ $t('experience.title') }}</div>
      <div class="flex justify-end">
        <div class="flex flex-row gap-2 max-w-[40%]">
          <p>{{ $t('experience.label') }}</p>
          <div>
          <p>{{ $t('experience.description') }}</p>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="flex flex-col gap-12 py-6" v-for="exp in $tm('experience.list')" :key="exp.id">
            <hr class="w-full">
            <div class="grid grid-cols-[40%_60%]">
                <div class="text-6xl font-bold">
                ({{ String(exp.id).padStart(2, '0') }})
                </div>
                <ExperienceCard
                :role="exp.role"
                :company="exp.company"
                :duration="exp.duration"
                :description="exp.description"/>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ExperienceCard from "@/components/cards/ExperienceCard.vue";

export default {
    name: "ExperienceSection",
    components: {
        ExperienceCard,
    },
}
</script>
<template>
   <Section :title="$t('experience.title')">
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
   </Section>
</template>
<script>
import ExperienceCard from "@/components/cards/ExperienceCard.vue";
import Section from "@/components/common/Section.vue";

export default {
    name: "ExperienceSection",
    components: {
        ExperienceCard,
        Section,
    },
}
</script>
<template>
  <Section :title="$t('about.title')" :border-radius-on-top="true">
      <div class="flex justify-end">
        <div class="flex flex-row gap-2 max-w-[40%]">
          <p>{{ $t('about.services') }}</p>
          <div>
          <p>{{ $t('about.description') }}</p>
          </div>
        </div>
      </div>
      <div v-if="false" class="grid grid-cols-[40%_60%] gap-12" v-for="skillSet in $tm('about.skillSet')">
        <div class="text-6xl font-bold">
          ({{ String(skillSet.id).padStart(2, '0') }})
        </div>
          <SkillSetCard  
        :key="skillSet.id"
         :title="skillSet.title" 
         :description="skillSet.description" 
         :skills="skillSet.skills"/>
      </div>
  </Section>
</template>
<script>
  import SkillSetCard from "@/components/cards/SkillSetCard.vue";
  import Section from "@/components/common/Section.vue";

export default {
    name: "AboutSection",
    components: {
      SkillSetCard,
      Section,
    },
}
</script>


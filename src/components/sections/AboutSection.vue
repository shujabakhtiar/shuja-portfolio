<template>
  <Section :id="id" :title="$t('about.title')" :border-radius-on-top="true" :subtitle="$t('about.services')" :description="$t('about.description')">
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
    props: {
        id: {
            type: String,
            default: ""
        }
    },
}
</script>


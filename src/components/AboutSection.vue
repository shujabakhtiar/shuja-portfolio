<template>
 <div class="w-screen h-screen bg-black text-white about-section rounded-t-3xl">
    <div class="flex flex-col py-16 px-10 gap-16">
      <div class="text-8xl font-bold">{{ $t('about.title') }}</div>
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
    </div>
  </div>

</template>
<script>
  import SkillSetCard from "@/components/cards/SkillSetCard.vue";

export default {
    name: "AboutSection",
    components: {
      SkillSetCard,
    },
}
</script>



<template>
 <div class="w-screen  bg-black text-white about-section rounded-t-3xl">
    <div class="flex flex-col py-16 px-10 gap-16">
      <div class="text-8xl font-bold">Bit About me/</div>
      <div class="flex justify-end">
        <div class="flex flex-row gap-2 max-w-[40%]">
          <p>(Services)</p>
          <div>
          <p>I specialize in building full-stack web applications that are fast, 
            reliable, and user-friendly. With a solid foundation in both frontend 
            and backend technologies, I help bring ideas to life whether it's for a business, 
            a startup, or a product team.</p>
          </div>
        </div>
      </div>
      <hr/>
      <div class="grid grid-cols-[40%_60%] gap-12" v-for="skillSet in skillSet">
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
  import { skillSet } from "@/data/skills.js";

export default {
    name: "AboutSection",
    components: {
      SkillSetCard,
    },
    data() {
      return {
        skillSet: skillSet
      };
    },
}
</script>



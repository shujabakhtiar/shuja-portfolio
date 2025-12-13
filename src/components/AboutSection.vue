<template>
 <div class="w-screen h-screen bg-black text-white about-section rounded-t-3xl">
    <div class="flex flex-col py-16 px-10 gap-16">
      <div class="text-8xl font-bold">Bit About me/</div>
      <div class="flex justify-end">
        <div class="flex flex-row gap-2 max-w-[40%]">
          <p>(Services)</p>
          <div>
          <p>A Developer with a knack for creating awesome user experiences. Armed with a master's in Cloud Computing from Newcastle University,
            I thrive in both building responsive web apps using React.js/Vue.js and navigating the cloud with AWS and Azure.
            Transforming my creativity and knowledge into captivating and efficient digital solutions is my passion. 
            I am excited to continue this journey of digital excellence in this ever-evolving digital landscape.</p>
          </div>
        </div>
      </div>
      <hr/>
      <div v-if="false" class="grid grid-cols-[40%_60%] gap-12" v-for="skillSet in skillSet">
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



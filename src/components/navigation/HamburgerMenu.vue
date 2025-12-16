<template>
    <div>
        <div class="fixed top-4 right-4 z-50">
            <HamburgerButton :active="isOpen" @toggle="toggleMenu" />
        </div>
        
        <div 
            class="fixed inset-0 z-40 transition-transform duration-500 ease-in-out bg-[#E8E8E2]/95 backdrop-blur-sm flex items-center justify-center"
            :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
        >
            <div class="flex flex-col items-center gap-8">
                <a 
                    v-for="option in navOptions" 
                    :key="option.label"
                    :href="option.link"
                    class="text-6xl font-black uppercase tracking-tighter cursor-pointer relative group text-black transition-all duration-300 hover:text-black/70"
                    @click="toggleMenu(false)"
                >
                    {{ option.label }}
                    <span class="absolute left-0 bottom-0 w-0 h-[4px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                
                <div class="mt-12 text-sm font-mono text-gray-500 flex flex-col items-center gap-2">
                     <p>EMAIL ADDRESS</p>
                     <a href="mailto:contact@shujabakhtiar.com" class="text-black hover:underline mb-4">hello@shuzadev.com</a>
                     
                     <div class="flex gap-4 uppercase text-xs font-bold tracking-widest mt-4">
                         <a href="#" class="hover:underline">LinkedIn</a>
                         <a href="#" class="hover:underline">Github</a>
                         <a href="#" class="hover:underline">Twitter</a>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HamburgerButton from '@/components/common/HamburgerButton.vue';

export default {
    name: "HamburgerMenu",
    components: {
        HamburgerButton
    },
    props: {
        navOptions: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleMenu(val) {
            if (typeof val === 'boolean') {
                this.isOpen = val;
            } else {
                this.isOpen = !this.isOpen;
            }
        }
    }
}
</script>
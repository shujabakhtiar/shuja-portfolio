<template>
    <Teleport to="body">
        <div>
            <div class="fixed top-4 right-4 z-[1000]">
                <HamburgerButton :active="isOpen" @toggle="toggleMenu" />
            </div>
            
            <div 
                class="fixed inset-0 z-[999] transition-transform duration-500 ease-in-out bg-black/40 backdrop-blur-sm overflow-y-auto"
                :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
            >
                <div class="min-h-screen w-full flex flex-col items-center justify-center gap-8">
                    <a 
                        v-for="option in navOptions" 
                        :key="option.label"
                        :href="option.link"
                        class="text-6xl font-black uppercase tracking-tighter cursor-pointer relative group text-white transition-all duration-300 hover:text-white/70 text-center"
                        @click="toggleMenu(false)"
                    >
                        {{ option.label }}
                        <span class="absolute left-0 bottom-0 w-0 h-[4px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    
                    <div class="mt-12 text-sm font-mono text-gray-500 flex flex-col items-center gap-2 text-center">
                         <p>EMAIL ADDRESS</p>
                         <a href="mailto:contact@shujabakhtiar.com" class="text-white hover:underline mb-4">hello@shuzadev.com</a>
                         
                         <div class="flex gap-4 uppercase text-xs font-bold tracking-widest mt-4">
                             <a href="#" class="hover:underline">LinkedIn</a>
                             <a href="#" class="hover:underline">Github</a>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
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
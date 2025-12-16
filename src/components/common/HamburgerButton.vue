<template>
  <button
    class="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gray-200/50 hover:bg-gray-300/80 transition-colors duration-500 ease-out backdrop-blur-sm"
    aria-label="Toggle menu"
    @click="toggle"
  >
    <span class="bar" :class="{ active: isOpen }"></span>
    <span class="bar middle" :class="{ active: isOpen }"></span>
    <span class="bar" :class="{ active: isOpen }"></span>
  </button>
</template>

<script>
export default {
  name: "HamburgerButton",
  emits: ["toggle"],
  data() {
    return {
      isOpen: false
    };
  },
  props: {
    active: {
        type: Boolean,
        default: false
    }
  },
  watch: {
    active(val) {
        this.isOpen = val;
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      this.$emit("toggle", this.isOpen);
    }
  }
};
</script>

<style scoped>
.bar {
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: #000;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

/* Positioning */
.bar:nth-child(1) {
  transform: translateY(-6px);
}
.bar:nth-child(2) {
  transform: translateY(0);
}
.bar:nth-child(3) {
  transform: translateY(6px);
}

/* Active state */
.bar.active:nth-child(1) {
  transform: translateY(0) rotate(45deg);
}
.bar.active.middle {
  opacity: 0;
}
.bar.active:nth-child(3) {
  transform: translateY(0) rotate(-45deg);
}
</style>

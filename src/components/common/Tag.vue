<template>
  <div
    :class="[
      'inline-flex items-center rounded-3xl px-3 py-1 text-sm font-medium',
      colorClasses,
      customClasses
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    color: {
      type: String,
      default: "gray",
    },
    customClasses: {
      type: String,
      default: "",
    },
  },
  computed: {
    colorClasses() {
      const colors = {
        gray: "border border-gray-400 text-white",
        blue: "border border-blue-400 text-blue-800",
        green: "border border-green-400 text-green-800",
        red: "border border-red-400 text-red-800",
        yellow: "border border-yellow-400 text-yellow-800",
        purple: "border border-purple-400 text-purple-800",
      };
      return colors[this.color] || colors.gray;
    },
  },
};
</script>

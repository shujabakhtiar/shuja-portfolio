<template>
  <div class="relative">
    <select
      v-model="locale"
      @change="updateLocale"
      class="bg-transparent text-black border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500 cursor-pointer"
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="de">DE</option>
      <option value="hi">HI</option>
    </select>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const updateLocale = (event) => {
  const newLocale = event.target.value;
  locale.value = newLocale;
  localStorage.setItem('user-locale', newLocale);
};
</script>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';
const { theme, toggleTheme } = useTheme();
</script>

<template>
  <button class="theme-toggle" type="button" @click="toggleTheme">
    {{ theme === 'light' ? '☀️' : '🌙' }}
  </button>
</template>

<style scoped>
.theme-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
}
</style>

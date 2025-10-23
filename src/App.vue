<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue';
import HtmlForm from '@/components/HtmlForm.vue';
</script>

<template>
  <ThemeToggle />
  <div class="container">
    <h1 class="title">Создание HTML страницы</h1>
    <HtmlForm />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 600px;
  margin: 80px auto;
  padding: 30px 20px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: var(--color-surface);
}

.title {
  text-align: center;
}
</style>

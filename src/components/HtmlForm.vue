<script setup lang="ts">
import { useFormStorage } from '@/composables/useFormStorage';
import { useDownloadHtml } from '@/composables/useDownloadHtml';

const { title, description, h1Text, paragraph } = useFormStorage();
const { downloadHtml } = useDownloadHtml();

function onSubmit() {
  downloadHtml(title.value, description.value, h1Text.value, paragraph.value);
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="form">
    <label for="title">Title</label>
    <input id="title" v-model.trim="title" type="text" placeholder="Введите title" required />

    <label for="description">Description</label>
    <input
      id="description"
      v-model.trim="description"
      type="text"
      placeholder="Введите description"
      required
    />

    <label for="h1Text">Заголовок (H1)</label>
    <textarea
      id="h1Text"
      v-model.trim="h1Text"
      rows="3"
      placeholder="Введите H1"
      required
    ></textarea>

    <label for="paragraph">Абзац (P)</label>
    <textarea
      id="paragraph"
      v-model.trim="paragraph"
      rows="6"
      placeholder="Введите абзац"
      required
    ></textarea>

    <button type="submit">Скачать HTML</button>
  </form>
</template>

<style scoped>
.form {
  font-size: 18px;
}

label {
  font-weight: bold;
  margin-top: 10px;
  display: block;
}

input,
textarea {
  width: 100%;
  font-family: inherit;
  margin: 5px 0 10px;
  padding: 12px 12px;
  resize: none;
  font-size: 16px;
  background-color: var(--color-input-bg);
  color: var(--color-input-fg);
  border-radius: 6px;
  border: none;
  outline: none;
}

input:focus,
textarea:focus {
  outline: 1px solid var(--color-border);
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background-color: var(--color-primary-hover);
}
</style>

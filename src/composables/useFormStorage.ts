import { ref, watch, onMounted } from 'vue';

interface FormData {
  title: string;
  description: string;
  h1Text: string;
  paragraph: string;
}

const STORAGE_KEY = 'data-form';

export function useFormStorage() {
  const title = ref('');
  const description = ref('');
  const h1Text = ref('');
  const paragraph = ref('');

  const saveData = () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        title: title.value,
        description: description.value,
        h1Text: h1Text.value,
        paragraph: paragraph.value,
      }),
    );
  };

  const loadData = () => {
    const dataFormLS = localStorage.getItem(STORAGE_KEY);
    if (dataFormLS) {
      try {
        const data: FormData = JSON.parse(dataFormLS);
        title.value = data.title || '';
        description.value = data.description || '';
        h1Text.value = data.h1Text || '';
        paragraph.value = data.paragraph || '';
      } catch (error) {
        console.log(error);
      }
    }
  };

  watch([title, description, h1Text, paragraph], saveData, { deep: true });

  onMounted(loadData);

  return { title, description, h1Text, paragraph };
}

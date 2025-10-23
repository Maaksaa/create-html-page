import { ref, onMounted } from 'vue';

const THEME_KEY = 'theme-mode';

export function useTheme() {
  const theme = ref<'light' | 'dark'>(
    localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark',
  );

  const applyTheme = (mode: 'light' | 'dark') => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem(THEME_KEY, mode);
  };

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    applyTheme(theme.value);
  };

  onMounted(() => applyTheme(theme.value));

  return { theme, toggleTheme };
}

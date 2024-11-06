import { useEffect } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return (
    savedTheme ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')
  );
};

const useThemeStore = create(
  persist(
    (set) => ({
      theme: getInitialTheme(),
      setTheme: (theme) => set({ theme }),
    }),
    { name: 'theme' },
  ),
);

const useTheme = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const themes = {
      light: { dark: true, light: false },
      dark: { dark: false, light: true },
    };

    ['light', 'dark'].forEach((type) => {
      const link = document.getElementById(`${type}-theme`);
      if (link) link.disabled = themes[theme][type];
    });
  }, [theme]);

  return {
    theme,
    toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
  };
};

export default useTheme;

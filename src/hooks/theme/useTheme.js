import { useState, useEffect } from 'react';

const useTheme = () => {
  // 초기 테마 설정
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    return systemPrefersDark ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // 테마를 적용하는 함수
  const applyTheme = (theme) => {
    const lightThemeLink = document.getElementById('light-theme');
    const darkThemeLink = document.getElementById('dark-theme');

    if (theme === 'dark') {
      darkThemeLink.disabled = false;
      lightThemeLink.disabled = true;
    } else {
      darkThemeLink.disabled = true;
      lightThemeLink.disabled = false;
    }
  };

  // 초기 로드 시 테마 적용
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 시스템 테마 변경 감지
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const systemThemeChangeListener = (e) => {
      const newSystemPrefersDark = e.matches;
      const savedTheme = localStorage.getItem('theme');

      if (!savedTheme) {
        setTheme(newSystemPrefersDark ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', systemThemeChangeListener);

    return () => {
      mediaQuery.removeEventListener('change', systemThemeChangeListener);
    };
  }, []);

  // 테마를 토글하는 함수
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

export default useTheme;

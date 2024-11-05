import styled from 'styled-components';

import useTheme from '@/hooks/theme/useTheme';
import { Toggle } from '../forms/Toggle';

import MoonSVG from '@/assets/icons/themeswitcher/moon.svg';
import SunSVG from '@/assets/icons/themeswitcher/sun.svg';

const ThemeSwitcherWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  border-radius: 100%;

  cursor: pointer;
`;

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeSwitcherWrapper>
      <SunSVG width="30px" height="30px" stroke="gray" />
      <Toggle checked={theme === 'dark'} onChange={toggleTheme} />
      <MoonSVG width="26px" height="26px" fill="gray" />
    </ThemeSwitcherWrapper>
  );
};

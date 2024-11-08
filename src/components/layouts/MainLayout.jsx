import { Outlet } from 'react-router-dom';

import styled from 'styled-components';
import { Navigation } from '@components/navigation/Navigation';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  margin: 0px auto;

  overflow-x: hidden;
`;

export const MainLayout = () => {
  return (
    <>
      <Navigation />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

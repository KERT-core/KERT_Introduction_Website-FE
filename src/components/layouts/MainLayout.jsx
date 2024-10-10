import { Outlet } from 'react-router-dom';

import styled from 'styled-components';
import { Navigation } from '../navigation/Navigation';

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0px auto;
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

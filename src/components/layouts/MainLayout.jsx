import { Outlet, useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { Navigation } from '../navigation/Navigation';

export const Main = styled.main`
  width: 100vw;
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

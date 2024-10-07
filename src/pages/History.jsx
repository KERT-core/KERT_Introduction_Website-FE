import styled from 'styled-components';

import { ShapeBackground } from '../components/display/ShapeBackground';

const BackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  & > div.shape-background {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default function History() {
  return (
    <>
      <BackgroundWrapper>
        <ShapeBackground />
      </BackgroundWrapper>
    </>
  );
}

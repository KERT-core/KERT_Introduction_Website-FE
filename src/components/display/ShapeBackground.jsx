import styled, { keyframes } from 'styled-components';

const rotate = ($startAngle, $direction) => keyframes`
  0% {
    transform: rotate(${$startAngle}deg);
  }
  100% {
    transform: rotate(${$startAngle + ($direction === 'counterclockwise' ? -360 : 360)}deg);
  }
`;

const Container = styled.div.attrs({ className: 'shape-background' })`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max(118vw, 195vh);
  height: max(118vw, 195vh);
`;

const Shape = styled.div`
  position: absolute;
  ${({ $top }) => $top && `top: ${$top};`}
  ${({ $left }) => $left && `left: ${$left};`}
  ${({ $right }) => $right && `right: ${$right};`}
  ${({ $bottom }) => $bottom && `bottom: ${$bottom};`}

  width: ${({ size }) => size || '200px'};
  height: ${({ size }) => size || '200px'};
  border-radius: ${({ radius }) => radius || '20px'};
  background-color: ${({ color }) => color || '#213EA6'};

  opacity: 0.03;
  overflow: hidden;

  animation: ${({ $startAngle, $direction }) => rotate($startAngle, $direction)}
    ${({ speed }) => speed || '75s'} linear infinite;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #ffffff00, #ffffffff);
  }
`;

const shapes = [
  // vw 계산: Figma 픽셀값 / 2265
  // vh 계산: Figma 픽셀값 / 2104
  <Shape
    key={0}
    color="#0019FF"
    size="25vw"
    $top="2.8vw"
    $left="6vw"
    radius="2.6vw"
    $startAngle={15}
  />,
  <Shape
    key={1}
    color="#00FF85"
    size="7.8vw"
    $top="20vw"
    $left="50vw"
    radius="1.7vw"
    $startAngle={-6}
    $direction="counterclockwise"
    speed="90s"
  />,
  <Shape
    key={2}
    color="#00F0FF"
    size="11vw"
    $top="11.5vw"
    $right="14.8vw"
    radius="1.9vw"
    $startAngle={-15}
    speed="80s"
  />,
  <Shape
    key={3}
    color="#7000FF"
    size="23.8vw"
    $top="38.6vw"
    $right="0vw"
    radius="100%"
    $startAngle={-15}
    speed="50s"
  />,
  <Shape
    key={4}
    color="#00F0FF"
    size="5.1vw"
    $top="65vw"
    $right="32vw"
    radius="1vw"
    $startAngle={15}
  />,
  <Shape
    key={5}
    color="#0019FF"
    size="25vw"
    $top="55vw"
    $left="20vw"
    radius="2.6vw"
    $startAngle={-30}
    $direction="counterclockwise"
  />,
  <Shape
    key={6}
    color="#0019FF"
    size="8.1vw"
    $top="48.3vw"
    $right="50.6vw"
    radius="100%"
  />,
];

export const ShapeBackground = () => {
  return <Container>{shapes.map((shape) => shape)}</Container>;
};

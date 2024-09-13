import styled from 'styled-components';

// 사용자 정의 컴포넌트
import { Container } from '../../components/forms/Container';

import { Header } from './Dashboard.styled';
import { BoardColumn } from './Home.styled';

const SkeletonBox = styled(Container)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background: linear-gradient(
    45deg,
    var(--container-primary-background) 35%,
    var(--container-secondary-background) 50%,
    var(--container-primary-background) 65%
  );
  background-size: 400% 400%;
  animation: skeletonAnimation 1.5s infinite ease-in-out;

  @keyframes skeletonAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default function HomeLoading() {
  // SkeletonBox의 크기를 설정합니다.
  const width = '360px';
  const height = '240px';

  return (
    <>
      {/* Home.jsx의 배열을 맞춰야합니다 */}
      <Header>홈</Header>
      {/* 1차적으로 가로 방향 선 배치 후 2차적으로 세로 방향 후 배치 */}
      <BoardColumn>
        <SkeletonBox width={width} height={height} />
        <SkeletonBox width={width} height={height} />
      </BoardColumn>
      <BoardColumn>
        <SkeletonBox width={width} height={height} />
        <SkeletonBox width={width} height={height} />
      </BoardColumn>
      <BoardColumn>
        <SkeletonBox width={width} height={height} />
      </BoardColumn>
    </>
  );
}

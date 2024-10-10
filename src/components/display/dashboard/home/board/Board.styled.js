import styled from 'styled-components';

// 사용자 정의 컴포넌트
import { Container } from '../../../../forms/Container';
import { Span } from '../../../../typograph/Text';

export const BoardContainer = styled(Container).attrs({
  id: 'dashboard-home-container',
})`
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  & > * {
    animation: show 0.75s ease-in-out;
  }

  width: 360px;

  margin: 0;
  padding: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SkeletonBoardContainer = styled(BoardContainer)`
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

export const BoardHeader = styled(Span).attrs({
  id: 'dashboard-container-header',
  $size: 'l',
  $weight: 'bold',
})``;

/**
 * 보드용 반투명 버튼
 */
export const BoardButton = styled.button`
  transition: background-color 0.2s ease-out;

  position: relative;
  cursor: pointer;
  overflow: hidden;

  width: ${(props) => props.width ?? 'fit-content'};
  height: ${(props) => props.height ?? 'fit-content'};
  padding: 12px 20px;
  border-radius: 26px;

  border: none;
  outline: none;
  color: var(--primary-text-color);
  background-color: var(--transparent-button-background);
  font-weight: 700;

  box-sizing: border-box;

  &:hover {
    background-color: var(--transparent-button-background-focus);
  }
`;

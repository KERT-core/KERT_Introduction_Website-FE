import styled from 'styled-components';

// 사용자 정의 컴포넌트
import { Span } from '../../components/typograph/Text';
import { Container } from '../../components/forms/Container';

/**
 * 컨테이너 헤더
 */
export const ContainerHeader = styled(Span).attrs({
  id: 'dashboard-container-header',
  $size: 'l',
  $weight: 'bold',
})``;

export const HomeContainer = styled(Container).attrs({
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

/**
 * 대시보드용 반투명 버튼
 */
export const Button = styled.button`
  transition: background-color 0.2s ease-out;

  position: relative;
  cursor: pointer;
  overflow: hidden;

  width: ${(props) => props.$width ?? 'fit-content'};
  height: ${(props) => props.$height ?? 'fit-content'};
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

export const BoardColumn = styled.div`
  margin-right: 24px;
  margin-bottom: 24px;

  display: inline-flex;
  flex-direction: column;
  gap: 24px;
`;

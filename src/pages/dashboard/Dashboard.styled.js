// dashboard.styled.js
// 코드 작성자 : GiHhub @whitedev77773

// 외부 라이브러리에서 import
import styled from 'styled-components';

// 사용자가 생성한 컴포넌트 및 JS파일 import
import { Container as Cont } from '../../components/forms/Container';
import { Span } from '../../components/typograph/Text';

/**
 * 대시보드 헤더
 * 기존 Span을 상속하여 사용함
 * @type {import("react").ReactHTMLElement}
 */
export const Header = styled(Span).attrs({
  id: 'dashboard-header',
  $size: 'xl',
  $weight: 'extrabold',
})`
  margin-left: 6px;
  margin-bottom: 20px;
`;

/**
 * 대시보드용 컨테이너
 * 기존 Container를 상속하여 사용함
 * @type {import("react").ReactHTMLElement}
 */
export const Container = styled(Cont).attrs({
  id: 'dashboard-container',
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
 * 컨테이너 헤더
 * @type {import("react").ReactHTMLElement}
 */
export const ContainerHeader = styled(Span).attrs({
  id: 'dashboard-container-header',
  $size: 'l',
  $weight: 'bold',
})``;

/**
 * 대시보드용 반투명 버튼
 * @type {import("react").ReactHTMLElement}
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

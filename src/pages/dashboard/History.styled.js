import styled from 'styled-components';

// 사용자 정의 컴포넌트
import { Container } from '../../components/forms/Container';

export const ManageHistory = styled(Container)`
  margin: 0px;
  padding: 30px;

  width: 100%;
  max-width: 1000px;
  height: 80px;
  border-radius: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: none;
  background-color: var(--container-secondary-background);

  & svg {
    cursor: pointer;
    fill: var(--primary-text-color);
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 10px;

  & > * {
    cursor: pointer;
  }
`;

export const YearContainer = styled.div.attrs({
  id: 'dashboard-history-year-box',
})`
  margin: 0;
  margin-top: 20px;

  width: 100%;
  max-width: 1000px;

  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  padding: 30px;
  box-sizing: border-box;
  border-radius: 20px;

  border: 1px solid var(--container-border);

  // 연도 글자에 간격 추가
  & > span {
    width: 100%;
    // flex-shrink로 flex로 인한 크기 변경을 방지합니다.
    flex-shrink: 0;
    margin-bottom: 20px;
  }
`;

export const YearContainerLoading = styled(YearContainer).attrs({
  id: 'dashboard-history-year-box',
})`
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

  height: 144px;

  background: linear-gradient(
    45deg,
    var(--container-primary-background) 35%,
    var(--container-secondary-background) 50%,
    var(--container-primary-background) 65%
  );
  background-size: 400% 400%;
  animation: skeletonAnimation 2s infinite ease-in-out;
`;

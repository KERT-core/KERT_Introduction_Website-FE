import styled from 'styled-components';

import { Container } from '../forms/Container';

export const YearElement = styled(Container)`
  margin: 0;
  margin-top: 20px;

  width: 100%;
  max-width: 1000px;

  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  padding: 30px;
  border-radius: 20px;

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

  &.loading {
    height: 144px;

    background: linear-gradient(
      45deg,
      var(--container-primary-background) 35%,
      var(--container-secondary-background) 50%,
      var(--container-primary-background) 65%
    );
    background-size: 400% 400%;
    animation: skeletonAnimation 2s infinite ease-in-out;
  }

  & > span {
    width: 100%;
    // flex-shrink로 flex로 인한 크기 변경을 방지합니다.
    flex-shrink: 0;
    margin-bottom: 20px;
  }
`;

export const HistoryElement = styled.div`
  cursor: pointer;

  transition: opacity 0.1s ease-in-out;

  position: relative;
  width: 50%;
  // flex-shrink로 flex로 인한 크기 변경을 방지합니다.
  flex-shrink: 0;

  display: flex;
  flex: 1 1 calc(50% - 10px); /* 2개씩 배치될 때 각 요소의 너비 */
  align-items: center;
  gap: 10px;

  & > span:first-child {
    margin-left: -4px;

    width: 40px;
    padding: 8px 12px;
    border-radius: 30px;

    border: 1px solid var(--container-border);
    text-align: center;
  }

  &:hover > span:first-child {
    transition:
      background-color 0.1s ease-in-out,
      border 0.1s ease-in-out;
    border: 1px solid transparent;
    background-color: var(--danger-color);
  }

  &:hover > span:last-child {
    transition: color 0.1s ease-in-out;
    color: var(--danger-color);
  }
`;

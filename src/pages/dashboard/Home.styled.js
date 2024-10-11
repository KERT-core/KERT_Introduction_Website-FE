import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap; /* 넘칠 경우 다음 줄로 이동 */
`;

export const Column = styled.div`
  margin-right: 24px;
  margin-bottom: 24px;

  display: inline-flex;
  flex-direction: column;
  gap: 24px;
`;

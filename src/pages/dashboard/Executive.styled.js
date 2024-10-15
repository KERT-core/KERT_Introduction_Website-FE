import styled from 'styled-components';

import { Container } from '@components/forms/Container';

export const ManageExecutive = styled(Container)`
  width: 100%;
  max-width: 1000px;
  height: 80px;

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

  &:not(&:first-child) {
    margin-top: 20px;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 10px;

  & > * {
    cursor: pointer;
  }
`;

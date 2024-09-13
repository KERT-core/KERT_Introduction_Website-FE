import styled from 'styled-components';

// 사용자 정의 컴포넌트
import { Container } from '../../components/forms/Container';

export const AdminListContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 100%;
  max-width: 1000px;
  padding: 30px;
  margin: 0;
`;

export const AdminHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AdminList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  flex-shrink: 1;
`;

export const ControlBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & > svg {
    transition: fill 0.2s ease-in-out;

    fill: var(--secondary-text-color);
    cursor: pointer;
  }

  & > svg:hover {
    fill: var(--primary-text-color);
  }
`;

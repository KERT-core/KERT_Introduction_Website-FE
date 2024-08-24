import styled from 'styled-components';

export const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.$gap};
`;

export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap};
`;

export const Container = styled.div`
  width: ${(props) => {
    if (props.$width) {
      return props.$width;
    } else {
      return 'fit-content;';
    }
  }};

  height: ${(props) => {
    if (props.$height) {
      return props.$height;
    } else {
      return 'fit-content';
    }
  }};

  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 30px;
  box-sizing: border-box;
  border-radius: 20px;

  border: 1px solid #21272e;
`;
export const SectionTitle = styled.h2`
  margin: 0px 0px 20px 10px;
  font-size: ${(props) => props.$size ?? '25px'};
  font-weight: 800;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: ${(props) => props.$size ?? '18px'};
  font-weight: ${(props) => props.$weight ?? 'normal'};
  color: ${(props) => props.$color ?? '#ffffff'};
`;

export const Button = styled.button`
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #ffffff1f;
  }

  outline: none;
  border: none;

  width: ${(props) => props.$width ?? 'fit-content'};
  padding: 12px 20px;

  background-color: #ffffff10;
  font-size: 14px;
  font-weight: lighter;

  border-radius: 100px;
`;

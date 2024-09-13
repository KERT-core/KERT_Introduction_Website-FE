import styled from 'styled-components';

import { Text } from '../../typograph/Text';

import EmptySVG from '../../../assets/empty.svg';
import { Container } from '../../forms/Container';

const Wrapper = styled(Container).attrs({
  id: 'dashboard-empty',
})`
  margin: 0;
  margin-top: 20px;

  width: 100%;
  max-width: 1000px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Empty = () => {
  return (
    <Wrapper>
      <EmptySVG fill="var(--primary-text-color)" />
      <Text size="l" weight="extrabold" color="--secondary-text-color">
        텅! 비어있네요...
      </Text>
    </Wrapper>
  );
};

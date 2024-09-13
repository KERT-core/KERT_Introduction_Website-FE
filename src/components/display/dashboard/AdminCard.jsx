import styled from 'styled-components';

import { Text } from '../../typograph/Text';

import { GenerateColorByString } from '../../../utils/generateColor';
import { ColorProfile } from '../ColorProfile';

const CardWrapper = styled.div`
  transition: background-color 0.1s ease-in-out;

  min-width: 400px;
  max-width: 460px;
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  gap: 12px;

  flex-grow: 1;
  flex-basis: 0;

  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background-color: var(--transparent-button-background);
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const AdminCardLoading = styled(CardWrapper)`
  min-height: 88px;

  cursor: default;

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

export const AdminCard = ({ admin }) => {
  const profile_color = GenerateColorByString(
    admin?.student_id,
    admin?.generation,
    admin?.role,
    admin?.description,
  );

  return (
    <CardWrapper onClick={() => {}}>
      <ColorProfile color={profile_color} />
      <Info>
        <Text size="m" weight="bold">
          {admin?.role}
        </Text>
        <Text size="s" color="--secondary-text-color">
          {admin?.student_id} · {admin?.description}
        </Text>
      </Info>
    </CardWrapper>
  );
};

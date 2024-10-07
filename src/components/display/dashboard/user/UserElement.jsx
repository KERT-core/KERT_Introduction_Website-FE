import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '../../../typograph/Text';

import { GenerateColorByString } from '../../../../utils/generateColor';
import { ColorProfile } from '../../ColorProfile';

import useAlert from '../../../../stores/useAlert';
import { DetailUser } from './DetailUser';

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

export const UserElementLoading = styled(CardWrapper)`
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

export const UserElement = ({ user }) => {
  const { openAlert } = useAlert();

  // 만약 user이 없다면 </> 반환
  if (!user) {
    console.warn('user 객체를 받지 못했습니다.');
    return <></>;
  }

  const profile_color = GenerateColorByString(
    user.student_id,
    user.generation,
    user.major,
  );

  // 유저 요소를 눌렀을 때 이벤트
  function onClick() {
    openAlert({
      title: '유저 정보',
      content: <DetailUser user={user} />,
    });
  }

  return (
    <CardWrapper onClick={onClick}>
      {/* 프로필 사진이 없으면 Color Profile로 대체 */}
      {!user.profile_picture ? (
        <ColorProfile color={profile_color} radius="10px" />
      ) : (
        <img
          src={user.profile_picture}
          width="48px"
          height="48px"
          style={{ borderRadius: '10px' }}
        />
      )}
      {/* 계정 정보 */}
      <Info>
        <Text size="m" weight="bold">
          {user.name} ({user.student_id})
        </Text>
        <Text size="s" color="--secondary-text-color">
          {user.major}
        </Text>
      </Info>
    </CardWrapper>
  );
};

UserElement.propTypes = {
  user: PropTypes.shape({
    student_id: PropTypes.number.isRequired,
    generation: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    profile_picture: PropTypes.string,
  }).isRequired,
};

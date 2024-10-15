import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Span, Text } from '@components/typograph/Text';
import { Container } from '@components/forms/Container';

import { ColorProfile } from '@components/display/ColorProfile';

import { GenerateColorByString } from '@/utils/generateColor';

import { HoverToReveal } from '@components/forms/HoverToReveal';
import { Input } from '@components/forms/Input';

const Preview = styled(Container)`
  margin: 0;
  margin-bottom: 30px;

  width: 100%;
  padding: 30px;
  border-radius: 20px;

  display: flex;
  align-items: center;
  gap: 20px;

  border: none;
  background-color: var(--container-secondary-background);
`;

const Description = styled(Span).attrs({
  $size: 'l',
  $weight: 'bold',
})`
  margin-bottom: 8px;
`;

const Info = styled(Span).attrs({
  $size: 's',
  $color: '--secondary-text-color',
})``;

export const DeleteUser = forwardRef(({ user }, ref) => {
  const profile_color = GenerateColorByString(
    user.student_id,
    user.generation,
    user.major,
  );

  return (
    <>
      {/* 수정할 타겟을 보여줌 */}
      <Preview>
        {/* 프로필 사진이 없으면 Color Profile로 대체 */}
        {!user.profile_picture ? (
          <ColorProfile
            width="72px"
            height="72px"
            color={profile_color}
            radius="12px"
          />
        ) : (
          <img
            src={user.profile_picture}
            width="72px"
            height="72px"
            style={{ borderRadius: '12px' }}
          />
        )}
        <div>
          <Description>{user.name != '' ? user.name : '비어있음'}</Description>
          <Info>{user.major}</Info>
        </div>
      </Preview>
      <div
        style={{
          marginTop: '20px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text size="s" color="--warning-color">
          위 회원을 삭제하려면 학번을 입력하세요.
        </Text>
        <HoverToReveal>
          <Text size="s">{user.student_id}</Text>
        </HoverToReveal>
      </div>
      <Input
        ref={ref.id_confirm}
        type="number"
        label=""
        placeholder="2024xxxxxx"
      />
    </>
  );
});
DeleteUser.displayName = 'DeleteUser';
DeleteUser.propTypes = {
  user: PropTypes.shape({
    student_id: PropTypes.number.isRequired,
    generation: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    profile_picture: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

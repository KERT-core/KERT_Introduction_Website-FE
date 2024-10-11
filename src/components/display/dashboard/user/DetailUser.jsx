import { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Span, Text } from '../../../typograph/Text';
import { Button } from '../../../forms/Button';
import { HintedInput } from '../../../forms/HintedInput';
import { Container } from '../../../forms/Container';

import { ColorProfile } from '../../ColorProfile';
import { DeleteUser } from './DeleteUser';

import { ErrorModal } from '../ErrorModal';

import { API } from '../../../../utils/api';
import { GenerateColorByString } from '../../../../utils/generateColor';
import useConfirm from '../../../../stores/useConfirm';
import useAlert from '../../../../stores/useAlert';
import useLoading from '../../../../stores/useLoading';

const Wrapper = styled.div`
  margin: 40px 0;

  & > Button {
    position: absolute;
    left: 35px;
    bottom: 35px;
  }
`;

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

const Name = styled(Span).attrs({
  $size: 'l',
  $weight: 'bold',
})`
  margin-bottom: 8px;
`;

const Info = styled(Span).attrs({
  $size: 's',
  $color: '--secondary-text-color',
})``;

export const DetailUser = ({ user }) => {
  const { showLoading, hideLoading } = useLoading();
  const { openAlert, closeAlert } = useAlert();
  const { openConfirm, closeConfirm } = useConfirm();

  const refs = {
    id_confirm: useRef(),
  };

  if (!user) {
    console.error('user 객체가 없습니다.');
    return;
  }

  const profile_color = GenerateColorByString(
    user.student_id,
    user.generation,
    user.major,
  );

  // 관리자 삭제 이벤트
  function onDelete() {
    closeAlert();
    openConfirm({
      title: '회원 삭제',
      content: <DeleteUser user={user} ref={refs} />,
      onConfirm: deleteUser,
      confirm_label: '삭제',
      confirm_color: 'var(--danger-color)',
      cancel_label: '취소',
    });
  }

  // 서버로 삭제 요청
  function deleteUser() {
    // 게이트 1 - 입력한 학번이 삭제하려는 관리자의 학번과 일치하지 않을 떄
    if (refs.id_confirm.current.value != user.student_id.toString()) {
      openAlert({
        title: '학번 불일치',
        content: <Text>삭제하려는 회원의 학번을 일치하게 적어주세요.</Text>,
      });
      return;
    }

    // 서버로 요청 시도
    closeConfirm();
    showLoading({ message: '회원을 삭제하는 중...' });

    API.DELETE(`/users/${user.student_id}`)
      .then(() => {
        openAlert({
          title: '회원 삭제 완료',
          content: (
            <Text>
              회원 목록에서 {user.name}({user.student_id})를 삭제했어요.
            </Text>
          ),
          onClose: () => window.location.reload(),
        });
      })
      .catch((err) => {
        // 오류 발생 시 안내
        openAlert({
          title: '통신 에러',
          content: <ErrorModal error={err} />,
        });
      })
      .finally(() => {
        hideLoading();
      });
  }

  return (
    <Wrapper>
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
          <Name>{user.name != '' ? user.name : '비어있음'}</Name>
          <Info>
            <b>학번</b> {user.student_id}
            <br />
            <b>메일</b> {user.email}
          </Info>
        </div>
      </Preview>
      {/* 사용자가 수정하는 부분 */}
      <div style={{ display: 'flex' }}>
        <HintedInput label="학번" readOnly defaultValue={user.student_id} />
        <HintedInput label="학과" readOnly defaultValue={user.major} />
      </div>
      <HintedInput label="이메일" readOnly defaultValue={user.email} />
      <Button
        type="outline"
        color="--danger-color"
        text_color="--danger-color"
        onClick={onDelete}
      >
        삭제
      </Button>
    </Wrapper>
  );
};

DetailUser.displayName = 'DetailUser';
DetailUser.propTypes = {
  user: PropTypes.shape({
    student_id: PropTypes.number.isRequired,
    generation: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    profile_picture: PropTypes.string,
  }).isRequired,
};

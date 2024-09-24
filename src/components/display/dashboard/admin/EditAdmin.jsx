import { forwardRef, useRef, useState } from 'react';
import styled from 'styled-components';

import { Span, Text } from '../../../typograph/Text';
import { Button } from '../../../forms/Button';
import { HintedInput } from '../../../forms/HintedInput';
import { Container } from '../../../forms/Container';

import { ColorProfile } from '../../ColorProfile';
import { DeleteAdmin } from './DeleteAdmin';

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

export const EditAdmin = forwardRef(({ admin, ...props }, ref) => {
  const { showLoading, hideLoading } = useLoading();
  const { openAlert } = useAlert();
  const { openConfirm, closeConfirm } = useConfirm();

  if (!admin) {
    console.error('admin 객체가 없습니다.');
    return;
  }

  const [generation, setGeneration] = useState(admin.generation);
  const [role, setRole] = useState(admin.role);

  const refs = {
    id_confirm: useRef(),
  };

  const profile_color = GenerateColorByString(
    admin.student_id,
    generation,
    role,
  );

  // 관리자 삭제 이벤트
  function onDelete() {
    openConfirm({
      title: '관리자 삭제',
      content: <DeleteAdmin admin={admin} ref={refs} />,
      onConfirm: deleteAdmin,
      confirm_label: '삭제',
      confirm_color: 'var(--danger-color)',
      cancel_label: '취소',
    });
  }

  // 서버로 삭제 요청
  function deleteAdmin() {
    // 게이트 1 - 입력한 학번이 삭제하려는 관리자의 학번과 일치하지 않을 떄
    if (refs.id_confirm.current.value != admin.student_id.toString()) {
      openAlert({
        title: '학번 불일치',
        content: <Text>삭제하려는 관리자의 학번을 일치하게 적어주세요.</Text>,
      });
      return;
    }

    // 서버로 요청 시도
    closeConfirm();
    showLoading({ message: '관리자를 삭제하는 중...' });

    API.DELETE(`/admin/${admin.student_id}`)
      .then((api_res) => {
        openAlert({
          title: '관리자 삭제 완료',
          content: (
            <Text>
              관리자 목록에서 {admin.name}({admin.student_id})를 삭제했어요.
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
        {!admin.profile_picture ? (
          <ColorProfile
            width="72px"
            height="72px"
            color={profile_color}
            radius="12px"
          />
        ) : (
          <img
            src={admin.profile_picture}
            width="72px"
            height="72px"
            style={{ borderRadius: '12px' }}
          />
        )}
        <div>
          <Description>
            {admin.name != '' ? admin.name : '비어있음'}
          </Description>
          <Info>
            <b>학번</b> {admin.student_id}
            <br />
            <b>메일</b> {admin.email}
          </Info>
        </div>
      </Preview>
      {/* 사용자가 수정하는 부분 */}
      <div style={{ display: 'flex' }}>
        <HintedInput
          ref={ref.generation}
          type="number"
          label="가입 기수"
          defaultValue={admin.generation}
          onChange={(e) => {
            setGeneration(e.target.value);
          }}
        />
        <HintedInput
          ref={ref.role}
          label="역할"
          defaultValue={admin.role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
      </div>
      <HintedInput
        ref={ref.description}
        label="추가 설명"
        defaultValue={admin.description}
      />
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
});

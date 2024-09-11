import { useRef } from 'react';
import styled from 'styled-components';

import { Text } from '../typograph/Text';

import { GenerateColorByString } from '../../utils/generateColor';
import { ColorProfile } from './ColorProfile';
import { AdminDetailed } from './AdminDetailed';

import useAlert from '../../stores/useAlert';
import useConfirm from '../../stores/useConfirm';
import useLoading from '../../stores/useLoading';
import { API } from '../../utils/api';

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

const AdminCardLoading = styled(CardWrapper)`
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

export const AdminCard = ({ admin, loading }) => {
  const { openAlert, closeAlert } = useAlert();
  const { openConfirm, closeConfirm } = useConfirm();
  const { showLoading, hideLoading } = useLoading();

  const refs = {
    id_ref: useRef(),
    generation_ref: useRef(),
    role_ref: useRef(),
    description_ref: useRef(),
  };

  const profile_color = GenerateColorByString(
    admin?.student_id,
    admin?.generation,
    admin?.role,
    admin?.description,
  );

  const onClick = () => {
    openConfirm({
      title: '상세 관리자 정보',
      content: <AdminDetailed admin={admin} refs={refs} />,
      onConfirm: () => onConfirm(),
      onCancel: () => closeConfirm(),
      confirm_label: '수정',
      cancel_label: '닫기',
    });
  };

  const onConfirm = () => {
    const updateAdmin = {
      ...admin,
      student_id: parseInt(refs.id_ref.current.value),
      generation: refs.generation_ref.current.value,
      role: refs.role_ref.current.value,
      description: refs.description_ref.current.value,
    };

    // 무언가를 입력하지 않았을 때
    if (
      !refs.id_ref.current.value ||
      !refs.generation_ref.current.value ||
      !refs.role_ref.current.value ||
      !refs.description_ref.current.value
    ) {
      openAlert({
        title: '경고',
        content: <Text>모든 입력란을 채워주세요.</Text>,
        onClose: () => closeAlert(),
      });
      return;
    }

    // 동아리 가입연월이 이상하게 적혔다면 중단
    const GenerationRegex = /\d\d\d\d\.[1-9]+/i; // 2024.1와 같은 패턴인지 확인하는 정규식
    if (!GenerationRegex.test(updateAdmin.generation)) {
      openAlert({
        title: '경고',
        content: <Text>동아리 가입연월을 올바르게 적어주세요.</Text>,
        onClose: () => closeAlert(),
      });
      return;
    }

    // 수정한 내용이 없으면 서버 요청 안함
    if (JSON.stringify(updateAdmin) == JSON.stringify(admin)) {
      openAlert({
        title: '관리자 정보 수정',
        content: <Text>변경된 정보가 없습니다.</Text>,
        onClose: () => closeAlert(),
      });
    }
    // 수정된게 있으면 서버 요청
    else {
      showLoading({ message: '관리자 정보 수정중...' });
      API.PUT(`/admin/${admin.student_id}`, updateAdmin).then(() => {
        hideLoading();
        closeConfirm();
        openAlert({
          title: '관리자 정보 수정',
          content: <Text>정보가 수정되었습니다.</Text>,
          onClose: () => {
            window.location.reload();
          },
        });
      });
    }
  };

  return loading ? (
    <>
      <AdminCardLoading />
    </>
  ) : (
    <CardWrapper onClick={onClick}>
      <ColorProfile color={profile_color} />
      <Info>
        <Text size="m" weight="bold">
          {admin.role}
        </Text>
        <Text size="s" color="--secondary-text-color">
          {admin.student_id} · {admin.description}
        </Text>
      </Info>
    </CardWrapper>
  );
};

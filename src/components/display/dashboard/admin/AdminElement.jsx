import { useRef } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '@components/typograph/Text';

import { GenerateColorByString } from '@/utils/generateColor';
import { ColorProfile } from '@components/display/ColorProfile';
import { EditAdmin } from '@components/display/dashboard/admin/EditAdmin';
import { UpdatedAdmin } from '@components/display/dashboard/admin/UpdatedAdmin';
import { ErrorModal } from '@components/display/dashboard/ErrorModal';

import { GENERATION_REGEX } from '@/utils/regex';
import { API } from '@/utils/api';
import useAlert from '@/hooks/modal/useAlert';
import useConfirm from '@/hooks/modal/useConfirm';
import useLoading from '@/hooks/modal/useLoading';

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

export const AdminElementLoading = styled(CardWrapper)`
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

export const AdminElement = ({ admin }) => {
  const { showLoading, hideLoading } = useLoading();
  const { openAlert } = useAlert();
  const { openConfirm, closeConfirm } = useConfirm();

  const { data, isLoading } = useQuery(`user-${admin.student_id}`, async () => {
    const res = await API.GET(`/users/${admin.student_id}`);
    return { ...admin, ...res.data };
  });

  // 관리자 편집을 위한 Reference
  const refs = {
    generation: useRef(),
    role: useRef(),
    description: useRef(),
  };

  // 만약 admin이 없다면 </> 반환
  if (!admin) {
    console.warn('admin 객체를 받지 못했습니다.');
    return <></>;
  }

  if (isLoading) {
    return (
      <>
        <AdminElementLoading />
      </>
    );
  }

  const profile_color = GenerateColorByString(
    data?.student_id,
    data?.generation,
    data?.role,
  );

  // 관리자 요소를 눌렀을 때 이벤트
  function onClick() {
    openConfirm({
      title: '관리자 수정',
      content: <EditAdmin ref={refs} admin={data} />,
      onConfirm: () => UpdateAdmin(),
      confirm_label: '수정',
      cancel_label: '취소',
    });
  }

  // 관리자를 업데이트하는 이벤트
  function UpdateAdmin() {
    // 그냥 admin은 name, email 등 추가적인 정보가 있기 때문에 새로운 객체를 생성합니다.
    const current_admin = {
      student_id: admin.student_id,
      generation: admin.generation,
      role: admin.role,
      description: admin.description,
    };

    // 사용자 입력을 기반으로 새로운 객체를 생성합니다.
    const updated_admin = {
      student_id: admin.student_id,
      generation: refs.generation.current.value,
      role: refs.role.current.value,
      description: refs.description.current.value,
    };

    // 만약 변경된 내용 없이 기존과 같다면 중단
    // 객체를 비교할 때 값이 아닌 메모리 주소를 기준으로 비교하므로 비교시 무조건 false가 반환됨
    // 따라서 JSON 문자열로 변환 후 비교해야함 (JS 객체는 Key가 자동으로 정렬되는 것을 이용함)
    if (JSON.stringify(current_admin) === JSON.stringify(updated_admin)) {
      openAlert({
        title: '변경할 내용 없음',
        content: <Text>기존 관리자 정보와 동일합니다.</Text>,
      });
      return;
    }

    // 게이트 1 - 모든 칸이 입력됬는지 확인
    if (
      !updated_admin.generation ||
      !updated_admin.role ||
      !updated_admin.description
    ) {
      openAlert({
        title: '정보 부족',
        content: <Text>모든 칸을 입력해주세요</Text>,
      });
      return;
    }

    // 게이트 2 - 동아리 가입연월이 이상하게 적혔다면 중단
    if (!GENERATION_REGEX.test(updated_admin.generation)) {
      openAlert({
        title: '경고',
        content: <Text>동아리 가입연월을 올바르게 적어주세요.</Text>,
      });
      return;
    }

    // 문제가 없다면 서버 요청 시작
    showLoading({ message: '관리자 정보를 수정하는 중...' });

    API.PUT(`/admin/${data.student_id}`, {
      body: updated_admin,
      headers: { Authorization: localStorage.getItem('accessToken') },
    })
      .then((api_res) => {
        closeConfirm();
        openAlert({
          title: '관리자 정보 수정됨',
          content: (
            <UpdatedAdmin
              current_admin={data}
              updated_admin={{ ...data, ...api_res }}
            />
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
    <CardWrapper onClick={onClick}>
      {/* 프로필 사진이 없으면 Color Profile로 대체 */}
      {!data.profile_picture ? (
        <ColorProfile color={profile_color} radius="10px" />
      ) : (
        <img
          src={data.profile_picture}
          width="48px"
          height="48px"
          style={{ borderRadius: '10px' }}
        />
      )}
      {/* 계정 정보 */}
      <Info>
        <Text size="m" weight="bold">
          {data.name} ({data.student_id})
        </Text>
        <Text size="s" color="--secondary-text-color">
          {data.role} · {data.email}
        </Text>
      </Info>
    </CardWrapper>
  );
};

AdminElement.propTypes = {
  admin: PropTypes.shape({
    student_id: PropTypes.number.isRequired,
    generation: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

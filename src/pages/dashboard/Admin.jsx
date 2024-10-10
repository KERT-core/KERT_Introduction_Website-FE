import { useRef } from 'react';
import { useQuery } from 'react-query';

import { GENERATION_REGEX, STUDENT_ID_REGEX } from '../../utils/regex.js';

// 사용자 정의 컴포넌트
import { Text } from '../../components/typograph/Text.jsx';
import { Button } from '../../components/forms/Button.jsx';

import { Header } from './Dashboard.styled.js';
import {
  AdminListContainer,
  AdminHeader,
  AdminList,
  ControlBox,
} from './Admin.styled.js';
import {
  AdminElement,
  AdminElementLoading,
} from '../../components/display/dashboard/admin/AdminElement.jsx';
import { AddAdmin } from '../../components/display/dashboard/admin/AddAdmin.jsx';
import { ErrorModal } from '../../components/display/dashboard/ErrorModal.jsx';

// SVG 아이콘
import { RefreshIcon } from '../../assets/icons';

import { API } from '../../utils/api.js';
import useAlert from '../../stores/useAlert.js';
import useConfirm from '../../stores/useConfirm.js';
import useLoading from '../../stores/useLoading.js';

export default function Admin() {
  const { showLoading, hideLoading } = useLoading();
  const { openConfirm, closeConfirm } = useConfirm();
  const { openAlert } = useAlert();

  const { data, isLoading, isError } = useQuery(
    'admin',
    async () => {
      const data = await API.GET('/admin', {
        headers: { Authorization: localStorage.getItem('token') },
      });
      return data;
    },
    { retry: 2 },
  );

  const refs = {
    student_id: useRef(),
    generation: useRef(),
    role: useRef(),
    description: useRef(),
  };

  // 새로운 관리자 추가를 눌렀을 때
  const onClick = () => {
    openConfirm({
      title: '관리자 추가',
      content: <AddAdmin ref={refs} />,
      onConfirm: () => addAdmin(),
      confirm_label: '추가',
      confirm_color: 'var(--primary-color)',
      cancel_label: '취소',
    });
  };

  // 관리자 입력 폼에서 추가를 눌렀을 때
  const addAdmin = () => {
    const new_admin = {
      student_id: parseInt(refs.student_id.current.value),
      generation: refs.generation.current.value,
      role: refs.role.current.value,
      description: refs.description.current.value,
    };

    // 게이트 1 - 무언가를 입력하지 않았을 때
    if (
      !new_admin.student_id ||
      !new_admin.generation ||
      !new_admin.role ||
      !new_admin.description
    ) {
      openAlert({
        title: '경고',
        content: <Text>모든 입력란을 채워주세요.</Text>,
      });
      return;
    }

    // 게이트 2 - 학번이 10자리가 아니라면 & 숫자가 아니라면
    if (!STUDENT_ID_REGEX.test(new_admin.student_id)) {
      openAlert({
        title: '경고',
        content: <Text>학번을 올바르게 적어주세요.</Text>,
      });
      return;
    }

    // 게이트 3 - 동아리 가입연월이 이상하게 적혔다면 중단
    if (!GENERATION_REGEX.test(new_admin.generation)) {
      openAlert({
        title: '경고',
        content: <Text>동아리 가입연월을 올바르게 적어주세요.</Text>,
      });
      return;
    }

    // 모든 게이트 통과 후 로딩 ON
    closeConfirm();
    showLoading({ message: '새로운 관리자를 추가하고 있어요...' });

    // 위 if에 걸리지 않으면 서버 POST 요청
    API.POST('/admin', {
      body: { ...new_admin },
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(() => {
        openAlert({
          title: '관리자 추가 성공',
          content: <Text>페이지를 다시 불러올게요.</Text>,
          ok_label: '닫기',
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
  };

  return (
    <>
      <Header>관리자 추가/제거</Header>
      <AdminListContainer>
        {/* 관리자 추가 메뉴 */}
        <AdminHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Text size="l" weight="bold">
              관리자 계정 목록
            </Text>
            <Text size="s" color="--secondary-text-color">
              표시된 계정을 눌러서 정보를 수정하거나 삭제합니다.
            </Text>
          </div>
          <ControlBox>
            <RefreshIcon onClick={() => window.location.reload()} />
            <Button onClick={onClick}>+ 새 관리자 추가</Button>
          </ControlBox>
        </AdminHeader>
        {/* 관리자 리스트 */}
        {isError ? (
          <></>
        ) : (
          <AdminList>
            {isLoading
              ? [0, 1, 2, 3, 4].map((e, i) => <AdminElementLoading key={i} />)
              : data.map((admin, index) => (
                  <AdminElement key={index} admin={admin} />
                ))}
          </AdminList>
        )}
      </AdminListContainer>
    </>
  );
}

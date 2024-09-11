import { useEffect, useRef, useState } from 'react';

import { Text } from '../../components/typograph/Text.jsx';
import { Button } from '../../components/forms/Button.jsx';
import { Input } from '../../components/forms/Input.jsx';
import { RefreshIcon } from '../../assets/icons';

import { Header } from './Dashboard.styled.js';
import {
  AdminListContainer,
  AdminHeader,
  AdminList,
  ControlBox,
} from './Admin.styled.js';
import { AdminCard } from '../../components/display/AdminCard.jsx';

import { API } from '../../utils/api.js';
import useAdmin from '../../stores/dashboard/useAdmin.js';
import useAlert from '../../stores/useAlert.js';
import useConfirm from '../../stores/useConfirm.js';
import useLoading from '../../stores/useLoading.js';

export default function Admin() {
  const [loading, setLoading] = useState(true); // 스켈레톤 컨테이너 로딩용
  const { admins, saveAdmins } = useAdmin();

  const { showLoading, hideLoading } = useLoading();
  const { openConfirm, closeConfirm } = useConfirm();
  const { openAlert, closeAlert } = useAlert();

  const IdRef = useRef();
  const GenerationRef = useRef();
  const RoleRef = useRef();
  const DescriptionRef = useRef();

  // API로부터 데이터를 가져와 Zustand 상태를 업데이트합니다.
  useEffect(() => {
    // 만약 이전에 받은 API 데이터가 없다면 API 요청 후 데이터를 store에 저장
    if (admins.length === 0) {
      API.GET('/admin')
        .then((res) => {
          saveAdmins(res); // API 서버에서 가져온 데이터를 상태에 반영
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error('Error fetching data:', error);
        });
    } else {
      setLoading(false);
      console.info('이미 API 데이터가 있으므로 API 응답을 요청하지 않습니다.');
    }
  }, []);

  const onClickAddAdmin = () => {
    openConfirm({
      title: '관리자 추가',
      content: (
        <div style={{ margin: '50px 0' }}>
          <Input ref={IdRef} label="학번" placeholder="20xxxxxxxx" />
          <div style={{ display: 'flex', gap: '20px' }}>
            <Input
              ref={GenerationRef}
              label="동아리 가입연월"
              placeholder="2024.9"
            />
            <Input ref={RoleRef} label="역할" placeholder="담당 역할" />
          </div>
          <Input
            ref={DescriptionRef}
            label="기타 인적사항"
            placeholder="이름 및 별칭 등 추가 정보가 필요하면 자유롭게 입력"
          />
        </div>
      ),
      onConfirm: () => addAdmin(),
      onCancel: () => closeConfirm(),
      confirm_label: '추가',
      confirm_color: 'var(--primary-color)',
      cancel_label: '취소',
    });
  };

  const addAdmin = () => {
    // 무언가를 입력하지 않았을 때
    if (
      !IdRef.current.value ||
      !GenerationRef.current.value ||
      !RoleRef.current.value ||
      !DescriptionRef.current.value
    ) {
      openAlert({
        title: '경고',
        content: <Text>모든 입력란을 채워주세요.</Text>,
        onClose: () => closeAlert(),
      });
      return;
    }

    // 학번이 10자리가 아니라면 & 숫자가 아니라면
    const IdRegex = /\d\d\d\d\d\d\d\d\d\d/i;
    if (!IdRegex.test(IdRef.current.value)) {
      openAlert({
        title: '경고',
        content: <Text>학번을 올바르게 적어주세요.</Text>,
        onClose: () => closeAlert(),
      });
      return;
    }

    // 동아리 가입연월이 이상하게 적혔다면 중단
    const GenerationRegex = /\d\d\d\d\.[1-9]+/i; // 2024.1와 같은 패턴인지 확인하는 정규식
    if (!GenerationRegex.test(GenerationRef.current.value)) {
      openAlert({
        title: '경고',
        content: <Text>동아리 가입연월을 올바르게 적어주세요.</Text>,
        onClose: () => closeAlert(),
      });
      return;
    }

    // 로딩 ON
    closeConfirm();
    showLoading({ message: '새로운 관리자를 추가하고 있어요...' });

    // 위 if에 걸리지 않으면 서버 POST 요청
    API.POST('/admin', {
      student_id: parseInt(IdRef.current.value),
      generation: GenerationRef.current.value,
      role: RoleRef.current.value,
      description: DescriptionRef.current.value,
    }).then((res) => {
      hideLoading();
      openAlert({
        title: '관리자 추가 성공',
        content: <Text>페이지를 다시 불러올게요.</Text>,
        ok_label: '닫기',
        onClose: () => {
          window.location.reload();
        },
      });
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
            <Button onClick={onClickAddAdmin}>+ 새 관리자 추가</Button>
          </ControlBox>
        </AdminHeader>
        {/* 관리자 리스트 */}
        <AdminList>
          {loading ? (
            <>
              <AdminCard loading={loading} />
              <AdminCard loading={loading} />
              <AdminCard loading={loading} />
              <AdminCard loading={loading} />
              <AdminCard loading={loading} />
            </>
          ) : (
            admins.map((admin) => (
              <AdminCard
                key={admin.student_id.toString() + admin.description}
                admin={admin}
              />
            ))
          )}
        </AdminList>
      </AdminListContainer>
    </>
  );
}

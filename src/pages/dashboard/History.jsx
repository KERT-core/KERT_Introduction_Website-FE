import { useRef, useState } from 'react';
import useHistory from '../../stores/dashboard/useHistory';

import { Text } from '../../components/typograph/Text';
import { Header } from './Dashboard.styled';
import { ManageHistory, Menu } from './History.styled';
import { AddIcon, RefreshIcon } from '../../assets/icons';
import { HistoryList } from '../../components/display/HistoryList';

import { API } from '../../utils/api';
import { Confirm } from '../../components/forms/modal/Confirm';
import { Alert } from '../../components/forms/modal/Alert';
import { Input } from '../../components/forms/Input';

/**
 * ↓ API 요청 시 반환 형식 ↓
 * [{
 *   "id": "integer",
 *   "year": "integer",
 *   "month": "integer",
 *   "description": "string",
 *   "created_at": "datetime",
 *   "updated_at": "datetime"
 * }]
 */

export default function History() {
  const yearInputRef = useRef('');
  const monthInputRef = useRef('');
  const contentInputRef = useRef('');

  const [alertOpen, setAlertOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  // confirm 모달이 표시될 때
  const handleAddClick = () => {
    setConfirmOpen(true);
  };

  // 유저가 confirm 모달에서 확인을 눌렀을 때
  const handleAddConfirm = () => {
    console.log(contentInputRef.current.value);

    const newHistory = {
      year: parseInt(yearInputRef.current.value),
      month: parseInt(monthInputRef.current.value),
      content: contentInputRef.current.value,
    };
    console.log(newHistory);

    // 서버로 추가를 요청합니다.
    API.POST('/histories', newHistory)
      .then()
      .then(() => {
        setAlertOpen(true);
      });

    setConfirmOpen(false);
  };

  // 유저가 닫기 버튼을 눌렀을 때
  const handleAddCancel = () => {
    setConfirmOpen(false);
  };

  return (
    <>
      <Header>연혁 추가/제거</Header>
      <ManageHistory>
        <Text size="m" weight="regular">
          +를 눌러 연혁 추가
        </Text>
        <Menu>
          <RefreshIcon onClick={() => window.location.reload()} />
          <AddIcon onClick={handleAddClick} fill="#ffffff" />
        </Menu>
      </ManageHistory>
      <HistoryList />

      {/* 연혁 추가 시 표시되는 모달들입니다. */}
      <Confirm
        title="연혁 추가"
        isOpen={confirmOpen}
        onConfirm={handleAddConfirm}
        onCancel={handleAddCancel}
        confirmMsg="추가"
      >
        <div style={{ display: 'flex', gap: '20px' }}>
          <Input
            ref={yearInputRef}
            label="연도"
            type="number"
            placeholder="2024"
          />
          <Input
            ref={monthInputRef}
            label="월"
            type="number"
            min={1}
            max={12}
            placeholder="2"
          />
        </div>
        <Input
          ref={contentInputRef}
          label="내용"
          placeholder="여기에 연혁 내용 입력"
        />
      </Confirm>
      <Alert
        title="연혁 추가됨"
        isOpen={alertOpen}
        onClose={() => {
          // 간단하게 새로고침해서 연혁 목록을 다시 불러옵니다.
          window.location.reload();
        }}
        buttonColor="--success-color"
      >
        <Text>추가되었습니다.</Text>
        <Text>연혁 목록을 다시 불러옵니다.</Text>
      </Alert>
    </>
  );
}

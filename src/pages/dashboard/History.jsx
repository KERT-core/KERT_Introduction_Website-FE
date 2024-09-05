import { forwardRef, useEffect, useRef } from 'react';

import { Text } from '../../components/typograph/Text';
import { Header } from './Dashboard.styled';
import { ManageHistory, Menu } from './History.styled';
import { AddIcon, RefreshIcon } from '../../assets/icons';
import { HistoryList } from '../../components/display/HistoryList';
import { Input } from '../../components/forms/Input';

import { API } from '../../utils/api';
import useAlert from '../../stores/useAlert';
import useConfirm from '../../stores/useConfirm';
import useLoading from '../../stores/useLoading';

/**
 * ↓ API 요청 시 history 형식 ↓
 * {
 *   "year": "integer",
 *   "month": "integer",
 *   "description": "string"
 * }
 */

// 새로운 연혁을 추가하기 위한 폼입니다.
const NewHistoryInputForms = forwardRef((props, ref) => {
  const { yearRef, monthRef, contentRef } = ref;

  useEffect(() => {
    // useEffect 외부에서 .focus()는 ref가 비어있는 채로 실행됩니다.
    // 따라서 useEffect으로 컴포넌트의 마운트가 끝난 후 포커싱을 실행하도록 합니다.
    if (yearRef) {
      yearRef.current.focus();
    }
  }, []);

  return (
    <>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Input ref={yearRef} label="연도" type="number" placeholder="2024" />
        <Input
          ref={monthRef}
          label="월"
          type="number"
          min={1}
          max={12}
          placeholder="2"
        />
      </div>
      <Input
        ref={contentRef}
        label="내용"
        placeholder="여기에 연혁 내용 입력"
      />
    </>
  );
});

export default function History() {
  const refs = {
    yearRef: useRef(),
    monthRef: useRef(),
    contentRef: useRef(),
  };

  const { openAlert, closeAlert } = useAlert();
  const { openConfirm, closeConfirm } = useConfirm();
  const { showLoading, hideLoading, message } = useLoading();

  // 추가 버튼을 눌렀을 때
  const handleAddClick = () => {
    openConfirm({
      title: '새로운 연혁 추가',
      content: <NewHistoryInputForms ref={refs} />,
      onConfirm: onConfirm,
      onCancel: closeConfirm,
    });
  };

  // 유저가 confirm 모달에서 확인을 눌렀을 때
  const onConfirm = () => {
    const newYear = parseInt(refs.yearRef.current.value);
    const newMonth = parseInt(refs.monthRef.current.value);
    const newContent = refs.contentRef.current.value;

    // 연도, 월, 내용 중 하나라도 비어있으면 API 요청 X
    if (!newYear || !newMonth || !newContent) {
      openAlert({
        title: '경고',
        content: <Text>모든 입력란을 채워주세요.</Text>,
        ok_label: '닫기',
        onClose: closeAlert,
      });
      return;
    }

    // API 서버에 전송할 연혁 객체를 구성합니다.
    const newHistory = {
      year: newYear,
      month: newMonth,
      content: newContent,
    };

    showLoading({ message: '연혁 정보를 전송하고 있어요...' }); // 서버 요청 하기전 로딩 표시

    // 서버로 추가를 요청합니다.
    API.POST('/histories', newHistory)
      .then()
      .then(() => {
        hideLoading();
        closeConfirm();
        openAlert({
          title: '연혁 추가 성공',
          content: (
            <>
              <Text>
                {newYear}년 {newMonth}월 - {newContent}
              </Text>
              <br />
              <Text>페이지를 다시 불러올게요.</Text>
            </>
          ),
          ok_label: '닫기',
          onClose: () => {
            window.location.reload();
          },
        });
      });
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
    </>
  );
}

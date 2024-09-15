import { useEffect, useState, useRef } from 'react';

// 사용자 정의 컴포넌트
import { Text } from '../../components/typograph/Text';

import { Header } from './Dashboard.styled';
import {
  ManageHistory,
  Menu,
  YearContainer,
  YearContainerLoading,
} from './History.styled';
import { HistoryElement } from '../../components/display/dashboard/history/HistoryElement';
import { AddHistory } from '../../components/display/dashboard/history/AddHistory';
import { ErrorModal } from '../../components/display/dashboard/ErrorModal';

// 외부 훅
import { API } from '../../utils/api';
import useHistory from '../../stores/dashboard/useHistory';
import useAlert from '../../stores/useAlert';
import useConfirm from '../../stores/useConfirm';
import useLoading from '../../stores/useLoading';

// SVG 아이콘
import { AddIcon, RefreshIcon } from '../../assets/icons';
import { Empty } from '../../components/display/dashboard/Empty';

export default function History() {
  const { openAlert } = useAlert();
  const { openConfirm, closeConfirm } = useConfirm();
  const { showLoading, hideLoading } = useLoading();

  const { saveHistory, histories } = useHistory(); // 불러온 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태를 관리

  // 연혁 추가를 위한 Reference
  const refs = {
    year: useRef(),
    month: useRef(),
    description: useRef(),
  };

  useEffect(() => {
    // 만약 이전에 받은 API 데이터가 없다면 API 요청 후 데이터를 store에 저장
    if (Object.keys(histories).length === 0) {
      API.GET('/histories')
        .then((api_res) => {
          saveHistory(api_res); // API 데이터를 Zustand 상태에 반영
        })
        .catch((err) => {
          // 오류 발생 시 안내
          openAlert({
            title: '통신 에러',
            content: <ErrorModal error={err} />,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      console.info('이미 API 데이터가 있으므로 API 응답을 요청하지 않습니다.');
    }
  }, []);

  // 연혁 추가 버튼을 눌렀을 때 이벤트
  function onAddHistory() {
    openConfirm({
      title: '연혁 추가',
      content: <AddHistory ref={refs} />,
      onConfirm: () => {
        // 추가할 연혁의 객체를 구성합니다.
        const new_history = {
          year: refs.year.current.value,
          month: refs.month.current.value,
          description: refs.description.current.value,
        };

        // 만약 하나라도 미입력이라면 알림을 띄웁니다.
        if (
          !new_history.year ||
          !new_history.month ||
          !new_history.description
        ) {
          openAlert({
            title: '정보 부족',
            content: <Text>모든 칸을 입력해주세요</Text>,
          });
          return;
        }

        // 문제가 없다면 연혁을 추가합니다.
        closeConfirm();
        showLoading({ message: '연혁을 추가하는 중...' });

        API.POST('/histories', new_history)
          .then(() => {
            hideLoading();
            openAlert({
              title: '연혁 추가 성공',
              content: <Text>연혁을 정상적으로 추가했어요.</Text>,
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
      },
      confirm_label: '추가',
      cancel_label: '취소',
    });
  }

  return (
    <>
      <Header>연혁 추가/제거</Header>
      <ManageHistory>
        <Text>+를 눌러 연혁 추가</Text>
        <Menu>
          <RefreshIcon onClick={() => window.location.reload()} />
          <AddIcon onClick={onAddHistory} fill="#ffffff" />
        </Menu>
      </ManageHistory>
      {loading ? (
        <>
          <YearContainerLoading />
          <YearContainerLoading />
          <YearContainerLoading />
        </>
      ) : Object.keys(histories).length === 0 ? (
        <Empty />
      ) : (
        Object.keys(histories)
          .reverse() // history.year가 숫자이기 때문에 객체에서 자동으로 오름차순 정렬됩니다. 따라서 연도 key의 순서를 뒤집습니다.
          .map((year) => (
            <YearContainer key={year}>
              <Text size="l">{year}년</Text>
              {histories[year].map((history, index) => (
                <HistoryElement key={index} history={history} />
              ))}
            </YearContainer>
          ))
      )}
    </>
  );
}

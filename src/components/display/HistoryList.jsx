import { useEffect, useState } from 'react';

import useHistory from '../../stores/dashboard/useHistory';
import { API } from '../../utils/api';

import { Text } from '../typograph/Text';
import { YearElement, HistoryElement } from './HistoryList.styled';
import { Confirm } from '../forms/modal/Confirm';
import { Alert } from '../forms/modal/Alert';

export const HistoryList = () => {
  const [loading, setLoading] = useState(true);
  const { history, refined_history, saveHistory } = useHistory();

  // confirm 모달에서 삭제한 연혁의 ID를 능동적으로 적용하기 위해 state를 선언합니다.
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [deleteHistory, setDeleteHistory] = useState({
    id: null,
    year: null,
    month: null,
    content: null,
  });

  // confirm 모달이 표시될 때
  const handleDeleteClick = (id, year, month, content) => {
    setDeleteHistory({
      id: id,
      year: year,
      month: month,
      content: content,
    });
    setConfirmOpen(true);
  };

  // 유저가 confirm 모달에서 삭제를 눌렀을 때
  const handleDeleteConfirm = () => {
    setConfirmOpen(false);

    // 서버로 삭제를 요청합니다.
    API.DELETE(`/histories/${deleteHistory.id}`)
      .then()
      .then(() => {
        setAlertOpen(true);
      });
    setDeleteHistory({
      id: null,
      year: null,
      month: null,
      content: null,
    });
  };

  // 유저가 닫기 버튼을 눌렀을 때
  const handleDeleteCancel = () => {
    setConfirmOpen(false);
    setDeleteHistory({
      id: null,
      year: null,
      month: null,
      content: null,
    });
  };

  // API로부터 데이터를 가져와 Zustand 상태를 업데이트합니다.
  useEffect(() => {
    // 만약 이전에 받은 API 데이터가 없다면 API 요청 후 데이터를 store에 저장
    if (history.length === 0) {
      API.GET('/histories')
        .then((res) => {
          saveHistory(res); // API 서버에서 가져온 데이터를 상태에 반영
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

  return loading ? (
    <>
      <YearElement className="loading" />
      <YearElement className="loading" />
      <YearElement className="loading" />
    </>
  ) : history.length === 0 ? (
    <Text>비어있음</Text>
  ) : (
    <>
      {Object.keys(refined_history)
        .sort((a, b) => b - a)
        .map((year) => (
          <YearElement key={year}>
            <Text size="l" weight="bold">
              {year}년
            </Text>
            {refined_history[year].map((hist) => (
              <HistoryElement
                key={hist.id}
                onClick={() =>
                  handleDeleteClick(
                    hist.id,
                    hist.year,
                    hist.month,
                    hist.content,
                  )
                }
              >
                <Text size="s" weight="bold">
                  {hist.month}월
                </Text>
                <Text size="s" weight="light">
                  {hist.content}
                </Text>
              </HistoryElement>
            ))}
          </YearElement>
        ))}
      <Confirm
        title="연혁 삭제"
        isOpen={confirmOpen}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        confirmMsg="삭제"
        confirmColor="--danger-color"
      >
        <Text>아래 연혁을 삭제할까요?</Text>
        <Text>
          {deleteHistory.year}년 {deleteHistory.month}월 -{' '}
          {deleteHistory.content}
        </Text>
      </Confirm>
      <Alert
        title="연혁 삭제됨"
        isOpen={alertOpen}
        onClose={() => {
          // 간단하게 새로고침해서 연혁 목록을 다시 불러옵니다.
          window.location.reload();
        }}
      >
        <Text>삭제되었습니다.</Text>
      </Alert>
    </>
  );
};

import { useEffect, useState } from 'react';

import { Text } from '../typograph/Text';
import { YearElement, HistoryElement } from './HistoryList.styled';

import { API } from '../../utils/api';
import useHistory from '../../stores/dashboard/useHistory';
import useAlert from '../../stores/useAlert';
import useConfirm from '../../stores/useConfirm';
import useLoading from '../../stores/useLoading';

export const DeleteHistory = ({ history }) => {
  return (
    <>
      <Text>아래 연혁을 삭제할까요?</Text>
      <br />
      <Text>
        {history.year}년 {history.month}월 - {history.content}
      </Text>
      <br />
      <br />
      <Text color="--secondary-text-color">ID : {history.id}</Text>
    </>
  );
};

export const HistoryList = () => {
  const [loading, setLoading] = useState(true); // 컨테이너 스켈레톤 로딩
  const { history, refined_history, saveHistory } = useHistory();

  const { openAlert } = useAlert();
  const { openConfirm, closeConfirm } = useConfirm();
  const { showLoading, hideLoading } = useLoading();

  // confirm 모달이 표시될 때
  const handleClick = (history) => {
    openConfirm({
      title: '연혁 삭제',
      content: <DeleteHistory history={history} />,
      onConfirm: () => {
        onConfirm(history);
      },
      onCancel: () => {
        onCancel();
      },
      confirm_label: '삭제',
      confirm_color: 'var(--danger-color)',
      cancel_label: '취소',
    });
  };

  // 유저가 confirm 모달에서 삭제를 눌렀을 때
  const onConfirm = (target_delete_history) => {
    console.log(target_delete_history);
    closeConfirm();
    showLoading('');

    // 서버로 삭제를 요청합니다.
    API.DELETE(`/histories/${target_delete_history.id}`)
      .then()
      .then(() => {
        hideLoading();
        openAlert({
          title: '연혁 삭제됨',
          content: (
            <>
              <Text>연혁을 삭제했어요.</Text>
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

  // 유저가 닫기 버튼을 눌렀을 때
  const onCancel = () => {
    closeConfirm();
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
              <HistoryElement key={hist.id} onClick={() => handleClick(hist)}>
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
    </>
  );
};

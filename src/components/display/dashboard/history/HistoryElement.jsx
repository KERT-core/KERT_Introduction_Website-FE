import { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Span, Text } from '@components/typograph/Text';

import { EditHistory } from '@components/display/dashboard/history/EditHistory';
import { UpdatedHistory } from '@components/display/dashboard/history/UpdatedHistory';
import { ErrorModal } from '@components/display/dashboard/ErrorModal';

import { API } from '@/utils/api';
import useConfirm from '@/hooks/modal/useConfirm';
import useAlert from '@/hooks/modal/useAlert';
import useLoading from '@/hooks/modal/useLoading';

const CardWrapper = styled.div.attrs({
  id: 'dashboard-history-card',
})`
  cursor: pointer;

  transition: opacity 0.1s ease-in-out;

  width: 50%;
  min-width: 340px;
  // flex-shrink로 flex로 인한 크기 변경을 방지합니다.
  flex-shrink: 0;

  display: flex;
  flex: 1 1 calc(50% - 10px); /* 2개씩 배치될 때 각 요소의 너비 */
  align-items: center;
  gap: 10px;

  &:hover > span:first-child {
    background-color: var(--success-color);
  }

  &:hover > span:last-child {
    color: var(--success-color);
  }
`;

const Month = styled(Span).attrs({
  id: 'dashboard-history-card-month',
  $size: 's',
  $weight: 'bold',
})`
  transition: background-color 0.2s ease-in-out;

  margin-left: -4px;

  width: 40px;
  padding: 8px 12px;
  border-radius: 30px;

  border: 1px solid var(--container-border);
  text-align: center;
`;

const Description = styled(Span).attrs({
  id: 'dashboard-history-card-description',
  $size: 's',
})`
  transition: color 0.2s ease-in-out;
`;

export const HistoryElement = ({ history }) => {
  const { openConfirm, closeConfirm } = useConfirm();
  const { openAlert } = useAlert();
  const { showLoading, hideLoading } = useLoading();

  // 연혁 편집을 위한 Reference
  const refs = {
    year: useRef(),
    month: useRef(),
  };

  HistoryElement.propTypes = {
    history: PropTypes.shape({
      history_id: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
      month: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  };

  // 연혁 요소를 눌렀을 때 이벤트
  function onClick() {
    openConfirm({
      title: '연혁 수정',
      content: (
        <EditHistory ref={refs} history={history} onDelete={DeleteHistory} />
      ),
      onConfirm: () => UpdateHistory(),
      confirm_label: '수정',
      cancel_label: '취소',
    });
  }

  // 연혁을 업데이트하는 이벤트
  function UpdateHistory() {
    const updated_history = {
      ...history,
      year: parseInt(refs.year.current.value),
      month: parseInt(refs.month.current.value),
      content: refs.content.current.value,
    };

    // 만약 변경된 내용 없이 기존과 같다면 중단
    // 객체를 비교할 때 값이 아닌 메모리 주소를 기준으로 비교하므로 비교시 무조건 false가 반환됨
    // 따라서 JSON 문자열로 변환 후 비교해야함 (JS 객체는 Key가 자동으로 정렬되는 것을 이용함)
    if (JSON.stringify(history) === JSON.stringify(updated_history)) {
      openAlert({
        title: '변경할 내용 없음',
        content: <Text>기존 연혁과 동일합니다.</Text>,
      });
      return;
    }

    if (
      !updated_history.year ||
      !updated_history.month ||
      !updated_history.content
    ) {
      openAlert({
        title: '정보 부족',
        content: <Text>모든 칸을 입력해주세요</Text>,
      });
      return;
    }

    // 문제가 없다면 서버 요청 시작
    showLoading({ message: '연혁을 수정하는 중...' });

    API.PUT(`/histories/${history.history_id}`, {
      body: updated_history,
    })
      .then((api_res) => {
        closeConfirm();
        openAlert({
          title: '연혁 수정됨',
          content: (
            <UpdatedHistory
              current_history={history}
              updated_history={api_res}
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

  // 연혁을 삭제하는 이벤트
  function DeleteHistory() {
    // 변경할 내용이 있다면 서버 요청 시작
    closeConfirm();
    showLoading({ message: '연혁을 삭제하는 중...' });

    API.DELETE(`/histories/${history.history_id}`)
      .then(() => {
        openAlert({
          title: '연혁 삭제됨',
          content: <Text>연혁을 삭제했어요.</Text>,
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
    <CardWrapper onClick={() => onClick()}>
      <Month>{history?.month}월</Month>
      <Description>{history?.content}</Description>
    </CardWrapper>
  );
};

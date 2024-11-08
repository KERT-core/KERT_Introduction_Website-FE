// import { useNavigate } from 'react-router-dom';

import { Text } from '@components/typograph/Text';
import { BoardContainer, BoardHeader } from './Board.styled';

/* 임원진은 다음 개발에 진행합니다. */
export const Executive = () => {
  // const navigate = useNavigate();
  // const data = {};

  return (
    <BoardContainer>
      <BoardHeader>임원진</BoardHeader>
      <Text>준비중</Text>
      {/* <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NumberDisplay
          label="전체 임원진 수"
          number={data?.wholeCount ?? 'ER'}
        />
        <NumberDisplay
          label="현재 임원진 수"
          number={data?.displayCount ?? 'ER'}
        />
      </div>
      <BoardButton onClick={() => navigate('./executive')}>
        임원진 추가/제거로 이동
      </BoardButton> */}
    </BoardContainer>
  );
};

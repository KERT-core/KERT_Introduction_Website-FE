// import { useNavigate } from 'react-router-dom';

import { Text } from '@components/typograph/Text';
import { NumberDisplay } from '@components/display/NumberDisplay';
import { BoardButton, BoardContainer, BoardHeader } from './Board.styled';

export const Post = () => {
  // const navigate = useNavigate();
  // const data = {};

  return (
    <BoardContainer>
      <BoardHeader>소식지</BoardHeader>
      <Text>준비중</Text>
      {/* <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NumberDisplay
          label="게시한 소식지 수"
          detailed_label="전체 기간"
          number={data?.wholeCount ?? 'ER'}
        />
        <NumberDisplay
          label="게시한 소식지 수"
          detailed_label="지난 28일"
          number={data?.perMonthCount ?? 'ER'}
        />
      </div>
      <BoardButton onClick={() => navigate('/posts')}>
        소식지 페이지로 이동
      </BoardButton> */}
    </BoardContainer>
  );
};

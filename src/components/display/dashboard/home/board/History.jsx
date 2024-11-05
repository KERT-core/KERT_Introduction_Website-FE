import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { NumberDisplay } from '@components/display/NumberDisplay';
import {
  BoardButton,
  BoardContainer,
  BoardHeader,
  SkeletonBoardContainer,
} from './Board.styled';

import { API } from '@/utils/api';
import { refineHistories } from '@/utils/refineHistory';

export const History = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(
    'history',
    async () => {
      const res = await API.GET('/histories');
      return res.data;
    },
    { retry: 2 },
  );

  if (isLoading) {
    return <SkeletonBoardContainer width="360px" height="240px" />;
  }

  return (
    <BoardContainer>
      <BoardHeader>연혁</BoardHeader>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NumberDisplay label="전체 연혁 개수" number={data?.length ?? 'ER'} />
        <NumberDisplay
          label="연도 개수"
          number={data ? Object.keys(refineHistories(data)).length : 'ER'}
        />
      </div>
      <BoardButton onClick={() => navigate('./history')}>
        연혁 추가/제거로 이동
      </BoardButton>
    </BoardContainer>
  );
};

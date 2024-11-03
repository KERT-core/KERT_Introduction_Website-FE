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

export const User = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(
    'user',
    async () => {
      const res = await API.GET('/users');
      return res.data;
    },
    { retry: 2 },
  );

  if (isLoading) {
    return <SkeletonBoardContainer width="360px" height="240px" />;
  }

  return (
    <BoardContainer>
      <BoardHeader>회원</BoardHeader>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NumberDisplay label="가입한 회원 수" number={data?.length ?? 'ER'} />
      </div>
      <BoardButton onClick={() => navigate('./users')}>
        회원 관리로 이동
      </BoardButton>
    </BoardContainer>
  );
};

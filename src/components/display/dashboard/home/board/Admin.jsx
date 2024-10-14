import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { NumberDisplay } from '../../../NumberDisplay';
import {
  BoardButton,
  BoardContainer,
  BoardHeader,
  SkeletonBoardContainer,
} from './Board.styled';

import { API } from '../../../../../utils/api';

export const Admin = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(
    'admin',
    async () => {
      const data = await API.GET('/admin', {
        headers: { Authorization: localStorage.getItem('accessToken') },
      });
      return data;
    },
    { retry: 2 },
  );

  if (isLoading) {
    return <SkeletonBoardContainer width="360px" height="240px" />;
  }

  return (
    <BoardContainer>
      <BoardHeader>관리자</BoardHeader>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NumberDisplay label="등록된 관리자 수" number={data?.length ?? 'ER'} />
      </div>
      <BoardButton onClick={() => navigate('./admin')}>
        관리자 추가/제거로 이동
      </BoardButton>
    </BoardContainer>
  );
};

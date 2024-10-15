import { Text } from '@components/typograph/Text.jsx';

import { Header } from './Dashboard.styled.js';
import { UserListContainer, UserHeader, UserList } from './Users.styled.js';
import {
  UserElement,
  UserElementLoading,
} from '@components/display/dashboard/user/UserElement.jsx';

import { API } from '@/utils/api.js';
import { useQuery } from 'react-query';

export default function User() {
  const { data, isLoading, isError } = useQuery(
    'user',
    async () => {
      const data = await API.GET('/users', {
        headers: { Authorization: localStorage.getItem('accessToken') },
      });
      return data;
    },
    { retry: 2 },
  );

  return (
    <>
      <Header>관리자 추가/제거</Header>
      <UserListContainer>
        {/* 헤더 */}
        <UserHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Text size="l" weight="bold">
              일반 유저 목록
            </Text>
            <Text size="s" color="--secondary-text-color">
              표시된 계정을 눌러서 계정을 삭제합니다.
            </Text>
          </div>
        </UserHeader>
        {/* 유저 리스트 */}
        {isError ? (
          <></>
        ) : (
          <UserList>
            {!isLoading && data ? (
              data.map((user, index) => <UserElement key={index} user={user} />)
            ) : (
              <>
                <UserElementLoading />
                <UserElementLoading />
                <UserElementLoading />
                <UserElementLoading />
                <UserElementLoading />
              </>
            )}
          </UserList>
        )}
      </UserListContainer>
    </>
  );
}

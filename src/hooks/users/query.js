import { useQuery } from 'react-query';
import { API } from '@/utils/api';

export function useUsersQuery() {
  return useQuery({
    queryKey: 'users',
    queryFn: async () => {
      const res = await API.GET('/users');
      return res;
    },
  });
}

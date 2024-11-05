import { useQuery } from 'react-query';
import { API } from '@/utils/api';
import { refineHistories } from '../../utils/refineHistory';

export function useHistoriesQuery() {
  return useQuery({
    queryKey: 'histories',
    queryFn: async () => {
      try {
        const res = await API.GET('/histories');
        return refineHistories(res.data);
      } catch {
        // console.warn(`History API 요청에 실패했습니다.`);
        return {};
      }
    },
  });
}

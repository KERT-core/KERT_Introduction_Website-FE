// 대시보드 이동 시 이전에 요청한 API 응답 데이터를 저장합니다.
// 즉, API 재요청을 방지하는 용도입니다.
// 사용자가 최초 메뉴 접속 이후 새로운 데이터를 표시하려면 새로고침 등이 필요합니다.

import { create } from 'zustand';

/**
 * API 응답 형식에 맞는 history 오브젝트를 받으면 아래와 같이 재정렬 합니다.
 * 1. 연도별로 구분 (2021,2023,2019...)
 * 2. 연도 기준 내림차순 정렬 (2023,2021,2019...)
 * 2. 연도 내부에서 월 기준 오름차순 정렬 (1, 2, 3, 4...)
 * */
const refineHistories = (histories) => {
  const groupedByYear = histories.reduce((acc, item) => {
    const year = item.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {});

  // 각각 연도의 요소를 month순으로 정렬
  Object.keys(groupedByYear).forEach((year) => {
    groupedByYear[year].sort((a, b) => a.month - b.month);
  });

  return groupedByYear;
};

const useHistory = create((set) => ({
  histories: {},

  // 외부 컴포넌트에서 API 응답을 받고 저장하는 용도입니다.
  saveHistory: (api_res) => {
    const refined_histories = refineHistories(api_res);
    set({ histories: refined_histories });
  },
}));

export default useHistory;

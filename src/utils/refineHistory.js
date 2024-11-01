/**
 * API 응답 형식에 맞는 history 오브젝트를 받으면 아래와 같이 재정렬 합니다.
 * 1. 연도별로 구분 (2021,2023,2019...)
 * 2. 연도 기준 오름차순 정렬 (2023,2021,2019...)
 * 2. 연도 내부에서 월 기준 오름차순 정렬 (1, 2, 3, 4...)
 * */
export const refineHistories = (histories) => {
  if (!histories) {
    return {};
  }

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

/**
 * API 응답 형식에 맞는 history 오브젝트를 받으면 아래와 같이 재정렬 합니다.
 * 1. 연도별로 구분
 * 2. 월별로 정렬
 * */
export const refineHistoryRes = (history) => {
  const groupedByYear = history.reduce((acc, item) => {
    const year = item.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {});

  // 각 연도별로 month순으로 정렬
  Object.keys(groupedByYear).forEach((year) => {
    groupedByYear[year].sort((a, b) => a.month - b.month);
  });

  return groupedByYear;
};

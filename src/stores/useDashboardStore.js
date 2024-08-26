// 대시보드 이동 시 이전에 요청한 API 응답 데이터를 저장합니다.
// 즉, API 재요청을 방지하는 용도입니다.
// 사용자가 최초 메뉴 접속 이후 새로운 데이터를 표시하려면 새로고침 등이 필요합니다.

import { create } from 'zustand';

const useDashboardStore = create((set) => ({
  // 대시보드 데이터를 저장할 상태
  home: null,
  history: null,
  executive: null,
  admin: null,
  users: null,

  // setHome()으로 Home 데이터를 저장합니다.
  setHome: (newData) => {
    set({
      home: newData,
    });
  },
}));

export default useDashboardStore;

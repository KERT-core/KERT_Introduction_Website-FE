// 대시보드 이동 시 이전에 요청한 API 응답 데이터를 저장합니다.
// 즉, API 재요청을 방지하는 용도입니다.
// 사용자가 최초 메뉴 접속 이후 새로운 데이터를 표시하려면 새로고침 등이 필요합니다.

import { create } from 'zustand';

const useAdmin = create((set) => ({
  admins: [],

  // 외부 컴포넌트에서 API 응답을 받고 저장하는 용도입니다.
  saveAdmins: (newList) => {
    set({ admins: newList });
  },
}));

export default useAdmin;

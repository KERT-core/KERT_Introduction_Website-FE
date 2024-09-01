// 대시보드 이동 시 이전에 요청한 API 응답 데이터를 저장합니다.
// 즉, API 재요청을 방지하는 용도입니다.
// 사용자가 최초 메뉴 접속 이후 새로운 데이터를 표시하려면 새로고침 등이 필요합니다.

import { create } from 'zustand';
import { refineHistoryRes } from '../../utils/dashboard/refineHistoryRes';

const useHistory = create((set) => ({
  history: [],
  refined_history: {},

  // // 연혁을 추가합니다.
  // // newHistory는 API 명세서 참고
  // addHistory: (newHistory) => {
  //   set((state) => ({
  //     history: [...state.history, { ...newHistory, id: state.history.length }],
  //   }));
  //   set((state) => ({
  //     // 변경된 history를 다시 그루핑합니다.
  //     refined_history: refineHistoryRes(state.history),
  //   }));
  // },

  // // 연혁을 제거 합니다.
  // removeHistory: (id) => {
  //   set((state) => ({
  //     // filter로 전달받은 id와 다른 것들만 저장합니다.
  //     history: state.history.filter((hist) => hist.id !== id),
  //   }));
  //   set((state) => ({
  //     // 변경된 history를 다시 그루핑합니다.
  //     refined_history: refineHistoryRes(state.history),
  //   }));
  // },

  // 외부 컴포넌트에서 API 응답을 받고 저장하는 용도입니다.
  saveHistory: (newList) => {
    set({ history: newList });
    set({ refined_history: refineHistoryRes(newList) });
  },
}));

export default useHistory;

import { create } from 'zustand';

/**
 * Loading Screen (전체화면)
 * @param {boolean} isOpen 로딩창 여닫이
 * @param {React.ReactHTMLElement} message 내용
 */
const useLoading = create((set) => ({
  // 로딩창의 초기 상태
  isOpen: false,
  message: '',

  // 로딩창을 열고 내용 설정
  showLoading: ({ message = '잠시만 기다려주세요...' }) => {
    set({
      isOpen: true,
      message: message,
    });
  },

  // 로딩창을 닫은 후 내용 초기화하여 메모리 절약
  hideLoading: () => {
    set({
      isOpen: false,
      message: '',
    });
  },
}));

export default useLoading;

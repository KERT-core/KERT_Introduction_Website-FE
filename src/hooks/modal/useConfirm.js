import { create } from 'zustand';

/**
 * Confirm Modal
 * @param {string} title 상단 제목
 * @param {React.ReactHTMLElement} content 내용
 * @param {function} onConfirm 확인을 눌렀을 때 실행할 함수
 * @param {function} onCancel 취소를 눌렀을 때 실행할 함수
 * @param {string} confirm_label 확인 버튼 라벨
 * @param {string} cancel_label 취소 버튼 라벨
 * @param {string} confirm_color 확인 버튼 색
 * @param {string} cancel_color 취소 버튼 색
 */
const useConfirm = create((set, get) => ({
  isOpen: false, // 모달의 초기 상태
  title: '',
  content: null,
  onConfirm: null,
  onCancel: null,
  confirm_label: '',
  confirm_color: '',
  cancel_label: '',
  cancel_color: '',

  // 모달을 열고 내용 설정
  openConfirm: ({
    title = '',
    content,
    onConfirm = null,
    onCancel = null,
    confirm_label = '예',
    confirm_color = 'var(--success-color)',
    cancel_label = '아니오',
    cancel_color = 'var(--container-border)',
  }) => {
    const { isOpen, closeConfirm } = get();

    if (isOpen) {
      closeConfirm();
      console.warn(
        '이미 열려있는 Confirm입니다. 기존 Confirm를 닫고 새로운 Confirm을 표시합니다.',
      );
    }

    set({
      isOpen: true,
      title: title,
      content: content,
      onConfirm: onConfirm ?? closeConfirm,
      onCancel: onCancel ?? closeConfirm,
      confirm_label: confirm_label,
      confirm_color: confirm_color,
      cancel_label: cancel_label,
      cancel_color: cancel_color,
    });
  },

  // 모달을 닫은 후 내용 초기화하여 메모리 절약
  closeConfirm: () => {
    const { isOpen } = get();

    if (!isOpen) {
      console.warn('이미 닫혀있는 Confirm입니다.');
      return;
    }
    set({
      isOpen: false,
      title: '',
      content: null,
      onConfirm: null,
      onCancel: null,
      confirm_label: '',
      confirm_color: '',
      cancel_label: '',
      cancel_color: '',
    });
  },
}));

export default useConfirm;

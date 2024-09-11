import React from 'react';
import { create } from 'zustand';

/**
 * Alert Modal
 * @param {boolean} isOpen 모달 여닫이
 * @param {string} title 상단 제목
 * @param {React.ReactHTMLElement} content 내용
 * @param {string} ok_label 닫는 버튼 라벨
 * @param {string} ok_color 닫는 버튼 색
 */
const useAlert = create((set, get) => ({
  // 모달의 초기 상태
  isOpen: false,
  onClose: null, // 닫는 버튼을 누를 때 실행할 함수
  title: '',
  content: null,
  ok_label: '',
  ok_color: '',

  // 모달을 열고 내용 설정
  openAlert: ({
    title = '',
    onClose = null,
    content = null,
    ok_label = '확인',
    ok_color = 'var(--primary-color)',
  }) => {
    const { isOpen, closeAlert } = get();

    if (isOpen) {
      closeAlert();
      console.warn(
        '이미 열려있는 Alert입니다. 기존 Alert를 닫고 새로운 Alert를 표시합니다.',
      );
    }
    set({
      isOpen: true,
      title: title,
      onClose: onClose,
      content: content,
      ok_label: ok_label,
      ok_color: ok_color,
    });
  },

  // 모달을 닫은 후 내용 초기화하여 메모리 절약
  closeAlert: () => {
    const { isOpen } = get();

    if (!isOpen) {
      console.warn('이미 닫혀있는 Alert입니다.');
      return;
    }
    set({
      isOpen: false,
      title: '',
      onClose: null,
      content: null,
      ok_label: '',
      ok_color: '',
    });
  },
}));

export default useAlert;

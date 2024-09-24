/** 정규식 저장소 */

// 학번 검사 (숫자가 연속된 10글자인지 확인)
export const STUDENT_ID_REGEX = /\d\d\d\d\d\d\d\d\d\d/i;

// 기수 검사 (연도.월 인지 확인 => 2024.1)
export const GENERATION_REGEX = /\d\d\d\d\.[1-9]+/i;

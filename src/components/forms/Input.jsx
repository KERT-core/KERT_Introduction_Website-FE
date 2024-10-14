import { forwardRef } from 'react';

import styled from 'styled-components';
import { Span } from '@components/typograph/Text';

const InputWrapper = styled.div`
  width: 100%;
`;

const Label = styled(Span).attrs({
  $size: 's',
  $weight: 'regular',
})`
  margin-left: 6px;
  margin-bottom: 6px;
`;

export const RawInput = styled.input.attrs((props) => ({
  type: props.type || 'text',
}))`
  transition: border 0.3s ease-in-out;

  display: block;
  padding: 16px;
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;

  background-color: var(--container-primary-color);
  outline: none;
  border: 1px solid var(--container-border);

  color: var(--primary-text-color);

  font-family: NanumSquareNeo, sans-serif;

  &:last-child {
    margin-bottom: 20px;
  }

  &:focus {
    border: 1px solid var(--primary-color);
  }

  // input[type="number"]에서 화살표 컨트롤을 숨깁니다.
  // 크롬, 사파리, 엣지, 오페라
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // 파이어폭스
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const Input = forwardRef(({ label, value, ...props }, ref) => {
  return (
    <InputWrapper>
      <Label>{label ?? '여기에 입력'}</Label>
      <RawInput ref={ref} value={value} {...props} />
    </InputWrapper>
  );
});

Input.displayName = 'Input';

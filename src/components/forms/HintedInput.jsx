import { forwardRef } from 'react';
import styled from 'styled-components';

import { Span } from '@components/typograph/Text';

const HintedInputWrapper = styled.div`
  transition: background-color 0.2s ease-in-out;

  position: relative;
  box-sizing: border-box;

  padding: 12px 14px;
  border-radius: 10px;

  /* 자식이 focus되면 */
  &:focus-within {
    background-color: var(--transparent-button-background); /* 변경될 배경색 */
  }
`;

const Label = styled(Span).attrs({
  $size: 'm',
  $weight: 'bold',
})`
  margin-bottom: 6px;
`;

const Input = styled.input`
  font-family: 'NanumSquareNeo', sans-serif;

  width: 100%;

  position: relative;
  margin: 0;
  padding: 0;

  outline: none;
  border: none;

  font-size: 16px;

  color: var(--secondary-text-color);
  background-color: transparent;
`;

export const HintedInput = forwardRef(
  ({ label, defaultValue, ...props }, ref) => {
    return (
      <HintedInputWrapper>
        <Label>{label}</Label>
        <Input
          ref={ref}
          defaultValue={defaultValue}
          placeholder="입력"
          {...props}
        />
      </HintedInputWrapper>
    );
  },
);

HintedInput.displayName = 'HintedInput';

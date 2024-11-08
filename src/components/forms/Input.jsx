import { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Span } from '@components/typograph/Text';

const InputWrapper = styled.div`
  width: 100%;
`;

const Label = styled(Span).attrs({
  $size: 's',
  $weight: 'regular',
})`
  transition: color 0.3s ease-in-out;

  margin-left: 6px;
  margin-bottom: 6px;
  ${(props) => props.$error && 'color: var(--danger-color);'}
`;

const ErrorLabel = styled(Span).attrs({
  $size: 'xs',
  $weight: 'regular',
  $color: '--danger-color',
})`
  margin-left: 6px;
  margin-top: 12px;
`;

export const RawInput = styled.input.attrs((props) => ({
  type: props.type || 'text',
}))`
  transition: border 0.3s ease-in-out;

  display: block;
  padding: 16px;
  width: 100%;
  border-radius: 12px;
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

  ${(props) => props.$error && 'border-color: var(--danger-color);'}
`;

export const Input = forwardRef(
  ({ label, error_label, value, ...props }, ref) => {
    return (
      <InputWrapper>
        <Label $error={!!error_label}>{label ?? '여기에 입력'}</Label>
        <RawInput ref={ref} value={value} $error={!!error_label} {...props} />
        {error_label && <ErrorLabel>{error_label ?? '여기에 입력'}</ErrorLabel>}
      </InputWrapper>
    );
  },
);

Input.displayName = 'Input';
Input.propTypes = {
  label: PropTypes.string,
  error_label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

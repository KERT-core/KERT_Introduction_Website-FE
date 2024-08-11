import React from 'react';
import styled from 'styled-components';

// Toggle 컴포넌트를 위한 스타일드 컴포넌트 정의
const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
    opacity: 0;
    width: 0;
    height: 0;
`;

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.$color.off ?? "#ccc"};
    transition: 0.4s;
    border-radius: 34px;

    &:before {
        position: absolute;
        content: '';
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.3s ease-out;
        border-radius: 50%;
    }

    ${Checkbox}:checked + & {
        background-color: ${(props) => props.$color.on ?? "var(--primary--color)"};
    }

    ${Checkbox}:checked + &:before {
        transform: translateX(24px);
    }
`;

export const Toggle = ({ checked=false, onChange=null, color={on:null, off:null} }) => {
  return (
    <Switch>
      <Checkbox onChange={onChange} checked={checked} />
      <Slider $color={{on: color.on, off: color.off}} />
    </Switch>
  );
}

import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Flat / Outline / Translucent
 * 위 버튼들의 부모로 사용되는 요소입니다.
 *  기본 스타일을 지정할 수 있습니다.
 * @type {styled.button}
 */
export const IButton = styled.button`
  position: relative;
  cursor: pointer;
  overflow: hidden;

  width: ${(props) => props.$width ?? 'fit-content'};
  height: ${(props) => props.$height ?? 'fit-content'};
  padding: 15px 30px;
  border-radius: 12px;

  border: none;
  outline: none;
  color: ${(props) => {
    if (props.$text_color?.startsWith('--')) {
      return `var(${props.$text_color});`;
    } else {
      return props.$text_color ?? 'white';
    }
  }};
  font-weight: 700;

  box-sizing: border-box;

  &:after {
    z-index: 10;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background-color 0.2s ease-out;
    background-color: #ffffff00;
  }

  &:hover:after {
    background-color: #ffffff10;
  }

  &:active:after {
    background-color: #ffffff20;
  }
`;

/**
 * 플랫 버튼입니다.
 * @type {styled.button}
 */
const FlatButton = styled(IButton)`
  background-color: ${(props) => {
    if (props.$color?.startsWith('--')) {
      return `var(${props.$color});`;
    } else {
      return props.$color ?? 'var(--primary-color)';
    }
  }};
`;

/**
 * 라운드 버튼입니다.
 * @type {styled.button}
 */
const RoundedButton = styled(IButton)`
  border-radius: 1000px;
  background-color: ${(props) => {
    if (props.$color?.startsWith('--')) {
      return `var(${props.$color});`;
    } else {
      return props.$color ?? 'var(--primary-color)';
    }
  }};
`;

/**
 * 아웃 라인 버튼입니다.
 * @type {styled.button}
 */
const OutlineButton = styled(IButton)`
  background-color: transparent;
  border: 2px solid
    ${(props) => {
      if (props.$color?.startsWith('--')) {
        return `var(${props.$color});`;
      } else {
        return props.$color ?? 'var(--primary-color)';
      }
    }};
  color: ${(props) => {
    if (props.$text_color?.startsWith('--')) {
      return `var(${props.$text_color});`;
    } else {
      return props.$text_color ?? 'var(--primary-color)';
    }
  }};
`;

/**
 * 아웃 라인 버튼입니다.
 * @type {styled.button}
 */
const TranslucentButton = styled(IButton)`
  &:before {
    z-index: 10;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => {
      if (props.$color?.startsWith('--')) {
        return `var(${props.$color});`;
      } else {
        return props.$color ?? 'var(--primary-text-color)';
      }
    }};
    opacity: 0.05;
  }
  background-color: transparent;
  color: ${(props) => {
    if (props.$text_color?.startsWith('--')) {
      return `var(${props.$text_color});`;
    } else {
      return props.$text_color ?? 'var(--primary-text-color)';
    }
  }};
`;

/**
 * 폼 작성용 버튼 컴포넌트
 * @param {string} type Flat | outline | translucent
 * @param {string} width fit-content | 16px | string
 * @param {string} height fit-content | 16px | string
 * @param {any} children 버튼에 표시될 요소
 */

export const Button = ({
  type = 'flat',
  width,
  height,
  color,
  text_color,
  onClick,
  children,
}) => {
  switch (type) {
    case 'flat':
      return (
        <FlatButton
          $width={width}
          $height={height}
          $color={color}
          $text_color={text_color}
          onClick={onClick}
        >
          {children}
        </FlatButton>
      );
    case 'rounded':
      return (
        <RoundedButton
          $width={width}
          $height={height}
          $color={color}
          $text_color={text_color}
          onClick={onClick}
        >
          {children}
        </RoundedButton>
      );
    case 'outline':
      return (
        <OutlineButton
          $width={width}
          $height={height}
          $color={color}
          $text_color={text_color}
          onClick={onClick}
        >
          {children}
        </OutlineButton>
      );
    case 'translucent':
      return (
        <TranslucentButton
          $width={width}
          $height={height}
          $color={color}
          $text_color={text_color}
          onClick={onClick}
        >
          {children}
        </TranslucentButton>
      );
    default:
      // console.warn('[Button.jsx] 알 수 없는 버튼 타입입니다.');
      return <FlatButton>{children}</FlatButton>;
  }
};

Button.propTypes = {
  type: PropTypes.oneOf(['flat', 'rounded', 'outline', 'translucent']),
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  text_color: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

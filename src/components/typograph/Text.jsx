import styled from 'styled-components';

/**
 * @typedef {"xs" | "s" | "m" | "l" | "xl" | "sxl" | string} Size
 * @typedef {"light" | "regular" | "bold" | "extrabold" | "heavy"} Weight
 * @typedef {"--primary-text-color" | "#FFFFFF" | "white" | string} Color
 *
 * @typedef {Object} IText
 * @property {Size} size
 * @property {Weight} weight
 * @property {Color} color
 */
export const Span = styled.span`
  display: block;
  font-size: ${(props) => {
    switch (props.$size) {
      case 'xs':
        return '12px';
      case 's':
        return '14px';
      case 'm':
        return '16px';
      case 'l':
        return '20px';
      case 'xl':
        return '24px';
      case 'sxl':
        return '28px';
      default:
        return props.$size ?? '16px';
    }
  }};

  font-weight: ${(props) => {
    switch (props.$weight) {
      case 'light':
        return '300';
      case 'regular':
        return '400';
      case 'bold':
        return '700';
      case 'extrabold':
        return '800';
      case 'heavy':
        return '900';
      default:
        return props.$weight ?? 'regular';
    }
  }};

  color: ${(props) => {
    if (props.$color?.startsWith('--')) {
      return `var(${props.$color});`;
    } else {
      return props.$color ?? 'var(--primary-text-color)';
    }
  }};
`;

/**
 * @typedef {Span.IText} IText
 * @typedef {Object} IChildren
 * @property {React.ReactNode} children 표시될 Text 내용
 */

/**
 * Text Component
 * 스타일링된 span을 생성합니다.
 * 기본 : m, regular
 * @param {IText & IChildren} props
 */
export const Text = ({
  size = 'm',
  weight = 'regular',
  color = '--primary-text-color',
  children = '',
}) => {
  return (
    <Span $size={size} $weight={weight} $color={color}>
      {children}
    </Span>
  );
};

import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * @typedef {"xs" | "s" | "m" | "l" | "xl" | string} Size
 * @typedef {"--primary-color" | "#FFFFFF" | "white" | string} Color
 *
 * @typedef {Object} ICheckbox
 * @property {Size} size
 * @property {Color} color
 * @property {boolean} checked
 * @property {function} onChange
 */
const ICheckbox = styled.input.attrs((props) => ({
  type: 'checkbox',
  checked: props.checked,
  onChange: props.onChange,
}))`
  appearance: none;
  transition:
    border 0.2s ease-in-out,
    background-color 0.2s ease-in-out;
  outline: none;
  cursor: pointer;

  padding: 0;
  border-radius: 4px;

  ${(props) => {
    switch (props.$size) {
      case 's':
        return 'width: 16px; height: 16px;';
      case 'm':
        return 'width: 20px; height: 20px;';
      case 'l':
        return 'width: 24px; height: 24px;';
      default:
        return `width: ${props.$size}; height: ${props.$size};`;
    }
  }}

  background-color: transparent;
  border: 2px solid var(--secondary-text-color);

  &:checked {
    background-color: ${(props) => {
      if (props.$color?.startsWith('--')) {
        return `var(${props.$color});`;
      } else {
        return props.$color ?? 'var(--primary-color)';
      }
    }};
    background-image: url(/src/assets/icons/checked.svg);
    background-size: cover;
    border: 2px solid
      ${(props) => {
        if (props.$color?.startsWith('--')) {
          return `var(${props.$color});`;
        } else {
          return props.$color ?? 'var(--primary-color)';
        }
      }};
  }
`;

/**
 * @typedef {ICheckbox.ICheckbox} ICheckbox
 * @property {React.ReactNode} children 표시될 Text 내용
 */

/**
 * Checkbox Component
 * 스타일링된 input[type="checkbox"]를 생성합니다.
 * @param {ICheckbox} props
 */
export const Checkbox = ({
  size = 'm',
  color = '--primary-color',
  checked,
  onChange = () => {},
}) => {
  return (
    <ICheckbox
      $size={size}
      $color={color}
      checked={checked}
      onChange={onChange}
    ></ICheckbox>
  );
};

Checkbox.propTypes = {
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'string']),
  color: PropTypes.oneOf(['--primary-color', '#FFFFFF', 'white', 'string']),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

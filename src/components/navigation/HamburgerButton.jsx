import styled from 'styled-components';
import PropTypes from 'prop-types';

const HamburgerWrapper = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const Bar = styled.div`
  height: 2px;
  width: 100%;
  background-color: var(--primary-text-color);
  transition: 0.3s ease;
  transform-origin: left;

  /* 애니메이션을 위한 조건부 스타일 */
  ${({ $active, $position }) => {
    if ($active && $position === 'top')
      return `transform: rotate(45deg) translate(0px, -2px);`;
    if ($active && $position === 'middle') return `opacity: 0;`;
    if ($active && $position === 'bottom')
      return `transform: rotate(-45deg) translate(0px, 2px);`;
    return '';
  }}
`;

export default function HamburgerButton({ active, onToggle }) {
  const handleToggle = () => {
    if (onToggle) {
      onToggle(!active);
    }
  };

  return (
    <HamburgerWrapper onClick={handleToggle}>
      <Bar $active={active} $position="top" />
      <Bar $active={active} $position="middle" />
      <Bar $active={active} $position="bottom" />
    </HamburgerWrapper>
  );
}

HamburgerButton.propTypes = {
  active: PropTypes.bool,
  onToggle: PropTypes.func,
};

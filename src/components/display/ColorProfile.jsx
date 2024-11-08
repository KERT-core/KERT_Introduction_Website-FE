import styled from 'styled-components';
import PropTypes from 'prop-types';

const ColorProfile_ = styled.div`
  transition: background-color 0.2s ease-in-out;

  position: relative;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border-radius: ${(props) => props.radius};

  background-color: ${(props) => props.color};

  overflow: hidden;

  &:before {
    position: absolute;
    content: '';

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

export const ColorProfile = ({
  width = '48px',
  height = '48px',
  color,
  radius = '100%',
}) => {
  return (
    <ColorProfile_
      width={width}
      height={height}
      color={color}
      radius={radius}
    />
  );
};

ColorProfile.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string.isRequired,
  radius: PropTypes.string,
};

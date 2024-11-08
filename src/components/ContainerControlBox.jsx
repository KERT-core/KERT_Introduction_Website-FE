import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerControlBoxWrapper = styled.div.attrs({
  className: 'container-controlbox',
})`
  width: 100%;

  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent || 'flex-end'};
  align-items: center;
`;

export const ContainerControlBox = ({
  justifyContent = 'flex-end',
  children,
}) => {
  return (
    <ContainerControlBoxWrapper $justifyContent={justifyContent}>
      {children}
    </ContainerControlBoxWrapper>
  );
};

ContainerControlBox.propTypes = {
  justifyContent: PropTypes.string,
  children: PropTypes.node.isRequired,
};

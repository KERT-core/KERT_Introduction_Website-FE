import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { SNSIcon } from '../../../assets/icons/sns';

const ButtonWrapper = styled(Link)`
  width: clamp(3.5vw, 55px, 70px);
  height: clamp(3.5vw, 55px, 70px);

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #080f17;
  border-radius: 100%;
`;

const Icon = ({ type = 'github' }) => {
  const size = '42.8%';
  switch (type) {
    case 'facebook':
      return <SNSIcon.Facebook opacity="0.5" width={size} height={size} />;
    case 'github':
      return <SNSIcon.Github opacity="0.5" width={size} height={size} />;
    case 'instagram':
      return <SNSIcon.Instagram opacity="0.5" width={size} height={size} />;
    case 'youtube':
      return <SNSIcon.Youtube opacity="0.5" width={size} height={size} />;
    default:
      return <SNSIcon.Github opacity="0.5" width={size} height={size} />;
  }
};

Icon.propTypes = {
  type: PropTypes.string,
};

export const SNSButton = ({ type = 'github', href = './error' }) => {
  return (
    <ButtonWrapper to={href} target="_blank">
      <Icon type={type} />
    </ButtonWrapper>
  );
};

SNSButton.propTypes = {
  type: PropTypes.oneOf(['facebook', 'github', 'instagram', 'youtube']),
  href: PropTypes.string,
};

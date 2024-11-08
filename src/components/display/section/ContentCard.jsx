import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Span } from '@components/typograph/Text';

const ContentCardWrapper = styled.div`
  width: 320px;
  height: 250px;

  padding: 30px;
  box-sizing: border-box;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);

  // 그라데이션 테두리 적용
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    // padding 값이 클수록 테두리가 두꺼워짐
    padding: 1px;
    background: linear-gradient(135deg, #ffffff30, #ffffff16);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled(Span).attrs({
  $size: '22px',
  $weight: 'extrabold',
})`
  color: #ffffff;
`;

const Description = styled(Span).attrs({
  $size: 's',
  $weight: 'regular',
  $color: 'rgba(255, 255, 255, 0.5)',
})``;

export const ContentCard = ({ title, description, image_url }) => {
  return (
    <ContentCardWrapper>
      <Icon src={image_url} alt={title} />
      <TitleWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleWrapper>
    </ContentCardWrapper>
  );
};

ContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
};

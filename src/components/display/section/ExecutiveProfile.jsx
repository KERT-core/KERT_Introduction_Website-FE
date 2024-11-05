import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Span, Text } from '@components/typograph/Text';

const ExecutiveProfileWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  align-items: center;
  gap: 20px;

  text-align: ${({ $reverse }) => ($reverse ? 'right' : 'left')};
  word-break: keep-all;
`;

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ $reverse }) => ($reverse ? 'flex-end' : 'flex-start')};
  gap: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const NameInfo = styled.div`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  align-items: end;
  gap: 6px;
`;

const Name = styled(Span)`
  // 모바일 대응
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const GradientText = styled(Span).attrs({
  $weight: 'extrabold',
})`
  background-image: ${({ $color }) =>
    `linear-gradient(to right bottom, #FFFFFF, ${$color})`};
  -webkit-background-clip: text;
  color: transparent;

  // 모바일 대응
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Info = styled(Span)`
  // 모바일 대응
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Image = styled.div`
  width: 120px;
  height: 120px;
  background: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 14px;

  // 모바일 대응
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Description = styled(Span)`
  // 모바일 대응
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ExecutiveProfile = ({ profile, isReversed }) => {
  return (
    <ExecutiveProfileWrapper $reverse={isReversed}>
      <Image $imageUrl={profile.image_url} />
      <ProfileDescription $reverse={isReversed}>
        <TitleWrapper>
          <NameInfo $reverse={isReversed}>
            <Name $size="l" $weight="extrabold" $color="white">
              {profile.name}
            </Name>
            <GradientText $color={profile.color}>{profile.role}</GradientText>
          </NameInfo>
          <Info $size="s" $weight="light" $color="rgba(255, 255, 255, 0.7)">
            KERT {profile.group_number}기 {profile.major}{' '}
            {profile.student_id_year}학번
          </Info>
        </TitleWrapper>
        <DescriptionWrapper>
          <Description $size="m" $weight="regular" $color="white">
            {profile.description}
          </Description>
        </DescriptionWrapper>
      </ProfileDescription>
    </ExecutiveProfileWrapper>
  );
};

ExecutiveProfile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    group_number: PropTypes.number.isRequired,
    major: PropTypes.string.isRequired,
    student_id_year: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  isReversed: PropTypes.bool,
};

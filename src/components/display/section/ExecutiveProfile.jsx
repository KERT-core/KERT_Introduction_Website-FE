import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Span, Text } from '@components/typograph/Text';

const ExecutiveProfileWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  align-items: center;

  gap: 20px;
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

const GradientText = styled(Span).attrs({
  $weight: 'extrabold',
})`
  background-image: ${({ $color }) =>
    `linear-gradient(to right bottom, #FFFFFF, ${$color})`};
  -webkit-background-clip: text;
  color: transparent;
`;

const Image = styled.div`
  width: 120px;
  height: 120px;
  background: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 14px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

/*
profile: {
  name: string,
  role: string,
  group_number: number,
  major: string,
  student_id_year: number,
  description: [string],
  image_url: string,
  color: string,
}
*/

export const ExecutiveProfile = ({ profile, isReversed }) => {
  return (
    <ExecutiveProfileWrapper $reverse={isReversed}>
      <Image $imageUrl={profile.image_url} />
      <ProfileDescription $reverse={isReversed}>
        <TitleWrapper>
          <NameInfo $reverse={isReversed}>
            <Text size="l" weight="extrabold">
              {profile.name}
            </Text>
            <GradientText $color={profile.color}>{profile.role}</GradientText>
          </NameInfo>
          <Text size="s" weight="light" color="rgba(255, 255, 255, 0.7)">
            KERT {profile.group_number}기 {profile.major}{' '}
            {profile.student_id_year}학번
          </Text>
        </TitleWrapper>
        <DescriptionWrapper>
          <Text size="m" weight="regular">
            {profile.description}
          </Text>
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

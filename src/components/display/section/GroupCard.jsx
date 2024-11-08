import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Span, Text } from '@components/typograph/Text';

import GroupCardImage from '@/assets/GroupCard.svg';
import MaskImage from '@/assets/GroupCardMask.png';

const GroupCardWrapper = styled.div`
  position: relative;
  transition: transform 0.3s ease-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Mask = styled.div.attrs({
  id: 'mask',
})`
  backdrop-filter: blur(8px);
  position: relative;
  width: 335px;
  height: 232px;
  -webkit-mask-image: url(${MaskImage});
  mask-image: url(${MaskImage});
`;

const CardImage = styled(GroupCardImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 335px;
  height: 232px;
`;

const TabName = styled(Span).attrs({
  $size: 's',
  $weight: 'light',
  $color: 'white',
})`
  position: absolute;
  top: 13px;
  left: 22px;
`;

const Content = styled.div`
  position: absolute;
  left: 0;
  bottom: 1px;

  width: 100%;
  height: calc(100% - 30px);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 26px;
`;

const TitleWrapper = styled.div`
  width: 150px;

  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 10px;
`;

const HashtagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
`;

export const GroupCard = ({ name, logo_url, hashTags }) => {
  return (
    <GroupCardWrapper>
      <Mask>
        <CardImage alt={name} />
      </Mask>
      <TabName>{name}</TabName>
      <Content>
        <img width={90} height={90} src={logo_url} alt={name} />
        <TitleWrapper>
          <Text size="xl" weight="bold" color="white">
            {name}
          </Text>
          <HashtagWrapper>
            {hashTags.map((hashTag) => (
              <Text key={hashTag} size="xs" weight="light" color="#ffffff88">
                #{hashTag}
              </Text>
            ))}
          </HashtagWrapper>
        </TitleWrapper>
      </Content>
    </GroupCardWrapper>
  );
};

GroupCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo_url: PropTypes.string.isRequired,
  hashTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

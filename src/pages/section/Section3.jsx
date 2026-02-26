import styled from 'styled-components';

import { Span } from '@components/typograph/Text';
import { GroupCard } from '@/components/display/section/GroupCard';

import BackgroundImage from '@/assets/section_bg/section_3.png';
import HSpaceLogoURL from '@/assets/group_logo/hspace.png';
import KucisLogoURL from '@/assets/group_logo/kucis.png';
import CcaLogoURL from '@/assets/group_logo/cca.png';
import CseLogoURL from '@/assets/group_logo/cse.png';

const Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;
  padding: 60px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;

  background-color: black;
  background-position: center center;
  background-image: url(${BackgroundImage});
  background-size: cover;

  // 모바일 대응
  @media (max-width: 768px) {
    height: 100%;
    padding: 100px 0;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GroupCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  // 모바일 대응
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled(Span).attrs({
  $size: '45px',
  $weight: 'extrabold',
  $color: 'white',
})`
  margin-bottom: 30px;

  // 모바일 대응
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const SubTitle = styled(Span).attrs({
  $size: 'l',
  $weight: 'light',
  $color: 'white',
})`
  // 모바일 대응
  @media (max-width: 768px) {
    width: 80%;
    word-break: keep-all;
    font-size: 14px;
    text-align: center;
  }
`;

export default function Section3() {
  return (
    <Section id="partnership">
      <TitleWrapper>
        <Title>우리 모두 함께해요</Title>
        <SubTitle>
          KERT는 HSpace와 CCA의 소속으로 가입되어 수준 높은 활동을
          외부에서 체험할 수 있어요.
        </SubTitle> 
      </TitleWrapper>
      <GroupCardsWrapper>
        <GroupCard
          name="HSpace"
          logo_url={HSpaceLogoURL}
          hashTags={['hackers', 'space']}
        />
        <GroupCard
          name="CCA"
          logo_url={CcaLogoURL}
          hashTags={['전국사이버보안동아리연합']}
        />
        <GroupCard
          name="컴퓨터학부"
          logo_url={CseLogoURL}
          hashTags={['IT대학', '천재들의 모임']}
        />
      </GroupCardsWrapper>
    </Section>
  );
}

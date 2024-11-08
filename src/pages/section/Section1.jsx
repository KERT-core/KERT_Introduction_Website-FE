import styled from 'styled-components';

import { Span } from '@components/typograph/Text';

import BackgroundImage from '@/assets/section_bg/section_1.png';
import { SquareLogo } from '@/assets/kert_logos';
import KertTextLogo from '@/assets/kert_logos/White_Text.png';

const Section = styled.section`
  width: 100vw;
  height: 100vh;w
  background-color: black;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;

  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6) 30%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 242px;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  // 모바일 대응
  @media (max-width: 768px) {
    top: 180px;
    gap: 30px;
  }
`;

const TextLogo = styled.img.attrs({
  src: KertTextLogo,
  alt: 'KERT Logo',
  width: 344,
  height: 44,
})`
  // 모바일 대응
  @media (max-width: 768px) {
    width: 200px;
    height: 26px;
  }
`;

const SubTitle = styled(Span).attrs({
  $size: '24px',
  $weight: 'regular',
  $color: '#FFFFFF88',
})`
  // 모바일 대응
  @media (max-width: 768px) {
    font-size: 16px;
    word-break: keep-all;
  }
`;

const DecorationLogo = styled(SquareLogo)`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);

  width: 584px;
  height: 584px;
  fill: white;

  mask-image: linear-gradient(150deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));

  // 모바일 대응
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    transform: translate(-50%, 20%);
  }
`;

export default function Section1() {
  return (
    <Section id="main">
      {/* 상단 로고와 설명 텍스트 */}
      <TitleWrapper>
        <TextLogo />
        <SubTitle>KNU Compuer Emergency Response Team</SubTitle>
      </TitleWrapper>
      {/* 하단 거대 로고 */}
      <DecorationLogo />
    </Section>
  );
}

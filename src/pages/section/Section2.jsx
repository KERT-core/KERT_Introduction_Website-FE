import styled from 'styled-components';

import { Text, Span } from '@components/typograph/Text';

import BackgroundImage from '@/assets/section_bg/section_2.png';
import LockIconPng from '@/assets/kert_logos/White_Lock.png';

const Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  background-color: #040c16;
  background-image: url(${BackgroundImage});
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: center 30%;
  background-blend-mode: color-dodge;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #040c16a0, #030a16f0);
  }

  overflow: hidden;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 1280px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 100px;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const TitleWrapper = styled.div`
  // 아래로 내림으로써 시각적으로 자물쇠와 중앙 밸런스를 맞춥니다.
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 8px;
`;

const LockIcon = styled.img.attrs({
  src: LockIconPng,
})`
  width: 465px;
  height: 465px;
  opacity: 0.25;
  transform: rotate(-15deg);
  mask-image: linear-gradient(150deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const StackWrapper = styled.div`
  display: flex;
  gap: 100px;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

const GradientText = styled(Span)`
  background: ${({ $gradient }) => $gradient};
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

export default function MainPage() {
  return (
    <Section>
      {/* <Overlay /> */}
      <Content>
        <LeftContent>
          <TitleWrapper>
            <Text size="40px" weight="extrabold" color="white">
              보안에 진심인 사람들이 모여,
            </Text>
            <Text size="50px" weight="extrabold" color="white">
              경북대학교의 보안을 지킵니다.
            </Text>
          </TitleWrapper>
          <StackWrapper>
            <Stats>
              <Text size="l" weight="regular" color="#848484">
                KERT가 개설된 지
              </Text>
              <GradientText
                $size="50px"
                $weight="extrabold"
                $gradient="linear-gradient(135deg, white, #6F8CB8)"
              >
                27년
              </GradientText>
            </Stats>
            <Stats>
              <Text size="l" weight="regular" color="#848484">
                가입한 인원
              </Text>
              <GradientText
                $size="50px"
                $weight="extrabold"
                $gradient="linear-gradient(135deg, white, #B8936F)"
              >
                61명
              </GradientText>
            </Stats>
          </StackWrapper>
        </LeftContent>
        <RightContent>
          <LockIcon />
        </RightContent>
      </Content>
    </Section>
  );
}

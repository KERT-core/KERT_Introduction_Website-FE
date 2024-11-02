import styled from 'styled-components';
import { Span, Text } from '@components/typograph/Text';

import { ShapeBackground } from '../../components/display/ShapeBackground';
import { ContentCard } from '@components/display/section/ContentCard';

import WebIcon from '@/assets/icons/Web.png';
import CryptoIcon from '@/assets/icons/Crypto.png';
import ReversingIcon from '@/assets/icons/Reversing.png';
import LinuxIcon from '@/assets/icons/Linux.png';
import activ_img1 from '@/assets/activity_img/activ_pic1.png';
import activ_img2 from '@/assets/activity_img/activ_pic2.png';
import activ_img3 from '@/assets/activity_img/activ_pic3.png';

const Section = styled.section.attrs({ id: 'education' })`
  position: relative;

  width: 100vw;
  padding: 170px 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 200px;

  background: linear-gradient(140deg, #000717, #04000c);
  overflow: hidden;

  & > div.shape-background {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1280px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 75px;

  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 100px;

  @media (max-width: 1280px) {
    align-items: center;
    gap: 50px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1280px) {
    align-items: center;
  }
`;

const Title = styled(Span)`
  // 모바일 대응
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const SubTitle = styled(Span)`
  // 모바일 대응
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 1280px) {
    align-items: center;
  }
`;

const Description = styled(Span)`
  // 모바일 대응
  @media (max-width: 768px) {
    word-break: keep-all;
    font-size: 14px;
    text-align: center;
  }
`;

const RightContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  // 모바일 대응
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 90px;

  @media (max-width: 1280px) {
    // 좌우가 점점 검정색으로 흐리게
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        #04000c 0%,
        rgba(4, 0, 12, 0) 50%,
        #04000c 100%
      );
    }
  }

  // 모바일 대응
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    &:after {
      display: none;
    }
  }
`;

const Image = styled.img`
  width: 380px;
  height: 240px;
  object-fit: cover;
  border-radius: 14px;
`;

export default function Section4() {
  const contents = [
    {
      name: 'Web 기초',
      description:
        '웹 서버 코드를 작성/수정하고 브라우저 개발자 도구로 분석해요. 통신 프로토콜, 쿠키, 세션 등 Web 동작 방식을 배워요.',
      image_url: WebIcon,
    },
    {
      name: '암호학 Crypto',
      description:
        'AES, 비/대칭키 등 유저와 서버 간의 통신에서 사용하는 암호화 방식을 배우고, 암호화된 데이터를 복호화해요.',
      image_url: CryptoIcon,
    },
    {
      name: '리버싱 Reversing',
      description:
        'IDA, Ghidra 등의 도구로 소프트웨어의 동작 원리를 분석하고 발생할 수 있는 보안 취약점을 찾는 기술을 배워요.',
      image_url: ReversingIcon,
    },
    {
      name: '리눅스 Linux',
      description:
        'WSL2를 이용한 Netcat 연습, 리눅스의 명령어를 습득하여 다양한 모의 해킹, CTF의 문제를 풀어볼 수 있어요.',
      image_url: LinuxIcon,
    },
  ];

  return (
    <Section>
      <ShapeBackground />
      {/* Section 4.1 */}
      <Content>
        <LeftContent>
          <TitleWrapper>
            <SubTitle
              $size="25px"
              $weight="light"
              $color="rgba(255, 255, 255, 0.5)"
            >
              Education Content of KERT
            </SubTitle>
            <Title $size="45px" $weight="extrabold" $color="white">
              KERT, 이런 걸 배워요
            </Title>
          </TitleWrapper>
          <DescriptionWrapper>
            <Description $size="l" $weight="light" $color="white">
              KERT는 보안과 관련된 다양한 활동이 준비돼있어요.
            </Description>
            <Description $size="l" $weight="light" $color="white">
              가입 후 다양한 분야 지식을 습득할 수 있어요.
            </Description>
          </DescriptionWrapper>
        </LeftContent>
        <RightContent>
          {(contents || []).map((content, idx) => (
            <ContentCard
              key={idx}
              title={content.name}
              description={content.description}
              image_url={content.image_url}
            />
          ))}
        </RightContent>
      </Content>
      {/* Section 4.2 */}
      <Content style={{ flexDirection: 'column' }}>
        <TitleWrapper style={{ alignItems: 'center' }}>
          <SubTitle
            $size="25px"
            $weight="light"
            $color="rgba(255, 255, 255, 0.5)"
          >
            Major Content of KERT
          </SubTitle>
          <Title $size="45px" $weight="extrabold" $color="white">
            다같이 즐겁게 활동해요
          </Title>
        </TitleWrapper>
        <DescriptionWrapper>
          <Description $size="l" $weight="light" $color="white">
            KERT CTF, 기초 보안 교육, ‘컬’퍼런스 등 고정 콘텐츠 등
          </Description>
          <Description $size="l" $weight="light" $color="white">
            모두에게 유익하고 재미있는 여러 활동들이 준비돼 있어요.
          </Description>
        </DescriptionWrapper>
        <ImageWrapper>
          <Image src={activ_img1} alt="Activity 1" />
          <Image src={activ_img2} alt="Activity 2" />
          <Image src={activ_img3} alt="Activity 3" />
        </ImageWrapper>
      </Content>
    </Section>
  );
}

import React from 'react';
import bg_img from '../assets/Section4_bg_img.png';
import styled from 'styled-components';
import { Text, Span } from '../components/typograph/Text';
import web from '../assets/icons/Web.png';
import Crypto from '../assets/icons/Crypto.png';
import Reversing from '../assets/icons/Reversing.png';
import Linux from '../assets/icons/Linux.png';
import '../font/main_font.css';

// Dev문서 타이틀 양식 가져오기
const Title = styled(Span).attrs({
  $weight: 'extrabold',
})`
  font-size: clamp(36px, 4vw, 50px);
  word-break: keep-all;
  margin-bottom:50px;
`;

// Container for the left content
const LeftContentContainr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 50px;
`;

// Container to wrap the left and right content containers
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10%;
`;

// MainPage 양식과 호환될 수 있도록 바탕 설정
const BackFirstStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center center;
  background-image: url(${bg_img});
  background-size: cover;
`;

// Container for the right content boxes
const RightContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 100px;
  gap: 20px; /* GroupBox 간의 간격을 설정 */
  margin-top: 20px; /* 상단 간격 추가 */
  margin-bottom: 20px; /* 하단 간격 추가 */
`;

const GroupBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  width: 250px;
  height: auto;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  border-radius: 20px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const HeaderIcon = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  margin-bottom: 30px; /* HeaderIcon과 GroupTitle 사이의 간격 설정 */
`;

const GroupTitle = styled.div`
  width: 100%;
  font-family: 'NanumSquare';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  text-align: left;
`;

const GroupContent = styled.div`
  width: 100%;
  font-family: 'NanumSquare';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.5);
  text-align: left;
`;

const KertDescription = styled(Span).attrs({
  $weight: 'light',
  $color:'rgba(255, 255, 255, 0.8)'
})`
  font-size: clamp(16px, 2vw, 24px);
  word-break: keep-all;
`;

const FirstWord=styled(Span).attrs({
  $weight:'light',
  $color:"rgba(255, 255, 255, 0.7)"
})`
  font-size: clamp(16px, 2vw, 13px);
  word-break: keep-all;
  margin-bottom:13px;

`




export default function Section1() {
  return (
    <BackFirstStyle>
      <ContentWrapper>
        <LeftContentContainr>
          <FirstWord>
            Education Content of KERT
          </FirstWord>
          <Title>KERT, 이런 걸 배워요</Title>
          <KertDescription>
            KERT는 보안과 관련된 다양한 활동이 준비돼있어요.
            가입 후 다양한 분야지식을 습득할 수 있어요.
          </KertDescription>
        </LeftContentContainr>
        <RightContentContainer>
          <GroupBox>
            <HeaderIcon src={web} alt="web_img" />
            <Text size="l" weight="extrabold">
              Web 기초
            </Text>
            <Text size="xs" weight="regular" color="rgba(255, 255, 255, 0.5)">
              웹 서버 코드를 작성/수정하고 브라우저 개발자 도구로 분석해요. 통신
              프로토콜, 쿠키, 세션 등 Web 동작 방식을 배워요.
            </Text>
          </GroupBox>
          <GroupBox>
            <HeaderIcon src={Crypto} alt="crypto_img" />
            <Text size="l" weight="extrabold">
              암호학 Crypto
            </Text>
            <Text size="xs" weight="regular" color="rgba(255, 255, 255, 0.5)">
              AES, 비/대칭키 등 유저와 서버 간의 통신에서 사용하는 암호화 방식을
              배우고, 암호화된 데이터를 복호화해요.
            </Text>
          </GroupBox>
          <GroupBox>
            <HeaderIcon src={Reversing} alt="reversing_img" />
            <Text size="l" weight="extrabold">
              리버싱 Reversing
            </Text>
            <Text size="xs" weight="regular" color="rgba(255, 255, 255, 0.5)">
              IDA, Ghidra 등의 도구로 소프트웨어의 동작 원리를 분석하고 발생할
              수 있는 보안 취약점을 찾는 기술을 배워요.
            </Text>
          </GroupBox>
          <GroupBox>
            <HeaderIcon src={Linux} alt="linux_img" />
            <Text size="l" weight="extrabold">
              리눅스 Linux
            </Text>
            <Text size="xs" weight="regular" color="rgba(255, 255, 255, 0.5)">
              WSL를 이용한 Netcat 연습, 리눅스의 명령어를 습득하여 다양한 모의
              해킹, CTF의 문제를 풀어볼 수 있어요.
            </Text>
          </GroupBox>
        </RightContentContainer>
      </ContentWrapper>
    </BackFirstStyle>
  );
}

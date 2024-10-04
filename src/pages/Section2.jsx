import React from 'react';
import bg_img from '../assets/Section2_bg_img.png';
import lock_icon from '../assets/kert_logos/White_incline_Lock.png';
//import { Text, Span } from '../components/typograph/Text';
import styled from 'styled-components';

const BgContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  font-size: 2em;
  opacity: 0.9;
  background-image: url(${bg_img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.78);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: flex-start;
  color: #fff;
  font-family: NanumSquareNeo;
  padding: 20px;
`;

const LockIconContainer = styled.div`
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(85%);
  width: 700px;
  height: 500px;
  display: flex;
  z-index: 1;
  opacity: 0.9;
  overflow: hidden;
`;

const LockIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LockIconOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%);
`;

const Minitext = styled.div`
  margin-bottom: 1px;
  line-height: 1.5;
  transform: translateX(65%);
  font-family: NanumSquareNeo;
  font-weight: extrabold;
`;

const Text = styled.div`
  margin-bottom: 20px;
  line-height: 1.5;
  transform: translateX(65%);
  font-family: NanumSquareNeo;
  font-weight: extrabold;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  transform: translateX(50%);
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.5em;
  margin-top: 20px;
  flex-direction: column;
`;

const StatItem = styled.div`
  margin: 30px;
  text-align: center;
  font-family: NanumSquareNeo;
  opacity: 0.6;
  justify-content: center;
`;

const Date = styled.div`
  font-size: 3em;
  background-image: linear-gradient(to right, #FFFFFF, #6F8CB8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
`;

const Title = styled.span`
  margin-bottom: 12px;
  font-size: ${({ $size }) => ($size === 'sxl' ? '2em' : '1em')};
  font-weight: ${({ $weight }) => ($weight === 'heavy' ? '700' : '400')};
  color: ${({ $color }) => ($color ? 'var(' + $color + ')' : '#000')};
`;

export default function MainPage() {
  return (
    <BgContainer>
      <Overlay />
      <Content>
        <Minitext>
          보안에 진심인 사람들이 모여,
          <br />
        </Minitext>
        <Text>경북대학교의 보안을 지킵니다.</Text>

        <LockIconContainer>
          <LockIcon src={lock_icon} alt="Lock Icon" />
          <LockIconOverlay />
        </LockIconContainer>

        <Container>
          <Stats>
            <StatItem>KERT가 개설된 지</StatItem>
            <Date>27년</Date>
          </Stats>
          <Stats>
            <StatItem>가입한 인원</StatItem>
            <Date>61명</Date>
          </Stats>
        </Container>
      </Content>
    </BgContainer>
  );
}

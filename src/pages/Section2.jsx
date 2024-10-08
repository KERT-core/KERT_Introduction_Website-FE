import React from 'react';
import bg_img from '../assets/Section2_bg_img.png';
import lock_icon from '../assets/kert_logos/White_incline_Lock.png';
import { Text, Span } from '../components/typograph/Text';
import styled from 'styled-components';

const BgContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  background-image: url(${bg_img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  padding-left: 5%;
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
  transform: translateX(-50%);
  z-index: 2;
  text-align: left;
  color: #fff;
  font-family: NanumSquareNeo;
  padding: 40px;
  margin-Bottom:20px;
`;

const LockIconContainer = styled.div`
  position: absolute;
  bottom: -80px;
  right: 10px;
  width: 550px;
  height: 570px;
  display: flex;
  z-index: 1;
  opacity: 0.9;
  transform: translateX(100%);
`;

const LockIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Minitext = styled(Span).attrs({
  $weight: 'bold',
})`
  font-size: clamp(10px, 2vw, 30px);
  word-break: keep-all;
  line-height: 1.4;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  margin-top: 50px; //가입 인원과 제목 사이 간격 
  padding: 0 40px;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.8em;
  margin-right: 100px; 
`;

const StatItem = styled(Span).attrs({
  $weight: 'light',
  $color: '#848484'
})`
  font-size: clamp(12px, 2vw, 18px);
  word-break: keep-all;
`;

const Date = styled.div`
  font-size: 2em;
  background-image: linear-gradient(to right, #FFFFFF, #6F8CB8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
`;

const Title = styled(Span).attrs({
  $weight: 'extrabold',
})`
  font-size: clamp(36px, 4vw, 40px);
  word-break: keep-all;
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
        <Title>경북대학교의 보안을 지킵니다.</Title>

        <LockIconContainer>
          <LockIcon src={lock_icon} alt="Lock Icon" />
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
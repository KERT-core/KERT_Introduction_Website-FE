import React from 'react';
import bg_img from '../assets/background_img.png';
import kert_logo from '../assets/kert_logos/White_Icon.png';
import '../font/main_font.css';
import styled from 'styled-components';
import { Text, Span } from '../components/typograph/Text';

const BackFirst = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;


const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 1)
    ),
    url(${bg_img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  filter: blur(12px);
  z-index: -1;
`;


const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding-top: 100px;
`;


const LogoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;


const BlurredLogo = styled.img`
  width: 100%;
  height: auto;
  filter: brightness(30%) blur(6px);
  mix-blend-mode: multiply;
`;


const Title = styled(Span).attrs({
  $weight: 'extrabold',
})`
  font-size: clamp(36px, 4vw, 60px);
  word-break: keep-all;
  margin-Top:50px;
  margin-Bottom:50px;
`;

const Subtitle = styled(Span).attrs({
  $weight: 'regular',
})`
  font-size: clamp(16px, 2vw, 15px);
  word-break: keep-all;
  margin-Top:50px;
  margin-Bottom:50px;
`;

export default function Section1() {
  return (
    <BackFirst>
      <Background />
      <Content>
        <Title>KERT</Title>
        <Subtitle>KNU Computer Emergency Response Team</Subtitle>
      </Content>
      <LogoContainer>
        <BlurredLogo src={kert_logo} alt="KERT Logo" />
      </LogoContainer>
    </BackFirst>
  );
}

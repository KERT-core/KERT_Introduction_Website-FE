import React from 'react';
import bg_img from '../assets/Section3_bg_img.png';
import Hspace from '../assets/HSpace.png';
import KUCIS from '../assets/KUCIS.png';
import CCA from '../assets/CCA.png';
import Computer from '../assets/Computer.png';
import GroupCard from '../assets/GroupCard.png';
import styled from 'styled-components';
import { Text, Span } from '../components/typograph/Text';
import '../font/main_font.css';


const Title = styled(Span).attrs({
  id: 'title',
  $size: 'sxl',
  $weight: 'heavy',
  $color: '--primary-text-color',
})`
  margin-bottom: 12px;
`;


const SubTitle = styled(Span).attrs({
  $size: 'l',
  $weight: 'bold',
})`
  margin-bottom: 10px;
`;


const BackgroundContainer = styled.div`
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


const TextContainer = styled.div`
  font-family: 'NanumSquareNeo';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 9%;
  position: absolute;
  top: 0;
  color: #ffffff;
`;


const GroupCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  width: 85%;
  max-width: 2000px;
  margin-top: 4em;
`;


const GroupCardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  background-image: url(${GroupCard});
  background-size: cover;
  padding: 35px 25px 15px 25px;
  height: 155px;
  width: 250px;
  backdrop-filter: blur(10px);
`;


const GroupCardLogo = styled.img`
  width: 72px;
  height: 72px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;


const GroupCardName = styled.div`
  font-family: 'NanumSquareNeo';
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 0.7em;
  position: absolute;
  top: 10px;
  left: 20px;
`;


const GroupCardContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: center;
`;


const GroupCardDate = styled.div`
  font-family: 'NanumSquareNeo';
  font-weight: 300;
  font-size: 0.5em;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.8em;
  margin-bottom: 3em;
`;


const GroupCardHashTag = styled.div`
  font-family: 'NanumSquareNeo';
  font-size: 0.35em;
  color: rgba(255, 255, 255, 0.5);
`;

export default function Section1() {
  return (
    <BackgroundContainer>
      <TextContainer>
        <Title>우리 모두 함께해요</Title>
        <Text size="m">
          KERT는 HSpace와 KUCIS/CCA의 소속으로 가입되어 수준 높은 활동을
          외부에서 체험할 수 있어요.
        </Text>
        <GroupCardsContainer>
          <GroupCardWrapper>
            <GroupCardName>HSpace</GroupCardName>
            <GroupCardLogo src={Hspace} alt="HSpace Logo" />
            <GroupCardContent>
              <Text size="xl" weight="extrabold">
                HSpace
              </Text>
              <GroupCardDate>가입일자: 2024.7.6 (D+20)</GroupCardDate>
              <GroupCardHashTag>#Hackers #space</GroupCardHashTag>
            </GroupCardContent>
          </GroupCardWrapper>
          <GroupCardWrapper>
            <GroupCardName>KUCIS</GroupCardName>
            <GroupCardLogo src={KUCIS} alt="KUCIS Logo" />
            <GroupCardContent>
              <Text size="xl" weight="extrabold">
                KUCIS
              </Text>
              <GroupCardDate>가입일자: 2024.7.6 (D+20)</GroupCardDate>
              <GroupCardHashTag>#대학생정보보호동아리 #KISA</GroupCardHashTag>
            </GroupCardContent>
          </GroupCardWrapper>
          <GroupCardWrapper>
            <GroupCardName>CCA</GroupCardName>
            <GroupCardLogo src={CCA} alt="CCA Logo" />
            <GroupCardContent>
              <Text size="xl" weight="extrabold">
                CCA
              </Text>
              <GroupCardDate>가입일자: 2024.7.6 (D+20)</GroupCardDate>
              <GroupCardHashTag>#전국사이버보안동아리연합</GroupCardHashTag>
            </GroupCardContent>
          </GroupCardWrapper>
          <GroupCardWrapper>
            <GroupCardName>컴퓨터학부</GroupCardName>
            <GroupCardLogo src={Computer} alt="컴퓨터학부 Logo" />
            <GroupCardContent>
              <Text size="xl" weight="extrabold">
                컴퓨터학부
              </Text>
              <GroupCardDate>가입일자: 2024.7.6 (D+20)</GroupCardDate>
              <GroupCardHashTag>#IT대학 #천재들의모임</GroupCardHashTag>
            </GroupCardContent>
          </GroupCardWrapper>
        </GroupCardsContainer>
      </TextContainer>
    </BackgroundContainer>
  );
}

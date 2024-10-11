import styled from 'styled-components';
import { ShapeBackground } from '../components/display/ShapeBackground';
import { Text, Span } from '../components/typograph/Text';
import React, { useEffect, useRef, useState } from 'react';

const BackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  & > div.shape-background {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Title = styled(Span).attrs({
  $weight: 'extrabold',
})`
  font-size: clamp(36px, 4vw, 40px);
  word-break: keep-all;
`;

const Description = styled(Span).attrs({
  $weight: 'light',
  $color:"rgba(255, 255, 255, 0.7)"
})`
  font-size: clamp(16px, 2vw, 18px);
  word-break: keep-all;
  margin-top: 10px; 
`;

const Year = styled(Span).attrs({
  $weight: 'bold',
})`
  font-size: clamp(36px, 4vw, 40px);
  word-break: keep-all;
  color: ${(props) => props.$color || '#FFFFFF'}; 

`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 12px;

  position: absolute;
  width: 378px;
  height: 96px;
  left: calc(50% - 189px);
  top: 150px;
`;


const YearHistoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 50px; 
  width: 100%;
`;


const HistoryFrame = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  padding: 0px;
  gap: 50px; 

  position: absolute; 
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
`;

const HistoryCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  padding: 0px;
  gap: 20px;

  width: 700px;
`;

const HistoryCard = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  gap: 10px;

  width: auto; 
  height: 58px;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1), inset 4px 4px 20px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  border-radius: 10px;
`;

const Month = styled(Span).attrs((props) => ({
  $weight: 'bold',
  $color: props.$color || '#FFFFFF', 
}))`
  font-size: clamp(18px, 2vw, 12px);
  word-break: keep-all;
  color: ${(props) => props.$color}; 
`;

const HistoryContent = styled(Span).attrs((props) => ({
  $weight: 'regular',
  $color: props.$color || '#FFFFFF', 
}))`
  font-size: clamp(14px, 2vw, 12px);
  word-break: keep-all;
  color: ${(props) => props.$color}; 
`;




export default function History() {
  
  return (
    <BackgroundWrapper>
      <TitleContainer>
        <Title>KERT 연혁</Title>
        <Description>KERT는 매년 성장하는 동아리입니다</Description>
      </TitleContainer>

      {/*Histroy 전체 컨테이너 시작 지점입니다. */}
      <HistoryFrame>
        {/* 2024 */}

        <YearHistoryContainer>
          <Year>2024</Year>
          <HistoryCardContainer>
            <HistoryCard>
              <Month>4월</Month>
              <HistoryContent>전국 사이버 보안 연합 CCA 소속</HistoryContent>
            </HistoryCard>
            <HistoryCard>
              <Month>5월</Month>
              <HistoryContent>정보 보호 대학 동아리 연합 KUCIS 소속</HistoryContent>
            </HistoryCard>
          </HistoryCardContainer>
        </YearHistoryContainer>


        {/* 2023 */}
        <YearHistoryContainer>
          <Year $color="rgba(255, 255, 255, 0.3)">2023</Year>
          <HistoryCardContainer>
            <HistoryCard>
              <Month $color="rgba(255, 255, 255, 0.4)">3월</Month>
              <HistoryContent $color="rgba(255, 255, 255, 0.4)" >HSpace 파트너쉽 체결</HistoryContent>
            </HistoryCard>
          </HistoryCardContainer>
        </YearHistoryContainer>

        {/* 2021 */}
        <YearHistoryContainer>
          <Year $color="rgba(255, 255, 255, 0.3)">2021</Year>
          <HistoryCardContainer>
            <HistoryCard>
              <Month $color="rgba(255, 255, 255, 0.4)">9월</Month>
              <HistoryContent $color="rgba(255, 255, 255, 0.4)" >제2회 KOSPO 웹서비스 정보 보안 경진대회 최우수상</HistoryContent>
            </HistoryCard>
          </HistoryCardContainer>
        </YearHistoryContainer>

        {/*2018*/}
        <YearHistoryContainer>
          <Year $color="rgba(255, 255, 255, 0.3)">2018</Year>
          <HistoryCardContainer>
            <HistoryCard>
              <Month $color="rgba(255, 255, 255, 0.4)">4월</Month>
              <HistoryContent $color="rgba(255, 255, 255, 0.4)" >Naver D2 Campus Parter 선정</HistoryContent>
            </HistoryCard>
          </HistoryCardContainer>
        </YearHistoryContainer>

        
      </HistoryFrame>

      <ShapeBackground />
    </BackgroundWrapper>
  );
}

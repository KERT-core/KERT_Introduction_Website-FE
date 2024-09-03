import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg_img from '../assets/Section6_bg_img.png';
import graph_img from "../assets/Section6_graph.png";
import '../font/main_font.css';
import styled from 'styled-components';
import { Text } from '../components/typograph/Text';

// 배경 이미지용 div를 추가해 중첩 레이어 효과를 만듦
const BackgroundWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;  
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const BackgroundImageLayer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${bg_img});
    background-size: cover;
    background-position: center center;
    position: absolute;
    z-index: 1;
`;

const GraphImageLayer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${graph_img});
    background-size: contain;
    background-position: right bottom;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 2;
`;

const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start; /* Align content to the left */
    align-items: center;
    z-index: 3;  
    position: relative;
    padding: 0 10%;
`;

// 왼쪽 컨테이너
const LeftContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 50px;
`;

// 오른쪽 타임라인 컨테이너
const RightContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 50px;
    position: relative; 
    top: 0; 
`;

const HistoryLine = styled.div`
    position: absolute;
    width: 4px;
    height: 300px;
    left: 102px;
    top: 25px;
    background: #303146;
`;

const HistoryYear = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    position: relative;
`;

const YearText = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    color: #FFFFFF;
    margin-right: 20px;
`;

const Dot = styled.div`
    position: absolute;
    width: 14px;
    height: 14px;
    left: 97px;
    top: 5px;

    background: #FFFFFF;
    border-radius:50px;

`;

const EventCard = styled.div`
    background-color: #303146;
    color: white;
    padding: 12px 16px;
    border-radius: 8px;
    margin-left: 34px;
    font-size: 14px;
    position: relative;
    flex-direction: column;
    z-index: 4;
`;

const EventDate = styled.div`
    font-size: 12px;
    color: #B0B0B0;
    margin-bottom: 4px;
`;

export default function Section6() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/histories');
    }

    return (
        <BackgroundWrapper>
            <BackgroundImageLayer />
            <GraphImageLayer />
            <ContentWrapper>
                <LeftContentContainer>
                    <Text size="sxl" weight="extrabold">KERT는 <br/>매년 성장하고 있어요</Text>
                    <Text size="l" weight="light" color="rgba(255, 255, 255, 0.7)">작년보다 더 뛰어난 동아리로 발전하고 있답니다.</Text>
                    <button onClick={handleClick}>
                        상세 연혁 보기
                    </button>
                </LeftContentContainer>
                <RightContentContainer>
                    <HistoryYear>
                        <YearText>2024
                        </YearText>
                        <Dot active={true} />
                        <HistoryLine />
                        <EventCard>
                            <EventDate>2024.05</EventDate>
                            정보보호대학동아리연합 KUCIS 소속
                        </EventCard>
                        <EventCard>
                            <EventDate>2024.04</EventDate>
                            전국사이버보안연합 CCA 소속
                        </EventCard>

                    </HistoryYear>
                    
                    <HistoryYear>
                        <YearText>2023</YearText>
                        <Dot />
                    </HistoryYear>
                    
                    <HistoryYear>
                        <YearText>2021</YearText>
                        <Dot />
                    </HistoryYear>
                    
                    <HistoryYear>
                        <YearText>2018</YearText>
                        <Dot />
                    </HistoryYear>
                </RightContentContainer>
            </ContentWrapper>
        </BackgroundWrapper>
    );
}

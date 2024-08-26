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
    justify-content: flex-end;
    padding: 0 30px;
    position: relative; 
    top: 500; /* 페이지 상단에 위치하도록 설정 */
    left: 10px;
`;


const HistoryYear = styled.div`
    position: absolute;
    width: 14px;
    height: 14px;
    left: 97px;
    top: 5px;
    border-radius:25px;
    background: #FFFFFF;
`;

const HistoryLine = styled.div`
    position: absolute;
    width: 4px;
    height: 240px;
    left: 102px;
    top: 3px;
    background: #303146;

    /* 라인 Fade Out */
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 92px;
        left: 0;
        top: 148px;  /* 라인 중 아래쪽에 위치하도록 조정 */
        background: linear-gradient(180deg, #303146 0%, rgba(48, 49, 70, 0) 100%);
    }
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
                    <HistoryLine />
                    <HistoryYear />
                </RightContentContainer>
            </ContentWrapper>
        </BackgroundWrapper>
    );
}

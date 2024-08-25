import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router의 useNavigate 훅을 import
import bg_img from '../assets/Section6_bg_img.png';
import graph_img from "../assets/Section6_graph.png";
import '../font/main_font.css';
import styled from 'styled-components';
import { Text } from '../components/typograph/Text';

// MainPage 양식과 호환될 수 있도록 바탕 설정
const BackFirstStyle = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center center, center center; /* 각 이미지의 위치 설정 */
    background-image: url(${bg_img}), url(${graph_img}); 
    background-size: cover, contain; 
    background-repeat: no-repeat, no-repeat; 
    background-blend-mode: overlay; /* 이미지를 혼합하기 위한 블렌드 모드 설정*/
`;

// 왼-오 잡는 컨테이너
const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10%;
    position: relative; 
    z-index: 1;
`;

// 왼쪽 컨테이너
const LeftContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 50px;
`;



export default function Section1() {
    const navigate = useNavigate(); // useNavigate 훅 사용

    // 상세 연혁 보기 버튼 클릭 핸들러
    function handleClick () {
        navigate('/histories'); //연혁 페이지 이동
    };

    return (
      <BackFirstStyle>
        <ContentWrapper>
            <LeftContentContainer>
                <Text size="sxl" weight="extrabold">KERT는 <br/>매년 성장하고 있어요</Text>
                <Text size="l" weight="light" color="rgba(255, 255, 255, 0.7)">작년보다 더 뛰어난 동아리로 발전하고 있답니다.</Text>
                <button onClick={handleClick}>
                    상세 연혁 보기
                </button>
            </LeftContentContainer>
        </ContentWrapper>
      </BackFirstStyle>
    );
}

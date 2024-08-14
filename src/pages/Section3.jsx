import React from 'react';
import bg_img from "../assets/Section3_bg_img.png";
import Hspace from "../assets/HSpace.png";
import KUCIS from "../assets/KUCIS.png"; 
import CCA from "../assets/CCA.png";
import Computer from "../assets/Computer.png"
import GroupCard from "../assets/GroupCard.png"
import styled from "styled-components";
import { Text, Span } from "../components/typograph/Text";
import "../font/main_font.css";

//Dev문서 타이틀 양식 가져오기
const Title = styled(Span).attrs({ id: "title", $size: "sxl", $weight: "heavy", $color: "--primary-text-color" })`
    margin-bottom: 12px;
`;

//Dev문서 서브타이틀 양식 가져오기
const SubTitle = styled(Span).attrs({
    $size: "l", $weight: "bold"
})`
    margin-bottom: 10px;
`;

//MainPage 양식과 호환될 수 있도록 바탕 설정
const back_first_Style = {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bg_img})`,
    backgroundSize: 'cover', // Ensure background covers entire area
};

//배경 중 작성될 텍스트 컨테이너 스타일 설정
const textContainerStyle = {
    fontFamily: 'NanumSquareNeo',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
    textAlign: 'center',
    paddingTop: '9%',
    position: 'absolute',
    top: '0',
    color: '#FFFFFF',
};

//이건 안 씁니다 !! 기원님이 Dev 해주셔서 Title이랑 subtitle 양식 들고왔어용
/*
const title_text_style = {
    fontFamily: 'NanumSquareNeo',
    fontSize: '2.5em',
    fontWeight: 'bold',
    marginBottom: '0.5em',
};

const subtitle_text_style = {
    fontFamily: 'NanumSquareNeo',
    fontSize: '1.2em',
    marginBottom: '2em',
};*/

//그룹카드 grid 배치 설정
const groupCardsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // 2열 그리드 유지
    gridGap: '40px', // 카드 사이의 간격을 40px로 설정
    width: '85%', 
    maxWidth: '2000px', 
    marginTop: '4em', 
};

//GroupCard Image 크기 및 스타일 설정
const groupCardStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    backgroundImage: `url(${GroupCard})`,
    backgroundSize: 'cover',
    padding: '35px 25px 15px 25px', // 패딩을 25px로 확대하여 카드 내 공간을 더 넓게 설정
    height: 155, 
    width: 250,
    backdropFilter: 'blur(10px)',
};

//각 그룹카드에 넣을 로고 이미지 양식
const GroupCardLogo = {
    width: 72,
    height: 72,
    marginRight: '10px', 
    display: 'flex',            
    alignItems: 'center',        
    justifyContent: 'flex-start', 
};

//그룹카드 상단에 있는 이름 양식. Figma에서 들고왔어영
const GroupCardName = {
    fontFamily: 'NanumSquareNeo',
    fontSize: 15,
    fontWeight: 300,
    marginBottom: '0.7em',
    position: 'absolute',
    top: 10,
    left: 20,
};

const groupCardContent = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    alignItems: 'flex-start',
    justifyContent: 'center',
};

//그룹카드안에 가입날짜 양식! Figma에서 들고왔어영
const GroupCardDate = {
    fontFamily: 'NanumSquareNeo',
    fontWeight: 300,
    fontSize: '0.9em',
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop:'0.5em',
    marginBottom: '2em',
};

//그룹카드안에 해시태그 양식. Figma에서 들고왔어영
const GroupCardHashTag = {
    fontFamily: 'NanumSquareNeo',
    fontSize: '0.9em',
    color: 'rgba(255, 255, 255, 0.5)',
};

export default function Section1() {
    return (
        <div style={back_first_Style}>
            <div style={textContainerStyle}>
                <Title>우리 모두 함께해요</Title>
                <Text size="m"> KERT는 HSpace와 KUCIS/CCA의 소속으로 가입되어 수준 높은 활동을 외부에서 체험할 수 있어요.</Text>
                <div style={groupCardsContainerStyle}>
                    <div style={groupCardStyle}>
                        <div style={GroupCardName}>HSpace</div>
                        <img src={Hspace} alt="HSpace Logo" style={GroupCardLogo} />
                        <div style={groupCardContent}>
                            <Text size="xl" weight="extrabold">HSpace</Text>
                            <div style={GroupCardDate}>가입일자: 2024.7.6 (D+20)</div>
                            <div style={GroupCardHashTag}>#Hackers #space</div>
                        </div>
                    </div>
                    <div style={groupCardStyle}>
                        <div style={GroupCardName}>KUCIS</div>
                        <img src={KUCIS} alt="KUCIS Logo" style={GroupCardLogo} />
                        <div style={groupCardContent}>
                        <Text size="xl" weight="extrabold">KUCIS</Text>
                        <div style={GroupCardDate}>가입일자: 2024.7.6 (D+20)</div>
                        <div style={GroupCardHashTag}>#대학생정보보호동아리 #KISA</div>
                        </div>
                    </div>
                    <div style={groupCardStyle}>
                        <div style={GroupCardName}>CCA</div>
                        <img src={CCA} alt="CCA Logo" style={GroupCardLogo} />
                        <div style={groupCardContent}>
                            <Text size="xl" weight="extrabold">CCA</Text>
                            <div style={GroupCardDate}>가입일자: 2024.7.6 (D+20)</div>
                            <div style={GroupCardHashTag}>#전국사이버보안동아리연합</div>
                        </div>
                        
                    </div>
                    <div style={groupCardStyle}>
                        <div style={GroupCardName}>컴퓨터학부</div>
                        <img src={Computer} alt="CCA Logo" style={GroupCardLogo} />
                        <div style={groupCardContent}>
                            <Text size="xl" weight="extrabold">컴퓨터학부</Text>
                            <div style={GroupCardDate}>가입일자: 2024.7.6 (D+20)</div>
                            <div style={GroupCardHashTag}>#IT대학 #천재들의모임</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}



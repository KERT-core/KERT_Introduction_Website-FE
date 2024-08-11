import React from 'react';
import bg_img from "../assets/Section3_bg_img.png";
import white_kert_logo from '../assets/kert_logos/White_Icon.png';
import "../font/main_font.css";

const back_first_Style = {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bg_img})`
};

const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // 상단 정렬
    textAlign: 'center',
    paddingTop: '9%', // 상단 여백 조정
    position: 'absolute',
    top: '0' // 상단에 위치시키기 위해 설정
};

const title_text_style = {
    fontFamily: 'NanumSquareA',
    fontSize: '2.1em',
    fontWeight: 'bold',
    position: 'relative',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '1.5em' // 타이틀과 서브타이틀 간격 조정
};

const subtitle_text_style = {
    fontFamily: 'NanumSquareA',
    position: 'relative',
    textAlign: 'center'
};

const GroupCardFormat = {
    position: 'absolute',
    width: '447px',
    height: '310px',
    left: '463px',
    top: '2061px',
    filter: 'drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25))',
    backdropFilter: 'blur(10px)' // 대소문자 구분에 주의
};

const GroupCardBackGround = {
    boxSizing: 'border-box',
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '30px'
};

const GroupCardLogo = {
    position: 'absolute',
    width: '116px',
    height: '116px',
    left: '51px',
    top: '119px'
};

const GroupCardLogoImg = {
    position: 'absolute',
    width: '116px',
    left: '51px',
    top: '38.39%',
    bottom: '24.19%',
    background: `url(${white_kert_logo})` // 수정
};

const GroupCardMask = {
    position: 'absolute',
    width: '116px',
    left: '51px',
    top: '38.39%',
    bottom: '24.19%',
    background: '#FFFFFF'
};

const GroupCardHashTag = {
    position: 'absolute',
    width: '157px',
    height: '17px',
    left: '205px',
    top: '214px',
    fontFamily: 'NanumSquare',
    fontStyle: 'normal',
    fontWeight: 350,
    fontSize: '15px',
    lineHeight: '17px',
    display: 'flex',
    alignItems: 'flex-end',
    color: 'rgba(255, 255, 255, 0.5)'
};

const GroupCardDate = {
    position: 'absolute',
    width: '192px',
    height: '17px',
    left: '205px',
    top: '168px',
    fontFamily: 'NanumSquare',
    fontStyle: 'normal',
    fontWeight: 350,
    fontSize: '15px',
    lineHeight: '17px',
    display: 'flex',
    alignItems: 'flex-end',
    color: 'rgba(255, 255, 255, 0.5)'
};

const GroupCardName = {
    position: 'absolute',
    width: '122px',
    height: '33px',
    left: '205px',
    top: '124px',
    fontFamily: 'NanumSquare',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '30px',
    lineHeight: '33px',
    display: 'flex',
    alignItems: 'flex-end',
    color: '#FFFFFF'
};

const GroupCardTitle = {
    position: 'absolute',
    left: '4.92%',
    right: '60.85%',
    top: '6.45%',
    bottom: '87.42%',
    fontFamily: 'NanumSquare',
    fontStyle: 'normal',
    fontWeight: 350,
    fontSize: '20px',
    lineHeight: '22px',
    display: 'flex',
    alignItems: 'flex-end',
    color: '#FFFFFF'
};

export default function Section1() {
    return (
        <div style={back_first_Style}>
            <div style={textContainerStyle}>
                <div style={title_text_style}>
                    <p>우리 모두 함께 해요</p>
                </div>
                <div style={subtitle_text_style}>
                    <p>KERT는 HSpace와 KUCIS/CCA의 소속으로 가입되어 수준 높은 활동을 외부에서 체험할 수 있어요.</p>
                </div>
            </div>
        </div>
    );
}

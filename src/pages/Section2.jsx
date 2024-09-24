import React from 'react';
import bg_img from "../assets/Section2_bg_img.png";
import lock_icon from "../assets/kert_logos/White_incline_Lock.png"; // Make sure this path is correct
import "../font/main_font.css";

const bg_Style = {
    width: '100vw', 
    height: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    fontSize: '2em', 
    opacity: 0.9,
    backgroundImage: `url(${bg_img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    position: 'relative',
};

const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.78)',
    zIndex: 1,
};

const contentStyle = {
    position: 'relative',
    zIndex: 1,
    textAlign: 'flex-start',
    color: '#fff',
    fontFamily: 'NanumSquare',
    padding: '20px',
};

const lockIconContainerStyle = {
    position: 'absolute',
    bottom: '-60px',  //이미지 아래로
    left: '50%',
    transform: 'translateX(85%)',
    width: '500px',
    height: '500px',
    display: 'flex',
    zIndex: 1,
    opacity: 0.9,
    overflow: 'hidden', // This ensures the gradient overlay is properly contained
};

const lockIconStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // Maintains aspect ratio
};

const lockIconOverlayStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '50%', // Adjust as necessary
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%)',
};

const textStyle = {
    marginBottom: '20px',
    lineHeight: '1.5',
    transform: 'translateX(65%)',
    fontFamily:'NanumSquare',
    opacity: 0.65
};

const statsStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontSize: '0.5em',
    marginTop: '20px', // Adjust margin to fit layout
    transform: 'translateX(65%)',
    opacity: 0.6
};

const statItemStyle = {
    margin: '30px', // Adjust margin for spacing between items
    textAlign: 'center',
    fontFamily:'NanumSquare'
};

export default function MainPage() {
    return (
        <div style={bg_Style}>
            <div style={overlayStyle}></div>
            <div style={contentStyle}>
                <div style={textStyle}>
                    <p>보안에 진심인 사람들이 모여,<br />
                        경북대학교의 보안을 지킵니다.</p>
                </div>
                <div style={lockIconContainerStyle}>
                    <img src={lock_icon} alt="Lock Icon" style={lockIconStyle} />
                    <div style={lockIconOverlayStyle}></div>
                </div>
                <div style={statsStyle}>
                    <div style={statItemStyle}>
                        <p>KERT가 개설된 지</p>
                        <p style={{ fontSize: '2em' }}>27년</p>
                    </div>
                    <div style={statItemStyle}>
                        <p>가입한 인원</p>
                        <p style={{ fontSize: '2em' }}>61명</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import bg_img from '../assets/Section2_bg_img.png';
import lock_icon from '../assets/kert_logos/White_incline_Lock.png';
import '../font/main_font.css';
import styled from 'styled-components';
import { Container } from '../components/forms/Container';
import { Text, Span } from '../components/typograph/Text';
import { Checkbox } from '../components/forms/Checkbox';
import { Toggle } from '../components/forms/Toggle';

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

const Title = styled(Span).attrs({
  id: 'title',
  $size: 'sxl',
  $weight: 'heavy',
  $color: '--primary-text-color',
})`
  margin-bottom: 12px;
`;

const contentStyle = {
  position: 'relative',
  zIndex: 1,
  textAlign: 'flex-start',
  color: '#fff',
  fontFamily: 'NanumSquareNeo',
  padding: '20px',
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
  background:
    'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%)',
};

const textStyle = {
  marginBottom: '20px',
  lineHeight: '1.5',
  transform: 'translateX(65%)',
  fontFamily: 'NanumSquareNeo',
  fontWeight: 'extrabold',
};

const minitextStyle = {
  marginBottom: '1px',
  lineHeight: '1.5',
  transform: 'translateX(65%)',
  fontFamily: 'NanumSquareNeo',
  fontWeight: 'extrabold',
};

const statItemStyle = {
  margin: '30px', // Adjust margin for spacing between items
  textAlign: 'center',
  fontFamily: 'NanumSquareNeo',
  opacity: 0.6,
  justifyContent: 'center',
};

const DateStyle = {
  fontSize: '3em',
  backgroundImage: 'linear-gradient(to right, #FFFFFF, #6F8CB8)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  fontWeight: 'bold',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
  transform: 'translateX(50%)',
};

const lockIconContainerStyle = {
  position: 'absolute',
  bottom: '-60px', //이미지 아래로
  left: '50%',
  transform: 'translateX(85%)',
  width: '500px',
  height: '500px',
  display: 'flex',
  zIndex: 1,
  opacity: 0.9,
  overflow: 'hidden',
};

const statsStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  fontSize: '0.5em',
  marginTop: '20px',
  flexDirection: 'column', // 요소 수직 정렬
};

export default function MainPage() {
  return (
    <div style={bg_Style}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <div style={minitextStyle}>
          보안에 진심인 사람들이 모여,
          <br />
        </div>
        <div style={textStyle}>경북대학교의 보안을 지킵니다.</div>

        <div style={lockIconContainerStyle}>
          <img src={lock_icon} alt="Lock Icon" style={lockIconStyle} />
          <div style={lockIconOverlayStyle}></div>
        </div>
        <div style={containerStyle}>
          <div style={statsStyle}>
            <div style={statItemStyle}>KERT가 개설된 지</div>
            <div style={DateStyle}>27년</div>
          </div>
          <div style={statsStyle}>
            <div style={statItemStyle}>가입한 인원</div>
            <div style={DateStyle}>61명</div>
          </div>
        </div>
      </div>
    </div>
  );
}

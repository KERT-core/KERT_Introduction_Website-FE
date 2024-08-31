import React, { useEffect, useState, useRef } from 'react';
import bg_img from '../assets/background_img.png';
import kert_logo from '../assets/kert_logos/White_Icon.png';
import Section2 from './Section2.jsx';
import Section1 from './Section1.jsx';
import Section3 from './Section3.jsx';
import Section4 from './Section4.jsx';
import Section5 from "./Section5.jsx";
import Section6 from "./Section6.jsx";
import Section7 from "./Section7.jsx";
import '../font/main_font.css';
import styled from 'styled-components';


// 스크롤바 기능 구현
// section 파일로 화면 렌더링
const DIVIDER_HEIGHT = 5;

const back_first_Style = {
  width: '100vw',
  height: '100vh',
  position: 'relative',
  overflow: 'hidden',
};

const pageStyle = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '3em',
  color: '#fff',
};

const dividerStyle = {
  height: `${DIVIDER_HEIGHT}px`,
  backgroundColor: 'transparent',
};

const footerStyle = (showFooter) => ({
  position: 'absolute',
  bottom: 0,
  width: '100vw',
  height: '60px',
  backgroundColor: '#333',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  zIndex: 1000,
  transition: 'opacity 0.3s ease',
  opacity: showFooter ? 1 : 0,
});


const Footer=styled.footer`
    position: 'absolute';
    bottom: 0;
    width: '100vw';
    height: '60px';
    backgroundColor: '#333';
    color: '#fff';
    display: 'flex';
    justifyContent: 'center';
    alignItems: 'center';
    textAlign: 'center',
    zIndex: 1000,
    transition: 'opacity 0.3s ease';
    opacity: showFooter ? 1 : 0;
`


export default function MainPage() {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        // Scroll down
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(4);
        } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(5);
        } else if (scrollTop >= pageHeight * 4 && scrollTop < pageHeight * 5) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 5 + DIVIDER_HEIGHT * 5,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(6);
        } else if (scrollTop >= pageHeight * 5 && scrollTop < pageHeight * 6) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 6 + DIVIDER_HEIGHT * 6,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(7);
        }
      } else {
        // Scroll up
        if (scrollTop >= pageHeight * 6 && scrollTop < pageHeight * 7) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 5 + DIVIDER_HEIGHT * 5,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(6);
        } else if (scrollTop >= pageHeight * 5 && scrollTop < pageHeight * 6) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(5);
        } else if (scrollTop >= pageHeight * 4 && scrollTop < pageHeight * 5) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(4);
        } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
          setScrollIndex(1);
        }
      }

      // Footer 표시 여부 결정
      const shouldShowFooter = scrollTop >= pageHeight * 6;
      setShowFooter(shouldShowFooter);
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener('wheel', wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  return (
    <>
      <div
        ref={outerDivRef}
        style={{
          ...back_first_Style,
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          paddingBottom: '60px', // Footer 공간을 위해 padding 추가
        }}
      >
        <Section1 />
        <div style={dividerStyle}></div>
        <Section2 />
        <div style={dividerStyle}></div>
        <Section3 />
        <div style={dividerStyle}></div>
        <Section4 />
        <div style={dividerStyle}></div>
        <Section5 />
        <div style={dividerStyle}></div>
        <Section6 />
        <div style={dividerStyle}></div>
        <Section7 />
      </div>
      <footer style={footerStyle(showFooter)}>
        <img src={kert_logo} alt="KERT Logo" style={{ height: '40px', marginRight: '10px' }} />
        <span>© 2024 KERT. All Rights Reserved.</span>
      </footer>
    </>
  );
}

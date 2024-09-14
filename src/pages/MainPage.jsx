import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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

// Constants for styling and functionality
const DIVIDER_HEIGHT = 5;

// Styles for main container and footer
const back_first_Style = {
  width: '100vw',
  height: '100vh',
  position: 'relative',
  overflow: 'hidden',
};

const dividerStyle = {
  height: `${DIVIDER_HEIGHT}px`,
  backgroundColor: 'transparent',
};

const footerStyle = (showFooter) => ({
  position: 'fixed',
  bottom: 0,
  width: '100vw',
  height: '150px',
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

const Footer = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 150px;
  background-color: #000;
  z-index: 1000;
  transition: opacity 0.3s ease;
  opacity: ${({ showFooter }) => (showFooter ? 1 : 0)};
  position: fixed;
  bottom: 0;
`;

const LogoAddressCopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 294px;
  height: 100px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const LogoAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
`;

const AddressText = styled.div`
  font-family: 'NanumSquare Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
`;

const Logo = styled.div`
  height: 40px;
  background-image: url(${kert_logo});
  background-repeat: no-repeat;
  background-size: contain;
  width: 50px;
  margin-bottom: 5px;
`;

const CopyrightText = styled.div`
  font-family: 'NanumSquare Neo';
  font-style: normal;
  font-weight: 200;
  font-size: 12px;
  color: #83878b;
`;

const HreyferContainer=styled.div`
/* 외부링크 / 라이선스 */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 87px;

  width: 156px;
  height: 200px;


  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

const TextHreyfer=styled(Link)`
  width: 156px;
  height: 18px;

  font-family: 'NanumSquare Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height */

  /* Color4Theme/Secondary Text Color */
  color: #83878B;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

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
      const shouldShowFooter = scrollTop >= pageHeight * 6; // Display after Section 7
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
          paddingBottom: '150px', // Footer 공간을 위해 padding 추가
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
      <Footer showFooter={showFooter}>
        <LogoAddressCopyrightContainer>
          <LogoAddressContainer>
            <Logo />
            <AddressText>대구광역시 북구 대학로80(경북대학교)</AddressText>
          </LogoAddressContainer>
          <CopyrightText>Copyright 2024. KERT from KNU all rights reserved.</CopyrightText>
        </LogoAddressCopyrightContainer>
        <HreyferContainer>
        
        </HreyferContainer>
      </Footer>
    </>
  );
}

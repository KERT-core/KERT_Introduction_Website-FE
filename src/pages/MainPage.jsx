import React, { useEffect, useState, useRef } from 'react';
import bg_img from '../assets/background_img.png';
import kert_logo from '../assets/kert_logos/White_Icon.png';
import Section2 from './Section2.jsx';
import Section1 from './Section1.jsx';
import Section3 from './Section3.jsx';
import Section4 from './Section4.jsx';
import '../font/main_font.css';

//스크롤바 기능 구현
//section 파일로 화면 렌더링
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

export default function MainPage() {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

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
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener('wheel', wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  return (
    <div
      ref={outerDivRef}
      style={{
        ...back_first_Style,
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
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
      <div style={{ ...pageStyle, backgroundColor: 'rgba(50, 50, 50, 1)' }}>
        Page 5
      </div>
      <div style={dividerStyle}></div>
      <div style={{ ...pageStyle, backgroundColor: 'rgba(75, 75, 75, 1)' }}>
        Page 6
      </div>
      <div style={dividerStyle}></div>
      <div style={{ ...pageStyle, backgroundColor: 'rgba(100, 100, 100, 1)' }}>
        Page 7
      </div>
    </div>
  );
}

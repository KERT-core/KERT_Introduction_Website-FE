import React, { useEffect, useState, useRef } from 'react';
import bg_img from "../assets/background_img.png";
import kert_logo from "../assets/kert_logos/White_Icon.png";
import Section2 from './Section2';
import '../font/main_font.css';

const DIVIDER_HEIGHT = 5;

const back_first_Style = {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
};

const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url(${bg_img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    filter: 'blur(12px)',
    zIndex: -1,
};

const contentStyle = {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    paddingTop: '100px',
};

const logoContainerStyle = {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '400px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
};

const blurredLogoStyle = {
    width: '100%',
    height: 'auto',
    filter: 'brightness(30%) blur(6px)',
    mixBlendMode: 'multiply',
};

const headerStyle = {
    fontFamily: 'NanumSquare',
    fontWeight: 700,
    color: '#fff',
    fontSize: '2em',
};

const subtitleStyle = {
    fontFamily: 'NanumSquare',
    fontWeight: 600,
    color: '#fff',
    fontSize: '1em',
    paddingTop: '15px',
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
        <div ref={outerDivRef} style={{ ...back_first_Style, overflowY: 'scroll', scrollSnapType: 'y mandatory' }}>
            <div style={back_first_Style}>
                <div style={backgroundStyle}></div>
                <div style={contentStyle}>
                    <div style={headerStyle}><h1>KERT</h1></div>
                    <div style={subtitleStyle}><p>KNU Computer Emergency Response Team</p></div>
                </div>
                <div style={logoContainerStyle}>
                    <img src={kert_logo} alt="KERT Logo" style={blurredLogoStyle} />
                </div>
            </div>
            <div style={dividerStyle}></div>
            <Section2 />
            <div style={dividerStyle}></div>
            <div style={{ ...pageStyle, backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
                Page 3
            </div>
            <div style={dividerStyle}></div>
            <div style={{ ...pageStyle, backgroundColor: 'rgba(0, 0, 0, 1)' }}>
                Page 4
            </div>
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

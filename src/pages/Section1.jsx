import React from 'react';
import bg_img from "../assets/background_img.png";
import kert_logo from "../assets/kert_logos/White_Icon.png";
import '../font/main_font.css';
import styled from "styled-components";

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
    fontFamily: 'NanumSquareNeo',
    fontWeight: 700,
    color: '#fff',
    fontSize: '2em',
};

const subtitleStyle = {
    fontFamily: 'NanumSquareNeo',
    fontWeight: 600,
    color: '#fff',
    fontSize: '1em',
    paddingTop: '15px',
};

export default function Section1() {
    return (
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
    );
}

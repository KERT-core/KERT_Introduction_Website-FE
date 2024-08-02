import React, { useEffect,useState,useRef } from 'react';
import bg_img from "../assets/background_img.png";
import kert_logo from "../assets/kert_logos/White_Icon.png";
import '../font/main_font.css';
import { useNavigate } from 'react-router-dom'; // react-router-dom을 사용하여 페이지 이동

const DIVIDER_HEIGHT=5;

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
    filter: 'blur(12px)', // 배경 이미지를 흐리게 만듦
    zIndex: -1, // 배경을 콘텐츠 뒤에 배치
};

const contentStyle = {
    position: 'relative',
    zIndex: 1, // 콘텐츠가 배경 위에 표시되도록 설정
    textAlign: 'center',
    paddingTop: '100px',
};

const logoContainerStyle = {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '400px', // 로고의 넓이 조절
    height: '200px', // 로고의 높이 조절
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // 콘텐츠 위에 배치
};

const blurredLogoStyle = {
    width: '100%', // 컨테이너에 맞춰서 로고 크기 조정
    height: 'auto',
    filter: 'brightness(30%) blur(6px)', // 로고를 더 어둡고 흐리게 처리
    mixBlendMode: 'multiply', // 배경과 로고가 어우러지도록 설정
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

export default function MainPage() {
    const outerDivRef=useRef();
    const [scrollIndex,setScrollIndex]=useState(1);

    useEffect(() => { 
        const wheelHandler =(e) => {
            e.preventDefault();
            const {deltaY}=e;
            const {scrollTop}=outerDivRef.current; //스크롤이 위쪽 끝부분에 위치
            const pageHeight=window.innerHeight; //화면의 세로길이
        
            if (deltaY>0) {
                //스크롤 내릴 때
                if (scrollTop>=0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    console.log("현재 1 페이지 , down");
                    outerDivRef.current.scrollTo({
                        top:pageHeight+DIVIDER_HEIGHT,
                        left:0,
                        behavior:"smooth"
                    });
                    setScrollIndex(2);
                } else if (scrollTop>=pageHeight && scrollTop<pageHeight*2) {
                    //현재 2페이지
                    outerDivRef.current.scrollTo({
                        top:pageHeight*2+DIVIDER_HEIGHT*2,
                        left:0,
                        behavior:"smooth"
                    });
                    setScrollIndex(3);
                }else if (scrollTop>=pageHeight*2 && scrollTop < pageHeight*3)
            }
        }
    })

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

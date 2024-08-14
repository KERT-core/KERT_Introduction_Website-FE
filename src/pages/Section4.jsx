import React from 'react';
import bg_img from "../assets/Section4_bg_img.png";
import styled from "styled-components";
import { Text, Span } from "../components/typograph/Text";
import "../font/main_font.css";

//Dev문서 타이틀 양식 가져오기
const Title = styled(Span).attrs({ id: "title", $size: "sxl", $weight: "heavy", $color: "--primary-text-color" })`
    margin-bottom: 12px;
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


export default function Section1() {
    return (
        <div style={back_first_Style}>
            <Title>KERT,이런 걸 배워요</Title>
        </div>
    );
}

import React from 'react';
import bg_img from '../assets/Section5_bg_img.png';
import '../font/main_font.css';
import styled from 'styled-components';
import { Text } from '../components/typograph/Text';
import activ_img1 from "../assets/activ_pic1.png";
import activ_img2 from "../assets/activ_pic2.png";
import activ_img3 from "../assets/activ_pic3.png";

// MainPage 양식과 호환될 수 있도록 바탕 설정
const BackFirstStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  /* Background overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bg_img});
    background-size: cover;
    background-position: center;
    filter: brightness(60%);
    z-index: -1; /* 배경효과를 뒤로 가게 하기위함 */
  }
`;

/* Title Wrapper */
const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
  z-index: 1; /* 글자 영향 안 받게*/
  flex-direction: column;
  gap: 25px;
`;

const SubTitle = styled(Text)`
  margin-bottom: 50px; 
`;

/* Image Wrapper */
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 90px;
  z-index: 1; /*배경 흐림 영향 안 받도록 */
`;

const StyledImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius:25px;
`;

export default function Section1() {
  return (
    <div id="section5">
      <BackFirstStyle>
        <TitleWrapper>
          <Text size="xs" weight="light" color="rgba(255, 255, 255, 0.7)">
            Major Content of KERT
          </Text>
          <SubTitle size="sxl" weight="extrabold">
            다같이 즐겁게 활동해요
          </SubTitle>
          <Text size="s" weight="regular" color="rgba(255, 255, 255, 0.78)">
            KERT CTF, 기초 보안 교육, ‘컬’퍼런스 등 고정 콘텐츠 등 <br/>
            모두에게 유익하고 재미있는 여러 활동들이 준비돼 있어요.
          </Text>
        </TitleWrapper>
        <ImageWrapper>
          <StyledImage src={activ_img1} alt="Activity 1" />
          <StyledImage src={activ_img2} alt="Activity 2" />
          <StyledImage src={activ_img3} alt="Activity 3" />
        </ImageWrapper>
      </BackFirstStyle>
    </div>
  );
}

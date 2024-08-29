import React from 'react';
import bg_img from '../assets/Section7_bg_img.png';
import president from "../assets/president.png"; // 회장 이미지
import PR_director from "../assets/PR_director.png"; // 홍보부장 이미지
import study_director from "../assets/study_director.png"; // 학술부장 이미지
import technic_director from "../assets/technic_director.png"; // 기술부장 이미지
import affairs_manger from "../assets/affairs_manger.png"; // 총무부장 이미지
import '../font/main_font.css';
import styled from 'styled-components';
import { Text, Span } from '../components/typograph/Text';

// MainPage 양식과 호환될 수 있도록 바탕 설정
const BackFirstStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center center;
  background-image: url(${bg_img});
  background-size: cover;
`;

const Title = styled(Span).attrs({
    id: 'title',
    $size: 'sxl',
    $weight: 'heavy',
    $color: '--primary-text-color',
  })`
    margin-bottom: 12px;
  `;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 26px;
  position: absolute;
  width: 551px;
  height: 181.88px;
  right: 468px;
  top: 6472.88px;
`;

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 17px 0;
  gap: 26px;
  width: 345px;
  height: 181.88px;
`;

const NameMajorBatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0;
  gap: 6px;
  width: 272px;
  height: 51px;
`;

const PositionNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0;
  gap: 7px;
  width: 152px;
  height: 27px;
`;

const Position = styled.div`
  width: 76px;
  height: 22px;
  font-family: 'NanumSquare Neo';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 22px;
  text-align: right;
  background: linear-gradient(120.11deg, #FFFFFF 13.29%, #FA00FF 86.71%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const Name = styled.div`
  width: 69px;
  height: 27px;
  font-family: 'NanumSquare Neo';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 27px;
  text-align: right;
  color: #FFFFFF;
`;

const BatchMajorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0;
  gap: 5px;
  width: 272px;
  height: 18px;
`;

const Batch = styled.div`
  width: 84px;
  height: 18px;
  font-family: 'NanumSquare Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: right;
  color: rgba(255, 255, 255, 0.5);
`;

const Major = styled.div`
  width: 132px;
  height: 18px;
  font-family: 'NanumSquare Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: right;
  color: rgba(255, 255, 255, 0.5);
`;

const Introduction = styled.div`
  width: 345px;
  height: 51px;
  font-family: 'NanumSquare Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  text-align: right;
  color: #FFFFFF;
`;

const ProfileImage = styled.div`
  width: 180px;
  height: 180px;
  background: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 14px;
`;

export default function Section7() {
    return (
        <BackFirstStyle>
            <Title>
                KERT 25기 임원진을 소개합니다
            </Title>

            <ProfileContainer>
                <ProfileImage imageUrl={president} />
                <ProfileDescription>
                    <NameMajorBatchContainer>
                        <PositionNameContainer>
                            <Position>회장</Position>
                            <Name>홍길동</Name>
                        </PositionNameContainer>
                        <BatchMajorContainer>
                            <Batch>25기</Batch>
                            <Major>컴퓨터공학과</Major>
                        </BatchMajorContainer>
                    </NameMajorBatchContainer>
                    <Introduction>
                        KERT의 25기 회장으로서, 기술 혁신과 리더십을 발휘하고 있습니다.
                    </Introduction>
                </ProfileDescription>
            </ProfileContainer>
        </BackFirstStyle>
    );
}

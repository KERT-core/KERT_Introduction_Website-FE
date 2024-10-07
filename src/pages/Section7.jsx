import React from 'react';
import bg_img from '../assets/Section7_bg_img.png';
import president from "../assets/president.png"; // 회장 이미지
import PR_director from "../assets/PR_director.png"; // 홍보부장 이미지
import study_director from "../assets/study_director.png"; // 학술부장 이미지
import technic_director from "../assets/technic_director.png"; // 기술부장 이미지
import affairs_manger from "../assets/affairs_manger.png"; // 총무부장 이미지
import styled from 'styled-components';
import { Text, Span } from '../components/typograph/Text';
import { useNavigate } from 'react-router-dom';

// MainPage 양식과 호환될 수 있도록 바탕 설정
const BackFirstStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;  
  background-position: center center;
  background-image: url(${bg_img});
  background-size: cover;
  padding-top: 70px;
  padding-left: 60px;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 120px; 
  }

  @media (max-width: 480px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Title = styled(Span).attrs({
    id: 'title',
    $size: 'sxl',
    $weight: 'heavy',
    $color: '--primary-text-color',
  })`
    margin-bottom: 20px;
    margin-Top:50px;

    @media (max-width: 768px) {
    font-size: 1.5em;
    margin-top: 20px;
  }
  `;

const ProfilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  width: 65%; 
  gap: 5px;

  @media (max-width: 768px) {
    width: 100%;
    gap: 10px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start; 

  &:nth-child(even) {
    align-self: flex-end;
  }
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ProfileContainerReverse = styled(ProfileContainer)`
  flex-direction: row-reverse;
`;

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const PositionName = styled(Span).attrs({
  $weight: 'bold',
})`
  font-size: clamp(16px, 2vw, 20px);
  word-break: keep-all;
  background-image: ${({ colorGradient }) => colorGradient || 'linear-gradient(to right, #FFFFFF, #0047FF)'};
  -webkit-background-clip: text;
  color: transparent;
`;



const ProfileDescriptionReverse = styled(ProfileDescription)`
  align-items: flex-end;
`;

const NameMajorBatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const PositionNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;

const BatchMajorContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  background: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 14px;
`;

const DateStyled = styled.div`
  font-size: 3em;
  background-image: linear-gradient(to right, #FFFFFF, #6F8CB8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;

  position: absolute;
  width: 174px;
  height: 45px;
  top:85%;
  left:67%;

  /* General/Primary Color */
  background: #213EA6;
  border-radius: 26px;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }
  
`;

export default function Section7() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/executive');
    }
    return (
        <BackFirstStyle>
            <Title>KERT 25기 임원진을 소개합니다</Title>
            <ProfilesWrapper>
                {/* 회장 Profile */}
                <ProfileContainer>
                    <ProfileImage imageUrl={president} />
                    <ProfileDescription>
                        <NameMajorBatchContainer>
                            <PositionNameContainer>
                                <PositionName colorGradient="linear-gradient(to right, #FFFFFF,#0047FF)">회장</PositionName>
                                <Text size="xl" weight="bold">박소현</Text>
                            </PositionNameContainer>
                            <BatchMajorContainer>
                                <Text size="xs" weight="light" color="rgba(255, 255, 255, 0.7)">KERT 24기 심화컴퓨터 23학번</Text>
                            </BatchMajorContainer>
                        </NameMajorBatchContainer>
                        <Text size="m" weight="bold"> KERT를 운영하며 전반적인 활동을 총괄해요.<br/>
                        항상 새로운 콘텐츠를 제시하고 기획도 하죠.
                        </Text>
                    </ProfileDescription>
                </ProfileContainer>

                {/* 총무부장 Profile - 오른쪽 정렬 */}
                <ProfileContainerReverse>
                    <ProfileImage imageUrl={affairs_manger} />
                    <ProfileDescriptionReverse>
                        <NameMajorBatchContainer>
                            <PositionNameContainer>
                            <PositionName colorGradient="linear-gradient(to right, #FFFFFF,#FA00FF)">총무부장</PositionName>
                                <Text size="xl" weight="bold">박규연</Text>
                            </PositionNameContainer>
                            <BatchMajorContainer>
                                <Text size="xs" weight="light" color="rgba(255, 255, 255, 0.7)">KERT 23기 심화컴퓨터 22학번</Text>
                            </BatchMajorContainer>
                        </NameMajorBatchContainer>
                        <Text size="m" weight="bold"> KERT의 각종 행사를 계획하고 준비해요.<br/>
                        또한 내부 재정을 관리하기도 해요.
                        </Text>
                    </ProfileDescriptionReverse>
                </ProfileContainerReverse>

                {/* 기술부장 Profile */}
                <ProfileContainer>
                    <ProfileImage imageUrl={technic_director} />
                    <ProfileDescription>
                        <NameMajorBatchContainer>
                            <PositionNameContainer>
                            <PositionName colorGradient="linear-gradient(to right, #FFFFFF,#00FF0A)">기술부장</PositionName>
                                <Text size="xl" weight="bold">시연우</Text>
                            </PositionNameContainer>
                            <BatchMajorContainer>
                                <Text size="xs" weight="light" color="rgba(255, 255, 255, 0.7)">KERT 23기 심화컴퓨터 22학번</Text>
                            </BatchMajorContainer>
                        </NameMajorBatchContainer>
                        <Text size="m" weight="bold"> KERT의 웹사이트, 서버와 같은 IT 시스템을 관리해요.</Text>
                    </ProfileDescription>
                </ProfileContainer>

                {/* 홍보부장 Profile - 오른쪽 정렬 */}
                <ProfileContainerReverse>
                    <ProfileImage imageUrl={PR_director} />
                    <ProfileDescriptionReverse>
                        <NameMajorBatchContainer>
                            <PositionNameContainer>
                            <PositionName colorGradient="linear-gradient(to right, #FFFFFF,#FFF500)">홍보부장</PositionName>
                                <Text size="xl" weight="bold">조은정</Text>
                            </PositionNameContainer>
                            <BatchMajorContainer>
                                <Text size="xs" weight="light" color="rgba(255, 255, 255, 0.7)">KERT 23기 심화컴퓨터 22학번</Text>
                            </BatchMajorContainer>
                        </NameMajorBatchContainer>
                        <Text size="m" weight="bold"> KERT의 인스타그램,페이스북과 같은 SNS를 관리해요.<br/>
                        활동 홍보 자료를 제작하고 업로드해요.
                        </Text>
                    </ProfileDescriptionReverse>
                </ProfileContainerReverse>

                {/* 학술부장 Profile */}
                <ProfileContainer>
                    <ProfileImage imageUrl={study_director} />
                    <ProfileDescription>
                        <NameMajorBatchContainer>
                            <PositionNameContainer>
                            <PositionName colorGradient="linear-gradient(to right, #FFFFFF,#0094FF)">학술부장</PositionName>
                                <Text size="xl" weight="bold">김수진</Text>
                            </PositionNameContainer>
                            <BatchMajorContainer>
                                <Text size="xs" weight="light" color="rgba(255, 255, 255, 0.7)">KERT 23기 글로벌소프트웨어 22학번</Text>
                            </BatchMajorContainer>
                        </NameMajorBatchContainer>
                        <Text size="m" weight="bold"> 정기 세미나, 프로젝트 및 스터디를 관리해요.</Text>
                    </ProfileDescription>
                </ProfileContainer>
            </ProfilesWrapper>
            <StyledButton onClick={handleClick}>
                역대 임원진 보기
            </StyledButton>
        </BackFirstStyle>
    );
}

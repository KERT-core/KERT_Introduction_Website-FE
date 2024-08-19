import React from 'react';
import bg_img from "../assets/Section4_bg_img.png";
import group from "../assets/icons/Card.png";
import styled from "styled-components";
import { Text, Span } from "../components/typograph/Text";
import "../font/main_font.css";

// Dev문서 타이틀 양식 가져오기
const Title = styled(Span).attrs({ id: "title", $size: "sxl", $weight: "heavy", $color: "--primary-text-color" })`
    margin-bottom: 12px;
`;

// Container for the left content
const LeftContentContainr = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 50px;
`;

// Container to wrap the left and right content containers
const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10%;
`;

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

// Container for the right content boxes
const RightContentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 100px;
    gap: 20px; /* GroupBox 간의 간격을 설정 */
    margin-top: 20px; /* 상단 간격 추가 */
    margin-bottom: 20px; /* 하단 간격 추가 */
`;

const GroupBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px;
    gap: 30px;

    width: 250px;
    height: 200px;

    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(5px); /* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export default function Section1() {
    return (
        <BackFirstStyle>
            <ContentWrapper>
                <LeftContentContainr>
                    <Text size="xs" weight="light">Education Content of KERT</Text>
                    <Title>KERT, 이런 걸 배워요</Title>
                    <Text size="s" weight="regular">KERT는 보안과 관련된 다양한 활동이 준비돼있어요.<br/>
                    가입 후 다양한 분야 지식을 습득할 수 있어요.</Text>
                </LeftContentContainr>
                <RightContentContainer>
                    <GroupBox>
                        {/*<Text size="s" weight="bold">Web 기초</Text>*/}
                    </GroupBox>
                    <GroupBox>
                       {/*<Text size="s" weight="bold">Web 기초</Text>*/}
                    </GroupBox>
                    <GroupBox>
                        {/*<Text size="s" weight="bold">Web 기초</Text>*/}
                    </GroupBox>
                    <GroupBox>
                        {/*<Text size="s" weight="bold">Web 기초</Text>*/}
                    </GroupBox>
                </RightContentContainer>
            </ContentWrapper>
        </BackFirstStyle>
    );
}

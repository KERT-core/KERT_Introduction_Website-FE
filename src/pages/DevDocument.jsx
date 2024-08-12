// DevDocument.jsx
// 코드 작성자 : GiHhub @whitedev77773

// 외부 라이브러리에서 import
//import React from "react";
//import styled from "styled-components";

// 사용자가 생성한 컴포넌트 및 JS파일 import

/*
import { Container } from "../components/forms/Container";
import { Text, Span } from "../components/typograph/Text";

const Section = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    
    box-sizing: border-box;
    width: 100%;
    max-width: 1000px;
    margin: auto;
`

const Header = styled.div.attrs({ id: "header" })``;
const Title = styled(Span).attrs({ id: "title", $size: "sxl", $weight: "heavy", $color: "--primary-text-color" })`
    margin-bottom: 12px;
`;
const TextLabel = styled(Span).attrs({ id: "desc", $size: "s", $weight: "regular", $color: "--secondary-text-color" })`
    margin-bottom: 5px;
`;
const Description = styled(Span).attrs({ id: "desc", $size: "m", $weight: "regular", $color: "--secondary-text-color" })``;

const Demo = styled.div`
    width: 100%;

    &:not(&:last-child) {
        margin-bottom: 20px;
    }

    & > *:not(*:last-child) {
        margin-bottom: 4px;
    }
`;
const SubTitle = styled(Span).attrs({
    $size: "l", $weight: "bold"
})`
    margin-bottom: 10px;
`;

const Code = styled(Span)`
    display: block;
    width: 100%;
    font-family: consolas, sans-serif;
    box-sizing: border-box;
    padding: 10px;
    margin: 10px 0;
    background-color: var(--container-secondary-background);
    border: 1px solid var(--container-border);
    color: var(--secondary-text-color);
    border-radius: 10px;
`;

export default function DevDocument() {
    return (
        <div style={{ paddingTop: "100px" }}>
            <Section>
                <Header>
                    <TextLabel>src/component/typograph/Text.jsx</TextLabel>
                    <Title>{"<Text />"}</Title>
                    <Description>텍스트를 추가할 때 사용하는 컴포넌트입니다. size, weight, color를 속성로 받습니다.</Description>
                </Header>
                <div>
                    <SubTitle>인자 설명</SubTitle>
                    <Text size="s">size : xs || s || m || l || xl || string ?? m</Text>
                    <Text size="s">weight : light || regular || bold || extrabold || heavy ?? regular</Text>
                    <Text size="s">color : --primary-text-color || #ffffff || white || string ?? --primary-text-color</Text>
                </div>
                <div>
                    <SubTitle>코드 사용 예시</SubTitle>
                    <Code>{"<Text size=\"xs\" weight=\"bold\">xs 사이즈 및 bold 굵기의 텍스트입니다.</Text>"}</Code>
                    <Code>{"<Text size=\"l\">l 사이즈의 텍스트입니다.</Text>"}</Code>
                    <Code>{"<Text size=\"xl\" color=\"#000000\">xl 사이즈 및 색이 #000000인 텍스트입니다.</Text>"}</Code>
                </div>
                <div>
                    <SubTitle>실행 예시</SubTitle>
                    <div style={{ display: "flex" }}>
                        <Demo>
                            <Text size="xs" weight="bold" >[12px] 이건 xs 사이즈입니다.</Text>
                            <Text size="s" weight="bold">[14px] 이건 s 사이즈입니다.</Text>
                            <Text size="m" weight="bold">[16px] 이건 m 사이즈입니다.</Text>
                            <Text size="l" weight="bold">[20px] 이건 l 사이즈입니다.</Text>
                            <Text size="xl" weight="bold">[24px] 이건 xl 사이즈입니다.</Text>
                            <Text size="sxl" weight="bold">[28px] 이건 sxl 사이즈입니다.</Text>
                        </Demo>
                        <Demo>
                            <Text size="xl" weight="light" >[Light] 이건 light 굵기입니다.</Text>
                            <Text size="xl" weight="regular">[Regular] 이건 regular 굵기입니다.</Text>
                            <Text size="xl" weight="bold">[Bold] 이건 bold 굵기입니다.</Text>
                            <Text size="xl" weight="extrabold">[ExtraBold] 이건 extrabold 굵기입니다.</Text>
                            <Text size="xl" weight="heavy">[Heavy] 이건 heavy 굵기입니다.</Text>
                        </Demo>
                    </div>
                </div>
            </Section>
        </div>
    )
}*/

import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM from 'react-dom/client' 사용
import MainPage from './MainPage.jsx';  // MainPage 컴포넌트를 import

export default function DevDocument() {
    return <MainPage />;  // MainPage 컴포넌트를 렌더링
}

// createRoot를 사용해 root 엘리먼트 생성 및 렌더링
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<DevDocument />);

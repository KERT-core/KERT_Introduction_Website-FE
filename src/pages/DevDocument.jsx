// DevDocument.jsx
// 코드 작성자 : GiHhub @whitedev77773

// 외부 라이브러리에서 import
import React from "react";
import styled from "styled-components";

// 사용자가 생성한 컴포넌트 및 JS파일 import
import { Container } from "../components/forms/Container";
import { Text, Span } from "../components/typograph/Text";
import { Checkbox } from "../components/forms/Checkbox";
import { Toggle } from "../components/forms/Toggle";
import { Button } from "../components/forms/Button";


const Section = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    
    box-sizing: border-box;
    width: 100%;
    max-width: 1000px;
    margin: auto;
    margin-bottom: 30px;
`

const Header = styled.div.attrs({ id: "header" })``;
const Title = styled(Span).attrs({ id: "title", $size: "sxl", $weight: "heavy", $color: "--primary-text-color" })`
    margin-bottom: 12px;
`;
const TextLabel = styled(Span).attrs({ id: "desc", $size: "s", $weight: "regular", $color: "--secondary-text-color" })`
    margin-bottom: 5px;
`;
const Description = styled(Span).attrs({ id: "desc", $size: "m", $weight: "regular", $color: "--secondary-text-color" })`
    margin: 2px 0;
`;

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
            <Section id="text-explain">
                <Header>
                    <TextLabel>src/component/typograph/Text.jsx</TextLabel>
                    <Title>{'<Text />'}</Title>
                    <Description>텍스트를 추가할 때 사용하는 컴포넌트입니다. size, weight, color를 속성로 받습니다.</Description>
                </Header>
                <div id="explain">
                    <SubTitle>인자 및 상세 설명</SubTitle>
                    <Description size="s">색상 관련 props의 값이 --로 시작하면 css 변수로 감지합니다. (다른 컴포넌트 참고)</Description>
                    <Description size="s">size : xs || s || m || l || xl || string ?? m</Description>
                    <Description size="s">weight : light || regular || bold || extrabold || heavy ?? regular</Description>
                    <Description size="s">color : --primary-text-color || #ffffff || white || string ?? --primary-text-color</Description>
                </div>
                <div id="example-code">
                    <SubTitle>코드 사용 예시</SubTitle>
                    <Code>{'<Text size="xs" weight="bold">xs 사이즈 및 bold 굵기의 텍스트입니다.</Text>'}</Code>
                    <Code>{'<Text size="l">l 사이즈의 텍스트입니다.</Text>'}</Code>
                    <Code>{'<Text size="xl" color="#000000">xl 사이즈 및 색이 #000000인 텍스트입니다.</Text>'}</Code>
                </div>
                <div id="example">
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
            <Section id="checkbox-explain">
                <Header>
                    <TextLabel>src/component/forms/Checkbox.jsx</TextLabel>
                    <Title>{'<Checkbox />'}</Title>
                    <Description>폼 작성용 체크박스입니다. size, color, checked, onChange를 속성로 받습니다.</Description>
                </Header>
                <div id="explain">
                    <SubTitle>인자 및 상세 설명</SubTitle>
                    <Description size="s">색상 관련 props의 값이 --로 시작하면 css 변수로 감지합니다. (다른 컴포넌트 참고)</Description>
                    <Description size="s">size : s || m || l || string ?? m</Description>
                    <Description size="s">color : --primary-color || #ffffff || white || string ?? --primary-color</Description>
                    <Description size="s">checked : true || false || boolean ?? false</Description>
                    <Description size="s">onChange : null || function ?? null</Description>
                </div>
                <div id="example-code">
                    <SubTitle>코드 사용 예시</SubTitle>
                    <Code>{'<Checkbox size="s" />'}</Code>
                    <Code>{'<Checkbox size="l" color="--secondary-color" />'}</Code>
                    <Code>{'<Checkbox onChange={(e) => alert("체크 박스가 " + e.target.checked + "로 변한 것도 감지해요.")} />'}</Code>
                </div>
                <div id="example">
                    <SubTitle>실행 예시</SubTitle>
                    <div style={{ display: "flex" }}>
                        <Demo>
                            <Checkbox size="s" />
                            <Checkbox size="m" />
                            <Checkbox size="l" />
                            <Checkbox size="40px" onChange={(e) => alert("체크 박스가 " + e.target.checked + "로 변한 것도 감지할 수 있어요.")} />
                        </Demo>
                        <Demo>
                            <Checkbox size="l" color="black" />
                            <Checkbox size="l" color="#c5c500" />
                            <Checkbox size="l" color="--secondary-color" />
                        </Demo>
                    </div>
                </div>
            </Section>
            <Section id="toggle-explain">
                <Header>
                    <TextLabel>src/component/forms/Toggle.jsx</TextLabel>
                    <Title>{'<Toggle />'}</Title>
                    <Description>폼 작성용 토글 버튼입니다. size, color, checked, onChange를 속성로 받습니다.</Description>
                </Header>
                <div id="explain">
                    <SubTitle>인자 및 상세 설명</SubTitle>
                    <Description size="s">색상 관련 props의 값이 --로 시작하면 css 변수로 감지합니다. (다른 컴포넌트 참고)</Description>
                    <Description size="s">size : s || m || l || string ?? m</Description>
                    <Description size="s">color : --primary-color || #ffffff || white || string ?? --primary-color</Description>
                    <Description size="s">checked : true || false || boolean ?? false</Description>
                    <Description size="s">onChange : null || function ?? null</Description>
                </div>
                <div id="example-code">
                    <SubTitle>코드 사용 예시</SubTitle>
                    <Code>{'<Toggle />'}</Code>
                    <Code>{'<Toggle size="l" color="--secondary-color" />'}</Code>
                    <Code>{'<Toggle onChange={(e) => alert("토글 버튼이 " + e.target.checked + "로 변한 것도 감지해요.")} />'}</Code>
                </div>
                <div id="example">
                    <SubTitle>실행 예시</SubTitle>
                    <div style={{ display: "flex" }}>
                        <Demo>
                            <Toggle size="s" />
                            <Toggle size="m" />
                            <Toggle size="l" />
                            <Toggle size="l" onChange={(e) => alert("토글 버튼이 " + e.target.checked + "로 변한 것도 감지할 수 있어요.")} />
                        </Demo>
                        <Demo>
                            <Toggle size="l" color="black" />
                            <Toggle size="l" color="#c5c500" />
                            <Toggle size="l" color="--secondary-color" />
                        </Demo>
                    </div>
                </div>
            </Section>
            <Section id="button-explain">
                <Header>
                    <TextLabel>src/component/forms/Button.jsx</TextLabel>
                    <Title>{'<Button />'}</Title>
                    <Description>폼 작성용 버튼입니다. type, width, height, color, text_color, onClick을 속성로 받습니다.</Description>
                    <Description>type은 flat / outline / translucent 3가지 중 하나를 입력해야합니다. 기본은 flat입니다.</Description>
                </Header>
                <div id="explain">
                    <SubTitle>인자 및 상세 설명</SubTitle>
                    <Description size="s">색상 관련 props의 값이 --로 시작하면 css 변수로 감지합니다. (다른 컴포넌트 참고)</Description>
                    <Description size="s">width : fit-content || 200px || string ?? fit-content</Description>
                    <Description size="s">height : fit-content || 80px || string ?? fit-content</Description>
                    <Description size="s">color : --primary-color || #ffffff || white || string ?? --primary-color</Description>
                    <Description size="s">text_color : --white || #ffffff || white || string ?? --white</Description>
                </div>
                <div id="example-code">
                    <SubTitle>코드 사용 예시</SubTitle>
                    <TextLabel>플랫버튼</TextLabel>
                    <Code>{'<Button type="flat">플랫 버튼</Button>'}</Code>
                    <Code>{'<Button type="flat" onClick={() => alert("버튼 클릭!")}>플랫 버튼 (onClick)</Button>'}</Code>
                    <Code>{'<Button type="flat" width="400px" height="80px">플랫 버튼 (크기 정의됨)</Button>'}</Code>
                    <TextLabel>아웃라인 버튼</TextLabel>
                    <Code>{'<Button type="outline">아웃라인 버튼</Button>'}</Code>
                    <Code>{'<Button type="outline" onClick={() => alert("버튼 클릭!")}>아웃라인 버튼 (onClick)</Button>'}</Code>
                    <Code>{'<Button type="outline" width="400px" height="80px">아웃라인 버튼 (크기 정의됨)</Button>'}</Code>
                    <TextLabel>반투명 버튼</TextLabel>
                    <Code>{'<Button type="translucent">반투명 버튼</Button>'}</Code>
                    <Code>{'<Button type="translucent" onClick={() => alert("버튼 클릭!")}>반투명 버튼 (onClick)</Button>'}</Code>
                    <Code>{'<Button type="translucent" width="400px" height="80px">반투명 버튼 (크기 정의됨)</Button>'}</Code>
                </div>
                <div id="example">
                    <SubTitle>실행 예시</SubTitle>
                    <div style={{ display: "flex", width: "100%" }}>
                        <Demo>
                            <Button type="flat">플랫 버튼</Button>
                            <Button type="flat" onClick={() => alert("버튼 클릭!")}>플랫 버튼 (onClick)</Button>
                            <Button type="flat" width="400px" height="80px">플랫 버튼 (크기 정의됨)</Button>
                        </Demo>
                        <Demo>
                            <Button type="flat" color="--primary-text-color" text_color="--body-background">플랫 버튼</Button>
                            <Button type="flat" color="#c5c500" text_color="black">플랫 버튼</Button>
                            <Button type="flat" color="--secondary-color" onClick={() => alert("왜 눌렀어요")}>플랫 버튼</Button>
                        </Demo>
                    </div>
                    <div style={{ display: "flex", width: "100%" }}>
                        <Demo>
                            <Button type="outline">아웃라인 버튼</Button>
                            <Button type="outline" onClick={() => alert("버튼 클릭!")}>아웃라인 버튼 (onClick)</Button>
                            <Button type="outline" width="400px" height="80px">아웃라인 버튼 (크기 정의됨)</Button>
                        </Demo>
                        <Demo>
                            <Button type="outline" color="--primary-text-color" text_color="--primary-text-color">아웃라인 버튼</Button>
                            <Button type="outline" color="#c5c500" text_color="#c5c500">아웃라인 버튼</Button>
                            <Button type="outline" color="--secondary-color" text_color="--secondary-color">아웃라인 버튼</Button>
                        </Demo>
                    </div>
                    <div style={{ display: "flex", width: "100%" }}>
                        <Demo>
                            <Button type="translucent">반투명 버튼</Button>
                            <Button type="translucent" onClick={() => alert("버튼 클릭!")}>반투명 버튼 (onClick)</Button>
                            <Button type="translucent" width="400px" height="80px">반투명 버튼 (크기 정의됨)</Button>
                        </Demo>
                        <Demo>
                            <Button type="translucent" color="--primary-text-color" text_color="--primary-text-color">반투명 버튼</Button>
                            <Button type="translucent" color="#c5c500" text_color="#c5c500">반투명 버튼</Button>
                            <Button type="translucent" color="--secondary-color" text_color="--secondary-color">반투명 버튼</Button>
                        </Demo>
                    </div>
                </div>
            </Section>
        </div>
    )
}
<<<<<<< HEAD
// FlatButton.jsx
// 코드 작성자 : GiHhub @whitedev77773

import styled from "styled-components"

/**
 * @typedef {"xs" | "s" | "m" | "l" | "xl" | sxl; | String} FontSize
 * @typedef {"light" | "regular" | "bold" | "extrabold" | "heavy"} FontWeight
 * @typedef {"--primary-text-color" | "white" | "#ffffff" | String} FontColor
 * 
 * @property {FontSize} fontSize
 * @property {FontWeight} fontWeight
 * @property {FontColor} fontColor
 */
const Button = styled.button<{
    width: String,
    height: String,
}>`
    width: ${(width) => width ?? "fit-content"};
    height: ${(height) => height ?? "fit-content"};
`
=======
// Button.jsx
// 코드 작성자 : GiHhub @whitedev77773

// 외부 라이브러리에서 import
import styled from "styled-components"

// 사용자가 생성한 컴포넌트 및 JS파일 import


/**
 * Flat / Outline / Translucent
 * 위 버튼들의 부모로 사용되는 요소입니다.
 *  기본 스타일을 지정할 수 있습니다.
 * @type {styled.button}
 */
const IButton = styled.button`
    position: relative;
    cursor: pointer;
    overflow: hidden;

    width: ${(props) => props.$width ?? "fit-content"};
    height: ${(props) => props.$height ?? "fit-content"};
    padding: 15px 30px;
    border-radius: 12px;

    border: none;
    outline: none;
    color: ${(props) => {
        if (props.$text_color?.startsWith("--")) {
            return `var(${props.$text_color});`;
        }
        else {
            return props.$text_color ?? "white";
        }
    }};
    font-weight: 700;

    box-sizing: border-box;

    &:after {
        z-index: 10;
        position: absolute;
        content: "";
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        transition: background-color 0.2s ease-out;
        background-color: #ffffff00;
    }

    &:hover:after {
        background-color: #ffffff10;
    }

    &:active:after {
        background-color: #ffffff20;
    }
`

/**
 * 플랫 버튼입니다.
 * @type {styled.button}
 */
const FlatButton = styled(IButton)`
    background-color: ${(props) => {
        if (props.$color?.startsWith("--")) {
            return `var(${props.$color});`;
        }
        else {
            return props.$color ?? "var(--primary-color)";
        }
    }};
`

/**
 * 아웃 라인 버튼입니다.
 * @type {styled.button}
 */
const OutlineButton = styled(IButton)`
    background-color: transparent;
    border: 2px solid ${(props) => {
        if (props.$color?.startsWith("--")) {
            return `var(${props.$color});`;
        }
        else {
            return props.$color ?? "var(--primary-color)";
        }
    }};
    color: ${(props) => {
        if (props.$text_color?.startsWith("--")) {
            return `var(${props.$text_color});`;
        }
        else {
            return props.$text_color ?? "var(--primary-color)";
        }
    }};
`

/**
 * 아웃 라인 버튼입니다.
 * @type {styled.button}
 */
const TranslucentButton = styled(IButton)`
    &:before {
        z-index: 10;
        position: absolute;
        content: "";
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        background-color: ${(props) => {
            if (props.$color?.startsWith("--")) {
                return `var(${props.$color});`;
            }
            else {
                return props.$color ?? "var(--primary-text-color)";
            }
        }};
        opacity: 0.05;
    }
    background-color: transparent;
    color: ${(props) => {
        if (props.$text_color?.startsWith("--")) {
            return `var(${props.$text_color});`;
        }
        else {
            return props.$text_color ?? "var(--primary-text-color)";
        }
    }};
`

/**
 * 폼 작성용 버튼 컴포넌트
 * @param {string} type Flat | outline | translucent
 * @param {string} width fit-content | 16px | string
 * @param {string} height fit-content | 16px | string
 * @param {any} children 버튼에 표시될 요소
 */
export const Button = ({ type="flat", width, height, color, text_color, onClick, children }) => {
    switch (type) {
        case "flat":
            return <FlatButton $width={width} $height={height} $color={color} $text_color={text_color} onClick={onClick}>{children}</FlatButton>;
        case "outline":
            return <OutlineButton $width={width} $height={height} $color={color} $text_color={text_color} onClick={onClick}>{children}</OutlineButton>;
        case "translucent":
            return <TranslucentButton $width={width} $height={height} $color={color} $text_color={text_color} onClick={onClick}>{children}</TranslucentButton>;
        default:
            console.warn("[Button.jsx] 알 수 없는 버튼 타입입니다.");
            return <FlatButton>{children}</FlatButton>;
        }
}
>>>>>>> fab44530a51b0689aaf1a24b18b980685fd98a61

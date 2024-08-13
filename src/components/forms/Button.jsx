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
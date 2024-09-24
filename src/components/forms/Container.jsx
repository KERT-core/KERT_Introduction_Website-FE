import styled from "styled-components"

/**
 * props 속성으로 bg_color를 입력 받습니다. 기본 컬러는 #0b1520입니다.
 */
export const Container = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 20px;
    padding: 40px;
    border-radius: 30px;
    box-sizing: border-box;
    
    background-color: ${(props) => props.$bg_color ?? "#0b1520"};
    box-shadow: 0px 0px 30px #00000025;
`
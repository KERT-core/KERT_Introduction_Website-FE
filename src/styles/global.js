import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #080f17;
    }

    body, button, p, span {
        margin: 0;
        padding: 0;
        font-family: 'NanumSquareNeo', sans-serif;
        color: white;
    }

    *::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    *::-webkit-scrollbar-thumb {
        background: #ffffff20; /* 스크롤바 색상 */
        border-radius: 10px; /* 스크롤바 둥근 테두리 */
    }

    *::-webkit-scrollbar-track {
        background: #ffffff5;  /*스크롤바 뒷 배경 색상*/
    }

    *::-webkit-scrollbar-corner {
        background: transparent;
    }
`;
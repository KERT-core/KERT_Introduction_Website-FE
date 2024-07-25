import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #080f17;
    }

    body, button, p, span {
        margin: 0;
        padding: 0;
        letter-spacing : -1px;
        font-family: 'NanumSquare', sans-serif;
        color: white;
    }
`;
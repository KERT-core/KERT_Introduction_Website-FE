import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --black: #000000;
        --primary-color: #213EA6;
        --secondary-color: #283259;
        --danger-color: #FF6565;
        --warning-color: #F1C40F;
        --success-color: #2ECC71;
        --container-border-width: 1px;
        --transparent-button-background: rgba(255, 255, 255, 0.05);
    }

    body {
        background-color: var(--body-background);
    }

    body, button, p, span {
        margin: 0;
        padding: 0;
        font-family: 'NanumSquareNeo', sans-serif;
    }

    *::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--secondary-text-color); /* 스크롤바 색상 */
        border-radius: 10px; /* 스크롤바 둥근 테두리 */
    }

    *::-webkit-scrollbar-track {
        background: #ffffff05;  /*스크롤바 뒷 배경 색상*/
    }

    *::-webkit-scrollbar-corner {
        background: transparent;
    }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --white: #FFFF;
        --white-opacity: #FFFF 0.75;
        --blue: #00a1d4;
        --blue-opacity: #00A1D49C 0.61;
        --graphite: #212121;
        --graphite-light: #2f2727;
        --black: #0000;
        --green: #1FAE7B;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //font-size: 16px (desktop)
    html{ 
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media (max-width:720px){
            font-size: 87.5%; //14px
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    border-style, input, textarea, button{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 500;
    }

    button{ 
        cursor: pointer;
    }

    [disabled]{
        opacity: 8.6;
        cursor: not-allowed;
    }
`;

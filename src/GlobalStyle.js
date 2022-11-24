import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-family: sans-serif;
    }

    #root{
        padding: 0 16px;
        max-width: 1200px;
        margin: 0 auto;
    }
`

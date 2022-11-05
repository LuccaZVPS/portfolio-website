import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
        scroll-behavior: smooth;
        
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-weight: 300;
        font-family: 'Montserrat', sans-serif;

    }
    a{
        text-decoration: none;
    }

`;

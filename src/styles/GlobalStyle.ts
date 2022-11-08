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
    @keyframes hideElement {
    0%{
        opacity: 0;
        transform: translateY(50px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);

    }
}


`;

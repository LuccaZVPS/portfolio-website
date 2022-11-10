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
    .loading{
        width: 100%;
        height: 100vh;
        background: #090E16;
        position: relative;
        ::before{
            content: "";
            width: 150px;
            height: 150px;
            position: absolute;
            left: calc(50% - 75px);
            top: calc(50% - 75px);
            border-radius: 50%;
            background: transparent;
            border: solid 3px transparent;
            border-bottom: 1px solid #ff4d5a;
            border-right: 1px solid #ff4d5a;
            animation:load 0.6s linear infinite
        }

        @keyframes load {
            0%{
                transform:rotate(0deg)
            }
            100%{
                transform:rotate(360deg)

            }
        }
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
@keyframes reverse-hideElement {
    0%{
        opacity: 1;
        transform: translateY(0px);
    }
    100%{
        opacity: 0;
        transform: translateY(50px);

    }
}

`;

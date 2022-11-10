import styled from "styled-components";
interface props {
  characters: number;
  time:any
}
export const container = styled.div<props>`
  align-items: baseline;
  color: ${({ theme }) => theme.colors.primary};
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content:left;
  h2 {
    position: relative;
    z-index:200;
    font-size: 2.2rem;
    display: flex;
    font-weight: bold;
    color: white;
    ::before {
      position: absolute;
      content: "";
      border-left: solid 2px red;
      height: 100%;
      width: 100%;
      left: 0;
      background-color: ${({ theme }) => theme.colors.background};
      
    }

@media (max-width: 1450px) {
  font-size: 1.8rem;
}

@media (max-width: 1200px) {
  font-size: 1.6rem;
}
@media (max-width: 750px) {
  font-size: 1.4rem;
}
@media (max-width: 500px) {
  font-size: 1.2rem;
}
@media (max-width: 300px) {
  font-size: 1.1rem;
}
  }

  .hidden {
    ::before {
      animation: reverse-type ${({time}) => time} steps(${({characters}) => characters}) forwards, blink infinite 1.5s 1s;
    }
  }

  
  .visible {
   
    
    @media (max-width: 400px) {
      ::before {
        display: none;
    }
    }
    ::before {
      animation: type ${({time}) => time} steps(${({characters}) => characters}) forwards, blink infinite 1.5s 1s;
    }

    @keyframes type {
      0% {
        left: 0%;
      }
      100% {
        left: 100%;
      }
    }

    @keyframes reverse-type {
      0% {
        left: 100%;
      }
      100% {
        left: 0%;
      }
    }
  }

 
`;

import styled from "styled-components";
interface props {
  characters: number;
  time:string
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
    position: absolute;
    ::before {
      position: absolute;
      content: "";
      border-left: solid 2px red;
      height: 100%;
      width: 100%;
      left: 0;
      background-color: ${({ theme }) => theme.colors.background};
    }
  
  }

  .hidden {
    visibility: hidden;
  }

  
  .visible {
    position: relative;

    display: flex;
    font-weight: bold;
    color: white;
    font-size: 2.2rem;

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
  }
`;

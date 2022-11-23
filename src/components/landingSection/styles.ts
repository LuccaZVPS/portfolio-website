import styled from "styled-components";

export const container = styled.section`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 10;
`;
export const content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  a {
    opacity: 0;
    transition: 0.2s;
    @keyframes hideButton {
      0% {
        opacity: 0;
      }
      60% {
        transform: translateY(100px);
        opacity: 0;
      }

      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    animation: hideButton 2.5s 0.6s forwards;

    width: 200px;
    height: 2.5rem;
    background: transparent;
    border: solid ${(props) => props.theme.colors.secondary} 2px;
    color: #ff4d5a;
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: 400;
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    svg {
      font-size: 1.4rem;
    }
    @media (max-width: 1900px) {
      width: 180px;
      height: 2.4rem;
      font-size: 1.1rem;
      svg {
        font-size: 1.1rem;
      }
    }

    @media (max-width: 1450px) {
      width: 170px;
      height: 2.2rem;
      font-size: 1rem;
      svg {
        font-size: 1.2rem;
      }
    }
    @media (max-width: 550px) {
      width: 150px;
      height: 2.2rem;
      font-size: 0.9rem;
      svg {
        font-size: 1rem;
      }
    }
    :hover{
      background-color: black;
      box-shadow: 0 0 5px ${({theme}) => theme.colors.hover2};
    }
  }
`;
export const name = styled.div`
  h1,
  span {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
  h1 {
    color: ${({ theme }) => theme.colors.txt};
  }
  @keyframes hideName {
    0% {
      opacity: 0;
      transform: translateX(-70px);
    }
    100% {
      transform: translateX(0px);

      opacity: 1.5;
    }
  }
  & {
    animation: hideName 1s;
  }
  @media (max-width: 1900px) {
    h1,
    span {
      font-size: 2.6rem;
    }
  }
  @media (max-width: 1450px) {
    h1,
    span {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 550px) {
    h1,
    span {
      font-size: 2.2rem;
    }
  }
`;
export const description = styled.div`
  display: flex;
  align-items: baseline;
  width: fit-content;
  height: fit-content;
  p {
    color: ${({ theme }) => theme.colors.txt};
    opacity: 0.8;
    font-size: 1rem;
    position: relative;
  }

  p::before {
    content: "";
    width: 100%;
    position: absolute;
    height: 100%;
    left: 0;
    border-left: solid 2px red;
    animation: typewriter 2s steps(27) forwards,
      blink steps(27) infinite 1.5s 3s;
    background: ${({ theme }) => theme.colors.background};
  }

  @media (max-width: 550px) {
    p {
      font-size: 0.9rem;
      position: relative;
    }
  }

  @keyframes typewriter {
    0% {
      left: 0%;
      width: 100%;
    }

    100% {
      left: 100%;
      width: 0%;

    }
  }

  @keyframes blink {
    0% {
      border: none;
    }

    100% {
      border-left: 2px solid red;
    }
  }
`;

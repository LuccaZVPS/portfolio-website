import styled from "styled-components";

export const container = styled.canvas`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  animation: hideParticless 1.5s 2.5s forwards;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  @keyframes hideParticless {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

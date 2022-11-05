import styled from "styled-components";
import { Container as terminal } from "../Terminal/styles";
export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  h2 {
    margin-top: 30px;
  }
  .slider {
    width: 100%;
    padding: 20px 0 20px 0;
  }

  @media (max-width: 730px) {
    .slider {
      overflow: auto;
    }
  }
`;
export const CardsContainer = styled.div`
  display: grid;
  margin-top: 80px;
  grid-template-columns: repeat(auto-fill, minMax(360px, 1fr));
  justify-items: center;
  row-gap: 40px;
  ${terminal} {
    width: auto;
    height: auto;
    opacity: 0;
  }
  .show {
    opacity: 1;
    animation: show 1s;
  }

  @keyframes show {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media (max-width: 1900px) {
    grid-template-columns: repeat(auto-fill, minMax(320px, 1fr));
  }

  @media (max-width: 1450px) {
    grid-template-columns: repeat(auto-fill, minMax(260px, 1fr));
    margin-top: 40px;
    gap: 20px;
  }

  @media (max-width: 730px) {
    display: flex;
    min-width: fit-content;
    overflow-x: scroll;
    margin-top: 20px;
  }
`;

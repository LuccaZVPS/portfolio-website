import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 140px 0px 140px;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
  gap: 160px;
  @media (max-width: 1450px) {
    padding: 0px 100px 0px 100px;
  }

  @media (max-width: 750px) {
    padding: 0px 20px 0px 20px;
    
  }
`;

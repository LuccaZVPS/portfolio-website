import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.hover2};
  width: fit-content;
  padding: 12px;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.txt};
  @media (max-width: 730px) {
    padding: 9px;
    font-size: 0.95rem;
  
  }
`;

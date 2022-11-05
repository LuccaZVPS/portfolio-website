import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  height: 460px;
  border-radius: 15px;
  padding: 25px 30px 25px 30px;
  color: ${({ theme }) => theme.colors.txt};
  .desc {
    color: ${({ theme }) => theme.colors.txt2};
    height: 100px;
    width: 100%;
    margin-top: 10px;
  }
  .tags {
    height: 70px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
    font-size: 1.6rem;
  }
  .image {
    height: 200px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.hover2};
    border-radius: 15px;
  }

  @media (max-width: 1900px) {
    width: 320px;
    height: 410px;
    padding: 25px 25px 25px 25px;

    .desc {
      height: 80px;
      width: 100%;
      margin-top: 10px;
      font-size: 0.85rem;
    }
    .tags {
      height: 50px;
      gap: 5px;
      font-size: 0.9rem;
      div {
        padding: 2px 6px 2px 6px;
      }
      margin-bottom: 5px;
    }
    .image {
      height: 180px;
      width: 100%;
    }
  }

  @media (max-width: 1450px) {
    width: 260px;
    height: 340px;
    padding: 15px 20px 15px 20px;
    h3 {
      font-size: 1rem;
    }
    .desc {
      height: 80px;
      width: 100%;
      margin-top: 5px;
      font-size: 0.75rem;
    }
    .tags {
      height: 40px;
      gap: 5px;
      font-size: 0.75rem;
      div {
        padding: 2px 4px 2px 4px;
      }
      margin-bottom: 5px;
    }
    .image {
      height: 150px;
      width: 100%;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  border-radius: 15px;
  padding: 25px 30px 25px 30px;
  color: ${({ theme }) => theme.colors.txt};
  cursor: pointer;
  
  .desc {
    color: ${({ theme }) => theme.colors.txt2};
    height: 100px;
    width: 100%;
    margin-top: 10px;
  }
  .tags {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
    img{
      width: 30px;
      height: 30px;
      border-radius:6px;
    }
  }
  .image {
    height: auto;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.hover2};
    border-radius: 15px;
  }

  @media (max-width: 1900px) {
    width: 320px;
    padding: 25px 25px 25px 25px;

    .desc {
      height: 80px;
      width: 100%;
      margin-top: 10px;
      font-size: 0.85rem;
    }
    .tags {
      height: 50px;
      img{
        width: 27px;
        height: 27px;;
      }
    }
    .image {
      height: auto;
      width: 100%;
    }
  }

  @media (max-width: 1450px) {
    width: 260px;
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
      margin-bottom: 5px;
      img{
        width: 22px;
        height: 22px;;
      }

    }
    .image {
      height: auto;
      width: 100%;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  border: 15px 15px 0 0;
  border: 1px solid #171a1b;
  width: auto;
  height: auto;
  background-color: #0C1212;
  border-radius: 15px;
  border: solid 0.1px #4a4a4a;
  margin-bottom: 30px;
  transition: 0.3s;
  :hover {
    background-color: #161b24;
  }
  .header {
    padding-top: 7px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    .btns {
      margin-left: 24px;
      position: absolute;
      left: 0;
      display: flex;
      gap: 8px;
      span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
      .red {
        background-color: #ff5f56;
      }
      .orange {
        background-color: #ffbd2e;
      }
      .green {
        background-color: #27c93f;
      }
    }
  }
`;

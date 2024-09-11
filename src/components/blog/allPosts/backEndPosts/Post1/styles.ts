import styled from "styled-components";

export const PostStylesMainContainer = styled.div`
  width: 75vw;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 100px;
  margin-left: 150px;
  margin-bottom: 150px;
  background-color: lightgray;
  box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.25);

  @media (max-width: 390px) {
    width: 390px;
    margin-left: 0px;
    .img {
      width: 350px;
      height: 150px;
    }
  }
`;

export const TextContainer = styled.div`
  h1,
  h2,
  h3,
  h4,
  p {
    font-family: Inter;
  }
  width: 45vw;
  margin-bottom: 150px;
  h1 {
    margin-top: 30px;
  }
  h1,
  h2,
  h3,
  h4 {
    margin-top: 45px;
    margin-bottom: 45px;
    letter-spacing: 1.2px;
    line-height: 25px;
  }

  p {
    font-weight: 600;
    letter-spacing: 1.2px;
    line-height: 25px;
  }

  @media (max-width: 390px) {
    width: 380px;
  }
`;

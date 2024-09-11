import styled from "styled-components";

export const heroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 390px) {
    display: flex;
    width: 390px;
  }
`;

export const welcomeContainer = styled.div`
  position: relative;
  z-index: 10;
  @media (max-width: 390px) {
    display: flex;
    width: 390px;
  }
`;

export const contentContainer = styled.div`
  > div {
    width: 50rem;
    margin-top: 150px;
    background: linear-gradient(to bottom, #4d6485, #052596);
    margin-bottom: 150px;
    border-radius: 35px;
    padding: 25px;

    @media (max-width: 795px){
      width: 30rem;
    }

    @media (max-width: 390px) {
      width: 33rem;
      margin-bottom: 180px;
        h3 {
          width: 330px;
          margin-left: 50px;
          font-size: 20px;
      }
    }
  }

  div {
    width: 100%
    height: auto;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 25px;

    h3 {
      width: 100%;
      color: #fff;
      font-family: Quicksand;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;
export const imageContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: -455px;

  img{
      width: 250px;
      height: auto;
      position: absolute;
      top: 70px;

  }

  @media (max-width: 390px) {
    .img {
      display: none;
    }
  }
`;

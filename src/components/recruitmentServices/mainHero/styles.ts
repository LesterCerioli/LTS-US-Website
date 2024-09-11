import styled from "styled-components";
import { Section } from "../../../app/(pages)/aboutUs/styles";

export const MainHero = styled.section`
  align-items: center;
  width: 100vw;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h4 {
    text-align: center;

    font-weight: 300;
    padding-top: 5vw;
    margin: 0px 50px 50px 50px;
    line-height: 1.5;
  }

  @media screen and (max-width: 375px) {
    section {
      width: 375px;
    }

    div {
      width: 375px;
      padding-bottom: 50px;
    }
    h1 {
      width: 200px;
    }
    h4 {
      width: 180px;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 480px) {
    section {
      width: 480px;
    }

    div {
      width: 480px;
      padding-bottom: 50px;
    }
  }

  @media screen and(min-width: 481) and(max-width: 768px) {
    section {
      width: 768px;
    }
    p {
      font-weight: 600;
    }
    div {
      max-width: 768px;
      padding-bottom: 10px;
    }

    .carousel-root {
      max-width: 768px;
      height: auto;
      margin-left: auto;
      margin-right: auto;
      justify-content: space-between;
    }
  }
`;

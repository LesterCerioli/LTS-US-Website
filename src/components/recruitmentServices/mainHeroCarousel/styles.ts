import styled from 'styled-components'

export const CarrousselStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  width: 100vw;
  padding-bottom: 80px;

  h1 {
    margin-top: 95px;
  }
  h4 {
    font-weight: 500;
  }
  .carousel-root {
    width: 100%;
    max-width: 1080px;
  }

  .carousel-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 375px) {
    div {
      max-width: 375px;
      height: auto;
      h1 {
        width: 305;
        font-weight: 500;
        font-size: 20px;
        margin-right: 150px;
      }
      h4 {
        width: 305px;
        font-size: 16px;
        margin-right: 200px;
      }
      .carousel-root {
        width: 370px;
        height: 370px;
        margin-right: 110px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    max-width: 480px;
    height: auto;
    h4 {
      width: 480;
      font-weight: 500;
      font-size: 20px;
    }
    .carousel-root {
      width: 460px;
      height: 460px;
    }
  }
  @media screen and (max-width: 768px) {
    h4 {
      font-weight: 600;
    }
  }
`

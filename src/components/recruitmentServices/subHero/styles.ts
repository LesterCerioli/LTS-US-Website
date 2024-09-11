import styled from 'styled-components'

export const SubHero = styled.section`
  align-items: center;
  width: 100vw;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 50px;
  }

  h1 {
    font-size: 32px;
    font-weight: 200;
  }

  h4 {
    padding-top: 16px;
    font-weight: 300;
    width: 80vw;

    @media screen and (max-width: 375px) {
      padding-bottom: 35px;
      div {
        max-width: 375px;
        height: auto;

        h1 {
          width: 305;
          font-weight: 500;
          font-size: 20px;
          margin-right: 80px;
        }
        h4 {
          width: 350px;
          margin-right: 150px;
        }
      }
    }
    @media screen and (max-width: 480px) {
      section {
        width: 480px;

        height: auto;
      }

      div {
        width: 480px;
        font-size: 20px;
        h1,
        h4 {
          margin-right: 30px;
        }
      }
    }

    @media screen and (max-width: 768px) {
      h4 {
        font-weight: 600;
      }

      section {
        width: 768px;

        height: auto;
        padding: 20px;
      }
    }
  }
`

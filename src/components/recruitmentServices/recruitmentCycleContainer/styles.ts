import styled from 'styled-components'

export const ProBarContainer = styled.div`
  width: 100vw;
  padding-top: 36px;
  margin-left: -450px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;

  justify-content: space-around;
  margin-bottom: 50px;

  div {
    width: 300px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
  }
  h1 {
    margin-left: 50vw;

    padding: 32px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 375px) {
    width: 100%;

    div {
      width: 100%;
      margin-left: 5px;
    }
  }

  @media screen and (max-width: 480px) {
    margin-left: -60px;
  }

  @media screen and (max-width: 768px) {
    h1 {
      margin-left: 100px;
    }
    margin-left: -60px;

    div {
      width: 160px;
      font-size: 18px;
      display: grid;
      grid-template-columns: repeat(3, 2fr);
      gap: 10px;
    }
    > div {
      margin-right: 280px;
    }
  }
`

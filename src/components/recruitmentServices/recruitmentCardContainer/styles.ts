import { styled } from 'styled-components'

export const RecruitmentCardContainer = styled.div`
  max-width: 60vw;
  height: 40vw;
  display: flex;
  margin-left: auto;
  margin-right: auto;

  div {
    display: flex;
    align-items: center;
    text-align: left;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    color: #fff;
  }

  @media (max-width: 375px) {
    padding-bottom: 1500px;
    div {
      max-width: 350px;
      margin-left: 10px;
    }
  }

  @media (max-width: 480px) {
    padding-bottom: 1500px;
    div {
      margin-right: 160px;
      width: 450px;
      height: 300px;
      margin-bottom: 15px;
    }
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 1400px;
    div {
      width: 450;
      height: 300px;

      margin-bottom: 15px;
    }
  }
`

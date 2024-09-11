import styled from 'styled-components'

export const OurSpecialtiesCon = styled.div`
  width: 100vw;
  height: 65vw;
  display: flex;
  flex-wrap: wrap;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 5px;

  background-color: lightgray;

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 375px) {
    max-width: 375px;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    max-width: 480px;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    max-width: 768px;
    height: auto;
  }
`

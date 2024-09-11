import styled from 'styled-components'

export const Posts = styled.div`
  margin-top: 150px;
  margin-left: 400px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: lightgrey;
  width: 55vw;
  align-content: center;
  gap: 50px;
  h1 {
    margin: 35px;
  }
  @media (max-width: 390px) {
    display: flex;
    width: 390px;
    margin-left: 0px;
    h1 {
      width: 390px;
    }
  }
`

export const ImagesContainer = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px;
  }

  @media (max-width: 390px) {
    display: flex;
    margin-left: 50px;
    div {
      width: 380px;
      .images {
        width: 330px;
        height: 330px;
      }
    }
  }
`

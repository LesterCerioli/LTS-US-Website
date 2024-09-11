import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

export const TitleContainer = styled.div`
  min-width: 67%;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  margin: 20px;
`

export const Title = styled.h3`
  color: #000;
  font-family: Rubik;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 5px;
`

export const Subtitle = styled.h6`
    color: #000;
    font-family: Montserrat;
    text-align: initial;
    font-size: 30px;
    font-style: oblique;
    font-weight: 300;
    line-height: normal;
`

export const TextContainer = styled.div`
    max-width: 100%;
`

export const CardText = styled.p`
    color: #000;
    font-family: Montserrat;
    font-size: 14px;

    font-weight: 300;

    margin-top: 5px;

    @media (max-width: 1023px)  {
        display: none;
    }
`

export const ButtonContainer = styled.div`
    width: 66%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1083px) {
        display: flex;
        justify-content: center;
    }
`

export const Button = styled.button`
  width: 210px;
  height: 50px;
  flex-shrink: 0;
  background: #5050EA;

`

export const ButtonText = styled.a`
  color: #FFF;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
`

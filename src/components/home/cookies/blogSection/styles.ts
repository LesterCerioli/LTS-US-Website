import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

export const TitleContainer = styled.div`
  width: 66%;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  margin: 20px;

@media (max-width: 1023px) {
    width: 95%;
    margin: 20px 0 20px 0;
}
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
export const CardsMainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (min-width: 769px) and (max-width: 1300px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-left: 17%;
    max-width: 100%;

    @media (max-width: 1023px){
     max-width: 95%;
     padding-left: 0 ;
    }
`

export const LeftCardsContainer = styled.div`
    display: flex;
    width: 100%;
    max-height: 400px;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 10px;
`

export const RightCardsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;

`

export const CardImage1 = styled.img`
    max-height: 100%;
    max-width: 50%;

    @media (max-width: 1023px) {
        max-width: 100%;
    }
`
export const CardImage2 = styled.img`
    max-height: 100%;
    max-width: 24%;
    margin-left: 10px;

    @media (max-width: 1023px) {
        display: none;
    }
`
export const CardImage3 = styled.img`
    max-height: 100%;
    max-width: 24%;
    margin-right: 10px;

    @media (max-width: 1023px) {
        display: none;
    }
`
export const CardImage4 = styled.img`
    max-height: 100%;
    max-width: 50%;

    @media (max-width: 1023px) {
        display: none;
    }
`

export const ButtonContainer = styled.div`
    width: 58%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    @media (min-width: 338px) and (max-width: 1083px) {
        display: flex;
        justify-content: center;
    }

    @media (max-width: 337px) {
    width: 210px;
}
`

export const Button = styled.button`
  width: 210px;
  height: 50px;
  background: #5050EA;

  @media (max-width: 337px) {
      width: 240px;
  }
`

export const ButtonText = styled.a`
  color: #FFF;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
`

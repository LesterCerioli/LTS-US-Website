import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`

export const TitleContainer = styled.div`
min-width: 66%;
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

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    max-width: 70%;

    @media (max-width: 1023px) {
        max-width: 90%;
    }
`

export const CardImage = styled.img`
    margin: 10px;
    max-width: 100%;

    @media (max-width: 1023px) {
    margin: 0; 
    }
`
export const SubtitleContainer = styled.div`
    max-width: 66%;
    margin-bottom: 20px;

    @media (max-width: 1023px) {
    margin: 15px 0 15px 0;
    max-width: 90% ;
    }

`

export const Subtitle = styled.h6`
color: #000;
font-family: Montserrat;
font-size: 21px;
font-style: normal;
font-weight: 300;
line-height: normal;
text-align: initial;
margin-top: 10px;
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
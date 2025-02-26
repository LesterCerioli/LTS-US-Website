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
  font-size: 21px;
  text-align: justify;
  font-style: normal;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: 0.5px;
  word-spacing: 1px;
  text-justify: inter-word;
  max-width: 90%;
  margin: 10px auto;

  @media (max-width: 768px) {
    font-size: 18px; 
    text-align: left; 
    max-width: 95%; 
  }

  @media (max-width: 480px) {
    font-size: 16px; 
    word-spacing: normal; 
    line-height: 1.5; 
  }
`;

// export const CardsContainer = styled.div`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     padding: 0 10px 0 10px;
//     overflow: hidden;

//     @media (min-width: 531px) and (max-width: 1083px) {
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//     }

//     @media (max-width: 530px) {
//         width: 100%;
//     }
// `

// export const SliderContainer = styled.div`
//     display: flex;
//     width: 250%;
//     overflow: hidden;
//     justify-content: center;
//     animation: bannermove 20s linear infinite;
//     &:hover{
//         -webkit-animation-play-state: paused;
//         animation-play-state: paused;
//     }
// `

// export const Slider = styled.div`
//     width: 100%;
// `

// export const List = styled.div`
//     display: flex;
//     list-style-type: none;
//     padding-left: 0;
//     margin: 2.5rem;
//     gap: 5rem;

//    /* @media (min-width: 1024px) and (max-width: 1320px) {
//     max-width: 315px;
//    }
//    @media (min-width: 531px) and (max-width: 1300px) {
//     max-height: 320px;
//    } */

// `

// export const ListItem = styled.img`
//      width: 100%;
//      perspective: 130px;
//     /* @media (max-width: 530px)  {
//         max-width: 100%;
//     } */
// `
// export const CardImage2 = styled.img`
//     max-width: 100%;
//     max-height: 100%;
   
//     @media (max-width: 530px)  {
//         max-width: 100%;
//     }
// `
// export const CardImage3 = styled.img`
//     max-width: 100%;
//     max-height: 100%;

//     @media (max-width: 530px)  {
//         max-width: 100%;
//     }
// `
// export const CardImage4 = styled.img`
//     max-width: 100%;
//     max-height: 100%;

//     @media (max-width: 1023px)  {
//         display: none;
//     }
// `
// export const CardImage5 = styled.img`
//     max-width: 100%;
//     max-height: 100%;

//     @media (max-width: 1023px)  {
//         display: none;
//     }
// `
// export const CardImage6 = styled.img`
//     max-width: 100%;
//     max-height: 100%;

//     @media (max-width: 1023px)  {
//         display: none;
//     }
// `

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
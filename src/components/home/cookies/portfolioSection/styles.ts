import styled, { keyframes } from "styled-components";

const slideRight = keyframes`
	0% {
		opacity: 0;
		transform: translateX(-450px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`
const slideLeft = keyframes`
	0% {
		opacity: 0;
		transform: translateX(450px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`

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
export const CardsMainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const CardsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    max-width: 70%;

    @media (max-width: 1023px) {
       max-width: 100%;
    }

`

export const LeftCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;

    @media (max-width: 1023px) {
        display: none;
    }
`

export const RightCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 5px;

    @media (max-width: 1023px) {
    width: 100%;
    padding: 0 10px 0 10px;
    }
`

export const CardImage1 = styled.img`
    margin: 5px;
    max-width: 100%;
    opacity: 0;
    animation: slide 1s ease 0s 1 normal forwards;
    animation-delay: 3s;
    animation-name: ${slideRight};

    @media (max-width: 1023px) {
        display: none;
    }
`
export const CardImage2 = styled.img`
    margin: 15px 5px 5px 5px;
    max-width: 100%;
    opacity: 0;
    animation: slide 1s ease 0s 1 normal forwards;
    animation-delay: 2s;
    animation-name: ${slideRight};

    @media (max-width: 1023px) {
        display: none;
    }
`
export const CardImage3 = styled.img`
    margin: 5px;
    max-width: 100%;
    opacity: 0;
    animation: slide 1s ease 0s 1 normal forwards;
    animation-delay: 2s;
    animation-name: ${slideLeft};

    @media (max-width: 1023px) {
    margin: 0;
    }

`
export const CardImage4 = styled.img`
    margin: 5px;
    max-width: 100%;
    opacity: 0;
    animation: slide 1s ease 0s 1 normal forwards;
    animation-delay: 3s;
    animation-name: ${slideLeft};

    @media (max-width: 1023px) {
        display: none;
    }
`

export const ButtonContainer = styled.div`
    width: 66%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

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

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
    width: 66%;
    display: flex;
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
`

export const CardsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    max-width: 70%;

    @media (max-width: 1023px) {
        max-width: 95%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const CardImage1 = styled.img`
    margin: 10px;
    max-width: 49%;
    animation: slide 1s ease 0s 1 normal forwards;
    opacity: 0;
    animation-delay: 2s;
    animation-name: ${slideRight};

    @media (max-width: 1023px) {
        margin: 0;
    }
`
export const CardImage2 = styled.img`
    margin: 10px;
    max-width: 49%;
    animation: slide 1s ease 0s 1 normal forwards;
    opacity: 0;
    animation-delay: 2s;
    animation-name: ${slideLeft};

    @media (max-width: 1023px) {
        margin: 0;
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

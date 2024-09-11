import { styled, keyframes } from "styled-components";

const slideRight = keyframes`
	0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}

`
const slideLeft = keyframes`
	0% {
		opacity: 0;
		transform: translateX(250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}

`

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
`

export const TitleContainer = styled.div`
    padding: 10px;
    display: flex;
    text-align: center;
    overflow: hidden;
    flex-direction: column;
    margin: 60px 0 25px 0;
    max-width: 80%;
    animation: slide 1s ease 0s 1 normal forwards;
    animation-name: ${slideRight};

    @media (max-width: 425px) {
        margin: 50px 0 20px 0;
        background: #A9A9A9;
        border-radius: 35px;
    }
`

export const Title = styled.h1`
    color: #000;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    transition: font-size 0.5s;
    margin-bottom: 20px;

@media (min-width: 426px) and (max-width: 768px) {
    font-size: 36px;
  }

@media (max-width: 425px) {
    font-size: 24px;
  }
`

export const Subtitle = styled.h5`
    font-size: 18px;
    color: #000;
    font-weight: 550;
    line-height: 1.5;
    letter-spacing: 0.025em;
    text-align: center;
    padding: 5px;
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    animation: slide 1s ease 0s 1 normal forwards;
    animation-name: ${slideLeft};

    @media (max-width: 425px){
    display: none;
  }
`

export const Hero = styled.img`
  max-width: 100%;
  height: auto;
  padding: 0 10px 0 10px;

  @media (max-width: 425px){
    display: none;
  }
`;

export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    animation: slide 1s ease 0s 1 normal forwards;
    animation-name: ${slideRight};

    @media (min-width: 426px) and (max-width: 624px) {
      width: 100%;
    }

    @media (max-width: 425px){
      animation-name: ${slideLeft};
    }
`

export const CardsSubcontainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;

    @media (min-width: 426px) and (max-width: 624px) {
      width: 100%;
    }
`

export const Card = styled.div`
    width: 230px;
    height: 230px;
    padding: 10px;
    border-radius: 35px;
    background: #A9A9A9;
    text-align: center;
    display: flex;
    align-items: center;
    margin: 10px;

    &:hover {
    width: 240px;
    height: 240px;
    background-color: rgb(90, 90, 90);
    transition: width 1s, height 1s, background-color linear 0.5s;
  }
`
export const CardText = styled.p`
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 450;
    letter-spacing: 0.45px;
`
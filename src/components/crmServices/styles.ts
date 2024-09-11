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
    display: flex;
    text-align: center;
    margin: 70px 0 25px 0;
    overflow: hidden;
    max-width: 80%;
    animation: slide 1s ease 0s 1 normal forwards;
    animation-name: ${slideRight};
`

export const Title = styled.h1`
  color: #000;
  font-family: Rubik;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;

@media (min-width: 426px) and (max-width: 768px) {
    font-size: 36px;
  }

@media (max-width: 425px) {
    font-size: 24px;
  }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: 90%;
    max-height: 403px;
    border-radius: 10px;
    background: url('/assets/imagesCRM/home_1.png') no-repeat;
    background-size: cover;
    background-position: center;
    animation: slide 1s ease 0s 1 normal forwards;
    animation-name: ${slideRight};

    @media (max-width: 600px) {
      min-width: 100%;
    }
`
export const Hero = styled.img`
  max-width: 70%;
  height: 100%;

  @media (max-width: 600px) {
      min-width: 100%;
    }
`;

export const SubtitleContainer = styled.div`
  max-width: 90%;
  margin: 30px 0 30px 0;

  @media (max-width: 600px) {
      min-width: 100%;
      padding: 15px;
    }
`

export const Subtitle = styled.h5`
    color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 33px;
  letter-spacing: 0.55px;

  @media (max-width: 1020px) {
    text-align: justify;
  }
`

export const CardContainer = styled.div`
    background: url('/assets/imagesCRM/background_hero_2.svg') no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    padding: 20px 0 20px 0;
    max-width: 90%;
    min-height: 302px; 
    margin: 10px;
    animation: slide 1s ease 0s 1 normal forwards;
    animation-name: ${slideLeft};

    @media (min-width: 601px) and (max-width: 1050px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-height: 1080px;
    }

    @media (max-width: 600px) {
      min-width: 100%;
      display: flex;
      padding: 20px 0 20px 0;
    }
`

export const SecondCardContainer = styled.div`
    background: url('/assets/imagesCRM/background_hero_3.svg') no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    padding: 20px 0 20px 0;
    max-width: 90%;
    min-height: 302px;
    margin: 10px 0 20px 0;
    animation: slide 1s ease 0s 1 normal forwards;
    animation-name: ${slideRight};

    @media (min-width: 601px) and (max-width: 1050px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-height: 1080px;
    }

    @media (max-width: 600px) {
      min-width: 100%;
      display: flex;
      padding: 20px 0 20px 0;
    }
`

export const LeftCard = styled.div`
    display: flex;
    text-align: center;
    max-width: 48%;
    height: fit-content;
    padding: 7px;
    overflow: hidden;
    border-radius: 0px 10px 10px 0px;
    background: rgba(255, 255, 255, 0.70);
    
    &:hover {
    width: max-content;
    height: max-content;
    background-color: rgb(160, 160, 160);
    transition: width 1s, height 1s, background-color linear 0.5s;
    
  }

    @media (min-width: 601px) and (max-width: 1050px) {
      height: fit-content;
    }

    @media (max-width: 600px) {
      display: flex;
      min-width: 80%;
      height: fit-content;
    }
`

export const RightCard = styled.div`
    display: flex;
    text-align: center;
    max-width: 45%;
    min-height: 200px;
    padding: 7px;
    overflow: hidden;
    border-radius: 10px 0 0 10px;
    background: rgba(255, 255, 255, 0.70);

    &:hover {
    width: max-content;
    height: max-content;
    background-color: rgb(160, 160, 160);
    transition: width 1s, height 1s, background-color linear 0.5s;
  }
    @media (min-width: 601px) and (max-width: 1050px) {
      height: fit-content;
      margin-left: 55%;
    }

    @media (max-width: 600px) {
      display: none;
    }
  `

export const CardText = styled.p`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36.69px;
  letter-spacing: 0.6px;
  transition: font-size 0.5s;

  @media (min-width: 601px) and (max-width: 1050px) {
    font-size: 18px;
    line-height: 25px;
  }

@media (max-width: 600px) {
    font-size: 20px;
    line-height: 25px;
    text-align: center;
  }
`
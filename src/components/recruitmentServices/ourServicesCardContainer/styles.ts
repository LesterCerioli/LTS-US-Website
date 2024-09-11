import { styled, keyframes } from 'styled-components'

const slide = keyframes`
	0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}

`

export const ServicesCardContainer = styled.div`
  width: 100vw;
  height: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgray;

  div {
    animation: slide 1s ease 0s 1 normal forwards;
    animation-name: ${slide};
    margin: 20px;
    display: flex;
    align-items: center;
    text-align: left;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media screen and (max-width: 375px) {
    max-width: 375px;

    div {
      animation: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 768px;
    height: auto;
    &:hover {
      width: 100%;
      height: auto;
    }
  }
`

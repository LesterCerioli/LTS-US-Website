import { styled, keyframes } from 'styled-components'

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
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height:100%;
  margin-top: 40px;
`

export const Mission = styled.div`
 animation: slide 1s ease 0s 1 normal forwards;
  animation-name: ${slideRight};
max-width:80%;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;

@media(max-width:425px){
      margin: 20px 0 20px 0;
      background: #A9A9A9;
      border-radius: 35px;

}
`
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;   
  font-family: "Poppins", sans-serif; 
  font-size: 48px;
  line-height: 1.5;
  letter-spacing: 0.025em;
  padding-top: 60px;
  margin-bottom: 15px;
  width: 90%;
  color: #000;
  box-sizing: border-box;

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 425px) {
    font-size: 24px;
  }
`
export const Subtitle = styled.h5`
  display: flex;
  justify-content: center;
  text-align: center;  
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.025em;
  text-align: center;
  padding: 15px;
`
export const Imag = styled.div`
 animation: slide 1s ease 0s 1 normal forwards; 
  animation-name: ${slideLeft};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;

  @media (max-width:425px){
    display:none;
  }
  
`
export const Img = styled.img`
  max-width: 100%;
  padding: 0 10px 0 10px;
`
export const Resources = styled.div`
animation: slide 1s ease 0s 1 normal forwards;
animation-name: ${slideRight};
width:90%;
height: 100%;
box-sizing:border-box;
align-items: center;


@media(max-width:425px){
  animation: slide 1s ease 0s 1 normal forwards;
  animation-name: ${slideLeft};
}
`

export const Itens = styled.div`
display: flex;
align-items: center;
gap: 10px;
width: 100%;
height:100%;
padding: 10px;
justify-content: space-around;
box-sizing: border-box;
flex-wrap:wrap;
margin-bottom:10px;

`
export const Card = styled.div`
  font-weight:450;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 240px;
  padding: 10px;
  border-radius: 8%;
  font-size: 18px;
  flex-wrap: wrap;
  overflow: hidden;
  text-align: center;
  color: #000;
 background: #A9A9A9;

 &:hover {
    width: 240px;
    height: 240px;
    background-color: rgb(90, 90, 90);
    transition: width 1s, height 1s, background-color linear 0.5s;  
  }
`
 
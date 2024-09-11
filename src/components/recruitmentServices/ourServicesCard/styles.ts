import styled, { keyframes } from 'styled-components'

const blue = keyframes`

  0% { 
    width: 0px;
    height: 0px;

  }
  100% {
    width: 300px;
    height: 300px;
    top: 0px;
    left: 0px;
     border-radius: 4px;
  }

`

export const Services = styled.div`
  background-color: #fff;
  width: 300px;
  height: 300px;
  position: relative;

  border: 1px solid black;
  border-radius: 4px;
  padding: 15px;

  p,
  h3 {
    z-index: 10;
    position: relative;
  }
  p {
    padding: 15px;
  }

  &:hover {
    p {
      color: white;
      padding: 15px;
    }
    h3 {
      color: #fff;
    }
    span {
      position: absolute;
      background-color: rgb(5, 52, 98);
      animation-name: ${blue};
      animation-fill-mode: forwards;
      animation-duration: 1s;
      left: 50%;
      top: 50%;
    }
  }
  @media screen and (max-width: 375px) and (hover: none) {
    p,
    h3,
    span {
      max-width: 375px;
    }
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-width: 768px) {
  }
`

import { styled } from 'styled-components'

export const Container = styled.div`
  height: 70vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 60px;
`

export const Content = styled.div`
  display: flex;
  height: fit-content;
  width: 70%;
  background-color: #d3d3d3;
  border: none;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;

  @media (max-width: 600px){
    padding: 1.5rem;
  }

  @media (max-width: 375px){
    padding: 1rem;
  }
`

export const Img = styled.img`
  width: 100%;
  max-width: 600px;
`

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;

  @media (max-width: 600px){
    font-size: 1.5rem;
  }

  @media (max-width: 450px){
    font-size: 1.25rem;
  }

  @media (max-width: 375px){
    font-size: 1rem;
  }
`

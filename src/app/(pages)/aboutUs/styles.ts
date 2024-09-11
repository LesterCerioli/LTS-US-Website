import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Img = styled.img`
  width: 40%;
  height: fit-content;

  @media screen and (max-width: 600px) {
      width: 80%;
  }
`

export const Info = styled.p`
  font-size: 17px;
  max-width: 80%;
  font-family: 'Roboto', sans-serif;
  text-align: initial;
`

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 3rem;
    margin-top: 5.5rem;
    color: #021F3E;
    font-weight: 400;
    margin-bottom: 4rem;

  @media screen and (max-width: 1000px){
      font-size: 2.5rem;
  }

  @media screen and (max-width: 770px){
      font-size: 1.7rem;
  }


  @media screen and (max-width: 600px) {
    h1 {
      margin: 0 auto;
      font-size: 30px;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  font-weight: 400;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: .5rem;
  }

`;

export const SectionContent = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;

   @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 1rem auto;

  }
`;

export const SecondComponent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 100%;
  margin-bottom: 4rem;

`;

export const SecondElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  gap: 6rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
    gap: .5rem;
  }
`;

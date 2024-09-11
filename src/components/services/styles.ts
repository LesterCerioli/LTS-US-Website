import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0;

  @media (max-width: 425px) {
    padding: 5px;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 61px;
  letter-spacing: 1px;
  padding-top: 20px;
  margin: 60px 0 40px 0;
  width: 100%;
  color: #000;
  box-sizing: border-box;

  @media (max-width: 425px) {
    margin: 60px auto 10px auto;
    background: #a9a9a9;
    border-radius: 35px;
    padding: 15px;
  }
`;

export const Subtitle = styled.h2`
  width: 100%;
  text-align: center;
  padding: 20px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: .5px;

  @media (max-width: 425px) {
    background: #a9a9a9;
    margin: 20px;
    border-radius: 35px;
    max-width: 90%;
    max-height: 90%;
    padding: 18px;
  }
`;

export const Section = styled.div`
  h3 {
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    line-height: 1.5;
    letter-spacing: 0.025em;
    padding-bottom: 40px;
    margin: auto;
    margin-top: 10px;
    width: 90%;
    color: #000;
    box-sizing: border-box;

    @media (max-width: 425px) {
      border-radius: 35px;
      padding: 15px;
      margin-bottom: 10px;
    }
  }
  div,
  h2 {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 32px;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: black;
    font-family: "Poppins", sans-serif;

    @media (max-width: 425px) {
      margin: auto auto;
      background: #a9a9a9;
      border-radius: 35px;
      padding: 15px;
    }
  }
`;

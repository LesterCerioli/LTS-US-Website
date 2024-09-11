import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  div {
    background-color: var(--blue);
    width: 400px;
    height: 270px;
    padding: 32px;
    margin: 32px;
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(250, 250, 250, 1);
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  h3 {
    color: #fff;
    font-size: 22px;
  }

  p {
    color: #94a0bb;
    font-size: 16px;
    text-align: initial; 
  }

  button {
    margin: auto;
  }

  @media screen and (max-width: 600px) {
    div {
      height: 350px;
    }
  }
`;

import styled from "styled-components";

export const Button = styled.button`
  text-transform: uppercase;
  color: white;
  background-color: var(--blue);
  padding: 12px 25px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 0.071em;
  font-size: 0.875rem;

  @media (max-width: 400px) {
    font-size: 10px;
  }

  &:hover {
    background-color: var(--blue-hover);
    transition: all ease-in-out 0.2s;
  }
`;

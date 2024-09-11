import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  max-width: 380px;

  width: 100%;
  /* position: relative; */

  margin: 0 auto;

  text-align: center;

  @media (min-width: 880px) {
    height: 600px;
  }
`;

export const Title = styled.h3`
  @media (max-width: 880px) {
    margin-bottom: 1rem;
  }
  @media (min-width: 880px) {
    min-height: 44px;
  }
`;

export const Body = styled.div`
  width: 100%;
`;

export const Image = styled.div`
  max-width: 375px;
  max-height: 375px;
  width: 100%;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(2, 31, 62, 0.45);
  -moz-box-shadow: 10px 10px 5px 0px rgba(2, 31, 62, 0.45);
  box-shadow: 10px 10px 5px 0px rgba(2, 31, 62, 0.45);

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const Description = styled.p`
  margin-top: 2rem;
`;

export const AlignButton = styled.div`
  position: absolute;
  bottom: 0;

  @media (max-width: 880px) {
    position: relative;
    margin-top: 2rem;
  }

  @media (max-width: 400px) {
    position: relative;
    margin-top: 1rem;
  }
`;

export const Portal = styled.div`

`;

export const ImagePortal = styled.div`

`;

export const DescriptionPortal = styled.div`

`

export const DevUx = styled.div`

`

export const ImageDevUx = styled.div`

`

export const DescriptionDevUx = styled.div`

`

import styled, { keyframes } from 'styled-components';

export const Animated = keyframes`
   from {
    opacity: 0;
    transform: translate3d(0, -60px, 0);
}

to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}
`;

export const AnimatedContainer = styled.div`
    animation: ${Animated} .7s forwards;
    display: flex;
    height: 537px;
    max-width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    flex-shrink: 0;
    margin-top: 50px;
    &:hover{top:-5px;box-shadow:0 10px 10px #666}
`

export const Title = styled.h1`
    color: var(--blue);
    display: inline-block;
    padding-bottom: 8px;
    text-align: center;
    font-size: 42px;
    font-style: normal;
    font-weight: 400;
    line-height: 58.8px; 

`
export const SpanDiv = styled.div`
    display: flex;
    
    justify-content: center;
`
export const Span = styled.span`
    display: block;
    height: 2px;
    width: 40px;
    //border-radius: 50%;
    background-color: var(--blue);
`

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;

`

export const Subtitle = styled.h4`
    color: #5E5E5E;
    font-size: 22px;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px; 

`

export const Image = styled.img`
position:relative;

&:hover{top:-5px;box-shadow:0 10px 10px #666}
`
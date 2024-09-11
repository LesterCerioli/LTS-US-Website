import styled from "styled-components";

export const Container = styled.div`
    flex-direction: column;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    min-height: 500px;
    background-color: var(--white);
    &:hover{top:-5px;box-shadow:0 10px 10px #666}
`

export const Title = styled.h1`
    color: var(--blue);
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 45px;
    padding: 20px;

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
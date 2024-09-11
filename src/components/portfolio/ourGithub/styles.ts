import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 50px;
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
export const RepositoryContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2em;
    
`
export const GithubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 214px;
    align-items: center;
`

export const Subtitle = styled.h6`
    color: #1B1B1B;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
`

export const Button =  styled.button`
    padding: 18.5px  17.5px ;
    border: none;
    border-radius: 4px;
    background: var(--blue);
    color: #E6E7E9;
    text-align: center;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.136px;
    text-transform: uppercase;

    &:hover {
        background-color: var(--blue-hover);
        cursor: pointer;
    }

`
import styled from "styled-components";

export const Container = styled.div `
    padding: 60px;
`
export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
`

    export const Card = styled.li`
    border-radius: 6px;
    position: relative;
    padding: 10px;
    display: grid;
    gap: 30px;
    text-align: center;
    width: 280px;
    align-content: center;
    height: 220px;
    background-image: linear-gradient(to bottom, #051937, #434862, #7c7d90, #b8b7c2, #f6f6f6);


    &::before {
    content: '';
    transition: .5s ease-in-out;
    border-radius: 6px;
    width: 0px;
    height: 0px;
    position: absolute;
    top: -2px;
    right: -2px;
    border-top: 5px solid transparent;
    border-right: 5px solid transparent;
    }

    &::after {
    content: '';
    transition: .5s ease-in-out;
    border-radius: 6px;
    width: 0px;
    height: 0px;
    position: absolute;
    bottom: -2px;
    left: -2px;
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent;
    }

    &:hover::before {
    width: 100%;
    height: 100%;
    border-top: 5px solid var(--blue-hover);
    border-right: 5px solid var(--blue-hover);
    }

    &:hover::after {
    width: 100%;
    height: 100%;
    border-bottom: 5px solid var(--blue-hover);
    border-left: 5px solid var(--blue-hover);
    }
    `

    export const StyledImage = styled.img`
        width: 100px;
        border-radius: 50%;
        position: relative;
        left: 30%;
    `
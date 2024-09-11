 import styled, { keyframes } from "styled-components";
import Link from "next/link";

const scroll = keyframes`
    to {
        transform: translate(calc(-50%));
    }
`;

export const Scroller = styled.div`
    overflow: hidden;
    max-width: 100%;
    &[data-direction="right"] {
        --_animation-direction: reverse;
    }
    &[data-direction="left"] {
        --_animation-direction: forwards;
    }
    &[data-speed="fast"] {
        --_animation-duration: 20s;
    }
    &[data-direction="slow"] {
        --_animation-duration: 60s;
    }
`;

export const ScrollerInner = styled.div`
    padding-block: 1rem;
    display: flex;
    gap: 5rem;
    flex-wrap: wrap;
    height: fit-content;
    width: max-content;
    flex-wrap: nowrap;
    align-items: center;
    animation: ${scroll} var(--_animation-duration, 40s)
        var(--_animation-direction, forwards) linear infinite;
    &:hover {
        -webkit-animation-play-state: paused;
        animation-play-state: paused;
    }
`;

export const Img = styled.img`
    width: 400px;
    margin-right: 30px;
    text-align: center;
    padding: 50px 0;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
`;

export const NavLink = styled(Link)`
    pointer-events: ${props => (props.href === "#" ? "none" : "auto")};
`;
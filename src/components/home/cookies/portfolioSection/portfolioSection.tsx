"use client"
import * as S from "./styles";
import React from "react"

  export function PortfolioSection() {

    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>Portfolio</S.Title>
                <S.Subtitle>Visit our page and explore the variety of services we offer to meet your needs.</S.Subtitle>
            </S.TitleContainer>
            <S.CardsMainContainer>
                <S.CardsContainer>
                    <S.LeftCardsContainer>
                        <S.CardImage1 src="assets/imagesHome/portfolio_card_1.svg"/>
                        <S.CardImage2 src="assets/imagesHome/portfolio_card_2.svg"/>
                    </S.LeftCardsContainer>
                    <S.RightCardsContainer>
                        <S.CardImage3 src="assets/imagesHome/portfolio_card_3.svg"/>
                        <S.CardImage4 src="assets/imagesHome/portfolio_card_4.svg"/>
                    </S.RightCardsContainer>
                </S.CardsContainer>
            </S.CardsMainContainer>
            <S.ButtonContainer>
                <S.Button>
                    <S.ButtonText href="portfolio">About</S.ButtonText>
                </S.Button>
            </S.ButtonContainer>
        </S.Container>

    );
}

"use client"
import * as S from "./styles";
import React from "react"

  export function ContactSection() {

    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>Contact</S.Title>
            </S.TitleContainer>
            <S.CardsMainContainer>
                <S.CardsContainer>
                        <S.CardImage1 src="assets/imagesHome/contact_card_1.svg"/>
                        <S.CardImage2 src="assets/imagesHome/contact_card_2.svg"/>
                </S.CardsContainer>
            </S.CardsMainContainer>
            <S.ButtonContainer>
                <S.Button>
                    <S.ButtonText href="contact">About</S.ButtonText>
                </S.Button>
            </S.ButtonContainer>
        </S.Container>

    );
}

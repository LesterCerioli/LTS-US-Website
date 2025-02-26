"use client"
import { Analytics } from "@vercel/analytics/react";
import * as S from "./styles";
import React from "react"
import { SpeedInsights } from "@vercel/speed-insights/next";

  export function AboutUsSection() {

    return (
        <S.Container>
            <SpeedInsights />
            <Analytics />
            <S.TitleContainer>
                <S.Title>About us</S.Title>
            </S.TitleContainer>
            <S.CardsContainer>
                    <S.CardImage src="assets/imagesHome/about_us_card.svg"/>
            </S.CardsContainer>
            <S.SubtitleContainer>
                <S.Subtitle>Lucas Technology Services: We’re a always evolving, pushing the boundaries of technology to the very edge. We have a world wide presence meaning we offer world wide solutions.</S.Subtitle>
            </S.SubtitleContainer>
            <S.ButtonContainer>
                <S.Button>
                    <S.ButtonText href="aboutUs">About </S.ButtonText>
                </S.Button>
            </S.ButtonContainer>
        </S.Container>

    );
}

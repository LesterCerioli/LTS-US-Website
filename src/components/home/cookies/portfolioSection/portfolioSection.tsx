"use client";
import { SpeedInsights } from "@vercel/speed-insights/next";
import * as S from "./styles";
import React, { FC } from "react";
import { Analytics } from "@vercel/analytics/react";

export const PortfolioSection: FC = () => {
  return (
    <S.Container>
      <Analytics />
      <SpeedInsights />
      <S.TitleContainer>
        <S.Title>Portfolio</S.Title>
        <S.Subtitle>
          Explore our portfolio and discover how we transform ideas into{" "}
          <strong>innovative and high-impact solutions</strong>. Each project
          reflects our <strong>passion for technology</strong>,{" "}
          <strong>excellence in development</strong>, and{" "}
          <strong>commitment to extraordinary results</strong>.
        </S.Subtitle>
      </S.TitleContainer>
      <S.CardsMainContainer>
        <S.CardsContainer>
          <S.LeftCardsContainer>
            <S.CardImage1 src="assets/imagesHome/portfolio_card_1.svg" />
            <S.CardImage2 src="assets/imagesHome/portfolio_card_2.svg" />
          </S.LeftCardsContainer>
          <S.RightCardsContainer>
            <S.CardImage3 src="assets/imagesHome/portfolio_card_3.svg" />
            <S.CardImage4 src="assets/imagesHome/portfolio_card_4.svg" />
          </S.RightCardsContainer>
        </S.CardsContainer>
      </S.CardsMainContainer>
      <S.ButtonContainer>
        <S.Button>
          <S.ButtonText href="portfolio">Learn More</S.ButtonText>
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default PortfolioSection;

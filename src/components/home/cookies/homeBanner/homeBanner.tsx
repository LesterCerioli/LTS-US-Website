"use client"
import { SpeedInsights } from "@vercel/speed-insights/next";
import * as S from "./styles";
import { Analytics } from "@vercel/analytics/react";

  export function Banner() {
    return (
        <S.ImageContainer>
          <Analytics />
          <SpeedInsights />
          <S.Logo src="assets/imagesHome/banner_LTS_logo.svg" />
        </S.ImageContainer>      
    );
  }
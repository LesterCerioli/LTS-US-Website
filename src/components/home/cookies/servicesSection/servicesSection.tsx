"use client"
import Image from "next/image";
import * as S from "./styles";
import React from "react"
import { Slider } from "@/components/shared/slider/slider";
import { homePageSlider } from "@/components/shared/slider/helper/imageConstants"
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

  export function ServicesSection() {
    
    return (
        
        <S.Container>
            <SpeedInsights />
            <Analytics />
            <S.TitleContainer>
                <S.Title>Services</S.Title>
                <S.Subtitle>
                    We elevate your business to the next level with cutting-edge technology!
                    Our services are designed to ensure <strong>security, efficiency, and scalability</strong>,
                    helping you achieve extraordinary results.
                </S.Subtitle>
            </S.TitleContainer>

            <Slider data={homePageSlider} />

            <S.ButtonContainer>
                <S.Button>
                    <S.ButtonText href="services">Saiba mais</S.ButtonText>
                </S.Button>
            </S.ButtonContainer>
        </S.Container>
    );
  }

  export default ServicesSection
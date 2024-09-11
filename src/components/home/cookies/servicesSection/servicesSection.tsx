"use client"
import * as S from "./styles";
import React from "react"
import { Slider } from "@/components/shared/slider/slider";
import { homePageSlider } from "@/components/shared/slider/helper/imageConstants"

  export function ServicesSection() {

    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>Services</S.Title>
                <S.Subtitle>Visit our page and explore a variety of services we offer to meet your needs.</S.Subtitle>
            </S.TitleContainer>

            <Slider data={homePageSlider} />

            <S.ButtonContainer>
                <S.Button>
                    <S.ButtonText href="services">About</S.ButtonText>
                </S.Button>
            </S.ButtonContainer>
        </S.Container>
    );
  }

  export default ServicesSection

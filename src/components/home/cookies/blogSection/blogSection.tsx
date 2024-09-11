"use client"
import { Slider } from "@/components/shared/slider/slider";
import * as S from "./styles";
import React from "react"
import { homePageBlogSlider } from "@/components/shared/slider/helper/imageConstants";

  export function BlogSection() {

    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>Blog</S.Title>
            </S.TitleContainer>

            <Slider data={homePageBlogSlider}/>

            <S.ButtonContainer>
                <S.Button>
                    <S.ButtonText href="blog">About</S.ButtonText>
                </S.Button>
            </S.ButtonContainer>
        </S.Container>

    );
}

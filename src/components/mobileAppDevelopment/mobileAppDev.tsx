'use client';
import React from 'react';
import * as S from "./styles";

export default function DevelopmentWeb() {
  return (
    <S.Container >

       <S.Mission>
         <S.Title>
          Mobile Development
         </S.Title>

        <S.Subtitle>
          In the age of mobile phones, we bring your idea to the palm of your hand. Our specialized mobile development team creates tailor-made apps that redefine the user experience.
        </S.Subtitle>

      </S.Mission>

      <S.Imag>
        <S.Img src='/assets/imagesMobileAppDev/mobileDevelopment_hero.svg'></S.Img>
      </S.Imag>

      <S.Resources>
        <S.Itens>

          <S.Card>
            Intuitive App Design and Development for iOS, Android, and Windows Phone
          </S.Card>

          <S.Card >
            Seamless Cloud Integration and API Connectivity
          </S.Card>

          <S.Card>
            Performance and Speed Optimization
          </S.Card>

          <S.Card>
            Thorough Testing to Ensure Quality
          </S.Card>

        </S.Itens>
      </S.Resources>
    </S.Container>
  )
}

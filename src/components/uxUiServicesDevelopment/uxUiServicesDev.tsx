'use client';
import React from 'react';
import * as S from "./styles";

export default function UxUiServices() {
  return (
    <S.Container >

       <S.Mission>
         <S.Title>
          UI/UX
         </S.Title>

        <S.Subtitle>
          UI/UX is the harmonious fusion of user interface and user experience, where elegant design and intuitive functionality come together to create exceptional digital interactions.
        </S.Subtitle>

      </S.Mission>

      <S.Imag>
        <S.Img src='/assets/imagesUxUi/uiHero.svg'></S.Img>
        <S.Img src='/assets/imagesUxUi/uxHero.svg'></S.Img>
      </S.Imag>

      <S.Resources>
        <S.Itens>

          <S.Card>
            Intuitive navigation for user convenience
          </S.Card>
          <S.Card >
            Seamless design enhances user engagement.
          </S.Card>
          <S.Card >
            User-centric interface for optimal usability.
          </S.Card>
          <S.Card>
            Responsive and adaptive design, web, tablet or mobile
          </S.Card>
          <S.Card>
            Effortless interactions for exceptional experiences.
          </S.Card>

        </S.Itens>
      </S.Resources>
    </S.Container>
  )
}

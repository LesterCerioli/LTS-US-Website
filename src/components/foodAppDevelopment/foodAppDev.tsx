'use client';
import React from 'react';
import * as S from "./styles";

export default function FoodAppDev() {
  return (
    <S.Container >

       <S.Mission>
         <S.Title>
         Your Restaurant. Your APP
         </S.Title>

        <S.Subtitle>
        In the heart of the food industry, being online is a key factor for your growth and make your business thrive. Our specialised team have the know how to implement creative digital solutions and develop websites and food apps seasoned to your needs.
        </S.Subtitle>

      </S.Mission>

      <S.Imag>
        <S.Img src='/assets/imagesFoodAppDev/foodServices_hero.svg'></S.Img>
      </S.Imag>


      <S.Resources>
        <S.Itens>

          <S.Card>
          Online menus, orders, reservations and social media: All in one place, integrated quick. Easy.
          </S.Card>

          <S.Card >
          Web design, development and Apps as well.
          </S.Card>

          <S.Card>
          Reservations, sell and stock reports.
          </S.Card>

          <S.Card>
          SEO: Search Engine Optmisation. You don’t sell if you’re not seen.
          </S.Card>

        </S.Itens>
      </S.Resources>
    </S.Container>
  )
}

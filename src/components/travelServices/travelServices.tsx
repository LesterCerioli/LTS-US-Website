'use client';
import React from 'react';
import * as S from "./styles";

export default function TravelServices() {
  return (
    <S.Container >

       <S.Mission>
         <S.Title>
         Travel Agency Services
         </S.Title>

        <S.Subtitle>
        In the travel industry, online presence is the passport to success. Our specialized team combines creativity and technology to create portals that turn dreams into concrete itineraries.
        </S.Subtitle>

      </S.Mission>

      <S.Imag>
        <S.Img src='/assets/imagesTravelServices/travelServices_hero.svg'></S.Img>
      </S.Imag>

      <S.Resources>
        <S.Itens>

          <S.Card>
            Website and mobile app design and development
          </S.Card>

          <S.Card >
            Integration of Online Reservation System.
          </S.Card>

          <S.Card>
            Destination and Travel Tips
          </S.Card>

          <S.Card>
            Personalized Travel Planning Services.
          </S.Card>

          <S.Card>
            Offers and Promotions Notifications by Email
          </S.Card>

          <S.Card>
            Integration of Customer Reviews and Comments
          </S.Card>


        </S.Itens>
      </S.Resources>
    </S.Container>
  )
}

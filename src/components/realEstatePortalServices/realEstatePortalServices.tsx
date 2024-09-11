import React from "react";
import * as S from "./styles";

interface RealEstatePortalServicesProps {
    title: string;
    subtitle: string;
    card1Text: string;
    card2Text: string;
    card3Text: string;
    card4Text: string;
}

export function RealEstatePortalServicesComponent(props: RealEstatePortalServicesProps) {
    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>{props.title}</S.Title>
                <S.Subtitle>{props.subtitle}</S.Subtitle>
            </S.TitleContainer>
            <S.ImageContainer>
                <S.Hero src='/assets/imagesRealEstate/realEstatePortalServices_hero.svg' alt='Real Estate Portal Services Banner'/>
            </S.ImageContainer>
            <S.CardsContainer>
                <S.CardsSubcontainer>
                    <S.Card>
                        <S.CardText>{props.card1Text}</S.CardText>
                    </S.Card>   
                    <S.Card>
                        <S.CardText>{props.card2Text}</S.CardText>
                    </S.Card>   
                    <S.Card>
                        <S.CardText>{props.card3Text}</S.CardText>
                    </S.Card>   
                    <S.Card>
                        <S.CardText>{props.card4Text}</S.CardText>
                    </S.Card>
                </S.CardsSubcontainer>   
            </S.CardsContainer>
        </S.Container>
    )
}

export default RealEstatePortalServicesComponent;
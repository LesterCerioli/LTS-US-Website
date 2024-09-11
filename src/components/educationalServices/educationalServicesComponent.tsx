import React from "react";
import * as S from "./styles";

interface EducationalServicesProps {
    title: string;
    subtitle: string;
    card1Text: string;
    card2Text: string;
    card3Text: string;
    card4Text: string;
}

export function EducationalServicesComponent(props: EducationalServicesProps) {
    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>{props.title}</S.Title>
                <S.Subtitle>{props.subtitle}</S.Subtitle>
            </S.TitleContainer>
            <S.ImageContainer>
                <S.Hero src='/assets/imagesEducationalServices/educationalServices_hero.svg' alt='Educational Services Banner'/>
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

export default EducationalServicesComponent;
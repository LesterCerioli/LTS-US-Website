import React from "react";
import * as S from "./styles";

interface CRM_ERPServices {
    title: string;
    subtitle: string;
    subtitle2: string;
    card1Text: string;
    card2Text: string;
    card3Text: string;
    card4Text: string;
}

export function CRMServices(props: CRM_ERPServices) {
    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>{props.title}</S.Title>
            </S.TitleContainer>
            <S.ImageContainer>
                <S.Hero src='/assets/imagesCRM/LTS_logo.svg' alt='Lucas Technology Services Logo'/>
            </S.ImageContainer>
            <S.SubtitleContainer>
                <S.Subtitle>{props.subtitle}</S.Subtitle>
            </S.SubtitleContainer>
            <S.CardContainer>
                <S.LeftCard>
                    <S.CardText>{props.card1Text}</S.CardText>
                </S.LeftCard>
                <S.RightCard>
                    <S.CardText>{props.card2Text}</S.CardText>
                </S.RightCard>
            </S.CardContainer>
            <S.SubtitleContainer>
                <S.Subtitle>{props.subtitle2}</S.Subtitle>
            </S.SubtitleContainer>   
            <S.SecondCardContainer>
                <S.LeftCard>
                    <S.CardText>{props.card3Text}</S.CardText>
                </S.LeftCard>
                <S.RightCard>
                    <S.CardText>{props.card4Text}</S.CardText>
                </S.RightCard>
            </S.SecondCardContainer>  
        </S.Container>
    )
}

export default CRMServices;
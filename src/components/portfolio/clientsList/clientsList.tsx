import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export const ClientsList = () => {
    return (
        <S.Container>
            <S.CardsContainer>
                <S.Card>               
                    <S.StyledImage src='/assets/imagesPortfolio/bny.png' alt="Minha Imagem Estilizada" />
                </S.Card>
                <S.Card>               
                    <S.StyledImage src='/assets/imagesPortfolio/firjan.png' alt="Minha Imagem Estilizada" />
                </S.Card>
                <S.Card>               
                    <S.StyledImage src='/assets/imagesPortfolio/muvz.png' alt="Minha Imagem Estilizada" />
                </S.Card>
                <S.Card>               
                    <S.StyledImage src='/assets/imagesPortfolio/stefanini.png' alt="Minha Imagem Estilizada" />
                </S.Card>
                <S.Card>               
                    <S.StyledImage src='/assets/imagesPortfolio/pjerj.png' alt="Minha Imagem Estilizada" />
                </S.Card>
            </S.CardsContainer>
        </S.Container>
    )
}

    export default ClientsList; 
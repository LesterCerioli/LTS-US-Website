import React from 'react'
import * as S from './styles'

export const ContainerAnimation = () => {
    return (
        <S.AnimatedContainer>
            <div>
          <S.Title>Our Portfolio</S.Title>
          <S.SpanDiv>
            <S.Span />
          </S.SpanDiv>
        </div>
          <S.Section>
            <S.Subtitle>Financial Market</S.Subtitle>
            <S.Subtitle>New York Stock Exchange</S.Subtitle>
            <S.Image src='assets/imagesPortfolio/nyse.png' alt="NYSE logo" width={300} height={200}/>
          </S.Section>
        </S.AnimatedContainer>

    )
};

export default ContainerAnimation;

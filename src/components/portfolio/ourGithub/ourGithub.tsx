import React from 'react'
import * as S from './styles'
import Image from 'next/image';

export const OurGithub = () => {
    return (
      <S.Container>
        <div>
          <S.Title>Visit our Github</S.Title>
          <S.SpanDiv>
            <S.Span />
          </S.SpanDiv>
        </div>
        <S.RepositoryContainer>
          <div>
            <Image src='/assets/imagesPortfolio/github.png' alt='Github logo' width={375} height={210} />
          </div>
          <S.GithubContainer>
            <S.Subtitle>Our Repository</S.Subtitle>
              <a href='https://github.com/Lucas-Technology-Services' target="_blank">
                <S.Button>Our Github</S.Button>
              </a>
          </S.GithubContainer>
        </S.RepositoryContainer>
      </S.Container>
    );
  };

  export default OurGithub;

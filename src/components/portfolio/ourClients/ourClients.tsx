import React from 'react'
import * as S from './styles'
import ClientsList from '../clientsList/clientsList';

export const OurClients = () => {
    return (
      <S.Container>
        <div>
          <S.Title>Our Clients</S.Title>
          <S.SpanDiv>
            <S.Span />
          </S.SpanDiv>
        </div>
          <ClientsList />
      </S.Container>
    );
  };

  export default OurClients;

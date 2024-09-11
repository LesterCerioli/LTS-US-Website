import React from 'react'
import * as S from './styles'
import RecruitmentCycle from '../recruitmentCycle/recruitmentCycle'
import { recruitmentCycle } from '../helper/constants'
import RecruitmentCycleDottedLine from '../RecruitmentCycleDottedLine/RecruitmentCycleDottedLine'

function recruitmentCycleContainer() {
  return (
    <S.ProBarContainer>
      <h1>Ciclo de recrutamento</h1>
      <div>
        {recruitmentCycle.map((card) => (
          <RecruitmentCycle key={card.id} data={card} />
        ))}
      </div>
      <RecruitmentCycleDottedLine />
    </S.ProBarContainer>
  )
}

export default recruitmentCycleContainer

import React from 'react'
import * as S from './styles'
import RecruitmentCard from '@/components/recruitmentServices/recruitmentCard/recruitmentCard'
import { recruitmentCardText } from '../helper/constants' // Import the array

function RecruitmentCardContainer() {
  return (
    <S.RecruitmentCardContainer>
      <div>
        {recruitmentCardText.map((card) => (
          <RecruitmentCard key={card.id} data={card} />
        ))}
      </div>
    </S.RecruitmentCardContainer>
  )
}

export default RecruitmentCardContainer

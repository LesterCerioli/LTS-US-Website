import React from 'react'
import * as S from './styles'

interface RecruitmentCardProps {
  data: {
    title: string
    text: string
  }
}

function RecruitmentCard(props: RecruitmentCardProps) {
  const { title, text } = props.data

  return (
    <S.RecruitmentCard>
      <h2>{title}</h2>
      <p>{text}</p>
      <div></div>
    </S.RecruitmentCard>
  )
}

export default RecruitmentCard

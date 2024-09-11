import React from 'react'
import * as S from './styles'
interface ProgressBarProps {
  data: {
    image: React.ReactElement
    text: string
  }
}

function RecruitmentCycle(props: ProgressBarProps) {
  const { image, text } = props.data

  return (
    <S.ProgressBar>
      <div>
        <ul>
          <li>
            <div>{image}</div>
            <p>{text}</p>
          </li>
        </ul>
      </div>
    </S.ProgressBar>
  )
}

export default RecruitmentCycle

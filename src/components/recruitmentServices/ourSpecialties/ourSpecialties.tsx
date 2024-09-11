import React, { useRef, useState } from 'react'
import * as S from './styles'

import { specialties } from '../helper/constants'

interface OurspecialtiesProps {
  data: {
    image: React.ReactElement
    title: string
    text: string
  }
}

function OurSpecialties(props: OurspecialtiesProps) {
  const { image, title, text } = props.data

  return (
    <S.OurSpec>
      <div>
        <div>
          {image}
          <h5>{title}</h5>
        </div>

        <p>{text}</p>
      </div>
    </S.OurSpec>
  )
}

export default OurSpecialties

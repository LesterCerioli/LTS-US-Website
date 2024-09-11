import React from 'react'
import * as S from './styles'
import OurSpecialties from '../ourSpecialties/ourSpecialties'
import { specialties } from '../helper/constants'

function OurSpecialtiesContainer() {
  return (
    <S.OurSpecialtiesCon>
      <h1>Oferecemos</h1>
      <div>
        <div>
          {specialties.map((card) =>
            card ? <OurSpecialties key={card.id} data={card} /> : null
          )}
        </div>
      </div>
    </S.OurSpecialtiesCon>
  )
}

export default OurSpecialtiesContainer

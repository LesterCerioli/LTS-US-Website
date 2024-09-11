import * as S from './styles'
import MainHeroCarousel from '@/components/recruitmentServices/mainHeroCarousel/mainHeroCarousel'
import { heroImages } from '../helper/constants'

export function MainHero() {
  return (
    <S.MainHero>
      <section>
       

        <MainHeroCarousel />
      </section>
    </S.MainHero>
  )
}

export default MainHero

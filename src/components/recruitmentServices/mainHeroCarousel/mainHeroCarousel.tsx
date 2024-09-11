import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import * as S from './styles'

import Image from 'next/image'

import RH1 from '@/assets/images/travelServicesImages/image_travel_1.png'
import RH2 from '@/assets/images/travelServicesImages/image_travel_1.png'
import RH3 from '@/assets/images/travelServicesImages/image_travel_1.png'
import RH4 from '@/assets/images/travelServicesImages/image_travel_1.png'
import RH5 from '@/assets/images/travelServicesImages/image_travel_1.png'
import RH6 from '@/assets/images/travelServicesImages/image_travel_1.png'

//Usei imagens aleatorias acima, as imagens usadas no comentário abaixo não existem mais no projeto.

// import RH1 from '@/assets/imagesRecruitmentServices/recruitment_hero1.jpg'
// import RH2 from '@/assets/imagesRecruitmentServices/recruitment_hero2.jpg'
// import RH3 from '@/assets/imagesRecruitmentServices/recruitment_hero3.jpg'
// import RH4 from '@/assets/imagesRecruitmentServices/recruitment_hero4.jpg'
// import RH5 from '@/assets/imagesRecruitmentServices/recruitment_hero5.jpg'
// import RH6 from '@/assets/imagesRecruitmentServices/recruitment_hero6.jpg'

class MainHeroCarousel extends Component {
  render() {
    return (
      <S.CarrousselStyles>
        <div>
          <h1>Serviço de recrutamento</h1>
          <h4>
            {' '}
            Você está contratando ou procurando assessoria no assunto? Estamos
            aqui para te ajudar! Somos especializados em talent acquisition e
            vamos te ajudar na contratação que mais atende ao seu perfil.
          </h4>
          <Carousel interval={3500} showThumbs={false} autoPlay infiniteLoop>
            <div>
              <Image src={RH1} alt="image1" width={1080} height={720} />
            </div>
            <div>
              <Image src={RH2} alt="image1" width={1080} height={720} />
            </div>
            <div>
              <Image src={RH3} alt="image1" width={1080} height={720} />
            </div>
            <div>
              <Image src={RH4} alt="image1" width={1080} height={720} />
            </div>
            <div>
              <Image src={RH5} alt="image1" width={1080} height={720} />
            </div>
          </Carousel>
        </div>
      </S.CarrousselStyles>
    )
  }
}

export default MainHeroCarousel

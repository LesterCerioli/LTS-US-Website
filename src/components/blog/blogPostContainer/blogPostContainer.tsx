import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

import carouselImage1 from '@/assets/imagesBlog/backendCard.png'
import carouselImage2 from '@/assets/imagesBlog/cloudSuiteCard.png'
import carouselImage3 from '@/assets/imagesBlog/frontEndCard.png'
import carouselImage4 from '@/assets/imagesBlog/devOpsCard.png'

class BlogPostContainer extends Component {
  render() {
    return (
      <S.BlogPostsContainer>
          <h1> Check out our articles! </h1>
          <Link href="/blog/posts">
            <h3>See Articles</h3>
          </Link>
          <S.CarouselStyles>
            <Link href="/blog/posts">
                <Carousel
                  interval={1500}
                  showThumbs={false}
                  autoPlay
                  infiniteLoop
                >
                  <div>
                    <Image src={carouselImage1} alt="backend" width={500} />
                  </div>
                  <div>
                    {' '}
                    <Image src={carouselImage2} alt="coudSuite" width={500} />
                  </div>
                  <div>
                    {' '}
                    <Image src={carouselImage3} alt="front end" width={500} />
                  </div>
                  <div>
                    {' '}
                    <Image src={carouselImage4} alt="devops" width={500} />
                  </div>
                </Carousel>
            </Link>
          </S.CarouselStyles>
      </S.BlogPostsContainer>
    )
  }
}
export default BlogPostContainer

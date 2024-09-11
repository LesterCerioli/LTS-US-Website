import React from 'react'
import Post1 from '@/components/blog/allPosts/backEndPosts/Post1/Post1'
import * as S from './styles'

function BackEndPostsContainer() {
  return (
    <div>
      <S.PostStyles>
        <Post1 />
      </S.PostStyles>
    </div>
  )
}

export default BackEndPostsContainer

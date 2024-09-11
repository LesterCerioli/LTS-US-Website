"use client";
import * as S from "./styles";
import { BlogHeader } from "@/components/blog/blogHeader/BlogHeader";

import BackEndPostsContainer from "@/components/blog/backEndPostsContainer/BackEndPostsContainer";

export default function BackendPosts() {
  return (
    <S.Container>
      <BlogHeader />
      <BackEndPostsContainer />
    </S.Container>
  );
}

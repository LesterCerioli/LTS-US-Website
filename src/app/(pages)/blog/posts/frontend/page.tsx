"use client";
import * as S from "./styles";

import FrontEndPostsContainer from "@/components/blog/fronEndPostsContainer/FrontEndPostsContainer";
import { BlogHeader } from "@/components/blog/blogHeader/BlogHeader";

export default function FrontEnd() {
  return (
    <S.Container>
      <BlogHeader />
      <FrontEndPostsContainer />
    </S.Container>
  );
}

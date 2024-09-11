"use client";
import * as S from "./styles";

import Hero from "@/components/blog/hero/Hero";
import { BlogHeader } from "@/components/blog/blogHeader/BlogHeader";

export default function FrontEndPosts() {
  return (
    <S.Container>
      <BlogHeader />
      <Hero />
    </S.Container>
  );
}

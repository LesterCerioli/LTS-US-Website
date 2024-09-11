"use client";
import * as S from "./styles";

import DevOps from "@/components/blog/devOpsPostContainer/DevOpsPostsContainer";
import { BlogHeader } from "@/components/blog/blogHeader/BlogHeader";

export default function BackendPosts() {
  return (
    <S.Container>
      <BlogHeader />
      <DevOps />
    </S.Container>
  );
}

"use client";
import * as S from "./styles";
import BlogPostContainer from "@/components/blog/blogPostContainer/blogPostContainer";
import { BlogHeader } from "@/components/blog/blogHeader/BlogHeader";

import Posts from "@/components/blog/postsPage/Posts";

export default function BlogPosts() {
  return (
    <S.Container>
      <BlogHeader />
      <Posts />
    </S.Container>
  );
}

import React from "react";
import pcVintage from "@/assets/imagesBlog/computer.svg";
import Image from "next/image";
import * as S from "./styles";
import Posts from "../postsPage/Posts";

import BlogPostContainer from "../blogPostContainer/blogPostContainer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

function Hero() {
  return (
    <S.heroContainer>
      <SpeedInsights />
      <Analytics />
      <div>
        <h1>Welcome!</h1>

        <S.contentContainer>
          <div>
            <div>
              <h3>
                Come aboard as we delve into the core of information technology, forging paths to success in building resilient infrastructures and dependable applications. We're thrilled to share our expertise and assist you in making your mark in the realms of Front End, DevOps, Cloud and Backend development.
              </h3>
            </div>
            <S.imageContainer>
              <Image
                src={pcVintage}
                alt="pc vintage"
                className="img"
              />
            </S.imageContainer>
          </div>
        </S.contentContainer>
      </div>
      <BlogPostContainer />
    </S.heroContainer>
  );
}

export default Hero;

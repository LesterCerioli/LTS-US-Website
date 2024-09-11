import React, { ReactComponentElement } from "react";
// import PostsData from "../helper/postsData";
import * as S from "./styles";
import Image from "next/image";

import { postCategoryImages } from "@/components/blog/helper/postCategotyImages";

// vamos pegar o array the imagens e links, iterar e ramdomizar:
// let's iterate and randomize the images / links array

function shuffleArray(array: any[]) {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

function Posts() {
  const shuffledImages = shuffleArray(postCategoryImages);

  return (
    <S.Posts>
      <div>
        <h1>Check our posts!</h1>
        <S.ImagesContainer>
          <div>
            {shuffledImages.map((item, index) => (
              <a key={index} href={item.link}>
                <Image
                  src={item.image}
                  alt={`Image ${index}`}
                  width={500}
                  className="images"
                />
              </a>
            ))}
          </div>
        </S.ImagesContainer>
      </div>
    </S.Posts>
  );
}

export default Posts;

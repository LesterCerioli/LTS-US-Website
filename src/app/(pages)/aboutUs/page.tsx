"use client";
import * as React from "react";
import * as S from "./styles";
import Image from 'next/image';
import EscritorioImage from "@/assets/aboutUsImages/about-us.svg";
import LogoImage from "@/assets/aboutUsImages/about-us-logo.svg";

export default function AboutUs() {
  return (
    <S.Container>
      <S.Title>
        {/* <h1>About us</h1> */}
        About us
      </S.Title>

        <S.Section>
          <S.Img src={EscritorioImage.src} alt="Time Lucas(imagem ilustrativa)" />
          <S.SectionContent>
            <S.Info>
            Lucas Technology Services is a fast-growing IT company that offers comprehensive IT solutions, including software development, website and app development, UI/UX design, and digital marketing. They serve businesses across various sectors and regions, supported by a team of highly skilled IT professionals available 24/7 to meet their clients' needs.
            </S.Info>
          </S.SectionContent>
        </S.Section>

      <S.SecondComponent>
        <S.Title>
          What makes us different / Why us?
        </S.Title>
        <S.SecondElement>
            <S.Info>Lucas Technology Services works closely with its clients, valuing partnership and the individuality of each client. We prioritize communication, transparency, and on-time delivery in projects, following a systematic and agile approach. The team begins with a confidentiality agreement, shares responsibilities, maintains frequent reports, and obtains continuous feedback from clients. This enables us to handle complex projects and stand out as high-quality software developers.</S.Info>
          <S.Img src={LogoImage.src} alt="Descrição da segunda imagem"/>
        </S.SecondElement>
      </S.SecondComponent>
    </S.Container>
  );
}

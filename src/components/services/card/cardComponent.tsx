"use client";
import * as S from "./styles";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/shared/button/button";

interface CardProps {
  title: string;
  image: StaticImageData;
  description: string;
}

export function Card({ title, image, description }: CardProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Body>
        <S.Image>
          <Image src={image} width={380} height={380} alt={title} />
        </S.Image>
        {/* position absolute here */}
        <S.Description>{description}</S.Description>
      </S.Body>
      <S.AlignButton>
        <Button>saiba mais</Button>
      </S.AlignButton>
    </S.Container>
  );
}

interface PortalProps {
  title: string;
  image: StaticImageData;
  description: string;
}

export function Portal({  title, image, description }: PortalProps) {
  return  (
    <S.Portal>
      <S.Body>
      <S.Title>{title}</S.Title>
      <S.ImagePortal>
        <Image src={image} width={480} height={350} alt={title} />
      </S.ImagePortal>
      <S.DescriptionPortal>{description}</S.DescriptionPortal>
      <S.AlignButton>
        <Button>Saiba mais</Button>
      </S.AlignButton>
      </S.Body>
    </S.Portal>
  )
}

interface DevUxProps {
  title: string;
  image: StaticImageData;
  description: string;
}

export function DevUx({  title, image, description }: DevUxProps) {
  return  (
    <S.DevUx>
      <S.Body>
      <S.Title>{title}</S.Title>
      <S.ImageDevUx>
        <Image src={image} width={480} height={350} alt={title} />
      </S.ImageDevUx>
      <S.DescriptionDevUx>{description}</S.DescriptionDevUx>
      <S.AlignButton>
        <Button>Saiba mais</Button>
      </S.AlignButton>
      </S.Body>
    </S.DevUx>
  )
}
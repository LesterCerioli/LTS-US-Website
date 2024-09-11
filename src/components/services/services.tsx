// Services.tsx
import React from "react";
import * as S from "./styles";
import { serviceSlider } from "@/components/shared/slider/helper/imageConstants";
import { Slider } from "../shared/slider/slider";


const Services: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Our Services</S.Title>
      <S.Subtitle>
        We provide a diverse array of digital services to meet constantly evolving needs. With our expertise, we turn ideas into solutions ready for the market. Explore our services and be part of the digital revolution.
      </S.Subtitle>
      <Slider data={serviceSlider} />
    </S.Container>
  );
};

export default Services;

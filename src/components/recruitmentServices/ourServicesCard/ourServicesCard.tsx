import React from "react";
import * as S from "./styles";
interface OurServicesProps {
  data: {
    id: number;
    title: string;
    text: string;
  };
}
function OurServicesCard(props: OurServicesProps) {
  const { id, title, text } = props.data;
  return (
    <S.Services>
      <h3>{title}</h3>
      <p>{text}</p>
      <span></span>
    </S.Services>
  );
}
export default OurServicesCard;

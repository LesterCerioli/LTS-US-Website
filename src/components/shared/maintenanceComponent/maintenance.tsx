import * as S from "./styles";
import underConstruction from "@/assets/imagesBlog/working_blog.svg";

export default function Maintenance(){
  return (
    <S.Container>
      <S.Content>
        <S.Title>Under Construction</S.Title>
        <S.Img src={underConstruction.src} alt="under construction image" />
      </S.Content>
    </S.Container>
  )
}

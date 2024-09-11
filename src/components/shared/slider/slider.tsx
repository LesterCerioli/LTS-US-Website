import { ImageContainer } from "@/components/crmServices/styles";
import * as S from "./styles";


interface ImageProvider{
  data: Array<Image>;
}

interface Image{
  id: number;
  src: string;
  path: string;
} 



export function Slider({data}: ImageProvider){
    return (
      <S.Scroller data-animated="true" data-direction="left" data-speed="fast">
        <S.ScrollerInner className="scroller__inner">
            {data.map(({id, src, path}: Image) => (
              <S.NavLink href={path} key={id}>
                 <S.Img src={src}/>
              </S.NavLink>
            ))};
        </S.ScrollerInner>
      </S.Scroller>
    )
}

"use client";
import * as S from "./styles";
 
import OurPortfolio from "@/components/portfolio/ourPortfolio/ourPortfolio";
import OurClients from "@/components/portfolio/ourClients/ourClients";
import ClientsList from "@/components/portfolio/clientsList/clientsList";
import OurGithub from "@/components/portfolio/ourGithub/ourGithub";



export default function Portfolio() {
  return (
    <S.Container>
      <section>
        <OurPortfolio />
      </section>
      <section>
        <OurClients />
      </section>
      <section>
        <OurGithub />
      </section>
    </S.Container>
  );
}

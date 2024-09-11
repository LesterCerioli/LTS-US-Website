"use client";
import React from "react";
import * as S from "./styles";
import Cookies from "@/components/home/cookies/cookies/cookies";
import { Banner } from "@/components/home/cookies/homeBanner/homeBanner";
import { ServicesSection } from "@/components/home/cookies/servicesSection/servicesSection";
import { PortfolioSection } from "@/components/home/cookies/portfolioSection/portfolioSection";
import { ContactSection } from "@/components/home/cookies/contactSection/contactSection";
import { AboutUsSection } from "@/components/home/cookies/aboutUsSection/aboutUsSection";
import { BlogSection } from "@/components/home/cookies/blogSection/blogSection";




const Home: React.FC = () => {

  return (
    <S.Container>
      <Banner />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <AboutUsSection />
      <BlogSection />
      <S.Cokkies>
        <Cookies />
      </S.Cokkies>
    </S.Container>
  );
};
export default Home;

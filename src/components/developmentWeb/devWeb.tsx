'use client';
import React from 'react';
import * as S from "./styles";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export default function DevelopmentWeb() {
  return (
    <S.Container >

       <SpeedInsights />
       <Analytics />
       <S.Mission>
         <S.Title>
          Web Development
         </S.Title>

        <S.Subtitle>
          Professional Website Development for Online Success, where we turn ideas into a remarkable online presence. We are a team of dedicated experts focused on creating digital solutions that impress and deliver results. By blending attractive design with advanced functionality, we provide a range of customized services to meet your needs.
        </S.Subtitle>

      </S.Mission>

      <S.Imag>
        <S.Img src='/assets/imagesDevWeb/services_hero.svg'></S.Img>
      </S.Imag>

      <S.Resources>
        <S.Itens>

          <S.Card>
            Custom Web Solutions: Tailor-made websites that align with your brand, goals, and user expectations.
          </S.Card>

          <S.Card >
            Responsive Design: Websites optimized for seamless viewing and interaction across various devices, ensuring a consistent user experience.
          </S.Card>

          <S.Card>
            Frontend Development: Engaging user interfaces with intuitive navigation and captivating design elements.
          </S.Card>

          <S.Card>
            Backend Development: Robust and scalable backend architecture, ensuring performance, security, and data management.
          </S.Card>

          <S.Card>
            E-commerce Integration: Create a powerful online storefront with secure payment gateways, inventory management, and a user-friendly shopping experience.
          </S.Card>

          <S.Card>
            Content Management Systems (CMS): Easy-to-use CMS platforms that empower you to manage and update your website content effortlessly.
          </S.Card>

          <S.Card>
            SEO Optimization: Implement SEO best practices to enhance your website's visibility and performance on search engines.
          </S.Card>

        </S.Itens>
      </S.Resources>
    </S.Container>
  )
}

import styled from "styled-components";

export const ImageContainer = styled.div`
width: 100%;
height: 800px;
background: url('/assets/imagesHome/LTS_header_banner.svg') no-repeat ;
background-size: cover;
background-position: center;

@media (min-width: 1300px) and (max-width:1400px) {
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 1000px;
}

@media (min-width: 1250px) and (max-width:1299px) {
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 750px;
}

@media (min-width: 1100px) and (max-width:1249px) {
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 700px;
}

@media (min-width: 1000px) and (max-width:1099px) {
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 620px;
}

@media (min-width: 891px) and (max-width: 999px) {
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 560px;
}

@media (min-width: 800px) and (max-width:890px) {
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 500px;
}

@media (min-width: 535px) and (max-width: 799px){
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 450px;
}

@media (min-width: 677px) and (max-width: 735px){
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 420px;
}

@media (min-width: 643px) and (max-width: 676px){
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 380px;
}

@media (min-width: 560px) and (max-width: 642px) {
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 360px;
}

@media (min-width: 533px) and (max-width: 559px) {
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 330px;
}

@media (min-width: 490px) and (max-width: 532px) {
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 300px;
}

@media (min-width: 452px) and (max-width: 489px) {
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 280px;
}

@media (min-width: 425px) and (max-width: 451px) {
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 260px;
}

@media (min-width: 330px) and (max-width: 424px) {
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 237px;
}

@media (max-width: 329px) {
   background: url('/assets/imagesHome/background_banner.svg') no-repeat;
   width: 100%;
   max-height: 200px;
}
`

export const Logo = styled.img`
   display: none;

   @media (max-width: 1400px) {
      display: flex;
      max-width: 70%;
      max-height: 70%;
      margin-top: 40px;
   }
   @media (max-height: 876px) {
    margin-top: 40px;
   }
`
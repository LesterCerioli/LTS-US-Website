"use client";
import * as S from "./styles";
import React from "react";
import RealEstatePortalServicesComponent from "@/components/realEstatePortalServices/realEstatePortalServices";

export default function RealEstatePortalServices() {
    return (
        <S.Container>
            <RealEstatePortalServicesComponent
                title="Real Estate Services"
                subtitle="In the dynamic real estate market, online presence is the key to success. Our specialized team combines innovation and technology to create real estate portals that connect properties to fulfilled dreams.."
                card1Text="Intuitive Portal Design and Development"
                card2Text="Advanced Property Search Integration"
                card3Text="Boost Your Sales with Our Expertise in Digital Marketing."
                card4Text="Personalized Service for Every Buyer Profile."
            />
        </S.Container>
    );
}

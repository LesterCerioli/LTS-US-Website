"use client";
import * as S from "./styles";
import React from "react";
import EducationalServicesComponent from "@/components/educationalServices/educationalServicesComponent";

export default function EducationalServices() {
    return (
        <S.Container>
            <EducationalServicesComponent
                title="Educational Services"
                subtitle="In the era of digital learning, our specialized team creates tailor-made educational portals that empower educators and students. Explore our services and join the online educational revolution."
                card1Text="Designing an intuitive educational interface: engaging Learning."
                card2Text="Integration of didactic and interactive resources, focusing on diverse learning."
                card3Text="Custom LMS development enabling student tracking and assessment."
                card4Text="Collaboration between students and teachers through chats, FAQs, and video calls."
            />
        </S.Container>
    );
}

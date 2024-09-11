"use client";
import * as S from "./styles";
import React from "react";
import CRMServices from "@/components/crmServices/crmServices";

export default function CRMServicesComponent() {
    return (
        <S.Container>
            <CRMServices
                title="CRM / ERP"
                subtitle="With CRM, or Customer Relationship Management, you can build stronger connections with your customers. It tracks all interactions and helps personalize your service, creating lasting relationships and boosting your sales."
                subtitle2="ERP (Enterprise Resource Planning):
                ERP, or Enterprise Resource Planning, is like the backbone of a smart enterprise. It helps unify all internal operations, from finance to inventory management, providing a complete view of operations and making decision-making more informed."
                card1Text="Customer Relationship Management: CRM is designed to track and manage all interactions with customers. It stores detailed information about customers, including purchase history and preferences, allowing for personalized service."
                card2Text="Marketing and Sales Automation: CRM automates marketing, including sending emails, customer segmentation and forecasting opportunities based on historical data. This drives effectiveness"
                card3Text="Process Integration: ERP integrates a wide range of business processes, such as accounting, inventory management, human resources and production, into a single system. This allows for a holistic view of operations and the elimination of information silos."
                card4Text="Task Automation: ERP automates repetitive tasks and workflows, reducing human errors and increasing operational efficiency. This results in savings of time and resources."
            />
        </S.Container>
    );
}

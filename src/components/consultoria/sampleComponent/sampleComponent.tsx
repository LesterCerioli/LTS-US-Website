"use client";
import { Analytics } from "@vercel/analytics/react";
import * as S from "./styles";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function SampleComponent() {
  return (
    <S.Container>
      <p>Teste</p>
      <SpeedInsights />
      <Analytics />
    </S.Container>
  );
}

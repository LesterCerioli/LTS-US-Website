"use client";
import { useState } from "react";
import * as S from "./styles";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export function Cookies() {
  const [closeModal, setCloseModal] = useState(false);

  if (!closeModal) {
    return (
      <S.Container>
        <Analytics />
        <SpeedInsights />
        <div>
          <h3> This website uses cookies. </h3>
          <p>
            We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with the data of all other users.
          </p>
          <button onClick={() => setCloseModal(!closeModal)}>Accept</button>
        </div>
      </S.Container>
    );
  }
}

export default Cookies;

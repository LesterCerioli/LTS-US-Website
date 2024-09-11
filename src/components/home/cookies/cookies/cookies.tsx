"use client";
import { useState } from "react";
import * as S from "./styles";

export function Cookies() {
  const [closeModal, setCloseModal] = useState(false);

  if (!closeModal) {
    return (
      <S.Container>
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

"use client"

import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { BsWhatsapp } from "react-icons/bs";
import MapLink from "./mapLink/mapLink";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "react-modal";
import { GoIssueClosed } from "react-icons/go";
import { NodeNextRequest } from "next/dist/server/base-http/node";

const schemaForm = z.object({
  dataClient: z.object({
    name: z.string().min(10, "Informe seu nome completo"),
    email: z.string().min(6, "Informe seu e-mail"),
    tel: z
      .string()
      .max(12)
      .regex(/^(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})$/, {
        message: "Informe um telefone válido",
      }),
  }),
});

type FormProps = z.infer<typeof schemaForm>;

const phoneNumber = "+552130425441";

export default function Form() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState<FormProps | null>({
    dataClient: {
      name: "",
      email: "",
      tel: "",
    },
  });

  const [showRequiredErrors, setShowRequiredErrors] = useState(false);
  const abrirModal = () => {
    setModalIsOpen(true);
  };
  const fecharModal = () => {
    setModalIsOpen(false);
    setFormData({
      dataClient: {
        name: "",
        email: "",
        tel: "",
      },
    });
  };

  useEffect(() => {
    const storedData = localStorage.getItem("formData");

    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);
  const handleFormSubmit = async (data: FormProps) => {
    if (isValidForm(data)) {
      abrirModal();
      setIsSending(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setModalIsOpen(false);
      setIsSending(false);
    } else {
      // Exibir erros obrigatórios
      setShowRequiredErrors(true);
    }
  };

  const isValidForm = (data: FormProps) => {
    return (
      !!data.dataClient.name &&
      !!data.dataClient.email &&
      !!data.dataClient.tel
    );
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaForm),
    defaultValues: {
      dataClient: {
        name: "",
        email: "",
        tel: "",
      },
    },
  });

 const [isPhonePopupOpen, setIsPhonePopupOpen] = useState(false);

  const handlePhonePopup = () => {
    setIsPhonePopupOpen(!isPhonePopupOpen);
  };


  const handleWhatsAppClick = () => {
    const phoneNumber = "+555521964108815";
    const message = "Olá, um instante, por favor";
    const whatsappLink = `https://wa.me/555521964108815?text=${encodeURIComponent(
      "Seja bem-vindo"
    )}`;
    window.open(whatsappLink);
  };

  return (
<S.Container>
<form
        onSubmit={handleSubmit((data) => {
          handleFormSubmit(data);
          reset();
        })}
>
<S.Title>
<h1>Contact us</h1>
<label className="line"></label>
</S.Title>

<S.Data>
<input
     {...register("dataClient.name")}
         type="text"
         placeholder="Name"
         required
          />
          {(errors.dataClient?.name?.message || showRequiredErrors) && (
<p style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
              {errors.dataClient?.name?.message || "Campo obrigatório"}
</p>
          )}
          <input
            {...register("dataClient.email")}
            type="email"
            placeholder="Email"
            required
          />
          {(errors.dataClient?.email?.message || showRequiredErrors) && (
<p style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
              {errors.dataClient?.email?.message || "Campo obrigatório"}
</p>
          )}

          <input
            {...register("dataClient.tel")}
            type="tel"
            placeholder="Telephone"
            required
          />
          {(errors.dataClient?.tel?.message || showRequiredErrors) && (
            <p style={{ color: "red", fontSize: "10px", textAlign: "left" }}>
              {errors.dataClient?.tel?.message || "Campo obrigatório"}
            </p>
          )}



          <textarea rows={8} cols={70} id="myTextarea" placeholder="Mensagem"></textarea>
</S.Data>

<S.FirstButton>
<label>
<button
          type="submit"
          className={isSending ? "sending" : ""}
          disabled={isSending}
>
              {isSending ? "Sending" : "Send"}
</button>
</label>
</S.FirstButton>
</form>

<Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          reset();
          setModalIsOpen(false);
        }}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            fontSize: "30px",
            fontWeight: "500",
            color: "green",
            transform: "translate(-50%, -50%)",
            width: "400px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            textAlign: "center",
            backgroundColor: "#E8F0FE",
            border: "none",
          },
        }}
        contentLabel="Exemplo de Modal"
        ariaHideApp={false}
>
<p>Thank you for your contact!</p>
<S.Button onClick={() => setModalIsOpen(false)}>
<GoIssueClosed />
</S.Button>
</Modal>

      <S.GooglePrivacy>
<label>
<a href="https://policies.google.com/privacy" className="privacidade">
  This site is protected by reCAPTCHA. Google's Privacy Policy and Terms of Service apply.
</a>
</label>
</S.GooglePrivacy>

<S.Name>
<label>
<h4 className="name">Lucas Technology Services</h4>
</label>
</S.Name>

<S.Address>
<label>
<p className="endereco">
  16 E 52nd St # 302, 1048, New York, United States
</p>
</label>
</S.Address>

<S.Address>
<label>
<p className="endereco"> 235 City Walk, 1385, Canberra, Australian Capital Territory 329699, AU </p>
</label>
</S.Address>

<S.Address>
<label>
<p className="endereco"> Rua do Comércio 235, 207, Lisboa, Aveiro 4505, Portugal </p>
</label>
</S.Address>

<S.Address>
<label>
<p className="endereco"> 79 E Flagler St, 1412, Miami, Florida 33131, United States </p>
</label>
</S.Address>

<S.Address>
<label>
<p className="endereco"> Avenida Vicente de Carvalho 1086, 22, Rio de Janeiro, RJ 21210630, Brazil </p>
</label>
</S.Address>

<S.Email>
<label>
<a href="mailto:commercial2018@lucastechnologyservice.com">
<MdEmail style={{ fontSize: "22px", marginRight: "5px" }} />
            commercial2018@lucastecnologyservice.com
</a>
</label>

 <label>
<a href={`tel:${phoneNumber}`} onClick={handlePhonePopup}>
<BsTelephoneFill style={{ fontSize: "22px", marginRight: "5px" }} />
  +1 212 796-6950
</a>
</label>
</S.Email>

<S.WhatsappButton>
<S.SecondButton>

<button
            type="submit"
            className="mensagem"
            onClick={handleWhatsAppClick}
>
<BsWhatsapp />
<p>Send message</p>
</button>

</S.SecondButton>
</S.WhatsappButton>

<S.Map>
<MapLink></MapLink>
</S.Map>
</S.Container>
  );
}

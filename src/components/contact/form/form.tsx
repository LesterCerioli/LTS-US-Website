"use client";

import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { BsWhatsapp } from "react-icons/bs";
import MapLink from "./mapLink/mapLink";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FieldError, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "react-modal";
import { GoIssueClosed } from "react-icons/go";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
const schemaForm = z.object({
  dataClient: z.object({
    name: z.string().min(10, "Write your fullname"),
    email: z.string().min(6, "Write your email"),
    tel: z.string().max(12).regex(/^(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})$/, {
      message: "Write tour telephone number",
    }),
    message: z.string().min(5, "Write your message."),
  }),
});

type FormProps = z.infer<typeof schemaForm>;

export default function Form() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formMessage, setFormMessage] = useState<string | null>(null);

  const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://lts-us-website.vercel.app";
  const NEXT_PUBLIC_API_CONTACTS = process.env.NEXT_PUBLIC_API_CONTACTS || "/api/contacts";
  
  const abrirModal = () => {
    setModalIsOpen(true);
  };

  const fecharModal = () => {
    setModalIsOpen(false);
    reset();
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
        message: "",
      },
    },
  });

  const handleFormSubmit = async (data: FormProps) => {
    setIsSending(true);

    try {
      const response = await fetch(`${NEXT_PUBLIC_API_BASE_URL}${NEXT_PUBLIC_API_CONTACTS}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.dataClient.name,
          email: data.dataClient.email,
          phone: data.dataClient.tel,
          message: data.dataClient.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        abrirModal();
        setFormMessage("Your contact has been sent successfully!");
        reset();
      } else {
        setFormMessage(result.error || "Error to send contact.");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setFormMessage("Error connecting to the server.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <S.Container>
      <SpeedInsights />
      <Analytics />
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <S.Title>
          <h1>Contact Us</h1>
          <label className="line"></label>
        </S.Title>

        <S.Data>
          <input {...register("dataClient.name")} type="text" placeholder="Fullname" required />
          {errors.dataClient?.name && <p style={{ color: "red", fontSize: "10px" }}>{errors.dataClient?.name.message}</p>}

          <input {...register("dataClient.email")} type="email" placeholder="Email" required />
          {errors.dataClient?.email && <p style={{ color: "red", fontSize: "10px" }}>{errors.dataClient?.email.message}</p>}

          <input {...register("dataClient.tel")} type="tel" placeholder="Telephone Number" required />
          {errors.dataClient?.tel && <p style={{ color: "red", fontSize: "10px" }}>{errors.dataClient?.tel.message}</p>}

          <textarea {...register("dataClient.message")} rows={8} placeholder="Message" required />
          {errors.dataClient?.message && (
            <p style={{ color: "red", fontSize: "10px" }}>
              {(errors.dataClient?.message as FieldError).message}
            </p>
          )}
        </S.Data>

        <S.FirstButton>
          <label>
            <button type="submit" className={isSending ? "sending" : ""} disabled={isSending}>
              {isSending ? "Sending..." : "Send"}
            </button>
          </label>
        </S.FirstButton>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            textAlign: "center",
            backgroundColor: "#E8F0FE",
            border: "none",
          },
        }}
        contentLabel="Message sent"
        ariaHideApp={false}
      >
        <p>{formMessage}</p>
        <S.Button onClick={fecharModal}>
          <GoIssueClosed />
        </S.Button>
      </Modal>
    </S.Container>
  );
}
"use client";

import React, { Suspense } from "react";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export function ButtonWhatsapp() {
  return (
    <Suspense fallback={<p>carregarnfo</p>}>
      <FloatingWhatsApp
        avatar="https://github.com/walysonMoura.png"
        phoneNumber="85987520858"
        statusMessage="Online"
        accountName="Walyson Moura"
        buttonStyle={{ bottom: "6.5rem", right: "1.8rem" }}
        style={{ height: "3rem", width: "3rem", position: "relative" }}
        chatMessage="Olá tudo bem 😊? Qualquer dúvida pode me chamar!"
        placeholder="Digite uma mensagem.."
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </Suspense>
  );
}

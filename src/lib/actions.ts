"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormType {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function validateEmail(email: string) {
  return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}

export async function sendContactEmail(formData: ContactFormType) {
  try {
    const { name, email, phone, message } = formData;

    // Basic validation
    if (!name || name.length < 2) {
      return { error: "El nombre es requerido" };
    }

    if (!email || !validateEmail(email)) {
      return { error: "Email inválido" };
    }

    if (!phone || phone.length < 10) {
      return { error: "Teléfono inválido" };
    }

    if (!message || message.length < 10) {
      return { error: "El mensaje debe tener al menos 10 caracteres" };
    }

    const emailResult = await resend.emails.send({
      from: "INMOVILIA <onboarding@resend.dev>",
      to: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    if (emailResult.error) {
      return {
        error: "Error al enviar el email. Por favor intenta de nuevo.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      error: "Error al enviar el mensaje. Por favor intenta de nuevo.",
    };
  }
}

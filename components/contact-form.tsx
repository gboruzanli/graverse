"use client";

import { FormEvent, useState } from "react";
import { contactEmail, type Locale } from "@/content/site";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const tr = locale === "tr";
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    if (!FORM_ENDPOINT) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const notice = {
    idle: "",
    sending: tr ? "Gönderiliyor…" : "Sending…",
    sent: tr
      ? "Mesajınız alındı. En kısa sürede dönüş yapacağız."
      : "Your message has been sent. We will get back to you shortly.",
    error: FORM_ENDPOINT
      ? tr
        ? "Mesaj gönderilemedi. Lütfen e-posta ile tekrar deneyin."
        : "The message could not be sent. Please try again or email us directly."
      : tr
        ? "Form henüz bağlanmadı; şimdilik e-posta ile ulaşın."
        : "This form is not wired up yet; please reach out by email for now.",
  }[status];

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
      <div className="form-row">
        <label><span>{tr ? "Ad soyad" : "Name"}</span><input name="name" autoComplete="name" minLength={2} maxLength={100} required /></label>
        <label><span>{tr ? "E-posta" : "Email"}</span><input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
      </div>
      <label><span>{tr ? "Konu" : "Subject"}</span><input name="subject" autoComplete="off" minLength={2} maxLength={150} required /></label>
      <label><span>{tr ? "Mesaj" : "Message"}</span><textarea name="message" minLength={20} maxLength={2000} rows={5} required /></label>
      <div className="form-actions">
        <button className="button light" type="submit" disabled={status === "sending"}>
          {tr ? "Gönder" : "Send"} <span aria-hidden="true">↗</span>
        </button>
        <a className="text-link" href={`mailto:${contactEmail}`}>{tr ? "Doğrudan e-posta gönder" : "Email directly"}</a>
      </div>
      <p className="form-notice" aria-live="polite">{notice}</p>
      <p className="form-disclosure">
        {tr
          ? "Gönder'e bastığınızda mesajınız laboratuvara iletilir."
          : "By sending this, your message is forwarded to the lab."}
      </p>
    </form>
  );
}

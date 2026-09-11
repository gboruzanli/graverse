"use client";

import { FormEvent, useState } from "react";

export function ContactForm({ locale = "en" }: { locale?: "en" | "tr" }) {
  const tr = locale === "tr";
  const [notice, setNotice] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setNotice(tr ? "Prototip doğrulandı. E-posta sağlayıcısı ve gizlilik metni onaylandıktan sonra gönderim açılacaktır." : "Prototype validated. Submission will be enabled after the mail provider and privacy notice are approved.");
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-row">
        <label><span>{tr ? "Ad soyad" : "Name"}</span><input name="name" autoComplete="name" minLength={2} maxLength={100} required /></label>
        <label><span>{tr ? "E-posta" : "Email"}</span><input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
      </div>
      <label><span>{tr ? "İlgilendiğim konu" : "I am interested in"}</span><select name="intent" required defaultValue=""><option value="" disabled>{tr ? "Konu seçin" : "Select a subject"}</option><option>{tr ? "Araştırma iş birliği" : "Research collaboration"}</option><option>{tr ? "Fonlanan proje konsorsiyumu" : "Funded project consortium"}</option><option>{tr ? "Lisansüstü başvurusu" : "Graduate application"}</option><option>{tr ? "Sanayi ortaklığı" : "Industry partnership"}</option><option>{tr ? "Basın talebi" : "Media request"}</option><option>{tr ? "Diğer" : "Other"}</option></select></label>
      <label><span>{tr ? "Mesaj" : "Message"}</span><textarea name="message" minLength={20} maxLength={2000} rows={5} required /></label>
      <label className="consent"><input type="checkbox" name="consent" required /><span>{tr ? "Bunun henüz bir prototip olduğunu ve mesajın iletilmeyeceğini anlıyorum." : "I understand this is currently a prototype and no message will be transmitted."}</span></label>
      <button className="button light" type="submit">{tr ? "Mesajı doğrula" : "Validate message"} <span aria-hidden="true">↗</span></button>
      <p className="form-notice" aria-live="polite">{notice}</p>
    </form>
  );
}

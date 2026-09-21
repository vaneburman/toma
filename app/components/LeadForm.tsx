"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Download, LoaderCircle } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const params = new URLSearchParams(window.location.search);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      consent: form.get("consent") === "on",
      website: String(form.get("website") ?? ""),
      source: "jev-guide",
      utmSource: params.get("utm_source"),
      utmMedium: params.get("utm_medium"),
      utmCampaign: params.get("utm_campaign"),
      utmContent: params.get("utm_content"),
      utmTerm: params.get("utm_term"),
      referrer: document.referrer || null,
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { downloadUrl?: string; error?: string };
      if (!response.ok || !data.downloadUrl) throw new Error(data.error ?? "No pudimos procesar tus datos.");

      setDownloadUrl(data.downloadUrl);
      setStatus("success");
      setMessage("Listo. La descarga comenzó.");
      window.setTimeout(() => window.location.assign(data.downloadUrl!), 450);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Algo salió mal. Probá nuevamente.");
    }
  }

  if (status === "success") {
    return (
      <div className="lead-form success-panel" aria-live="polite">
        <CheckCircle2 size={42} />
        <p className="form-kicker">Ya es tuya</p>
        <h3>Gracias por sumarte.</h3>
        <p>{message} Si no se abrió automáticamente, podés bajarla desde acá.</p>
        <a className="button" href={downloadUrl} download>
          Descargar PDF <Download size={18} />
        </a>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <p className="form-kicker">Acceso inmediato</p>
      <h3>¿Dónde te la envío?</h3>
      <label htmlFor="name">Nombre</label>
      <input id="name" name="name" type="text" autoComplete="name" minLength={2} maxLength={80} placeholder="Tu nombre" required />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" autoComplete="email" maxLength={160} placeholder="vos@empresa.com" required />
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Sitio web</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="consent" htmlFor="consent">
        <input id="consent" name="consent" type="checkbox" required />
        <span>Acepto recibir la guía y novedades de HACIBLE. Puedo darme de baja cuando quiera.</span>
      </label>
      <button className="button form-submit" type="submit" disabled={status === "loading"}>
        {status === "loading" ? <><LoaderCircle className="spinner" size={18} /> Preparando descarga</> : <>Descargar la guía <ArrowRight size={18} /></>}
      </button>
      {status === "error" && <p className="form-error" role="alert">{message}</p>}
      <p className="privacy-note">Tus datos se usan solo para enviarte este recurso y contenidos relacionados. Sin spam.</p>
    </form>
  );
}

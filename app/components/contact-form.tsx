"use client";

import React from "react";
import Script from "next/script";
import type { Locale } from "../lib/i18n";

/**
 * Formulaire de contact.
 *
 * Le widget Turnstile est charge depuis le script officiel Cloudflare. La
 * verification du jeton est faite par la route /api/contact, cote serveur :
 * la cle secrete ne transite jamais par le navigateur.
 */

interface ContactFormProps {
  labels: Record<string, string>;
  locale: Locale;
}

type Status = "idle" | "sending" | "success" | "error";

type ErrorCode =
  | "not_configured"
  | "rate_limited"
  | "invalid_json"
  | "missing_fields"
  | "invalid_email"
  | "message_too_short"
  | "captcha_failed"
  | "webhook_failed";

/** Traduit un code d'erreur renvoye par la route en message lisible. */
function messageFor(code: ErrorCode, labels: Record<string, string>): string {
  switch (code) {
    case "not_configured":
      return labels.errorWebhookMissing;
    case "rate_limited":
      return labels.errorRateLimit;
    case "invalid_email":
      return labels.emailInvalid;
    case "message_too_short":
      return labels.messageTooShort;
    case "captcha_failed":
      return labels.errorCaptcha;
    case "missing_fields":
      return labels.fieldRequired;
    default:
      return labels.errorGeneric;
  }
}

const inputClass =
  "w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm " +
  "text-neutral-900 placeholder:text-neutral-400 outline-none " +
  "transition-colors focus:border-neutral-500 " +
  "dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 " +
  "dark:placeholder:text-neutral-500 dark:focus:border-neutral-500";

export default function ContactForm({ labels, locale }: ContactFormProps) {
  const [status, setStatus] = React.useState<Status>("idle");
  const [error, setError] = React.useState<string>("");
  const [captchaToken, setCaptchaToken] = React.useState("");
  const formRef = React.useRef<HTMLFormElement>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  // Sans clé, aucun widget ne peut s'afficher : le formulaire est inutilisable.
  const captchaAvailable = Boolean(siteKey);

  // Turnstile n'expose pas d'evenement de reinitialisation : le composant
  // emet un evenement interne que cet effet_ecoute pour relancer le widget
  // apres un echec de verification.
  React.useEffect(() => {
    if (!captchaAvailable) return;

    function resetWidget() {
      const container = document.getElementById("turnstile-widget");
      const turnstile = (
        window as unknown as {
          turnstile?: {
            reset: (element?: HTMLElement | string) => void;
          };
        }
      ).turnstile;

      if (container && turnstile) {
        delete container.dataset.rendered;
        turnstile.reset(container);
      }
    }

    window.addEventListener("turnstile-reset", resetWidget);
    return () => window.removeEventListener("turnstile-reset", resetWidget);
  }, [captchaAvailable]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const formData = new FormData(event.currentTarget);
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
          captchaToken,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setCaptchaToken("");
        formRef.current?.reset();
        return;
      }

      const data = (await response.json().catch(() => ({}))) as {
        error?: ErrorCode;
      };
      setStatus("error");
      setError(messageFor(data.error ?? "webhook_failed", labels));

      // Le jeton est a usage unique : on le renouvelle pour permettre
      // un nouvel essai apres un echec.
      if (data.error === "captcha_failed") {
        setCaptchaToken("");
        window.dispatchEvent(new Event("turnstile-reset"));
      }
    } catch {
      setStatus("error");
      setError(labels.errorGeneric);
    }
  }

  return (
    <>
      {/* Le script Turnstile doit etre charge avant l'affichage du widget. */}
      {captchaAvailable && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          onLoad={() => {
            // Le rendu explicite evite que le widget ne s'insere tout seul
            // avant que React ne soit pret a recuperer le jeton.
            const turnstile = (
              window as unknown as {
                turnstile?: {
                  render: (
                    element: HTMLElement | string,
                    options: Record<string, unknown>
                  ) => void;
                  reset: (element?: HTMLElement | string) => void;
                };
              }
            ).turnstile;

            const container = document.getElementById("turnstile-widget");
            if (!turnstile || !container || container.dataset.rendered) return;

            turnstile.render(container, {
              sitekey: siteKey,
              callback: (token: string) => setCaptchaToken(token),
              "expired-callback": () => setCaptchaToken(""),
              "error-callback": () => setCaptchaToken(""),
              theme: "auto",
              language: locale,
            });
            container.dataset.rendered = "true";
          }}
        />
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        noValidate
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-name" className="text-sm font-medium">
            {labels.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            maxLength={80}
            autoComplete="name"
            placeholder={labels.namePlaceholder}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="contact-email" className="text-sm font-medium">
            {labels.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder={labels.emailPlaceholder}
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="contact-message" className="text-sm font-medium">
            {labels.message}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={6}
            placeholder={labels.messagePlaceholder}
            className={inputClass}
          />
        </div>

        {/* Piège à robots : masqué visuellement et pour les lecteurs d'écran. */}
        <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
          <label htmlFor="contact-website">{labels.honeypotLabel}</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>

        {captchaAvailable && (
          <div id="turnstile-widget" aria-label={labels.captchaLabel} />
        )}

        <button
          type="submit"
          disabled={status === "sending" || !captchaAvailable}
          className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-100 dark:text-neutral-900"
        >
          {status === "sending" ? labels.sending : labels.submit}
        </button>

        {!captchaAvailable && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {labels.errorWebhookMissing}
          </p>
        )}

        {status === "success" && (
          <p
            role="status"
            className="text-sm text-neutral-700 dark:text-neutral-300"
          >
            {labels.success}
          </p>
        )}

        {status === "error" && error && (
          <p
            role="alert"
            className="text-sm text-red-600 dark:text-red-400"
          >
            {error}
          </p>
        )}
      </form>
    </>
  );
}
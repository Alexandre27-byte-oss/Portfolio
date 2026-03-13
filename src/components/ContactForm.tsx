import { useMemo, useState } from "react";
import styles from "../styles/ContactForm.module.css";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export default function ContactForm({ toEmail }: { toEmail: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Contact portfolio — ${name || "Nouveau message"}`);
    const body = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );
    return `mailto:${toEmail}?subject=${subject}&body=${body}`;
  }, [toEmail, name, email, message]);

  function validate(): boolean {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Indique un nom (min. 2 caractères).";
    if (!isEmail(email)) next.email = "Email invalide.";
    if (message.trim().length < 10) next.message = "Message trop court (min. 10 caractères).";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = validate();
    setStatus(ok ? "ready" : "idle");
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.row}>
        <label htmlFor="name">Nom</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? <p id="name-error" className={styles.error}>{errors.name}</p> : null}
      </div>

      <div className={styles.row}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email ? <p id="email-error" className={styles.error}>{errors.email}</p> : null}
      </div>

      <div className={styles.row}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? <p id="message-error" className={styles.error}>{errors.message}</p> : null}
      </div>

      <div className={styles.actions}>
        <button className="btn" type="submit">
          Vérifier
        </button>

        <a
          className={`btn btnGhost ${status !== "ready" ? styles.disabledLink : ""}`}
          href={status === "ready" ? mailtoHref : undefined}
          aria-disabled={status !== "ready"}
          tabIndex={status === "ready" ? 0 : -1}
          onClick={(e) => {
            if (status !== "ready") e.preventDefault();
          }}
        >
          Envoyer par email
        </a>
      </div>

      <p className={styles.note} role="status" aria-live="polite">
        {status === "ready"
          ? "OK. Clique sur “Envoyer par email” pour ouvrir ton client mail."
          : "Pas de backend : tu peux connecter un service plus tard (Formspree, Netlify Forms, etc.)."}
      </p>
    </form>
  );
}

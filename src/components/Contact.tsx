import { useState } from 'react';
import { site } from '../data/site';
import './Contact.css';

// ============================================================
// TYPES
// ============================================================

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  message: string;
}

// ============================================================
// GOOGLE FORM CONFIG
// Reads from .env.local (VITE_ prefix required for Vite)
// ============================================================

const FORM_ACTION = import.meta.env.VITE_GOOGLE_FORM_ACTION as string;
const FIELD_NAME = import.meta.env.VITE_GOOGLE_NAME_FIELD as string;
const FIELD_EMAIL = import.meta.env.VITE_GOOGLE_EMAIL_FIELD as string;
const FIELD_MESSAGE = import.meta.env.VITE_GOOGLE_MESSAGE_FIELD as string;

// ============================================================
// CONTACT SECTION
// ============================================================

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">

        <div className="section-head" data-reveal>
          <span className="section-num">05</span>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let&rsquo;s build something worth talking about</h2>
        </div>

        <p className="section-subtitle contact__intro">
          Whether you have a queueing or payments problem, a backend to architect, or a
          product to build &mdash; I&rsquo;d like to hear about it. I reply within 24 hours.
        </p>

        <div className="contact__layout">

          {/* ---- Direct channels ---- */}
          <div className="contact__direct" data-reveal>
            <p className="meta contact__col-label">Direct</p>

            <ul className="contact__channels">
              <li>
                <a href={`mailto:${site.email}`} className="contact__channel">
                  <span className="contact__channel-label">Email</span>
                  <span className="contact__channel-value">{site.email}</span>
                  <span className="contact__channel-mark" aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="contact__channel">
                  <span className="contact__channel-label">LinkedIn</span>
                  <span className="contact__channel-value">Connect professionally</span>
                  <span className="contact__channel-mark" aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="contact__channel">
                  <span className="contact__channel-label">GitHub</span>
                  <span className="contact__channel-value">See my code</span>
                  <span className="contact__channel-mark" aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a href={site.cvUrl} download className="contact__channel contact__channel--accent">
                  <span className="contact__channel-label">Curriculum vitae</span>
                  <span className="contact__channel-value">Download PDF</span>
                  <span className="contact__channel-mark" aria-hidden="true">↓</span>
                </a>
              </li>
            </ul>

            {site.availableForWork && (
              <p className="status status--live contact__availability">
                {site.availabilityNote}
              </p>
            )}
          </div>

          {/* ---- Form ---- */}
          <div className="contact__form-col" data-reveal style={{ '--r': 2 } as React.CSSProperties}>
            <p className="meta contact__col-label">Send a message</p>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}

// ============================================================
// CUSTOM CONTACT FORM
// Submits to Google Forms via fetch + no-cors
// ============================================================

function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const validate = (data: FormState): Partial<FormState> => {
    const errs: Partial<FormState> = {};
    if (!data.name.trim()) errs.name = 'Name is required';
    if (!data.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Enter a valid email';
    if (!data.message.trim()) errs.message = 'Message is required';
    else if (data.message.trim().length < 10) errs.message = 'Message is too short';
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name as keyof FormState]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errs).length > 0) return;

    setStatus('submitting');

    try {
      const body = new FormData();
      body.append(FIELD_NAME, form.name);
      body.append(FIELD_EMAIL, form.email);
      body.append(FIELD_MESSAGE, form.message);

      // Google Forms requires no-cors; we can't read the response
      await fetch(FORM_ACTION, {
        method: 'POST',
        body,
        mode: 'no-cors',
      });

      // With no-cors, any response (even errors) appears as an opaque success
      // We treat reaching this point as a successful submission
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTouched({});
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="contact__success">
        <p className="section-num">Received</p>
        <h3 className="contact__success-title">Message sent</h3>
        <p className="contact__success-body">
          Thanks for reaching out. I&rsquo;ll get back to you within 24 hours.
        </p>
        <button className="btn-outline" onClick={() => setStatus('idle')}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="name" className="form-label">
          Name <span className="form-required">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className={`form-input ${touched.name && errors.name ? 'form-input--error' : ''}`}
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={status === 'submitting'}
          autoComplete="name"
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {touched.name && errors.name && (
          <span id="name-error" className="form-error" role="alert">{errors.name}</span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="email" className="form-label">
          Email <span className="form-required">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={`form-input ${touched.email && errors.email ? 'form-input--error' : ''}`}
          placeholder="your@email.com"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={status === 'submitting'}
          autoComplete="email"
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {touched.email && errors.email && (
          <span id="email-error" className="form-error" role="alert">{errors.email}</span>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="message" className="form-label">
          Message <span className="form-required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          className={`form-input form-textarea ${touched.message && errors.message ? 'form-input--error' : ''}`}
          placeholder="What would you like to talk about?"
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={status === 'submitting'}
          rows={6}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {touched.message && errors.message && (
          <span id="message-error" className="form-error" role="alert">{errors.message}</span>
        )}
      </div>

      {status === 'error' && (
        <div className="form-submission-error" role="alert">
          Something went wrong. Try emailing directly at{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      )}

      <button type="submit" className="btn-primary form-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}

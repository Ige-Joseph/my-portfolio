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
        <div className="contact__header">
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Let's build something<br />
            <span className="gradient-text">worth talking about</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a distributed systems problem, a backend to architect,
            or a product to build — I'd like to hear about it.
          </p>
        </div>

        <div className="contact__layout">
          {/* Left: links */}
          <div className="contact__info">
            <div className="contact__info-card glass-card">
              <h3 className="contact__info-title">Get in touch</h3>
              <p className="contact__info-text">
                Open to full-time roles, contract projects, and interesting technical conversations.
                I reply within 24 hours.
              </p>

              <div className="contact__links">
                <a href={`mailto:${site.email}`} className="contact__link-item">
                  <div className="contact__link-icon"><EmailIcon /></div>
                  <div className="contact__link-body">
                    <span className="contact__link-label">Email</span>
                    <span className="contact__link-value">{site.email}</span>
                  </div>
                  <ArrowIcon />
                </a>

                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link-item">
                  <div className="contact__link-icon"><LinkedInIcon /></div>
                  <div className="contact__link-body">
                    <span className="contact__link-label">LinkedIn</span>
                    <span className="contact__link-value">Connect professionally</span>
                  </div>
                  <ArrowIcon />
                </a>

                <a href={site.github} target="_blank" rel="noopener noreferrer" className="contact__link-item">
                  <div className="contact__link-icon"><GitHubIcon /></div>
                  <div className="contact__link-body">
                    <span className="contact__link-label">GitHub</span>
                    <span className="contact__link-value">See my code</span>
                  </div>
                  <ArrowIcon />
                </a>

                <a href={site.cvUrl} download className="contact__link-item contact__link-item--accent">
                  <div className="contact__link-icon"><CVIcon /></div>
                  <div className="contact__link-body">
                    <span className="contact__link-label">Curriculum Vitae</span>
                    <span className="contact__link-value">Download PDF</span>
                  </div>
                  <ArrowIcon />
                </a>
              </div>

              <div className="contact__availability">
                <span className="contact__availability-dot" />
                <span>{site.availabilityNote}</span>
              </div>
            </div>
          </div>

          {/* Right: Custom Google Form */}
          <div className="contact__form-wrap">
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
    
    // ADD THIS TEMPORARILY
    // console.log({
    //   action: FORM_ACTION,
    //   name: FIELD_NAME,
    //   email: FIELD_EMAIL,
    //   message: FIELD_MESSAGE,
    // });

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
      <div className="contact__form-card glass-card">
        <div className="contact__success">
          <div className="contact__success-icon">✓</div>
          <h3>Message sent</h3>
          <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
          <button
            className="btn-outline"
            onClick={() => setStatus('idle')}
            style={{ marginTop: 8 }}
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact__form-card glass-card">
      <div className="contact__form-header">
        <h3>Send a message</h3>
        <p>Fill in the form and I'll reply within 24h.</p>
      </div>

      <form className="contact__form" onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="name" className="form-label">
            Name <span className="form-required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={`form-input ${touched.name && errors.name ? 'form-input--error' : ''} ${touched.name && !errors.name && form.name ? 'form-input--valid' : ''}`}
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
            className={`form-input ${touched.email && errors.email ? 'form-input--error' : ''} ${touched.email && !errors.email && form.email ? 'form-input--valid' : ''}`}
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
            className={`form-input form-textarea ${touched.message && errors.message ? 'form-input--error' : ''} ${touched.message && !errors.message && form.message ? 'form-input--valid' : ''}`}
            placeholder="What would you like to talk about?"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={status === 'submitting'}
            rows={5}
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

        <button
          type="submit"
          className="btn-primary form-submit"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              <span className="form-spinner" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

// ============================================================
// ICONS
// ============================================================

function EmailIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>;
}
function LinkedInIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}
function GitHubIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>;
}
function CVIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>;
}
function ArrowIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{flexShrink:0}}><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
}

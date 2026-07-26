'use client';

import { useState } from 'react';

const inputStyle: React.CSSProperties = {
  padding: '0.75rem',
  width: '100%',
  marginBottom: '1.25rem',
  fontSize: '1rem',
  fontFamily: 'inherit',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '0.4rem',
  fontWeight: 600,
  fontSize: '0.9rem',
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="surface" style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '0.75rem', fontSize: '1.2rem', fontWeight: 600 }}>Message received.</h3>
        <p className="text-muted">
          Thanks for reaching out. Expect a real reply within one business day, from the person who&apos;ll
          actually do the work.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label style={labelStyle} htmlFor="name">
        Name
      </label>
      <input id="name" name="name" type="text" required className="input-field" style={inputStyle} />

      <label style={labelStyle} htmlFor="email">
        Email
      </label>
      <input id="email" name="email" type="email" required className="input-field" style={inputStyle} />

      <label style={labelStyle} htmlFor="company">
        Company <span className="text-muted">(optional)</span>
      </label>
      <input id="company" name="company" type="text" className="input-field" style={inputStyle} />

      <label style={labelStyle} htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={5}
        className="input-field"
        style={{ ...inputStyle, resize: 'vertical' }}
      />

      <button className="btn-accent" type="submit">
        Send message
      </button>
    </form>
  );
}

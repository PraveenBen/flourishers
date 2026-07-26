import ContactForm from '@/components/contact-form';
import Card from '@/components/ui/card';

export const metadata = {
  title: 'Contact — Flourishers',
  description: 'Tell us about your business and where you want to be seen — we read every message ourselves.',
};

export default function ContactPage() {
  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <section style={{ marginBottom: '3rem' }}>
        <h1
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem' }}
        >
          Contact
        </h1>
        <p className="text-muted" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
          Tell me about your business, what&apos;s not working, and where you want to be seen — in Google, in
          ChatGPT, in someone&apos;s Instagram feed. I read every message myself.
        </p>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}
      >
        <ContactForm />

        <Card title="Reach me directly">
          <p style={{ marginBottom: '1rem' }}>
            <a href="mailto:hello@flourishers.studio" style={{ color: 'var(--accent)', fontWeight: 600 }}>
              hello@flourishers.studio
            </a>
          </p>
          <p>Expect a real reply within one business day, from the person who&apos;ll actually do the work.</p>
        </Card>
      </section>
    </main>
  );
}

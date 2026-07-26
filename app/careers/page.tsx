import Card from '@/components/ui/card';

export const metadata = {
  title: 'Careers — Flourishers',
  description:
    'Flourishers is small on purpose right now, but growing. See why marketers, writers, and creators work with us, and how to get in touch.',
};

const whyJoin = [
  'Work directly with clients — no layers of account management between you and the actual decisions',
  'Own real deliverables across search, AI visibility, and social, not one narrow lane',
  'Build systems and process from close to the ground floor of a growing studio',
  'Get judged on outcomes you can point to, not hours logged',
];

export default function Careers() {
  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            lineHeight: 1.1,
          }}
        >
          Careers
        </h1>
        <p className="text-muted" style={{ maxWidth: '620px', margin: '0 auto' }}>
          Flourishers is small on purpose right now, but growing. If you&apos;re a marketer, writer,
          or creator who thinks agencies have gotten lazy and impersonal, this is worth a
          conversation even without an open listing.
        </p>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>
          Why Flourishers
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {whyJoin.map((point) => (
            <Card key={point}>{point}</Card>
          ))}
        </div>
      </section>

      <section style={{ textAlign: 'center' }}>
        <p className="text-muted" style={{ maxWidth: '560px', margin: '0 auto 1.5rem' }}>
          There&apos;s no open role posted right now, but if you do exceptional, hands-on marketing
          or creative work and want to be first in line when Flourishers hires, send a note and a
          few examples of your work.
        </p>
        <a href="mailto:hello@flourishers.studio" className="btn-accent">
          Email hello@flourishers.studio
        </a>
      </section>
    </main>
  );
}

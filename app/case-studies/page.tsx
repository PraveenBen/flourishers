import Link from 'next/link';

export const metadata = {
  title: 'Case Studies — Flourishers',
  description:
    'Illustrative example engagements showing how Flourishers approaches search, AI visibility, and social growth for real business types.',
};

type Result = {
  metric: string;
  value: string;
};

type CaseStudy = {
  clientLabel: string;
  industry: string;
  challenge: string;
  approach: string;
  results: Result[];
};

const caseStudies: CaseStudy[] = [
  {
    clientLabel: 'Boutique Skincare Brand',
    industry: 'E-commerce / Beauty',
    challenge:
      'Strong product line and an active-looking Instagram, but almost no organic search traffic and zero presence in AI-generated shopping answers — customers asking ChatGPT for skincare recommendations never encountered the brand.',
    approach:
      'Rebuilt product page structure and schema for GEO citability, rewrote core content around the specific ingredient questions customers were asking (AEO), and aligned Instagram captions to the same ingredient-education voice used on the site.',
    results: [
      { metric: 'Organic search traffic', value: '+164% in 5 months' },
      { metric: 'AI-engine citations (ChatGPT/Perplexity)', value: '0 to 12 tracked citations' },
      { metric: 'Instagram engagement rate', value: '2.1% to 5.8%' },
    ],
  },
  {
    clientLabel: 'Regional HVAC Service Company',
    industry: 'Home Services',
    challenge:
      "Ranked on page three for core service terms and relied entirely on word-of-mouth; no consistent social presence and a website with none of the direct-answer content that local searches reward.",
    approach:
      "Technical SEO overhaul plus AEO-structured FAQ content targeting the exact questions homeowners search ('why is my AC leaking water'), paired with a new social backend posting before/after job photos and answering service questions in comments.",
    results: [
      { metric: 'Page-one rankings for target keywords', value: '3 to 22 terms' },
      { metric: 'Featured snippet wins', value: '9 snippets captured' },
      { metric: 'Monthly inbound leads from web/social', value: '+71%' },
    ],
  },
  {
    clientLabel: 'Independent Fitness Studio',
    industry: 'Health & Wellness',
    challenge:
      'Inconsistent brand voice — polished website, but Instagram and Facebook felt like a different, less premium business, and posting was sporadic with no real content calendar.',
    approach:
      'Built a documented brand voice and visual identity system, rewrote site and social copy to match, and took over daily posting and community management through a dedicated content calendar and scheduling backend.',
    results: [
      { metric: 'Posting consistency', value: 'Sporadic to 6x/week' },
      { metric: 'Instagram follower growth', value: '+38% in 4 months' },
      { metric: 'New member inquiries via social', value: '+52%' },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <section style={{ marginBottom: '3.5rem' }}>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '0.75rem',
            lineHeight: 1.1,
          }}
        >
          Case Studies
        </h1>
        <p className="text-muted" style={{ fontStyle: 'italic', fontSize: '0.95rem', maxWidth: '640px' }}>
          Illustrative examples of the kind of engagements we run — not verified client testimonials.
        </p>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {caseStudies.map((study, index) => {
          const reversed = index % 2 === 1;
          return (
            <article
              key={study.clientLabel}
              className="surface"
              style={{
                padding: 'clamp(1.75rem, 4vw, 2.75rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <header
                style={{
                  display: 'flex',
                  flexDirection: reversed ? 'row-reverse' : 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  textAlign: reversed ? 'right' : 'left',
                }}
              >
                <h2 style={{ fontSize: '1.6rem', fontWeight: 700 }}>{study.clientLabel}</h2>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    border: 'var(--border-width) solid var(--border-color)',
                    borderRadius: 'var(--radius)',
                    padding: '0.3rem 0.75rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {study.industry}
                </span>
              </header>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Challenge
                  </h3>
                  <p className="text-muted" style={{ lineHeight: 1.6 }}>
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Approach
                  </h3>
                  <p className="text-muted" style={{ lineHeight: 1.6 }}>
                    {study.approach}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginTop: '0.5rem',
                  paddingTop: '1.5rem',
                  borderTop: 'var(--border-width) solid var(--border-color)',
                }}
              >
                {study.results.map((result) => (
                  <div
                    key={result.metric}
                    style={{
                      flex: '1 1 200px',
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius)',
                      background: 'var(--surface-hover)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        color: 'var(--accent)',
                        marginBottom: '0.25rem',
                        lineHeight: 1.15,
                      }}
                    >
                      {result.value}
                    </div>
                    <div className="text-muted" style={{ fontSize: '0.85rem' }}>
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <section style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          Want results like these for your business?
        </h2>
        <p className="text-muted" style={{ maxWidth: '480px', margin: '0 auto 1.5rem' }}>
          Tell us where things stand today and we&apos;ll map out what a real engagement would look like.
        </p>
        <Link href="/contact">
          <button className="btn-accent">Start the conversation</button>
        </Link>
      </section>
    </main>
  );
}

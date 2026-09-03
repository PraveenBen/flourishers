import Link from 'next/link';
import Card from '@/components/ui/card';

export const metadata = {
  title: 'About — Flourishers',
  description:
    'One operator, hands-on, running your website, search visibility, and social presence as a single connected system.',
};

const story = [
  "Flourishers started with a simple frustration: agencies sell 'social media management' but hand your account to a junior who posts a stock caption and disappears. There's no backend system, no consistent voice, no one who actually understands why a post underperforms. Flourishers is built to close that gap — one operator, hands-on, running the posting infrastructure, writing the words, and watching the numbers.",
  'Every account is run personally, not routed through an account manager to a rotating pool of freelancers. That means the person who wrote your homepage copy is the same person scheduling your Instagram grid, replying to your comments, and adjusting your content calendar when a post underperforms on a Tuesday. One voice, one hand on the wheel, across every surface a customer touches.',
  "The work spans the technical and the creative on purpose. A site can rank on Google, get cited by ChatGPT, and still lose the customer if the brand voice on Instagram doesn't match the one on the homepage. Flourishers treats visibility (SEO, GEO, AEO) and identity (brand, social) as one connected system instead of separate line items billed by separate vendors.",
];

const mission =
  'To give ambitious brands a single, hands-on operator who builds their visibility across search engines, AI answer engines, and social feeds — and makes sure every one of those surfaces says the same true thing about who they are.';

const differentiators = [
  {
    title: 'One voice across every surface',
    description:
      'Your website copy, your Instagram captions, and your Facebook bio are written by the same hand, so a customer gets the same message whether they find you on Google or in their feed.',
  },
  {
    title: 'Engagement over vanity reach',
    description:
      "Follower counts don't pay rent. Every post, caption, and content calendar is built to move people to comment, DM, click, or buy — reach is a byproduct, not the goal.",
  },
  {
    title: 'Fluent in where search is actually going',
    description:
      'Most agencies still sell SEO as if Google is the only answer engine that matters. Flourishers builds for AI Overviews, ChatGPT, and Perplexity citations as a first-class channel, not an afterthought.',
  },
  {
    title: 'Fast, direct, no account-manager layer',
    description:
      'Questions get answered by the person doing the work, usually same day — not routed through a client success rep who has to go check with the team.',
  },
];

const process = [
  {
    step: '01',
    title: 'Audit & listen',
    description:
      'A full pass on your current site, rankings, AI-engine visibility, and social presence, plus a real conversation about what your business actually needs to grow — not a templated checklist.',
  },
  {
    step: '02',
    title: 'Build the message',
    description:
      'Before any posting or optimizing starts, the brand voice and core messaging get defined so every later deliverable — page copy, captions, meta descriptions — pulls from the same source.',
  },
  {
    step: '03',
    title: 'Deploy across channels',
    description:
      'SEO and technical fixes go live on the site, GEO/AEO structuring gets built into the content, and the social backend system starts running the calendar, creative, and scheduling.',
  },
  {
    step: '04',
    title: 'Engage & adjust',
    description:
      'Comments get answered, DMs get worked, and the data from search consoles, AI citation tracking, and social insights gets reviewed weekly to adjust the plan — not just reported on quarterly.',
  },
  {
    step: '05',
    title: 'Report in plain language',
    description:
      'Straight numbers, straight explanations of what moved and why, delivered by the person who did the work — no jargon-padded deck built to justify a retainer.',
  },
];

export default function About() {
  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            lineHeight: 1.1,
          }}
        >
          About Flourishers
        </h1>
        <p
          className="text-muted"
          style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.15rem', lineHeight: 1.6 }}
        >
          {mission}
        </p>
      </section>

      <section style={{ maxWidth: '680px', margin: '0 auto 5rem' }}>
        {story.map((paragraph, i) => (
          <p
            key={i}
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              marginBottom: i < story.length - 1 ? '1.5rem' : 0,
            }}
          >
            {paragraph}
          </p>
        ))}
      </section>

      <section style={{ marginBottom: '5rem' }}>
        <h2
          style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            marginBottom: '2rem',
            textAlign: 'center',
          }}
        >
          What makes this different
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {differentiators.map((d) => (
            <Card key={d.title} title={d.title}>
              {d.description}
            </Card>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '5rem' }}>
        <h2
          style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            marginBottom: '2.5rem',
            textAlign: 'center',
          }}
        >
          How we work
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {process.map((p) => (
            <div
              key={p.step}
              style={{
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
                paddingBottom: '2rem',
                borderBottom: '1px solid var(--border-color)',
              }}
            >
              <span
                className="brand-display"
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--accent)',
                  minWidth: '3rem',
                  lineHeight: 1,
                }}
              >
                {p.step}
              </span>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  {p.title}
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.6 }}>
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          Ready to run this as one system?
        </h2>
        <p className="text-muted" style={{ maxWidth: '480px', margin: '0 auto 1.5rem' }}>
          Tell me what&apos;s not working and where you want to be in six months. I&apos;ll tell you exactly how it gets there.
        </p>
        <Link href="/contact">
          <button className="btn-accent">Get in touch</button>
        </Link>
      </section>
    </main>
  );
}

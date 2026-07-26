import Link from 'next/link';
import Card from '@/components/ui/card';

export const metadata = {
  title: 'Services — Flourishers',
  description:
    'SEO, GEO, AEO, social media management, and brand identity — the concrete work behind getting found, cited, and trusted.',
};

type Service = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  whyItMatters: string;
};

const services: Service[] = [
  {
    id: 'seo',
    name: 'SEO',
    tagline: 'Rank where your customers are already searching.',
    description:
      "Search Engine Optimization is the work of getting your site to rank higher in Google and Bing results for the terms your customers actually type in. It covers technical fixes so search engines can crawl and understand your site, keyword-targeted content, and the backlinks that signal authority. Done right, it's the difference between being on page one and being invisible.",
    deliverables: [
      'Full technical SEO audit (site speed, crawlability, indexing errors)',
      'Keyword research mapped to real customer search intent',
      'On-page optimization across titles, headers, and content',
      'Backlink strategy and outreach',
      'Monthly ranking and traffic reporting',
    ],
    whyItMatters:
      "If your competitor ranks above you for the searches that matter, they get the click, the call, and the sale before your business ever enters the conversation.",
  },
  {
    id: 'geo',
    name: 'GEO',
    tagline: 'Get cited when AI gives the answer.',
    description:
      "Generative Engine Optimization is the practice of structuring your content so AI answer engines — ChatGPT, Perplexity, Google's AI Overviews — pull from and cite your business when someone asks a relevant question. It relies on clear entity signals, structured data, and content written to be quoted, not just clicked. This is the newest front of search visibility, and most businesses have no strategy for it yet.",
    deliverables: [
      'AI-citation audit across ChatGPT, Perplexity, and AI Overviews',
      'Structured data and schema markup implementation',
      'Entity-clear content rewrites built to be quoted accurately',
      'Ongoing citation tracking as AI engines update',
      'Competitive gap analysis for AI-answer visibility',
    ],
    whyItMatters:
      "A growing share of customers now ask an AI instead of Googling. If that AI never mentions you, you've lost the sale before you knew there was a search happening.",
  },
  {
    id: 'aeo',
    name: 'AEO',
    tagline: 'Win the featured snippet, the voice answer, the direct question.',
    description:
      "Answer Engine Optimization targets the exact spots where a search engine gives a direct answer instead of a list of links — featured snippets, People Also Ask boxes, and voice assistant responses. It means structuring content around specific questions with clear, concise answers positioned to be lifted verbatim. It's narrower than SEO and it's often the difference between ranking #1 and being the answer.",
    deliverables: [
      'Question-and-answer content mapping for your core topics',
      'Featured snippet and People Also Ask targeting',
      'FAQ schema implementation for voice and snippet capture',
      'Content formatting built for direct extraction',
      'Snippet-win tracking and iteration',
    ],
    whyItMatters:
      "Ranking first doesn't matter if a competitor's answer sits above your link in a snippet box. Winning the answer position captures the customer before they ever scroll.",
  },
  {
    id: 'social',
    name: 'Social Media Management',
    tagline: 'Your Instagram and Facebook, personally run — not outsourced to a junior.',
    description:
      "This is hands-on management of your Instagram and Facebook presence: content calendar, creative, captions, and a scheduling backend the founder personally built and operates. Every post goes up on schedule, every comment and DM gets a real response, and the whole system is run by one person who knows your brand — not passed between a rotating team of freelance posters.",
    deliverables: [
      'Custom content calendar built around your business cycle',
      'Post creative and captions written in your brand voice',
      'Backend scheduling system managed directly, no third-party outsourcing',
      'Daily community engagement — comments and DMs answered',
      'Monthly engagement and growth reporting',
    ],
    whyItMatters:
      "A dormant or generic social feed tells a new customer your business isn't paying attention — and they'll scroll to a competitor who is.",
  },
  {
    id: 'brand',
    name: 'Brand Identity & Messaging',
    tagline: 'One message, said the same way everywhere.',
    description:
      "This is the work of defining your visual identity and your core messaging, then making sure that identity shows up identically on your website and on every social handle. It means a documented voice, consistent visuals, and copy that ties back to one message instead of a website that sounds corporate and an Instagram that sounds like a different business entirely.",
    deliverables: [
      'Brand voice and messaging guide',
      'Visual identity system (or refresh of existing assets)',
      'Website copy aligned to the core message',
      'Social bio, highlight, and caption templates in the same voice',
      'Ongoing consistency checks as new content goes out',
    ],
    whyItMatters:
      "A customer who gets a different impression of your business on your site versus your Instagram trusts you less on both — a consistent message is what turns a passive follower into a customer.",
  },
];

export default function ServicesPage() {
  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1
          className="brand-display"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 4rem)', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.1 }}
        >
          Services
        </h1>
        <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Five ways we get your business found, cited, and remembered — each one a concrete
          deliverable, not a vague promise.
        </p>
      </section>

      {services.map((service, index) => {
        const isEven = index % 2 === 1;
        const stacked = index % 2 === 1;

        return (
          <section
            key={service.id}
            id={service.id}
            className={isEven ? 'surface' : undefined}
            style={{
              padding: isEven ? '2.5rem' : '0 0 2.5rem',
              marginBottom: '2.5rem',
              borderRadius: isEven ? undefined : 0,
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: stacked ? '1fr' : 'minmax(0, 1.1fr) minmax(0, 1fr)',
                gap: '2rem',
                alignItems: 'start',
              }}
            >
              <div>
                <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  {service.name}
                </h2>
                <p style={{ fontWeight: 600, marginBottom: '1rem' }}>{service.tagline}</p>
                <p className="text-muted" style={{ marginBottom: '1.25rem', lineHeight: 1.7 }}>
                  {service.description}
                </p>
                <div
                  className={isEven ? undefined : 'surface'}
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderLeft: '3px solid var(--accent)',
                  }}
                >
                  <p style={{ fontWeight: 600, marginBottom: '0.35rem' }}>Why it matters</p>
                  <p className="text-muted" style={{ lineHeight: 1.6 }}>
                    {service.whyItMatters}
                  </p>
                </div>
              </div>

              <div>
                <Card title="What you get">
                  <ul style={{ paddingLeft: '1.1rem', margin: 0, lineHeight: 1.8 }}>
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </section>
        );
      })}

      <section style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.25rem' }}>
          Not sure which of these your business actually needs? Let&apos;s talk it through.
        </p>
        <Link href="/contact">
          <button className="btn-accent">Get in touch</button>
        </Link>
      </section>
    </main>
  );
}

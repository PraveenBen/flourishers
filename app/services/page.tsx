import Link from 'next/link';
import Card from '@/components/ui/card';

export const metadata = {
  title: 'Services — Flourishers',
  description:
    'Full-funnel growth run by one operator: visibility (SEO, GEO, AEO), performance media, social, brand, and conversion — the entire stack, one expert.',
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
    id: 'visibility',
    name: 'Visibility & Intelligence',
    tagline: 'Win the three fronts of search — SEO, GEO & AEO.',
    description:
      "Search stopped being one battlefield. We build your presence across traditional Google ranking (SEO), Generative Engine Optimization for AI platforms (GEO), and Answer Engine Optimization to get you cited directly by ChatGPT and Perplexity (AEO). Miss any one of these fronts and you're invisible to a growing share of your future customers.",
    deliverables: [
      'Technical SEO audit and ongoing ranking work',
      'GEO structuring so AI platforms surface and cite your brand',
      'AEO targeting for direct citations in ChatGPT and Perplexity',
      'Entity-clear content built to be quoted accurately',
      'Cross-engine visibility tracking as search keeps shifting',
    ],
    whyItMatters:
      "A customer who asks an AI instead of Googling never sees a page of blue links — they see one answer. If you're not built into that answer, you've lost the sale before you knew there was a search happening.",
  },
  {
    id: 'acquisition',
    name: 'Acquisition & Performance Media',
    tagline: 'AI-driven media buying that captures demand, not vanity metrics.',
    description:
      "We manage dynamic bidding and performance creative across Google, YouTube, and Meta — built to capture demand that already exists, not chase impressions. Every campaign is judged on Return on Ad Spend and a falling cost of acquisition, full stop. No reach numbers dressed up as results.",
    deliverables: [
      'Cross-platform paid media management (Google, YouTube, Meta)',
      'Dynamic bidding strategy tuned to real conversion data',
      'Performance creative built to convert, not just impress',
      'Continuous ROAS and CAC optimization',
      'Plain-language reporting on what spend actually returned',
    ],
    whyItMatters:
      'Impressions and clicks don\'t pay rent. If your media spend isn\'t lowering acquisition cost month over month, it\'s just an expensive way to feel busy.',
  },
  {
    id: 'social',
    name: 'Hands-On Social Media & Content',
    tagline: 'Real content calendars, run personally — not outsourced to a junior.',
    description:
      "This is hands-on management of your social presence: content calendars, creative, and a backend scheduling system built and operated by one expert who knows your brand. High-engagement, short-form formats — Reels, Shorts — build genuine community and trust, without the cookie-cutter agency feel your customers can spot from a mile away.",
    deliverables: [
      'Custom content calendar built around your business cycle',
      'Short-form video built for discovery and retention',
      'Backend scheduling system managed directly, no outsourcing',
      'Daily community engagement — comments and DMs answered',
      'Monthly engagement and growth reporting',
    ],
    whyItMatters:
      "A dormant or generic feed tells a new customer your business isn't paying attention — and they'll scroll to a competitor who is.",
  },
  {
    id: 'brand',
    name: 'Brand Identity & Messaging',
    tagline: 'One consistent voice and look, everywhere a customer finds you.',
    description:
      "We build a cohesive trust layer: one consistent voice and visual identity across your website and every social handle, so customers recognize and trust the brand the instant they see it — no matter where they land first.",
    deliverables: [
      'Brand voice and messaging guide',
      'Visual identity system, or a refresh of existing assets',
      'Website copy aligned to one core message',
      'Social bio, highlight, and caption templates in the same voice',
      'Ongoing consistency checks as new content goes out',
    ],
    whyItMatters:
      'A customer who gets a different impression of your business on your site versus your Instagram trusts you less on both. Consistency is what turns a passive follower into a customer.',
  },
  {
    id: 'conversion',
    name: 'Conversion & Retention',
    tagline: 'Turn traffic into revenue — and keep it coming back.',
    description:
      "Traffic without conversion is wasted spend. We optimize landing pages for maximum conversion, implement automated email and SMS nurturing, and help you build a first-party data strategy that protects your business as third-party cookies disappear for good.",
    deliverables: [
      'Landing page CRO grounded in real user behavior',
      'Automated email and SMS nurture sequences',
      'First-party data capture and strategy',
      'Funnel analysis to find and fix drop-off points',
      'Retention reporting tied to actual revenue, not opens',
    ],
    whyItMatters:
      "Every visitor you don't convert is spend you already paid for, walking away. Retention is cheaper than acquisition every time — this is where the margin actually lives.",
  },
];

type CapabilityItem = {
  label: string;
  comingSoon?: boolean;
};

type CapabilityCategory = {
  title: string;
  items: CapabilityItem[];
};

const capabilities: CapabilityCategory[] = [
  {
    title: 'Strategy & Consulting',
    items: [
      { label: 'Digital transformation strategy' },
      { label: 'Brand strategy and positioning' },
      { label: 'Market research and competitive analysis' },
      { label: 'Digital audits (website, SEO, social, ads)' },
      { label: 'Customer journey mapping' },
    ],
  },
  {
    title: 'Design & Creative',
    items: [
      { label: 'UI/UX design (web and mobile apps)' },
      { label: 'Brand identity design (logos, style guides)' },
      { label: 'Graphic design and illustration' },
      { label: 'Motion graphics and video production' },
      { label: 'Product/packaging design', comingSoon: true },
    ],
  },
  {
    title: 'Web & App Development',
    items: [
      { label: 'Website design and development (custom or CMS-based like WordPress, Webflow, Shopify)' },
      { label: 'Web application development' },
      { label: 'E-commerce development' },
      { label: 'Mobile app development (iOS/Android)' },
      { label: 'API integrations and backend systems' },
      { label: 'Website maintenance and support' },
    ],
  },
  {
    title: 'Digital Marketing',
    items: [
      { label: 'Search Engine Optimization (SEO) — technical, on-page, off-page' },
      { label: 'Search Engine Marketing / PPC (Google Ads, Bing Ads)' },
      { label: 'Social media marketing and management' },
      { label: 'Paid social advertising (Meta, LinkedIn, Instagram, TikTok ads)' },
      { label: 'Content marketing and copywriting' },
      { label: 'Email marketing and automation' },
      { label: 'Influencer marketing', comingSoon: true },
      { label: 'Affiliate marketing' },
    ],
  },
  {
    title: 'Content & Media',
    items: [
      { label: 'Content strategy and creation (blogs, articles, whitepapers)' },
      { label: 'Video production and editing', comingSoon: true },
      { label: 'Photography' },
      { label: 'Podcast production' },
    ],
  },
  {
    title: 'Analytics & Data',
    items: [
      { label: 'Web analytics setup (GA4, etc.)' },
      { label: 'Conversion Rate Optimization (CRO)' },
      { label: 'A/B testing' },
      { label: 'Marketing attribution and reporting dashboards' },
      { label: 'CRM setup and integration' },
    ],
  },
  {
    title: 'Emerging & Specialized',
    items: [
      { label: 'AI integration (chatbots, automation, AI-driven personalization)' },
      { label: 'Marketing automation (HubSpot, Marketo)' },
      { label: 'ASO (App Store Optimization)' },
      { label: 'Online reputation management' },
      { label: 'Community management' },
      { label: 'AR/VR and interactive experiences' },
    ],
  },
  {
    title: 'Business & Ops Support',
    items: [
      { label: 'Marketing technology (MarTech) stack consulting' },
      { label: 'Growth hacking / performance marketing' },
      { label: 'Fractional CMO / marketing leadership services' },
    ],
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
          One operator. Every channel. One message.
        </h1>
        <p className="text-muted" style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Branding &amp; growth for businesses that mean it. Flourishers isn&apos;t a factory —
          you get the founder running your entire stack personally, not an account handed off
          to a junior three weeks in.
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

      <section style={{ marginBottom: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
            Every capability, under one roof
          </h2>
          <p className="text-muted" style={{ maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
            The five pillars above are how we drive growth day to day. Here&apos;s the full range
            of work we can bring in as your needs grow — no need to hire a second vendor.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {capabilities.map((category) => (
            <Card key={category.title} title={category.title}>
              <ul style={{ paddingLeft: '1.1rem', margin: 0, lineHeight: 1.75 }}>
                {category.items.map((item) => (
                  <li key={item.label}>
                    {item.label}
                    {item.comingSoon && (
                      <span
                        style={{
                          marginLeft: '0.5rem',
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          color: 'var(--accent)',
                          border: '1px solid var(--accent)',
                          borderRadius: '999px',
                          padding: '0.05rem 0.5rem',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Coming soon
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>
          Why not a traditional agency?
        </h2>
        <p className="text-muted" style={{ maxWidth: '680px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
          Silos between teams. Your account handed to a junior the moment the contract is
          signed. SEO strategies stuck in 2019 while your customers ask ChatGPT for
          recommendations instead. That&apos;s the old model — and it&apos;s why it doesn&apos;t work anymore.
        </p>
        <div
          className="surface"
          style={{ padding: '1.5rem 2rem', maxWidth: '680px', margin: '0 auto', borderLeft: '3px solid var(--accent)' }}
        >
          <p style={{ fontWeight: 600, lineHeight: 1.6 }}>
            Flourishers fixes this by design: one operator owns your entire stack — strategy,
            execution, and reporting — with zero hand-offs and zero silos.
          </p>
        </div>
      </section>

      <section style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.25rem' }}>
          Ready to stop dealing with agency hand-offs? Let&apos;s talk growth.
        </p>
        <Link href="/contact">
          <button className="btn-accent">Get in touch</button>
        </Link>
      </section>
    </main>
  );
}

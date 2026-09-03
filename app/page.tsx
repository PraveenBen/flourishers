import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/ui/card';

export default function Home() {
  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '2rem' }}>
        <h1
          className="brand-display"
          style={{
            marginBottom: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <Image src="/flourishers-mark.svg" alt="" width={96} height={96} style={{ height: '96px', width: '96px' }} priority />
          <span style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)', fontWeight: 700 }}>flourishers</span>
        </h1>
        <p style={{ fontSize: '1.35rem', fontWeight: 600, marginBottom: '1rem' }}>
          Voice your Digital Presence.
        </p>
        <p className="text-muted" style={{ maxWidth: '540px', margin: '0 auto 1.5rem' }}>
          SEO, GEO, and AEO to get you found, cited, and answered — plus the hands-on social
          media management and brand work that keeps people engaged once they find you.
        </p>
        <Link href="/contact">
          <button className="btn-accent">Get in touch</button>
        </Link>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2rem',
        }}
      >
        <Card title="SEO, GEO & AEO">
          Rank in Google, get cited by ChatGPT and Perplexity, and win the featured snippet — three
          fronts of search, one strategy.
        </Card>
        <Card title="Social Media Management">
          Your Instagram and Facebook, personally run on a real content calendar and backend system
          — not handed off to a junior.
        </Card>
        <Card title="Brand Identity & Messaging">
          One consistent voice across your website and every social handle, so people trust what
          they see and stay engaged.
        </Card>
      </section>

      <section style={{ textAlign: 'center' }}>
        <Link href="/services" className="text-muted">
          See all five services →
        </Link>
      </section>
    </main>
  );
}
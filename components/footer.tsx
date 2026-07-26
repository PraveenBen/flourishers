import Link from 'next/link';

const linkColumns = [
  {
    title: 'Services',
    links: [
      { label: 'SEO', href: '/services#seo' },
      { label: 'GEO', href: '/services#geo' },
      { label: 'AEO', href: '/services#aeo' },
      { label: 'Social Media Management', href: '/services#social' },
      { label: 'Brand Identity & Messaging', href: '/services#brand' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Follow',
    links: [
      { label: 'Instagram', href: 'https://instagram.com/' },
      { label: 'Facebook', href: 'https://facebook.com/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        background: 'var(--surface)',
        borderTop: 'var(--border-width) solid var(--border-color)',
        paddingTop: '3rem',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
          }}
        >
          <div>
            <p className="brand-display" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              flourishers
            </p>
            <p className="text-muted">One operator. Every channel. One message.</p>
          </div>

          {linkColumns.map((column) => (
            <div key={column.title}>
              <h4 style={{ color: 'var(--text)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.85rem' }}>
                {column.title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    {column.title === 'Follow' ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted"
                        style={{ textDecoration: 'none' }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-muted" style={{ textDecoration: 'none' }}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: 'var(--border-width) solid var(--border-color)',
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
          }}
        >
          <p className="text-muted" style={{ fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} Flourishers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

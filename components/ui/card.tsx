import { ReactNode } from 'react';

export default function Card({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="surface" style={{ padding: '1.5rem' }}>
      {title && <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: 600 }}>{title}</h3>}
      <div className="text-muted">{children}</div>
    </div>
  );
}
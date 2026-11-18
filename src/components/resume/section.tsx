export function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[11px] uppercase tracking-widest text-neutral-600 ${className}`}>
      {children}
    </p>
  );
}

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-16 border-t border-white/10 py-12 first:border-t-0 first:pt-0"
    >
      <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function TitledList({ items }: { items: string[][] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {items.map(([t, d]) => (
        <li key={t}>
          <h3 className="text-sm font-medium text-white">{t}</h3>
          <p className="mt-1 text-sm leading-relaxed text-neutral-500">{d}</p>
        </li>
      ))}
    </ul>
  );
}

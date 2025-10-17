type Item = { label: string; href: string };
type Props = { title?: string; items?: Item[] };

export default function ResourcesSection({ title, items }: Props) {
  return (
    <section className="py-16 px-6 md:px-12">
      {title && <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items?.map((it, i) => (
          <a
            key={i}
            href={it.href}
            className="block border rounded-xl px-5 py-4 hover:shadow transition"
            target={it.href?.startsWith("http") ? "_blank" : undefined}
          >
            {it.label}
          </a>
        ))}
      </div>
    </section>
  );
}

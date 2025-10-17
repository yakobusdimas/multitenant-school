import Image from "next/image";

type Upload = { url: string };
type Solution = { title: string; content?: string; image?: Upload };
type Props = {
  title?: string;
  description?: string;
  solutions?: Solution[];
};

export default function SolutionsSection({ title, description, solutions }: Props) {
  return (
    <section className="py-16 px-6 md:px-12">
      {title && <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>}
      {description && <p className="text-gray-600 mb-10 max-w-3xl">{description}</p>}

      <div className="grid gap-6 md:grid-cols-3">
        {solutions?.map((s, i) => (
          <div key={i} className="rounded-3xl bg-gray-50 p-6 shadow">
            {s.image?.url && (
              <Image src={s.image.url} alt={s.title} width={480} height={300} className="rounded-2xl" />
            )}
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            {s.content && <p className="text-gray-600 mt-2">{s.content}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";

type Upload = { url: string };
type Props = {
  title?: string;
  description?: string;
  image?: Upload;
  bullets?: { text: string }[];
};

export default function WhyChooseSection({ title, description, image, bullets }: Props) {
  return (
    <section className="py-16 px-6 md:px-12">
      {title && <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">{title}</h2>}
      {description && <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">{description}</p>}

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        {image?.url && (
          <Image src={image.url} alt={title || "Why choose image"} width={1000} height={560} className="rounded-2xl" />
        )}
        {bullets && bullets.length > 0 && (
          <ul className="grid md:grid-cols-3 gap-4 w-full">
            {bullets.map((b, i) => (
              <li key={i} className="bg-white border rounded-xl p-4 shadow-sm">
                {b.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

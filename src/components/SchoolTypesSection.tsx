import Image from "next/image";

type Upload = { url: string };
type Props = {
  title?: string;
  description?: string;
  image?: Upload;
  tags?: { label: string }[];
};

export default function SchoolTypesSection({ title, description, image, tags }: Props) {
  return (
    <section className="py-16 px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
      <div className="order-2 md:order-1">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>}
        {description && <p className="text-gray-600 mb-6">{description}</p>}
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-gray-100 text-sm">{t.label}</span>
            ))}
          </div>
        )}
      </div>

      <div className="order-1 md:order-2 flex justify-center">
        {image?.url && <Image src={image.url} alt={title || "School types"} width={560} height={420} className="rounded-3xl" />}
      </div>
    </section>
  );
}

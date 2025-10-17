// src/app/(app)/(home)/solutions/page.tsx
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";
import ProductCarousel from "../solutions/components/ProductCaraousel";
import FeatureSlider from "../solutions/components/FeatureSlider";
import SchoolTypes from "../solutions/components/SchoolTypes";

export default async function ProductPage() {
  const payload = await getPayloadHMR({ config });
  const page = await payload.find({
    collection: "pages",
    where: { slug: { equals: "solutions" } },
    depth: 3, // biar image.url ikut resolve
  });

  // Define the type for the page document that includes 'layout'
  type SolutionsPageDoc = {
    layout?: any[];
    [key: string]: any;
  };

  const doc = page.docs?.[0] as SolutionsPageDoc | undefined;
  if (!doc) return <p>No page data found.</p>;

  const cardBlock = doc.layout?.find((b: any) => b.blockType === "card-school");
  const schoolOsBlock = doc.layout?.find((b: any) => b.blockType === "school-os");
  const schoolSolutionsBlock = doc.layout?.find(
    (b: any) => b.blockType === "school-solutions"
  );

  return (
    <>
      {cardBlock && (
        <ProductCarousel
          title={cardBlock.title}
          description={cardBlock.description}
          cards={cardBlock.cards}
        />
      )}

      {schoolOsBlock && (
        <FeatureSlider
          title={schoolOsBlock.title}
          features={schoolOsBlock.features?.map((f: any) => ({
            description: f.description,
            image: f.image ? { url: f.image.url, alt: f.image.alt } : undefined,
          }))}
        />
      )}

      {schoolSolutionsBlock && <SchoolTypes block={schoolSolutionsBlock} />}
    </>
  );
}

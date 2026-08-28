import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import CategoryGallery from "@/components/sections/CategoryGallery";
import { CATEGORIES, PORTFOLIO_ITEMS, getCategoryBySlug, getCoverImage } from "@/lib/portfolio-data";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.name} Interior Design Projects | FS Interior Ahmedabad`,
    description: `See every ${category.name.toLowerCase()} we've designed and executed for clients across Ahmedabad.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const items = PORTFOLIO_ITEMS.filter((item) => item.category === category.name);

  return (
    <main>
      <PageHeader
        eyebrow="Our Work"
        title={category.name}
        subtitle={`Every ${category.name.toLowerCase()} project we've completed in Ahmedabad.`}
        image={getCoverImage(category)}
      />
      <CategoryGallery items={items} />
    </main>
  );
}

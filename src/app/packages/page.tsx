import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PackagesSection from "@/components/sections/PackagesSection";

export const metadata: Metadata = {
  title: "Interior Packages & Pricing | FS Interior Ahmedabad",
  description:
    "Transparent 2 BHK, 3 BHK and 4 BHK interior packages in Ahmedabad. All-inclusive pricing, premium materials, and expert execution with no hidden costs.",
};

export default function PackagesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Interior Packages"
        title="Transparent"
        titleAccent="Pricing"
        subtitle="All-inclusive packages with no hidden costs — premium materials and expert execution, start to finish."
        image="/images/Living Room/1783865300485.jpg"
      />
      <PackagesSection />
    </main>
  );
}

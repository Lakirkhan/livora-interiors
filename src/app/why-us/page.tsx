import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import WhyUsSection from "@/components/sections/WhyUsSection";

export const metadata: Metadata = {
  title: "Why Choose Us | FS Interior Ahmedabad",
  description: "What sets FS Interior apart — personalized design, transparent pricing, premium materials and turnkey execution for every project in Ahmedabad.",
};

export default function WhyUsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Why FS Interior"
        title="Why Choose"
        titleAccent="Us"
        subtitle="What sets us apart is simple — we treat your home as if it were our own."
        image="/images/Kitchen/1783865300464.jpg"
      />
      <WhyUsSection />
    </main>
  );
}

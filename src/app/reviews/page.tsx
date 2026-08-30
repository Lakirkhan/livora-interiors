import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Client Reviews | FS Interior Ahmedabad",
  description: "Real reviews from FS Interior clients across Ahmedabad — read what homeowners say about their finished spaces, or share your own experience.",
};

export default function ReviewsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Client Reviews"
        title="What Our"
        titleAccent="Clients Say"
        subtitle="Real words from real homeowners who trusted us with their most personal spaces."
        image="/images/BedRoom/1783865299412.jpg"
      />
      <TestimonialsSection />
    </main>
  );
}

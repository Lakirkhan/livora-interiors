import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PortfolioSection from "@/components/sections/PortfolioSection";

export const metadata: Metadata = {
  title: "Our Projects | FS Interior Ahmedabad",
  description:
    "Browse FS Interior's portfolio of completed residential and commercial interior projects in Ahmedabad, organized by room — living rooms, bedrooms, kitchens, offices, dining spaces and bathrooms.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Work"
        title="Selected"
        titleAccent="Projects"
        subtitle="A room-by-room look at spaces we've designed and executed — every project based in Ahmedabad."
        image="/images/Living Room/1783865300504.jpg"
      />
      <PortfolioSection />
    </main>
  );
}

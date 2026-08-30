import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProcessSection from "@/components/sections/ProcessSection";

export const metadata: Metadata = {
  title: "Our Process | FS Interior Ahmedabad",
  description: "A seamless four-step journey from vision to your perfect space — how FS Interior plans, designs, executes and delivers every project.",
};

export default function ProcessPage() {
  return (
    <main>
      <PageHeader
        eyebrow="How It Works"
        title="Our"
        titleAccent="Process"
        subtitle="A seamless four-step journey from vision to your perfect space."
        image="/images/Office/1783865299630.jpg"
      />
      <ProcessSection />
    </main>
  );
}

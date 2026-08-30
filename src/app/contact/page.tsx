import type { Metadata } from "next";
import ConsultationForm from "@/components/sections/ConsultationForm";

export const metadata: Metadata = {
  title: "Book a Free Consultation | FS Interior Ahmedabad",
  description: "Start your interior design project with FS Interior. Book a free consultation and site visit — we'll reach out within 24 hours.",
};

export default function ContactPage() {
  return (
    <main>
      <ConsultationForm />
    </main>
  );
}

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import OwnerStorySection from "@/components/sections/OwnerStorySection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <OwnerStorySection />
      <ServicesSection />
    </main>
  );
}

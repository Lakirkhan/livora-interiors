import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import FloatingContact from "@/components/layout/FloatingContact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://fsinterior.in"),
  title: "FS Interior | Premium Interior Designer in Ahmedabad",
  description:
    "Transform your space with FS Interior – Ahmedabad's trusted interior design studio offering residential design, modular kitchens, 3D visualization, and complete turnkey solutions. 2 BHK, 3 BHK & 4 BHK packages available.",
  keywords: [
    "interior designer in Ahmedabad",
    "home interior design Ahmedabad",
    "modular kitchen Ahmedabad",
    "2 BHK interior package Ahmedabad",
    "3 BHK interior package Ahmedabad",
    "residential interior designer Ahmedabad",
    "turnkey interior solutions",
    "false ceiling design Ahmedabad",
    "wardrobe design Ahmedabad",
    "3D interior visualization Ahmedabad",
  ],
  authors: [{ name: "FS Interior" }],
  creator: "FS Interior",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://fsinterior.in",
    siteName: "FS Interior",
    title: "FS Interior | Premium Interior Designer in Ahmedabad",
    description:
      "Complete interior design and execution by expert professionals. Free site visit. Transparent pricing. Ahmedabad's most trusted boutique interior studio.",
    images: [
      {
        url: "/images/Living%20Room/1783865300504.jpg",
        width: 1200,
        height: 630,
        alt: "FS Interior – Premium Interior Design Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FS Interior | Interior Designer in Ahmedabad",
    description: "Premium interior design studio in Ahmedabad. Book your free consultation today.",
    images: ["/images/Living%20Room/1783865300504.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://fsinterior.in" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  name: "FS Interior",
  description: "Premium boutique interior design studio in Ahmedabad offering residential and commercial interior solutions.",
  url: "https://fsinterior.in",
  telephone: "+91-98765-43210",
  email: "fbssaiyed@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380009",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.0225",
    longitude: "72.5714",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  priceRange: "₹₹₹",
  areaServed: { "@type": "City", name: "Ahmedabad" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Interior Design Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Interior Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Modular Kitchen Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D Visualization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Turnkey Interior Solutions" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#242019",
              color: "#faf6ef",
              border: "1px solid #af8a52",
              borderRadius: "2px",
            },
          }}
        />
      </body>
    </html>
  );
}

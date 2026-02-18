import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.metadata.title.default,
    template: siteConfig.metadata.title.template,
  },
  description: siteConfig.metadata.description,
  icons: {
    icon: "https://storage.googleapis.com/gpt-engineer-file-uploads/aQxPghRgq4XEKv8QsnuVUOCKU1a2/uploads/1769964713349-impactchannel.es%20logo39.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ImpactChannel, S.L.",
    "image": "https://storage.googleapis.com/gpt-engineer-file-uploads/aQxPghRgq4XEKv8QsnuVUOCKU1a2/uploads/1769964713349-impactchannel.es%20logo39.png",
    "@id": "https://impactchannel.es",
    "url": "https://impactchannel.es",
    "telephone": "+34918053400",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Fuente Nueva, 14, Nave 19A",
      "addressLocality": "San Sebastián de los Reyes",
      "addressRegion": "Madrid",
      "postalCode": "28703",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.556,
      "longitude": -3.615
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

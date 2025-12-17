import { PRICING_PACKAGES, FAQ_ITEMS } from "@/lib/constants";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SalePhotosession Bot",
    description: "AI-фотосессии товаров через Telegram бот. Профессиональные фото для маркетплейсов и соцсетей",
    url: "https://bg.app-studio.online",
    logo: "https://bg.app-studio.online/logo.png",
    sameAs: [
      "https://t.me/SalePhotosession_bot",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["Russian", "English"],
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SalePhotosession Telegram Bot",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any (Telegram)",
    description: "AI-бот для создания профессиональных фотосессий товаров в 4 стилях: Lifestyle, Studio, Interior, Creative",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "RUB",
      lowPrice: PRICING_PACKAGES[0].price,
      highPrice: PRICING_PACKAGES[PRICING_PACKAGES.length - 1].price,
      offerCount: PRICING_PACKAGES.length,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "350",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const productSchemas = PRICING_PACKAGES.filter(pkg => pkg.price > 0).map((pkg) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Пакет фотосессий "${pkg.name}"`,
    description: `${pkg.photos} профессиональных фотосессий товаров - ${pkg.features.join(", ")}`,
    offers: {
      "@type": "Offer",
      price: pkg.price,
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {productSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

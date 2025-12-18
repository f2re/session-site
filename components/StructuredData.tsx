import { PRICING_PACKAGES, FAQ_ITEMS } from "@/lib/constants";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SalePhotosession Bot",
    description: "AI-фотосессии товаров через Telegram бот. Пакетная загрузка до 100 фото. Кастомные стили с помощью Claude 3.5 Sonnet. Профессиональные фото для маркетплейсов и соцсетей",
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
    description: "AI-бот для создания профессиональных фотосессий товаров. Пакетная загрузка альбомами до 100 фото. Создание кастомных стилей через Claude 3.5 Sonnet. 4 готовых стиля: Lifestyle, Studio, Interior, Creative. Умное управление балансом и автоматическая обработка.",
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
    featureList: [
      "Пакетная загрузка до 100 фото альбомом",
      "Создание кастомных стилей с Claude 3.5 Sonnet",
      "4 профессиональных стиля",
      "Сохранение до 4 кастомных стилей",
      "Умное управление балансом",
      "Автоматическая обработка за 10-15 секунд",
    ],
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

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import YandexMetrika from "@/components/YandexMetrika";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Фотосессии товаров через Telegram бот | Пакетная загрузка и кастомные стили",
  description:
    "Превратите обычные фото товаров в профессиональные снимки за 10 секунд. Пакетная загрузка до 100 фото. Создайте уникальный стиль для бренда. Powered by Claude 3.5. Первые 2 фотосессии бесплатно.",
  keywords:
    "фотосессия товаров, ai фото, telegram бот, фото для маркетплейсов, профессиональная съемка, wildberries, ozon, lifestyle фото, студийная съемка, пакетная обработка фото, кастомные стили, claude ai, массовая загрузка, фото для каталога, брендированные фото",
  authors: [{ name: "SalePhotosession Bot" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", sizes: "any" },
    ],
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://bg.app-studio.online",
    title: "AI Фотосессии товаров - Пакетная загрузка и кастомные стили",
    description: "Первые 2 фотосессии бесплатно! Загружайте альбомом до 100 фото. Создайте уникальный стиль для бренда. Powered by Claude 3.5 Sonnet.",
    siteName: "SalePhotosession Bot",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Фотосессии товаров - Пакетная загрузка и кастомные стили",
    description: "Загружайте до 100 фото альбомом. Создайте уникальный стиль с помощью Claude 3.5. Первые 2 фотосессии бесплатно!",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#f5576c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Читаем Metrika ID на сервере (доступен в runtime)
  const metrikaId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || '105494857';

  return (
    <html lang="ru" className="dark scroll-smooth">
      <head>
        <StructuredData />
        {/* Передаем Metrika ID в window для использования на клиенте */}
        {metrikaId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__METRIKA_ID__ = "${metrikaId}";`,
            }}
          />
        )}
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <YandexMetrika />
        {children}
      </body>
    </html>
  );
}

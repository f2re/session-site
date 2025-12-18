"use client";

import { motion } from "framer-motion";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const examples = [
  {
    id: 1,
    style: "Lifestyle",
    beforeImage: "/examples/lifestyle/before.jpg",
    afterImage: "/examples/lifestyle/after.jpg",
    beforeText: "Простое фото товара",
    afterText: "Профессиональная сцена использования",
    gradient: "gradient-lifestyle",
  },
  {
    id: 2,
    style: "Creative",
    beforeImage: "/examples/creative/before.jpg",
    afterImage: "/examples/creative/after.jpg",
    beforeText: "Стандартный ракурс",
    afterText: "Креативная композиция",
    gradient: "gradient-creative",
  },
  {
    id: 3,
    style: "Interior",
    beforeImage: "/examples/interior/before.jpg",
    afterImage: "/examples/interior/after.jpg",
    beforeText: "Товар без контекста",
    afterText: "Товар в стильном интерьере",
    gradient: "gradient-interior",
  },
  {
    id: 4,
    style: "Studio",
    beforeImage: "/examples/studio/before.jpg",
    afterImage: "/examples/studio/after.jpg",
    beforeText: "Фото на обычном фоне",
    afterText: "Студийная съёмка с освещением",
    gradient: "gradient-studio",
  },
  {
    id: 5,
    style: "China",
    beforeImage: "/examples/china/before.jpg",
    afterImage: "/examples/china/after.jpg",
    beforeText: "Фото на обычном фоне",
    afterText: "Съёмка в восточном стиле",
    gradient: "gradient-china",
  },
  {
    id: 5,
    style: "Natural",
    beforeImage: "/examples/natural/before.jpg",
    afterImage: "/examples/natural/after.jpg",
    beforeText: "Фото на обычном фоне",
    afterText: "Фото на природе",
    gradient: "gradient-natural",
  },
];

// Компонент для изображения с fallback
function PhotoCard({
  src,
  alt,
  label,
  text,
  isAfter = false
}: {
  src: string;
  alt: string;
  label: string;
  text: string;
  isAfter?: boolean;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`${isAfter ? 'bg-white/90' : 'bg-white/50'} backdrop-blur-sm rounded-xl overflow-hidden ${isAfter ? 'shadow-lg' : ''}`}>
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-100">
        {!imageError ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          // Fallback когда нет изображения
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center p-8">
              <ImageIcon className="w-16 h-16 mx-auto text-gray-400 mb-3" />
              <p className="text-sm text-gray-500 font-medium">{text}</p>
            </div>
          </div>
        )}

        {/* Label Badge */}
        <div className="absolute top-3 left-3">
          <div className={`px-3 py-1.5 rounded-full text-xs font-bold ${
            isAfter
              ? 'bg-gradient-to-r from-primary to-primary-dark text-white'
              : 'bg-gray-800/80 backdrop-blur-sm text-white'
          }`}>
            {label}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="p-4">
        <p className={`text-sm ${isAfter ? 'text-gray-900 font-semibold' : 'text-gray-700'}`}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            До и После
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Посмотрите, как обычные фото товаров превращаются в профессиональные снимки
          </p>
        </motion.div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {examples.map((example, index) => (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800">
                {/* Style Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`px-4 py-2 ${example.gradient} backdrop-blur-sm rounded-full text-sm font-bold text-white shadow-lg`}>
                    {example.style}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Before/After Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <PhotoCard
                      src={example.beforeImage}
                      alt={`До - ${example.style}`}
                      label="ДО"
                      text={example.beforeText}
                      isAfter={false}
                    />

                    <PhotoCard
                      src={example.afterImage}
                      alt={`После - ${example.style}`}
                      label="ПОСЛЕ"
                      text={example.afterText}
                      isAfter={true}
                    />
                  </div>

                  {/* Info Banner */}
                  <div className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                    <ArrowRight className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      AI-трансформация за 10-15 секунд
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            Готовы попробовать?
          </p>
          <p className="text-xl font-bold text-primary">
            Первые 2 фотосессии бесплатно!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

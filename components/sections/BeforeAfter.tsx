"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const examples = [
  {
    id: 1,
    style: "Lifestyle",
    before: "Простое фото товара",
    after: "Профессиональная сцена использования",
    gradient: "gradient-lifestyle",
  },
  {
    id: 2,
    style: "Studio",
    before: "Фото на обычном фоне",
    after: "Студийная съёмка с освещением",
    gradient: "gradient-studio",
  },
  {
    id: 3,
    style: "Interior",
    before: "Товар без контекста",
    after: "Товар в стильном интерьере",
    gradient: "gradient-interior",
  },
  {
    id: 4,
    style: "Creative",
    before: "Стандартный ракурс",
    after: "Креативная композиция",
    gradient: "gradient-creative",
  },
];

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
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                {/* Gradient Background */}
                <div className={`${example.gradient} p-8 md:p-10`}>
                  {/* Style Badge */}
                  <div className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 mb-6">
                    {example.style}
                  </div>

                  {/* Before/After Comparison */}
                  <div className="space-y-6">
                    {/* Before */}
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-semibold">
                          До
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-200 rounded w-1/2 mt-2"></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">{example.before}</p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <div className="bg-white rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <ArrowRight className="w-6 h-6 text-gray-700" />
                      </div>
                    </div>

                    {/* After */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white font-semibold">
                          AI
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-gradient-to-r from-primary/40 to-primary/20 rounded w-full"></div>
                          <div className="h-2 bg-gradient-to-r from-primary/30 to-primary/10 rounded w-3/4 mt-2"></div>
                          <div className="h-2 bg-gradient-to-r from-primary/20 to-primary/5 rounded w-1/2 mt-2"></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-900 font-medium">{example.after}</p>
                    </div>
                  </div>

                  {/* Time Badge */}
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                      ⚡ Готово за 10-15 секунд
                    </div>
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
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Готовы попробовать? Первые 2 фотосессии бесплатно!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

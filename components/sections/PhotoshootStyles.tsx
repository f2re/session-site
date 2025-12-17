"use client";

import { motion } from "framer-motion";
import { Camera, Heart, Home, Sparkles } from "lucide-react";
import { PHOTOSHOOT_STYLES } from "@/lib/constants";

const iconMap = {
  Heart: Heart,
  Camera: Camera,
  Home: Home,
  Sparkles: Sparkles,
};

export default function PhotoshootStyles() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
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
            4 профессиональных стиля
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Выберите стиль фотосессии, который идеально подходит для вашего товара и платформы
          </p>
        </motion.div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PHOTOSHOOT_STYLES.map((style, index) => {
            const Icon = iconMap[style.icon as keyof typeof iconMap] || Camera;
            const gradientClass = `gradient-${style.id}`;

            return (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Gradient Background */}
                  <div className={`${gradientClass} p-8 md:p-10 h-full`}>
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-gray-800" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {style.name}
                    </h3>

                    <p className="text-white/90 text-lg mb-6">
                      {style.description}
                    </p>

                    {/* Examples */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                      <p className="text-sm text-white/80 font-medium mb-2">
                        Примеры использования:
                      </p>
                      <p className="text-sm text-white">
                        {style.examples}
                      </p>
                    </div>

                    {/* Best For Badge */}
                    <div className="mt-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800">
                        <Sparkles className="w-4 h-4" />
                        <span>
                          {style.id === "lifestyle" && "Лучше всего для соцсетей"}
                          {style.id === "studio" && "Идеально для маркетплейсов"}
                          {style.id === "interior" && "Отлично для каталогов"}
                          {style.id === "creative" && "Для креативных кампаний"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Сохраняйте понравившиеся стили
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Используйте их повторно для всех товаров
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

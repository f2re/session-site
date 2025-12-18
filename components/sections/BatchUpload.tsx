"use client";

import { motion } from "framer-motion";
import { Images, Zap, CheckCircle2, Clock, Wallet } from "lucide-react";

const batchFeatures = [
  {
    icon: Images,
    title: "Альбомная загрузка",
    description: "Загружайте фото как обычный альбом в Telegram — система автоматически обработает все изображения",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Wallet,
    title: "Умное управление балансом",
    description: "Видите стоимость до обработки. Выбирайте: обработать всё, частично или отменить",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Автоматическая обработка",
    description: "Загрузили альбом — система сама определит количество и запустит обработку по очереди",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: CheckCircle2,
    title: "Защита от ошибок",
    description: "Баланс возвращается при сбоях. Обработка только валидных изображений",
    gradient: "from-purple-500 to-pink-500",
  },
];

const useCases = [
  {
    title: "Интернет-магазины",
    description: "Обновите весь каталог за один вечер",
    count: "50-100 товаров",
    gradient: "gradient-lifestyle",
  },
  {
    title: "Маркетплейсы",
    description: "Единый стиль для всей линейки",
    count: "20-30 позиций",
    gradient: "gradient-studio",
  },
  {
    title: "Соцсети",
    description: "Серия постов в едином стиле",
    count: "10-15 фото",
    gradient: "gradient-creative",
  },
];

const workflow = [
  {
    step: "1",
    title: "Загрузите альбом",
    description: "Выберите все фото товаров и отправьте как альбом в Telegram",
    icon: "📤",
  },
  {
    step: "2",
    title: "Проверьте баланс",
    description: "Система покажет количество фото и стоимость обработки",
    icon: "💰",
  },
  {
    step: "3",
    title: "Выберите действие",
    description: "Обработать всё, частично (по балансу) или отменить",
    icon: "✅",
  },
  {
    step: "4",
    title: "Получите результат",
    description: "По 4 профессиональных фото на каждый товар + сводка",
    icon: "🎉",
  },
];

export default function BatchUpload() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <Images className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Пакетная обработка
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Обработайте весь каталог{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              за минуты
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Загружайте фото альбомом в Telegram — система автоматически обработает все изображения.
            Без лишних кликов, с умным управлением балансом.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {batchFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Как это работает
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent -z-10" />
                )}

                <div className="text-center">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Идеально для масштаба
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${useCase.gradient} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-shadow`}
              >
                <div className="text-sm font-semibold opacity-90 mb-2">
                  {useCase.count}
                </div>
                <h4 className="text-2xl font-bold mb-3">{useCase.title}</h4>
                <p className="text-white/90">{useCase.description}</p>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Экономия времени: в 10 раз</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
              Превратите всю линейку продуктов в профессиональные фото
            </p>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Загрузите альбомом — обработаем автоматически
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

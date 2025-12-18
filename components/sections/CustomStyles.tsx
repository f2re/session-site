"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, Save, Palette, Star, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Powered by Claude 3.5",
    description: "ИИ понимает ваше описание и создаёт профессиональные фотосессии с техническими спецификациями",
    gradient: "from-violet-500 to-purple-600",
    badge: "AI",
  },
  {
    icon: Palette,
    title: "От минимализма до киберпанка",
    description: "Любой стиль для вашего бренда: опишите словами — получите готовую фотосессию",
    gradient: "from-pink-500 to-rose-600",
    badge: "Стиль",
  },
  {
    icon: Save,
    title: "Сохраните фирменный стиль",
    description: "До 4 сохранённых стилей для быстрого доступа. Примените ко всему каталогу",
    gradient: "from-emerald-500 to-teal-600",
    badge: "4 слота",
  },
  {
    icon: Star,
    title: "Качество 8/10+",
    description: "Оценка по реализму, минимализму и настроению. Только качественные результаты",
    gradient: "from-amber-500 to-orange-600",
    badge: "Гарантия",
  },
];

const steps = [
  {
    number: "01",
    title: "Опишите товар",
    description: "3-100 символов",
    example: '"iPhone 15 Pro Max" или "Керамическая ваза ручной работы"',
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Опишите стиль",
    description: "10-300 символов",
    example: '"Минималистичный белый фон, мягкое освещение" или "Неоновые огни, киберпанк"',
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "Выберите количество",
    description: "1-4 вариации",
    example: "ИИ сгенерирует несколько вариантов стиля на выбор",
    color: "from-emerald-500 to-teal-500",
  },
];

const styleExamples = [
  {
    name: "Минимализм",
    description: "Белый фон, мягкое освещение",
    tags: ["Чистый", "Профессиональный", "Универсальный"],
    gradient: "gradient-studio",
  },
  {
    name: "Драматический",
    description: "Тёмный фон, контрастный свет",
    tags: ["Премиум", "Эмоциональный", "Запоминающийся"],
    gradient: "gradient-creative",
  },
  {
    name: "Природный",
    description: "Деревянная поверхность, утренний свет",
    tags: ["Натуральный", "Тёплый", "Экологичный"],
    gradient: "gradient-lifestyle",
  },
  {
    name: "Футуристичный",
    description: "Неоновые огни, киберпанк",
    tags: ["Современный", "Технологичный", "Яркий"],
    gradient: "gradient-interior",
  },
];

const benefits = [
  {
    icon: "🎨",
    title: "Креативный контроль",
    description: "Дизайн точно по вашему видению",
  },
  {
    icon: "🔄",
    title: "Многоразовое использование",
    description: "Сохраните и применяйте к разным товарам",
  },
  {
    icon: "⚡",
    title: "Быстрое тестирование",
    description: "Создайте 4 варианта за раз",
  },
  {
    icon: "🏆",
    title: "Профессиональное качество",
    description: "С техническими спецификациями камер",
  },
];

export default function CustomStyles() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              Кастомные стили
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Создайте{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600">
              уникальный стиль
            </span>
            {" "}для бренда
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Опишите желаемый стиль словами — ИИ создаст профессиональную фотосессию.
            Сохраните фирменный стиль и применяйте ко всем товарам.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-bold text-gray-600 dark:text-gray-400">
                  {feature.badge}
                </div>
              </div>

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

        {/* Creation Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Создание за 3 простых шага
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-transparent -z-10" />
                )}

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                  <div className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${step.color} mb-4`}>
                    {step.number}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-3">
                    {step.description}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    {step.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Style Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Примеры стилей
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            От минимализма до киберпанка — любой стиль для вашего бренда
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {styleExamples.map((style, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${style.gradient} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1`}
              >
                <h4 className="text-2xl font-bold mb-2">{style.name}</h4>
                <p className="text-white/90 text-sm mb-4">{style.description}</p>
                <div className="flex flex-wrap gap-2">
                  {style.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-12">
              Почему кастомные стили — это выгодно
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-3">{benefit.icon}</div>
                  <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                  <p className="text-white/90 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                Создайте уникальный стиль один раз
              </p>
            </div>
            <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold">
              Примените к сотням товаров
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

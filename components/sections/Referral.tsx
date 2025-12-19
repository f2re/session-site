"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Users, TrendingUp, Copy } from "lucide-react";
import { REFERRAL_REWARD_START, REFERRAL_REWARD_PURCHASE_PERCENT, getBotUrl } from "@/lib/constants";

export default function Referral() {
  return (
    <section id="referral" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Реферальная программа
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Приглашайте друзей и получайте бесплатные фотосессии
          </p>
        </motion.div>

        {/* How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Пригласите друга</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Поделитесь своей реферальной ссылкой с друзьями и знакомыми
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Получите {REFERRAL_REWARD_START} фотосессий</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Когда друг запустит бота по вашей ссылке, вы сразу получите {REFERRAL_REWARD_START} бесплатных фотосессий
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Зарабатывайте {REFERRAL_REWARD_PURCHASE_PERCENT}%</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Получайте {REFERRAL_REWARD_PURCHASE_PERCENT}% от каждой покупки вашего реферала в виде бесплатных фотосессий
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Benefits Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Пример расчета</h3>
                  <p className="opacity-90">
                    Ваш друг купил пакет «Профессиональный» (40 фотосессий)
                  </p>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <div className="text-center md:text-right">
                    <div className="text-4xl font-bold mb-1">+2 фотосессии</div>
                    <div className="opacity-90">бесплатно для вас!</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-white rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-bold text-center mb-6">Преимущества программы</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Copy className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Получите свою уникальную реферальную ссылку прямо в боте</span>
              </li>
              <li className="flex items-start gap-3">
                <Gift className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Бонусные фотосессии начисляются автоматически и мгновенно</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Неограниченное количество рефералов — приглашайте сколько угодно</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Бонусы от покупок рефералов действуют бессрочно</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-6"
            onClick={() => window.open(getBotUrl("referral"), "_blank")}
          >
            Получить реферальную ссылку
          </Button>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Начните зарабатывать бесплатные фотосессии уже сегодня!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

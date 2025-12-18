import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Пользовательское соглашение | SalePhotosession",
  description: "Пользовательское соглашение сервиса SalePhotosession - AI фотосессии товаров через Telegram бот",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
          <Link href="/" className="text-primary hover:underline mb-6 inline-block">
            ← Вернуться на главную
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Пользовательское соглашение
          </h1>

          <div className="prose dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Общие положения</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует
                отношения между владельцем сервиса SalePhotosession (далее — «Сервис») и
                пользователем сервиса (далее — «Пользователь»).
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Начиная использовать Сервис, Пользователь принимает условия настоящего Соглашения в полном объёме.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Описание сервиса</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                SalePhotosession — это автоматизированный сервис для создания профессиональных
                фотосессий товаров с помощью AI, работающий через Telegram бот. Сервис использует
                технологии искусственного интеллекта (Claude 3.5 Sonnet, Google Gemini 2.0 Flash)
                для обработки изображений.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Сервис предоставляет возможность:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Создавать профессиональные фотосессии товаров в 4 стилях</li>
                <li>Создавать кастомные стили с помощью Claude 3.5 Sonnet</li>
                <li>Загружать изображения пакетно (до 100 фото)</li>
                <li>Сохранять до 4 кастомных стилей</li>
                <li>Использовать реферальную программу</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Условия использования</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                3.1. Пользователь обязуется использовать Сервис исключительно в законных целях.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                3.2. Запрещается загружать изображения, содержащие:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Материалы порнографического характера</li>
                <li>Пропаганду насилия, расовой или религиозной ненависти</li>
                <li>Материалы, защищенные авторским правом (без соответствующих прав)</li>
                <li>Любой контент, нарушающий законодательство РФ</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                3.3. Пользователь несет полную ответственность за содержание загружаемых изображений.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Бесплатные фотосессии</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Каждый новый пользователь получает 2 бесплатные фотосессии (по 4 фото в каждой).
                Бесплатные фотосессии предоставляются один раз и не подлежат восстановлению.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Платные услуги</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                5.1. После использования бесплатных фотосессий Пользователь может приобрести
                один из платных пакетов:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Стартовый: 3 фотосессии за 290₽ (~97₽/шт)</li>
                <li>Бизнес: 15 фотосессий за 990₽ (~66₽/шт)</li>
                <li>Профессиональный: 40 фотосессий за 2490₽ (~62₽/шт)</li>
                <li>Студия: 100 фотосессий за 4990₽ (~50₽/шт)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                5.2. Каждая фотосессия включает 4 профессиональных фото товара.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                5.3. Оплата производится через платежную систему ЮKassa.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                5.4. Все платежи являются окончательными. Неиспользованные фотосессии не возвращаются.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Реферальная программа</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                6.1. Пользователь может приглашать новых пользователей и получать бонусы.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                6.2. За каждого приглашенного пользователя начисляется 2 бесплатные фотосессии.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                6.3. При совершении покупки приглашённым пользователем начисляется 5% от суммы
                покупки в виде дополнительных фотосессий.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                6.4. Бонусы начисляются автоматически после регистрации нового пользователя по реферальной ссылке.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                6.5. Запрещается накрутка рефералов, использование ботов и других недобросовестных методов.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Возврат средств</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                7.1. Возврат средств возможен в течение 7 дней с момента покупки при наличии
                технических проблем с обработкой изображений.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                7.2. Для получения возврата необходимо обратиться в службу поддержки через Telegram бот.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                7.3. Возврат не производится, если пользователь уже использовал часть приобретенных фотосессий.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Ограничение ответственности</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                8.1. Сервис предоставляется «как есть». Мы не гарантируем идеального качества
                обработки всех изображений.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                8.2. Мы не несем ответственности за любые убытки, возникшие в результате
                использования или невозможности использования Сервиса.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                8.3. Мы не несем ответственности за содержание загружаемых Пользователем изображений.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Интеллектуальная собственность</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                9.1. Все права на Сервис, включая программный код и дизайн, принадлежат владельцу Сервиса.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                9.2. Права на загруженные изображения остаются у Пользователя.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                9.3. Обработанные изображения принадлежат Пользователю.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Изменение условий</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Мы оставляем за собой право изменять условия настоящего Соглашения.
                Актуальная версия всегда доступна на этой странице.
                Продолжение использования Сервиса после изменения условий означает
                принятие новых условий.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Контакты</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                По всем вопросам вы можете обратиться к нам через Telegram бот или
                написать на почту поддержки.
              </p>
            </section>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
              Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

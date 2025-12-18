import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Публичная оферта | SalePhotosession",
  description: "Публичная оферта сервиса SalePhotosession - AI фотосессии товаров через Telegram бот",
};

export default function OfferPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
          <Link href="/" className="text-primary hover:underline mb-6 inline-block">
            ← Вернуться на главную
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Публичная оферта
          </h1>

          <div className="prose dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Общие положения</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                1.1. Настоящий документ является публичной офертой (далее — «Оферта») и
                содержит все существенные условия оказания услуг по созданию профессиональных
                фотосессий товаров с помощью искусственного интеллекта через Telegram бот
                SalePhotosession (далее — «Сервис»).
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                1.2. В соответствии со статьей 437 Гражданского кодекса Российской Федерации
                данный документ является публичной офертой, и в случае принятия изложенных
                ниже условий физическое или юридическое лицо, производящее акцепт этой Оферты,
                осуществляет оплату услуг в соответствии с условиями настоящей Оферты.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                1.3. Акцептом настоящей Оферты считается факт оплаты услуг Пользователем.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Термины и определения</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Исполнитель</strong> — владелец и оператор Сервиса SalePhotosession</li>
                <li><strong>Заказчик (Пользователь)</strong> — физическое или юридическое лицо, использующее Сервис</li>
                <li><strong>Услуга</strong> — автоматическая обработка изображений товаров с помощью AI для создания профессиональных фотосессий</li>
                <li><strong>Фотосессия</strong> — одна операция по созданию 4 профессиональных фото товара в выбранном стиле</li>
                <li><strong>Пакет</strong> — набор фотосессий, доступный для приобретения</li>
                <li><strong>Кастомный стиль</strong> — уникальный стиль фотосессии, созданный пользователем с помощью AI</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Предмет оферты</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                3.1. Исполнитель обязуется оказать Заказчику услуги по автоматической обработке
                изображений товаров с помощью искусственного интеллекта, а Заказчик обязуется
                оплатить эти услуги в соответствии с условиями настоящей Оферты.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                3.2. Услуги оказываются через Telegram бот с использованием технологий
                искусственного интеллекта, включая Claude 3.5 Sonnet и Google Gemini 2.0 Flash.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                3.3. Сервис предоставляет 4 готовых профессиональных стиля (Lifestyle, Studio,
                Interior, Creative) и возможность создания кастомных стилей.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Стоимость услуг</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                4.1. Стоимость услуг определяется в соответствии с действующими на момент
                оплаты тарифами:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Бесплатно:</strong> 2 фотосессии для новых пользователей</li>
                <li><strong>Пакет «Стартовый»:</strong> 3 фотосессии — 290₽ (~97₽/шт)</li>
                <li><strong>Пакет «Бизнес»:</strong> 15 фотосессий — 990₽ (~66₽/шт)</li>
                <li><strong>Пакет «Профессиональный»:</strong> 40 фотосессий — 2490₽ (~62₽/шт)</li>
                <li><strong>Пакет «Студия»:</strong> 100 фотосессий — 4990₽ (~50₽/шт)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                4.2. Каждая фотосессия включает 4 профессиональных фото товара.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                4.3. Все цены указаны в российских рублях и включают НДС (если применимо).
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                4.4. Исполнитель имеет право изменять стоимость услуг, при этом стоимость
                уже оплаченных услуг изменению не подлежит.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Порядок оплаты</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                5.1. Оплата услуг производится через платежную систему ЮKassa.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                5.2. Оплата производится в российских рублях.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                5.3. Услуги считаются оказанными с момента предоставления Заказчику
                обработанных изображений (4 фото на фотосессию).
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                5.4. Исполнитель не несет ответственности за задержки, связанные с работой
                платежных систем.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Права и обязанности сторон</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>6.1. Исполнитель обязуется:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Обеспечить доступность Сервиса</li>
                <li>Обрабатывать изображения в течение 10-15 секунд</li>
                <li>Обеспечить конфиденциальность данных</li>
                <li>Немедленно удалять обработанные изображения с серверов</li>
                <li>Предоставлять техническую поддержку</li>
                <li>Обеспечить качество AI-генерации на уровне не ниже 8/10</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                <strong>6.2. Заказчик обязуется:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Соблюдать условия настоящей Оферты</li>
                <li>Загружать только легальный контент</li>
                <li>Не использовать Сервис в противоправных целях</li>
                <li>Своевременно оплачивать услуги</li>
                <li>Не злоупотреблять реферальной программой</li>
                <li>Не использовать пакетную загрузку для превышения лимитов</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Реферальная программа</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                7.1. Заказчик может приглашать новых пользователей по реферальной ссылке.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                7.2. За каждого нового пользователя, зарегистрировавшегося по реферальной
                ссылке, Заказчик получает 2 бесплатные фотосессии.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                7.3. При совершении покупки приглашенным пользователем, Заказчик получает
                5% от суммы покупки в виде дополнительных фотосессий.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                7.4. Бонусы начисляются автоматически и могут быть использованы для
                создания фотосессий.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                7.5. При обнаружении накрутки рефералов Исполнитель имеет право аннулировать
                бонусы и заблокировать аккаунт Заказчика.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Пакетная загрузка</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                8.1. Сервис поддерживает пакетную загрузку изображений (до 100 фото за раз).
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                8.2. При пакетной загрузке Заказчик видит стоимость обработки до начала.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                8.3. Заказчик может выбрать обработку всех фото, частичную обработку
                (в пределах доступного баланса) или отменить операцию.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                8.4. При ошибках обработки баланс возвращается автоматически.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Кастомные стили</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                9.1. Заказчик может создавать кастомные стили фотосессий с помощью AI.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                9.2. Для создания стиля требуется описание товара (3-100 символов) и
                описание желаемого стиля (10-300 символов).
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                9.3. Заказчик может сохранить до 4 кастомных стилей для переиспользования.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                9.4. Создание кастомного стиля не требует дополнительной оплаты.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Возврат средств</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                10.1. Возврат средств возможен в течение 7 дней с момента оплаты при
                наличии технических проблем, препятствующих использованию Сервиса.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                10.2. Возврат не производится, если Заказчик уже использовал часть
                приобретенных фотосессий.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                10.3. Для получения возврата необходимо обратиться в службу поддержки
                через Telegram бот.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                10.4. Возврат средств осуществляется тем же способом, которым была
                произведена оплата, в течение 10 рабочих дней.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Ответственность сторон</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                11.1. Исполнитель не несет ответственности за качество обработки,
                не соответствующее ожиданиям Заказчика, если обработка была выполнена
                технически корректно с оценкой качества не ниже 8/10.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                11.2. Исполнитель не несет ответственности за содержание загружаемых
                Заказчиком изображений.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                11.3. Исполнитель не несет ответственности за временную недоступность
                Сервиса по причинам технического обслуживания.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                11.4. Заказчик несет полную ответственность за легальность загружаемого контента.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Конфиденциальность</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                12.1. Обработка персональных данных осуществляется в соответствии с
                Политикой конфиденциальности.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                12.2. Загруженные изображения не сохраняются на серверах Исполнителя и
                удаляются сразу после обработки.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Срок действия оферты</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                13.1. Настоящая Оферта вступает в силу с момента публикации и действует
                до момента её отзыва Исполнителем.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                13.2. Исполнитель имеет право внести изменения в условия Оферты.
                Изменения вступают в силу с момента их публикации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Разрешение споров</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                14.1. Все споры решаются путем переговоров.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                14.2. В случае невозможности урегулирования споров путем переговоров,
                они подлежат разрешению в судебном порядке в соответствии с
                законодательством Российской Федерации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">15. Прочие условия</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                15.1. Настоящая Оферта регулируется и толкуется в соответствии с
                законодательством Российской Федерации.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                15.2. Признание судом какого-либо положения Оферты недействительным не
                влечет за собой недействительность остальных положений.
              </p>
            </section>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
              Дата публикации: {new Date().toLocaleDateString('ru-RU')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

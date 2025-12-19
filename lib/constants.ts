export const BOT_USERNAME = "SalePhotosession_bot";
export const BOT_URL = `https://t.me/${BOT_USERNAME}`;

/**
 * Generates bot URL with UTM parameters embedded in Telegram start parameter
 * Uses short UTM format: source_medium_campaign_content
 *
 * @param source - Traffic source (e.g., "hero", "cta", "pricing", "footer")
 * @param packageId - Optional package ID for direct purchase links (e.g., "1", "2", "3")
 * @returns Full bot URL with embedded UTM tracking
 *
 * Examples:
 * - getBotUrl("hero") -> ?start=website_button_site_hero
 * - getBotUrl("pricing", "1") -> ?start=package_1_website_button_site_pricing
 */
export function getBotUrl(source: string, packageId?: string): string {
  // Short UTM format for Telegram deep links (Telegram only supports ?start=VALUE)
  // Format: source_medium_campaign_content
  const utmShort = `website_button_site_${source}`;

  // Combine package link with UTM tracking if package ID provided
  const startParam = packageId
    ? `package_${packageId}_${utmShort}`
    : utmShort;

  return `${BOT_URL}?start=${startParam}`;
}

// Free photoshoots for new users
export const FREE_PHOTOSHOOTS_COUNT = 2;

// Referral program configuration
export const REFERRAL_REWARD_START = 2;
export const REFERRAL_REWARD_PURCHASE_PERCENT = 5;

// Metrika goals
export const METRIKA_GOAL_START = "start_bot";
export const METRIKA_GOAL_FIRST_PHOTOSHOOT = "first_photoshoot";
export const METRIKA_GOAL_PURCHASE = "purchase";

export const PRICING_PACKAGES = [
  {
    id: 1,
    name: "Стартовый",
    price: 299,
    photos: 3,
    pricePerPhoto: "~97₽/шт",
    isPopular: false,
    features: ["3 фотосессии", "Все стили (Lifestyle, Studio, Interior, Creative)", "4 фото на фотосессию"],
  },
  {
    id: 2,
    name: "Бизнес",
    price: 799,
    photos: 10,
    pricePerPhoto: "~80₽/шт",
    isPopular: false,
    features: ["15 фотосессий", "Сохранение до 6 стилей", "Приоритетная обработка"],
  },
  {
    id: 3,
    name: "Профессиональный",
    price: 1999,
    photos: 30,
    pricePerPhoto: "~67₽/шт",
    isPopular: true,
    features: ["40 фотосессий", "Максимальная выгода", "Персональная поддержка"],
  },
  {
    id: 4,
    name: "Студия",
    price: 4990,
    photos: 100,
    pricePerPhoto: "~50₽/шт",
    isPopular: false,
    features: ["100 фотосессий", "Для маркетплейсов и каталогов", "VIP поддержка 24/7"],
  },
];

export const FEATURES = [
  {
    icon: "Palette",
    title: "4 профессиональных стиля",
    description: "Lifestyle, Studio, Interior, Creative — создайте идеальный образ товара для любой платформы.",
  },
  {
    icon: "Sparkles",
    title: "AI-трансформация",
    description: "Нейросеть превращает обычные фото в профессиональные снимки за считанные секунды.",
  },
  {
    icon: "Images",
    title: "Пакетная загрузка",
    description: "Загружайте альбомом до 100 фото за раз. Автоматическая обработка с умным управлением балансом.",
  },
  {
    icon: "Brain",
    title: "Кастомные стили",
    description: "Создайте уникальный стиль для бренда. Опишите словами — ИИ создаст профессиональную фотосессию.",
  },
  {
    icon: "Zap",
    title: "Мгновенный результат",
    description: "Получите готовые фото через 10-15 секунд. Идеально для загруженных маркетплейсов.",
  },
  {
    icon: "Save",
    title: "Сохранение стилей",
    description: "До 4 сохранённых стилей для быстрого доступа. Применяйте к разным товарам.",
  },
  {
    icon: "Smartphone",
    title: "Работает в Telegram",
    description: "Никаких установок. Просто отправьте фото боту и получите результат.",
  },
  {
    icon: "Shield",
    title: "Безопасность данных",
    description: "Фото не сохраняются после обработки. Оплата через ЮKassa.",
  },
];

export const USE_CASES = [
  {
    icon: "ShoppingBag",
    title: "Продавцы на маркетплейсах",
    description: "Wildberries, Ozon, Яндекс.Маркет — создавайте привлекательные карточки товаров, которые выделяются среди конкурентов.",
  },
  {
    icon: "Store",
    title: "Владельцы интернет-магазинов",
    description: "Профессиональные фото для каталога без затрат на фотостудию. Все стили в одном месте.",
  },
  {
    icon: "Instagram",
    title: "SMM и маркетологи",
    description: "Создавайте вау-контент для Instagram, VK, Telegram. Lifestyle-фото увеличивают конверсию до 40%.",
  },
  {
    icon: "Package",
    title: "Дропшипперы",
    description: "Трансформируйте стоковые фото поставщиков в уникальный визуальный контент для ваших объявлений.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Откройте бот",
    description: "Нажмите кнопку и запустите Telegram бот",
  },
  {
    step: 2,
    title: "Загрузите фото товара",
    description: "Отправьте фото или выберите понравившийся стиль",
  },
  {
    step: 3,
    title: "Получите результат",
    description: "Профессиональная фотосессия готова за 10-15 секунд!",
  },
];

export const PHOTOSHOOT_STYLES = [
  {
    id: "lifestyle",
    name: "Lifestyle",
    description: "Товар в реальной жизненной ситуации",
    icon: "Heart",
    examples: "Одежда на модели, гаджеты в руках, косметика в интерьере",
  },
  {
    id: "studio",
    name: "Studio",
    description: "Классическая студийная съёмка",
    icon: "Camera",
    examples: "Чистый фон, профессиональное освещение, фокус на товаре",
  },
  {
    id: "interior",
    name: "Interior",
    description: "Товар в стильном интерьере",
    icon: "Home",
    examples: "Мебель в комнате, декор на полках, техника на столе",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Креативные и уникальные композиции",
    icon: "Sparkles",
    examples: "Художественные ракурсы, необычные фоны, акценты",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Как начать пользоваться ботом?",
    answer: "Нажмите кнопку \"Открыть Telegram бот\" на этой странице. Бот автоматически запустится, и вы сможете сразу отправить фото товара. Первые 2 фотосессии совершенно бесплатно!",
  },
  {
    question: "Какие стили фотосессий доступны?",
    answer: "Доступны 4 профессиональных стиля: Lifestyle (товар в реальной обстановке), Studio (классическая студийная съёмка), Interior (товар в интерьере), Creative (креативные композиции). Плюс вы можете создать свой уникальный стиль!",
  },
  {
    question: "Как работает пакетная загрузка фото?",
    answer: "Загрузите несколько фото как обычный альбом в Telegram — бот автоматически определит все изображения и предложит обработать их. Вы увидите стоимость и сможете выбрать: обработать всё, частично (по балансу) или отменить. Баланс возвращается при ошибках.",
  },
  {
    question: "Как создать кастомный стиль?",
    answer: "Процесс занимает 3 шага: (1) опишите товар (3-100 символов), (2) опишите желаемый стиль (10-300 символов, например 'минималистичный белый фон, мягкое освещение'), (3) выберите количество вариаций (1-4). ИИ на базе Claude 3.5 Sonnet создаст профессиональную фотосессию с оценкой качества 8/10+.",
  },
  {
    question: "Сколько стоит одна фотосессия?",
    answer: "Первые 2 фотосессии абсолютно бесплатно для новых пользователей. Далее стоимость начинается от 50₽ за фотосессию в зависимости от выбранного пакета. Каждая фотосессия включает 4 фото. Чем больше пакет, тем выгоднее!",
  },
  {
    question: "Как быстро генерируются фото?",
    answer: "Нейросеть обрабатывает ваше фото и создаёт профессиональную фотосессию за 10-15 секунд. Это в сотни раз быстрее и дешевле настоящей фотостудии!",
  },
  {
    question: "Можно ли сохранить и переиспользовать созданный стиль?",
    answer: "Да! Вы можете сохранить до 4 кастомных стилей. Создайте уникальный стиль один раз, сохраните его и применяйте к десяткам или сотням товаров. Идеально для поддержания единого фирменного стиля каталога.",
  },
  {
    question: "Можно ли использовать фото для маркетплейсов?",
    answer: "Абсолютно! Наши фото идеально подходят для Wildberries, Ozon, Яндекс.Маркет и других платформ. Studio стиль создаёт фото на чистом фоне, а Lifestyle повышает привлекательность карточки товара. Пакетная загрузка позволяет обновить весь каталог за один вечер.",
  },
  {
    question: "Что делать, если результат не понравился?",
    answer: "Вы можете сохранить понравившиеся стили и переиспользовать их для других товаров. Если результат не устроил, попробуйте другой стиль или создайте кастомный стиль, описав точно то, что хотите увидеть. Качество исходника также влияет на результат.",
  },
  {
    question: "Вы сохраняете мои фотографии?",
    answer: "Нет, мы не храним ваши изображения. Фото обрабатываются в реальном времени и сразу удаляются с серверов после отправки вам результата. Ваша конфиденциальность для нас приоритет.",
  },
  {
    question: "Какие способы оплаты доступны?",
    answer: "Оплата производится через ЮKassa — самый надежный платежный сервис в России. Принимаем все банковские карты: Visa, MasterCard, МИР, а также СБП и электронные кошельки.",
  },
];

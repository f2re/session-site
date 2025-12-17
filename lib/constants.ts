export const BOT_USERNAME = "SalePhotosession_bot";
export const BOT_URL = `https://t.me/${BOT_USERNAME}`;

/**
 * Generates bot URL with UTM parameters for Yandex Metrika analytics
 * @param source - Traffic source (e.g., "hero", "cta", "pricing", "footer")
 * @param startParam - Optional Telegram start parameter
 * @returns Full bot URL with UTM parameters
 */
export function getBotUrl(source: string, startParam?: string): string {
  const utmParams = new URLSearchParams({
    utm_source: "website",
    utm_medium: "button",
    utm_campaign: "photo_sessions",
    utm_content: source,
  });

  // Add Telegram start parameter if provided
  let url = BOT_URL;
  if (startParam) {
    url += `?start=${startParam}`;
    return `${url}&${utmParams.toString()}`;
  }

  return `${url}?${utmParams.toString()}`;
}

// Free photoshoots for new users
export const FREE_PHOTOSHOOTS_COUNT = 2;

// Referral program configuration
export const REFERRAL_REWARD_START = 5;
export const REFERRAL_REWARD_PURCHASE_PERCENT = 10;

// Metrika goals
export const METRIKA_GOAL_START = "start_bot";
export const METRIKA_GOAL_FIRST_PHOTOSHOOT = "first_photoshoot";
export const METRIKA_GOAL_PURCHASE = "purchase";

export const PRICING_PACKAGES = [
  {
    id: 1,
    name: "Пробный",
    price: 149,
    photos: 3,
    pricePerPhoto: "~50₽/шт",
    isPopular: false,
    features: ["3 фотосессии", "Все стили (Lifestyle, Studio, Interior, Creative)", "Быстрая генерация"],
  },
  {
    id: 2,
    name: "Стартовый",
    price: 299,
    photos: 10,
    pricePerPhoto: "~30₽/шт",
    isPopular: false,
    features: ["10 фотосессий", "Сохранение понравившихся стилей", "Приоритетная обработка"],
  },
  {
    id: 3,
    name: "Профи",
    price: 899,
    photos: 40,
    pricePerPhoto: "~22₽/шт",
    isPopular: true,
    features: ["40 фотосессий", "Максимальная выгода", "Персональная поддержка"],
  },
  {
    id: 4,
    name: "Бизнес",
    price: 1999,
    photos: 100,
    pricePerPhoto: "~20₽/шт",
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
    icon: "Zap",
    title: "Мгновенный результат",
    description: "Получите готовые фото через 10-15 секунд. Идеально для загруженных маркетплейсов.",
  },
  {
    icon: "Save",
    title: "Сохранение стилей",
    description: "Понравился стиль? Сохраните и переиспользуйте для всех товаров каталога.",
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
    answer: "Доступны 4 профессиональных стиля: Lifestyle (товар в реальной обстановке), Studio (классическая студийная съёмка), Interior (товар в интерьере), Creative (креативные композиции). Выбирайте подходящий под вашу задачу!",
  },
  {
    question: "Сколько стоит одна фотосессия?",
    answer: "Первые 2 фотосессии абсолютно бесплатно для новых пользователей. Далее стоимость начинается от 20₽ за фотосессию в зависимости от выбранного пакета. Чем больше пакет, тем выгоднее!",
  },
  {
    question: "Как быстро генерируются фото?",
    answer: "Нейросеть обрабатывает ваше фото и создаёт профессиональную фотосессию за 10-15 секунд. Это в сотни раз быстрее и дешевле настоящей фотостудии!",
  },
  {
    question: "Можно ли использовать фото для маркетплейсов?",
    answer: "Абсолютно! Наши фото идеально подходят для Wildberries, Ozon, Яндекс.Маркет и других платформ. Studio стиль создаёт фото на чистом фоне, а Lifestyle повышает привлекательность карточки товара.",
  },
  {
    question: "Что делать, если результат не понравился?",
    answer: "Вы можете сохранить понравившиеся стили и переиспользовать их для других товаров. Если результат не устроил, попробуйте другой стиль или загрузите другое исходное фото — качество исходника влияет на результат.",
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

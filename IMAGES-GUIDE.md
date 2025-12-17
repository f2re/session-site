# Инструкция по работе с картинками

## Где добавить реальные примеры фото из бота

Для демонстрации возможностей бота на лендинге предусмотрены специальные места для изображений примеров "До/После".

### 1. Структура папки для изображений

Создайте следующую структуру в папке `public/`:

```
public/
├── examples/
│   ├── lifestyle/
│   │   ├── before.jpg
│   │   └── after.jpg
│   ├── studio/
│   │   ├── before.jpg
│   │   └── after.jpg
│   ├── interior/
│   │   ├── before.jpg
│   │   └── after.jpg
│   └── creative/
│       ├── before.jpg
│       └── after.jpg
```

### 2. Требования к изображениям

#### Размер и формат:
- **Формат**: JPG или PNG
- **Рекомендуемый размер**: 800x800px - 1200x1200px
- **Максимальный размер файла**: до 500 KB (для быстрой загрузки)
- **Соотношение сторон**: 1:1 (квадрат) или 4:3

#### Качество:
- Высокое разрешение (не менее 72 DPI для веба)
- Хорошее освещение
- Четкость изображения

### 3. Как подготовить изображения

1. **Сделайте скриншоты из бота** или экспортируйте фото
2. **Оптимизируйте размер** с помощью инструментов:
   - [TinyPNG](https://tinypng.com/) - онлайн сжатие
   - [Squoosh](https://squoosh.app/) - расширенная оптимизация
   - ImageMagick (командная строка):
     ```bash
     convert input.jpg -quality 85 -resize 1000x1000 output.jpg
     ```

3. **Переименуйте файлы** согласно структуре выше

### 4. Обновление компонента BeforeAfter

После добавления изображений обновите компонент `/home/user/session-site/components/sections/BeforeAfter.tsx`:

```tsx
const examples = [
  {
    id: 1,
    style: "Lifestyle",
    before: "/examples/lifestyle/before.jpg",
    after: "/examples/lifestyle/after.jpg",
    beforeText: "Простое фото товара",
    afterText: "Профессиональная сцена использования",
    gradient: "gradient-lifestyle",
  },
  {
    id: 2,
    style: "Studio",
    before: "/examples/studio/before.jpg",
    after: "/examples/studio/after.jpg",
    beforeText: "Фото на обычном фоне",
    afterText: "Студийная съёмка с освещением",
    gradient: "gradient-studio",
  },
  // ... остальные стили
];
```

### 5. Альтернатива: использование placeholder изображений

Если реальных фото пока нет, используйте placeholder сервисы:

1. **Unsplash Source API**:
   ```
   https://source.unsplash.com/800x800/?product
   ```

2. **Lorem Picsum**:
   ```
   https://picsum.photos/800/800
   ```

3. **Placehold.co**:
   ```
   https://placehold.co/800x800/gradient/white
   ```

### 6. Оптимизация производительности

#### Используйте Next.js Image компонент

Замените обычные `<img>` теги на `<Image>` из Next.js:

```tsx
import Image from 'next/image';

<Image
  src="/examples/lifestyle/before.jpg"
  alt="Исходное фото товара"
  width={400}
  height={400}
  quality={85}
  loading="lazy"
/>
```

#### Преимущества:
- Автоматическая оптимизация
- Lazy loading
- Адаптивные размеры
- Современные форматы (WebP, AVIF)

### 7. Быстрая команда для добавления примеров

```bash
# Создать структуру папок
mkdir -p public/examples/{lifestyle,studio,interior,creative}

# Скопировать ваши изображения
cp /path/to/your/lifestyle-before.jpg public/examples/lifestyle/before.jpg
cp /path/to/your/lifestyle-after.jpg public/examples/lifestyle/after.jpg
# ... повторить для всех стилей
```

### 8. Проверка результата

1. Запустите dev-сервер:
   ```bash
   npm run dev
   ```

2. Откройте http://localhost:3000

3. Проверьте секцию "До и После" - должны отображаться ваши изображения

### 9. SEO оптимизация изображений

Добавьте атрибуты `alt` для всех изображений:

```tsx
<Image
  src="/examples/lifestyle/before.jpg"
  alt="Исходное фото товара - простой снимок без обработки"
  width={400}
  height={400}
/>

<Image
  src="/examples/lifestyle/after.jpg"
  alt="Профессиональная фотосессия товара в стиле Lifestyle"
  width={400}
  height={400}
/>
```

## Дополнительные рекомендации

### Контент для примеров:

- **Lifestyle**: Товар в руках модели, в использовании
- **Studio**: Товар на чистом фоне с профессиональным освещением
- **Interior**: Товар в интерьере комнаты/офиса
- **Creative**: Необычные ракурсы, художественная подача

### Цветовая гармония:

Убедитесь, что цвета на фото гармонируют с градиентами на сайте:
- Lifestyle: персиковые/теплые тона
- Studio: голубые/холодные тона
- Interior: фиолетово-оранжевые
- Creative: пурпурные/яркие

---

## Поддержка

Если возникли вопросы по добавлению изображений, проверьте:
1. Правильность путей к файлам
2. Размер файлов (не более 500 KB)
3. Формат изображений (JPG/PNG)
4. Права доступа к папке `public/`

// Имитация обращения к серверу/БД. Данные можно заменить на реальный запрос,
// интерфейс функций при этом не изменится.
const products = [
  {
    id: 1,
    name: 'Modern UI Kit',
    category: 'UI Kits',
    price: 29,
    rating: 5,
    stock: 120,
    image: '/images/ui-kit.svg',
    description: 'Набор из более чем 200 компонентов интерфейса для Figma: кнопки, формы, карточки, навигация.',
  },
  {
    id: 2,
    name: 'Landing Page Template',
    category: 'Templates',
    price: 49,
    rating: 4,
    stock: 35,
    image: '/images/template.svg',
    description: 'Адаптивный шаблон лендинга на HTML и CSS с готовыми секциями: герой-блок, тарифы, отзывы.',
  },
  {
    id: 3,
    name: 'Inter Display Font Pack',
    category: 'Fonts',
    price: 19.5,
    rating: 4,
    stock: 0,
    image: '/images/font.svg',
    description: 'Пакет шрифтов Inter Display с кириллицей: девять начертаний в форматах OTF и WOFF2.',
  },
  {
    id: 4,
    name: 'Design Systems E-book',
    category: 'E-books',
    price: 15,
    rating: 3,
    stock: 500,
    image: '/images/ebook.svg',
    description: 'Электронная книга о построении дизайн-систем: токены, компоненты, документация.',
  },
]

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getAllProducts() {
  await delay(50)
  return products
}

export async function getProductById(id) {
  await delay(50)
  return products.find((product) => String(product.id) === String(id)) ?? null
}

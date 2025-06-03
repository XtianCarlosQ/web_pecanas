// src/data/products.js

export const products = [
  {
    product_id: 'saco-50kg',           // ← minúsculas (sin espacios ni mayúsculas)
    title: 'Saco económico 50 kg',
    price: '26.00',
    unit: 'kg',
    product: 'Saco 50 kg',
    peso: 50, // Peso en kg
    description: 'Saco de 50 kg de pecanas, ideal para negocios de alto volumen.',
    imageSrc: '/images/saco_50kg.jpg',
    imageAlt: 'Saco económico de pecanas',
  },
  {
    product_id: 'saco-40kg',
    title: 'Saco de pecanas 40 kg',
    price: '26.50',
    unit: 'kg',
    product: 'Saco 40 kg',
    peso: 40, // Peso en kg
    description: 'Saco de 40 kg de pecanas de primera calidad, seleccionadas cuidadosamente.',
    imageSrc: '/images/saco_40kg.jpg',
    imageAlt: 'Saco de pecanas de 40kg',
  },
  {
    product_id: 'pecanas-x-kg',
    title: 'Pecanas por kilo',
    price: '28.00',
    unit: 'kg',
    product: 'Kg de pecanas sin pelar',
    peso: 1, // Peso en kg
    description: 'Compra pecanas frescas y seleccionadas por kilo, ideales para consumo familiar, repostería o pequeños negocios.',
    imageSrc: '/images/pecanas_x_kg_sin_pelar.png',
    imageAlt: 'Pecanas sin pelar por kilo',
  },
  {
    product_id: 'pecanas-peladas',
    title: 'Pecanas peladas',
    price: '65.00',
    unit: 'kg',
    product: 'Kg de pecanas peladas',
    peso: 1, // Peso en kg
    description: 'Pecanas peladas listas para consumo directo o para tus recetas.',
    imageSrc: '/images/pecanas_peladas_2.jpg',
    imageAlt: 'Pecanas peladas',
  },
];

// src/config/settings.js

// Número de WhatsApp (sin espacios ni "+")
export const whatsappNumber = '51962210817';

export const messages = {
  // 1) Mensaje genérico para los botones "Contáctanos" del Hero y del index
  contactGeneral: `Estoy interesado en comprar pecanas:

1. *Saco de 50 Kg* - *Precio:* S/ 26.00 por kg
2. *Saco de 40 Kg* - *Precio:* S/ 26.50 por kg
3. *Pecanas sin pelar x Kg* - *Precio:* S/ 28.00 por kg
4. *Pecanas peladas x Kg* - *Precio:* S/ 65.00 por kg

Elija una opción: `,

  // 2) Template para el botón "Solicitar por WhatsApp" en la página de cotizar
  //    Usamos placeholders: {title}, {cantidad}, {peso}, {precio}, {total}, {entrega}
  productRequestTemplate: `¡Hola! Me interesa comprar:

*{title}*

- Cantidad de unidades: {cantidad}
- Peso por unidad: {peso} kg
- Precio unitario (por kg): S/ {precio}
- Total estimado (S/ {precio} × {cantidad} × {peso} kg): S/ {total}
- Forma de entrega: {entrega}

¿Podrían confirmarme la disponibilidad y tiempo de entrega?`,
};

# 🐉 Mortal Kombat Character Picker

Interfaz web interactiva que replica la icónica pantalla de selección de personajes de la franquicia Mortal Kombat. Este proyecto destaca por su alto nivel de dinamismo visual, implementando animaciones sincronizadas y manipulación avanzada del DOM utilizando Vanilla TypeScript dentro del ecosistema de Astro.

🔗 **[Ver Selector en Vivo](https://mortal-kombat-picker.netlify.app/)**

## 🚀 Arquitectura y Características

* **Renderizado Dinámico:** Inyección de tarjetas de personajes (HTML strings) directamente en el DOM en tiempo de ejecución, optimizando la carga de la vista principal.
* **Sistema de Paginación (Slider):** Lógica matemática personalizada para la navegación circular del catálogo de personajes, renderizando bloques de 3 en 3.
* **Animaciones Coreografiadas:** Manipulación de clases CSS mediante JavaScript (`classList.add/remove`) para detonar animaciones por fotogramas clave (`@keyframes`) coordinadas con tiempos de espera (`setTimeout`).
* **Optimización de Interfaz:** Diseño completamente responsivo con Tailwind CSS, adaptando tamaños tipográficos, espacios y layouts para móviles, tablets y monitores grandes.

## 🛠️ Tecnologías Utilizadas

* **Astro** (Framework de renderizado)
* **TypeScript / Vanilla JS** (Lógica de estado y DOM)
* **Tailwind CSS** (Estilización utilitaria)
* **HTML5 Semántico**

## 🧠 Retos Técnicos
El mayor desafío de este desarrollo fue orquestar las transiciones visuales (entrada de la imagen del personaje, cambio de texto y título) sin usar librerías de animación externas o frameworks reactivos. Se construyó un sistema de utilidades (`domUtils.ts`) para seleccionar nodos de forma segura y aplicar/remover clases de animación en el momento exacto, garantizando una experiencia fluida y libre de parpadeos visuales.

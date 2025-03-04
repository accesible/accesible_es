---
id: foco
title: Foco
slug: /foco
image: /img/logo.svg
description: Foco accesible para la web con ejemplos
keywords: [enfocar elementos, foco, resaltar, tabulación]
---

<img src="/img/foco.svg" alt="" />

> El indicador de foco es para los usuarios de teclado, lo que el cursor es para los usuarios de ratón.

Todo elemento operable mediante teclado **debe ser resaltado al recibir el foco**. [Criterio 2.4.7 ↗️](https://www.w3.org/TR/WCAG22/#focus-visible)

Los navegadores proporcionan sus propios indicadores de enfoque para elementos interactivos nativos (botones, enlaces, campos de formulario).


**Estos indicadores no siempre cumplen con el criterio**, así que usaremos `otline: none` para usar unos propios y asegurarnos que cumplimos con unos mínimos.

Ejemplo de código css para personalizar el foco:

```css
:focus {
	outline: none;
}

/* Ejemplo, al hacer foco con el teclado mostrará una línea punteada negra. */
button:focus-visible {
  outline: 4px dashed black;
}
  
/* Ejemplo, si hacemos foco con el puntero muestra un sombreado. */
button:focus:not(:focus-visible) {
  outline: none;
  box-shadow: 1px 1px 5px rgba(1, 1, 0, .7);
}

```

### Contraste del foco

Deben tener una relación de contraste de color de al menos 3:1 frente a los colores adyacentes.


### Requisitos WCAG 2.2

- SC 2.4.11 Apariencia de foco (Nivel AA),
- SC 2.4.12 Foco no oscurecido (mínimo) (nivel AA), y
- SC 2.4.13 Foco no oscurecido (mejorado) (nivel AAA)
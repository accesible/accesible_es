---
id: color
title: Color
image: /img/color.svg
description: Color accesible para la web con ejemplos sencillos
keywords: [colores accesibles, contraste accesibilidad, gráficas accesibles]
---

![img](/img/color.svg)

- Consigue el suficiente [contraste](#contraste) entre el contenido y su fondo.
- Evita colores muy brillantes o demasiado claros.
- No debemos basarnos sólo en el color para transmitir información.

---

> Los colores opuestos o complementarios son aquellos colores que se encuentran en una posición oponible dentro del círculo cromático.

## Contraste

- **Nivel A** - min ratio 3:1
- **Nivel AA** - min ratio 4.5:1 texto normal / min ratio 3:1 texto grande
- **Nivel AAA** - min ratio 7:1 texto normal / min ratio 4.5:1 texto grande

:::tip Nota
Se considera texto grande a partir de 24px o 18px si es negrita
:::

En la sección de recursos tienes [herramientas para medir el contraste](https://accesible.es/recursos#evaluaci%C3%B3n-de-contraste). 🌈

---

Estas normas de contraste también incluyen:

- Placeholders.
- Estados focus / hover.
- Degradados, en este caso testamos el área de contraste más bajo.

Quedan exentos:
- Campos deshabilitados.
- Logotipos.
- Banderas.
- Elementos ocultos.
- Imágenes puramente decorativas o fotografías.

:::tip Nota
No se recomienda usar negro puro `#000000` sobre blanco puro `#FFFFFF` y viceversa, debido a que aumenta la [**fatiga visual**](https://es.wikipedia.org/wiki/Astenop%C3%ADa)
::: 

## Color en gráficas

- Contrasta los colores entre los objetos de las gráficas.
- Incluye **líneas con suficiente contraste** entre colores adyacentes.
- **Incluye etiquetas y valores** con el gráfico.

Las personas con algún impedimento para distinguir colores, como por ejemplo un usuario daltónico, tendrá dificultades para interpretar una gráfica que diferencia sus datos sólo por el color.


<img src="/img/daltonismo-grafica.svg" class="full" />

Como solución, podemos añadir sobre estos colores, etiquetas de texto o texturas que diferencian mejor los datos.

<img src="/img/accesible-grafica.svg" class="full" />


Si usamos mapas o gráficos circulares, mejoraremos el contraste añadiendo un contorno o líneas divisorias:

<img src="/img/contraste-color-grafica.svg" class="full" />


## Validación de campos

Al igual que las gráficas, no debemos usar solo el color para comunicar errores o transmitir información en formularios.

Por ejemplo, si para resaltar campos erróneos usamos un borde rojo, un usuario con [protanopia](https://es.wikipedia.org/wiki/Protanopia) (carencia de sensibilidad al color rojo), no podría identificarlos correctamente.

Mejoramos la accesibilidad del formulario añadiendo iconos y mensajes informativos en los campos erróneos.

## Utilidades

Hay múltiples aplicaciones, herramientas online o extensiones de navegador que permiten analizar el contraste o nos ofrecen paletas adecuadas para nuestro sitio.

https://webaim.org/resources/contrastchecker/

https://contrast-checker.glitch.me/


En la sección de [recursos](recursos) también puedes encontrar aplicaciones útiles.



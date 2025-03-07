---
id: imagen
title: Imágenes
slug: /imagen
image: /img/imagen.svg
description: Imagen accesible para la web con ejemplos sencillos
keywords: [imágenes accesibles, texto alternativo, wai-aria imagen]
---

<img src="/img/imagen.svg" alt="" />

- **Todas las imágenes deben tener el atributo alt**, en caso de imágenes decorativas, debe estar vacío.
  ```html
    <!-- imagen no decorativa -->
    <img src="mi-imagen.jpg" alt="Descripción">

    <!-- imagen decorativa -->
    <img src="mi-imagen-decorativa.jpg" alt="">
  ```
- El texto alternativo debe incluir una descripción concisa (**125 caracteres máximo**), intentando transmitir la misma información que la imagen.
- En caso de descripciones muy largas, usa ~~longdesc~~ **aria-describedby**
  -  ```html
    <img src="pavoreal.jpg"
    alt="Cabeza de pavo real macho"
    aria-describedby="description">

    <p id="description">
      El macho es de color azul metálico en la coronilla, siendo las plumas de la cabeza cortas y rizadas. La cresta en forma de abanico en la cabeza está hecha de plumas con ejes negros desnudos y rematadas con correas de color verde ruborizado. Una franja blanca sobre el ojo y una mancha blanca en forma de media luna debajo del ojo están formadas por piel blanca desnuda. Los lados de la cabeza tienen plumas de color azul verdoso iridiscentes. La espalda tiene plumas escamosas de color verde bronce con marcas negras y cobrizos..
    </p>
    ```
- Imágenes funcionales deben llevar en el `alt` **la acción que realizan**.
- Si la imagen tiene información compleja, como gráficos, se debe añadir breve texto identificativo y, a continuación, la descripción detallada de la información debe ser proporcionada en otros lugares (por ejemplo, en una tabla de datos).
- Si la imagen está suficientemente descrita en el texto - por ejemplo, un simple diagrama que ilustra lo que está escrito en el texto de la página web puede tener breve texto alternativo como "Diagrama de flujo de trabajo como se ha descrito anteriormente", o bien dejar vacío el texto alternativo.

:::tip Nota
No es necesario que empieces los textos alternativos con **"Imagen de"**, los propios lectores de pantalla ya lo hacen.
:::

<!--
## Imagen en botón
-->
---

## Imagen en link

Si el enlace no tiene texto descriptivo, debemos añadir la etiqueta `alt` y el texto debe transmitir la acción.
```html
<!-- Correcto -->
<a href="#url">
    <img src="lupa.jpg" alt="Buscar">
</a>
```

Si el enlace tiene texto descriptivo, debemos dejar vacío el atributo `alt`
```html
<!-- Correcto, no añadimos alt ya que el enlace tiene texto -->
<a href="#url">
    <img src="lupa.jpg" alt="">
    Buscar
</a>

<!-- Incorrecto, duplicidad de información, texto y alt -->
<a href="#url">
    <img src="lupa.jpg" alt="Buscar">
    Buscar
</a>
```

- Si la imagen está dentro de un botón, debemos añadir también el atributo `title`, usar `aria-label` o bien añadir un texto.
```html

<!-- Correcto -->
<button>
  <img src="impresora.png" alt="Imprimir documento" title="Imprimir documento">
</button>

<button aria-label="Imprimir documento">
  <img src="impresora.png" alt>
</button>

<button>
  <img src="impresora.png" alt>
  Imprimir
</button>

<button>
  <img src="impresora.png" alt>
  <span class="ocultar" role="presentation">Imprimir</span>
</button>
```

## Imagen optimizada al dispositivo

Podemos ofrecer distintas imágenes dependiendo la densidad o tamaño de pantalla donde se está visualizando la página.



```html

  <!-- dependiendo la densidad de px -->
  <img 
    alt="Gato observando la calle a través de una ventana."
    src="gato-lowres.jpg"
    srcset="
      gato-high-1.jpg 1.5x,
      gato-high-2.jpg 2x,
      gato-high-3.jpg 3x,
      gato-high-4.jpg 4x,
      gato-high-5.jpg 100x
    "
  >

  <!-- dependiendo la resolución -->
  <img 
    alt="Gato observando la calle a través de una ventana."
    src="gato-lowres.jpg"
    srcset="
      gato-s.jpg  300w,
      gato-m.jpg  600w,
      gato-l.jpg  1200w,
      gato-xl.jpg 2000w
    "
  >  
```
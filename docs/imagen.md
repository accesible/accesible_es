---
id: imagen
title: Imágenes
image: /img/imagen.svg
description: Imagen accesible para la web con ejemplos sencillos
keywords: [imágenes accesibles, texto alternativo, wai-aria imagen]
---

![img](/img/imagen.svg) 


- **Todas las imágenes deben tener el atributo alt**, en caso de imágenes decorativas, debe estar vacío.
  ```html
    <!-- imagen no decorativa -->
    <img src="mi-imagen.jpg" alt="Descripción">

    <!-- imagen decorativa -->
    <img src="mi-imagen-decorativa.jpg" alt="">
  ```
- El texto alternativo debe incluir una descripción concisa (**125 caracteres máximo**), intentando transmitir la misma información que la imagen.
- En caso de **descripciones muy largas usa el atributo [longdesc](https://www.w3.org/TR/WCAG20-TECHS/H45.html).**
- Imágenes funcionales deben llevar en el **alt la acción que realizan**.
- Si la imagen tiene información compleja, como gráficos, se debe añadir breve texto identificativo y, a continuación, la descripción detallada de la información debe ser proporcionada en otros lugares (por ejemplo, en una tabla de datos).
- Si la imagen está suficientemente descrita en el texto - por ejemplo, un simple diagrama que ilustra lo que está escrito en el texto de la página web puede tener breve texto alternativo como "Diagrama de flujo de trabajo como se ha descrito anteriormente.”, o bien dejar vacío el texto alternativo.

:::tip Nota
No es necesario que empieces los textos alternativos con **"Imagen de"** , los propios lectores de pantalla ya lo hacen.
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


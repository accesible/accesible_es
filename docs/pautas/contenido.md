---
id: contenido
title: Contenido
slug: /contenido
image: /img/contenido.svg
description: Contenido accesible para la web con ejemplos sencillos
keywords: [contenidos accesibles, listas, abreviaturas y acrónimos, captcha, scroll infinito]
---

<img src="/img/contenido.svg" alt="" />

**Resumen para crear contenido accesibles:**

- **Todo el contenido debe presentarse en texto o a través de un texto equivalente** (por ejemplo, texto alternativo para imágenes u otros objetos que no sean de texto).
- Usa **rem/em en vez de px** para definir el [tamaño de fuente](#tamaño-de-fuente).
- **No bloquees el [zoom](#zoom)**.
- Usa paginación antes que [scroll infinito](#scroll-infinito).
- Utiliza roles de [WAI-ARIA](wai-aria)
- Identifica los [encabezados](encabezado) y asigna las etiquetas adecuadas para estructurar la página.
- Usa las etiquetas `ol`, `ul` y `dl` para [listas](#listas), cuida la [semántica.](estructura)
- Todas las funciones deben estar disponibles **usando solo el teclado**.
- Ningún elemento debería parpadear más de 3 veces por segundo.


## Texto

- Para dar énfasis, utiliza la etiqueta `<strong>`.
- **Evita el alineado central**, alinea el texto a la izquierda para idiomas de izquierda a derecha ( LTR ) y a la derecha para idiomas de derecha a izquierda ( RTL ).
- No escribas grandes cantidades de texto en MAYÚSCULAS.
- Para texto animado, [utiliza preferencias de movimiento ↗️](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- **Usa un lenguaje sencillo** y evita las figuras retóricas, los modismos y las metáforas complicadas. [3.1.3 (AAA) ↗️](https://www.w3.org/WAI/WCAG22/Understanding/unusual-words)
- **Recomendamos no usar más de 2 tipos de fuente**, cuantas más uses, más tiempo de adaptación necesitará el usuario y peor rendimiento de la web.

### Tamaño de fuente

- **No uses medidas fijas como px**.
- El tamaño de fuente debe ser de al menos **12-14 puntos** o su equivalente.
- Texto en imágenes debe ser al menos de 14 puntos y tener [contraste](color#contraste) suficiente.
- Permite a los usuarios **incrementar el tamaño** de todos los textos **hasta el 200%**. [Criterio 1.4.4 ↗️](https://www.w3.org/WAI/WCAG21/Understanding/resize-text)

### Espaciado

- Un espacio entre líneas adecuado **mejora la legibilidad**, permite pueda ser modificado por el usuario.
- El contenido debe tener al menos el siguiente formateo:
  - Espacio entre líneas: al menos 1.5 veces el tamaño de la fuente.
  - Espacio entre párrafos: al menos 2 veces el tamaño de la fuente.
  - Espacio entre letras: al menos 0.12 veces el tamaño de la fuente.
  - Espacio entre palabras: al menos 0.16 veces el tamaño de la fuente.

### Longitud de línea

Con **líneas de texto demasiado largo**, los usuarios tendrán más dificultades para ubicar donde comienza la siguiente línea, por el contrario, con **líneas de texto demasiado cortas**, el usuario tendrá que estar retrocediendo la vista excesivamente.

- La WCAG recomienda un máximo de 80 caracteres por línea. [1.4.8 - AAA ↗️](https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html)

Si quieres limitar el **número máximo de caracteres por párrafo**, añade este código a tu css:

```css
  /* aplicamos número máximo de caracteres por párrafo */
  p { max-width: 75ch }
```

:::tip Nota
  Según varios estudios, la longitud de línea óptima para el cuerpo del texto es de 50 a 75 caracteres.
:::



## Abreviaturas / Acrónimos

Utiliza la etiqueta `<abbr>` para marcar las abreviaturas.

```html
<p>medicamentos: clorpromazina, quinidina, antibióticos, <abbr>etc.</abbr></p>
```

En el caso de acrónimos, usaremos la etiqueta `<acronym>`.

```html
<p>¡Usar <acronym>HTML</acronym> es fácil y divertido!</p>
```

:::tip Nota
La abreviatura es una versión corta de una palabra y puede estar en minúsculas.

- etc. = etcétera
- tel. = teléfono

El acrónimo está formado por la primera letra de cada palabra de una oración y suelen estár en mayúsculas:

- I.P.N. = Instituto Politécnico Nacional.
- OVNI = Objeto volador no identificado
  
:::

### Añadir información con title

Si necesitamos completar información, generalmente se ha añadido el atributo `title`. 

```html
<p>Él indicó que se trataba de un <acronym title="Objeto volador no identificado">OVNI</acronym> </p>
```


:::warning Atención
Alguno lectores de pantalla como JAWS o NVDA en su configuración por defecto no leen el atributo title.

Debido a esto, la solución óptima sería añadir el texto complementario justo después de la abbreviatura o acrónimo.
:::


```html
/* Solución óptima */ 
<p>Él indicó que se trataba de un <acronym>OVNI</acronym> (Objeto volador no identificado)</p>
```


## Listas

- Utiliza el marcado correcto para las listas `<ul>, <ol>, <dt>`, así los lectores de pantalla las identificarán y sabrán cuántos elementos tiene.

### Tipos de listas

- Lista desordenada, esta lista se representa como una lista con viñetas de elementos
  ```html
  <ul>
    <li>Manzanas</li>
    <li>Peras</li>
    <li>Limones</li>
  </ul>
  ```
- Lista ordenada, usamos la etiqueta `<ol>`, esta lista se representa como una lista numerada de elementos

  ```html
  <ol>
    <li>Encender el ordenador</li>
    <li>Abrir el navegador</li>
    <li>Ir a la web de búsqueda</li>
    <li>Teclear el término a buscar</li>
  </ol>
  ```

- Lista de definición, usamos la etiqueta `<dl>`, esta lista se representa como pares de términos `<dt>` y descripciones `<dd>`
  ```html
  <dl>
    <dt>Café</dt>
    <dd>Bebida caliente negra</dd>
    <dt>Leche</dt>
    <dd>Bebida fría blanca</dd>
  </dl>
  ```

## Scroll infinito

El scroll infinito añade automáticamente contenido en la parte inferior cuando detecta que el usuario se desplaza hacia abajo.

Esto puede ser cómodo, por ejemplo, en las publicaciones de redes sociales, pero en otras ocasiones puede ser frustrante si no se ofrecen alternativas. Por ejemplo, querer acceder directamente a un elemento que está en un punto determinado en una lista grande, o intentar llegar al contenido del pie y no poder hasta que no hayamos cargado todos los elementos 😠.

La paginación nos permite localizar la información de una forma más fácil y rápida, aun así, si nuestro proyecto requiere de scroll infinito, WAI-ARIA nos ofrece una serie de atributos para que el **scroll infinito sea accesible**.

El atributo `role="feed"` permite que los lectores usen el cursor para desplazarse por el listado de elementos dinámicos.

El atributo `aria-busy` indicará si se están renderizando elementos dentro de nuestra área `role="feed"`, durante la carga de elementos su valor debe ser `true` y al terminar esta carga deberá ser `false`.

Si conocemos la posición de los elementos dentro del listado, usaremos el atributo `aria-posinset`, y `aria-setsize` para indicar el número total de elementos, si lo desconocemos será seteado a `-1`

```html

/* Desconocemos el número de elementos que pueden llegar a cargarse */
<section role="feed" aria-busy="false">
  ...
  <article aria-posinset="427" aria-setsize="-1">...</article>
  <article aria-posinset="428" aria-setsize="-1">...</article>
  <article aria-posinset="429" aria-setsize="-1">...</article>
  ...
</section>

/* Conocemos el número de elementos total */
<section role="feed" aria-busy="false">
  ...
  <article aria-posinset="8" aria-setsize="10">...</article>
  <article aria-posinset="9" aria-setsize="10">...</article>
  <article aria-posinset="10" aria-setsize="10">...</article>
  ...
</section>


```

Más información [Feed role - developer.mozilla.org ↗️](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role)

## Idioma

- Dentro de la etiqueta `<html>`, debemos especificar un idioma para la página mediante el atributo **lang**. [Criterio 3.1.1 - Idioma de la página ↗️](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page)

  ```html
  <html lang="en"></html>
  ```

- Añade el atributo **lang** en textos donde quieras que los lectores adapten la pronunciación. [Criterio 3.1.2 - Idiomas en contenido ↗️](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts)
  ```html
  ... y gritó, <span lang="fr">c'est fini!</span>
  ```

## Zoom

No debemos bloquear el zoom, no uses los atributos `user-scalable=no` ni `maximum-scale=1.0` de la metatag viewport.

La forma correcta de uso de viewport sería la siguiente:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

El usuario debe poder hacer zoom de 320px a 1280px, o una ampliación del 400%. [Criterio 1.4.10 - Reflujo ↗️](https://www.w3.org/WAI/WCAG21/Understanding/reflow#viewing-distance-and-display-resolution)

:::tip Nota
Comprueba que no se superpone u oculta ningún contenido al aumentar el zoom o espaciado de texto.
:::

## Ocultar contenido

Si queremos ocultar contenido de forma accesible, aquí te mostramos un ejemplo de código css:

```css
.oculto-visualmente {
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

## Responsive

- Usa mediaqueries
- Ajusta contenidos usando `grid` o `flexbox`.
- No uses medidas fijas para contenedores.
- Permite que las personas puedan usar la vista horizontal o vertical y seguir leyendo y usando todo. [Criterio 1.3.4 - Orientación ↗️](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)
- La información debe ser visible y **no requerir scroll en dos dimensiones** para:
  - Contenido que se desplaza en vertical con una anchura equivalente a 320 píxeles CSS.
  - Contenido que se desplaza en horizontal con una altura equivalente a 256 píxeles CSS.

:::tip Nota
Hay excepciones donde si se permite scroll en dos dimensiones, como en imágenes grandes, mapas o tablas.
:::

### Media queries con css

```css
  <link href="mobile.css" rel="stylesheet" media="screen and (max-width: 600px)">
```

### Media queries con javascript

```js
let esMovil = window.matchMedia("only screen and (max-width: 480px)").matches;
```

## Control de tiempo

- Permite al usuario anular el tiempo de la caducidad de sesión o ajustar este tiempo (debe ser al menos diez veces el tiempo por defecto).
- Notifica al usuario que la sesión va a caducar con un mensaje (permite 20 segundos para interactuar con este aviso).

Excepciones:

- El tiempo de caducidad es superior a 20 horas.
- La caducidad de sesión es esencial para el funcionamiento.
- El límite de tiempo es requerido (por ejemplo, una subasta).

Más información sobre [tiempo ajustable ↗️](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html).

## Captcha

- Ofrece al menos dos modalidades de <abbr lang="en" title="Completely Automated Public Turing test to tell Computers and Humans Apart">CAPTCHA.</abbr>
- **Proporciona una alternativa**, como por ejemplo, contacto directo con atención al cliente para eludir el CAPTCHA.
- No uses CAPTCHA para usuarios ya identificados.

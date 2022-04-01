---
id: contenido
title: Contenido
---

![img](/img/contenido.svg)


- Usa **rem/em en vez de px** para definir el [tamaño de fuente](#tamaño-de-fuente).
- **No bloquees el zoom**, [ver metatags](#metatags).
- Usa paginación antes que [scroll infinito](#scroll-infinito).
- Utiliza roles de [WAI-ARIA](wai-aria) 
- Identifica los [encabezados](encabezado) y asigna las etiquetas adecuadas para estructurar la página.
- Usa las etiquetas `ol`, `ul` y `dl` para [listas](#listas)
- Ningún elemento debería parpadear más de 3 veces por segundo.


## Texto

- Para dar énfasis, utiliza la etiqueta `<strong>`.
- **Evita el alineado central**, alinea el texto a la izquierda para idiomas de izquierda a derecha ( LTR ) y a la derecha para idiomas de derecha a izquierda ( RTL ).
- No escribas grandes cantidades de texto en MAYÚSCULAS.
- Para texto animado, [utiliza prefrencias de movimiento](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- **Utiliza un lenguaje sencillo** y evita las figuras retóricas, los modismos y las metáforas complicadas.
- Añade el atributo **lang** en textos donde quieras que los lectores adapten la pronunciación. 
    ```html 
        ... y gritó, <span lang="fr">c'est fini!</span>
    ```
- **Recomendamos no usar más de 2 tipos de fuente**, cuantas más usemos, más tiempo de adaptación necesitará el usuario (a parte de empeorar el rendimiento de la web).

### Tamaño de fuente

- **No uses medidas fijas como px**.
- El tamaño de fuente debe ser de al menos **12-14 puntos** o su equivalente.
- Texto en imágenes debe ser al menos de 14 puntos y tener [contraste](color#contraste) suficiente.
- Permite a los usuarios **incrementar el tamaño** de todos los textos **hasta el 200%**.


### Espaciado

- Un espacio entre líneas adecuado **mejora la legibilidad**, permite pueda ser modificado por el usuario.
- El contenido debe tener al menos el siguiente formateo:
  - Espacio entre líneas: al menos 1.5 veces el tamaño de la fuente.
  - Espacio entre párrafos: al menos 2 veces el tamaño de la fuente.
  - Espacio entre letras: al menos 0.12 veces el tamaño de la fuente.
  - Espacio entre palabras: al menos 0.16 veces el tamaño de la fuente.


## Abreviaturas / Acrónimos

Utiliza la etiqueta `<abbr>` para marcar las abreviaturas, si fuera necesario, se puede complementar la información con el atributo `title`.

```html
<p>medicamentos: clorpromazina, quinidina, antibióticos, <abbr>etc.</abbr></p>
```

En el caso de acrónimos, usaremos la etiqueta `<acronym>`.

```html
<p>¡Usar <acronym>HTML</acronym> es fácil y divertido!</p>
```

:::tip
La abreviatura es una versión corta de una palabra y puede estar en minúsculas.

- etc. = etcétera
- tel. = teléfono
 
El acrónimo está formado por la primera letra de cada palabra de una oración y suelen estár en mayúsculas:

- I.P.N. = Instituto Politécnico Nacional.
- OVNI = Objeto volador no identificado
:::


## Enlaces

- Describe textualmente el objetivo de los enlaces, evita los "más información", "click aquí".
- Tienen que distinguirse visualmente del resto de texto.
- Deben destacar cuando reciben el foco de teclado.

:::tip
Utiliza enlaces "Saltar al contenido principal" - por ejemplo, añadiendo un enlace en la parte superior de la página que lleve al usuario al comienzo del contenido principal.
:::

## Listas

- Utiliza el marcado correcto para las listas `<ul>, <ol>, <dt>`, así los lectores de pantalla las identificarán y sabrán cuántos elementos tiene. 

### Tipos de listas

- Lista desordenada, esta lista se representa como una lista con viñetas de elementos.
    ```html 
        <ul>
            <li>Manzanas</li>
            <li>Peras</li>
            <li>Limones</li>
        </ul>
    ```
- Lista ordenada (`<ol>`): esta lista se representa como una lista numerada de elementos (cada uno etiquetado con `<li>`).
- Lista de definiciones (`<dl>`): esta lista se representa como pares de términos (`<dt>`) y descripciones (`<dd>`).

## Scroll infinito

El scroll infinito es una funcionalidad que de forma automática carga contenido cuando detecta que el usuario se desplaza hacia abajo.

Esto puede ser cómodo, por ejemplo en las publicaciones de redes sociales, pero en otras ocasiones puede ser frustrante si no se ofrecen alternativas. Por ejemplo querer acceder directamente a un elemento que está en un punto determinado en una lista grande, o intentar llegar al contenido del pie y no poder hasta que no hayamos cargado todos los elementos 😠.

La paginación nos permite localizar la información de una forma más fácil y rápida, aún así, si nuestro proyecto requiere de scroll infinito, WAI-ARIA nos ofrece una serie de atributos para que el **scroll infinito sea accesible**.

El atributo `role="feed"` permite que los lectores usen el cursor para desplazarse por el listado de elementos dinámicos.

El atributo `aria-busy` indicará si se están renderizando elementos dentro de nuestro área `role="feed"`, durante la carga de elementos su valor debe ser `true` y al terminar esta carga deberá ser `false`.

Si conocemos la posición de los elementos dentro del listado, usaremos el atributo `aria-posinset`, y `aria-setsize` para indicar el número total de elementos, si lo desconocemos será seteado a `-1`

```html 
    <section role="feed" aria-busy="false">
    ...
        <article aria-posinset="427" aria-setsize="-1">...</article>
        <article aria-posinset="428" aria-setsize="-1">...</article>
        <article aria-posinset="429" aria-setsize="-1">...</article>
    ...
    </section>
```

Más información [Feed role - developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role)

## Metatags

- **lang**, debemos especificar un idioma para la página.
    ```html
        <html lang="en">
    ```
- **viewport** - nunca bloquear el zoom, no uses:
    - `user-scalable=no`
    - `maximum-scale=1.0`
    - la forma correcta de uso de viewport sería la siguiente:

    ```html
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```


## Responsive

- Usa mediaqueries
- Ajusta contenidos usando `grid` o `flexbox`.
- No uses medidas fijas para contenedores.
- No bloquees la capacidad de hacer zoom.
- La información debe ser visible y **no requerir scroll en dos dimensiones** para:
  - Contenido que se desplaza en vertical con una anchura equivalente a 320 píxeles CSS.
  - Contenido que se desplaza en horizontal con una altura equivalente a 256 píxeles CSS.

:::tip
Hay excepciones donde si se permite scroll en dos dimensiones, como las imágenes grandes, mapas, tablas, etc.
:::


## Control de tiempo 

- Permite al usuario anular el tiempo de la caducidad de sesión o ajustar este tiempo (debe ser al menos diez veces el tiempo por defecto).
- Notifica al usuario que la sesión va a caducar con un mensaje (permite 20 segundos para interactuar con este aviso).

Excepciones:

- El tiempo de caducidad es superior a 20 horas.
- La caducidad de sesión es esencial para el funcionamiento.
- El límite de tiempo es requerido (ejemplo una subasta).

Más información sobre [tiempo ajustable](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html).


## Captcha

- Ofrece al menos dos modalidades de <abbr lang="en" title="Completely Automated Public Turing test to tell Computers and Humans Apart">CAPTCHA.</abbr>
- **Proporciona una alternativa**, como por ejemplo contacto directo con atención al cliente para eludir el CAPTCHA.
- No uses CAPTCHA para usuarios ya identificados.

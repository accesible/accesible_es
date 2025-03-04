---
id: svg
title: SVG
slug: /svg
image: /img/svg.svg
description: Svg accesible para la web con ejemplos sencillos
keywords: [svg accesible, svg enlaces, wai-aria svg]
---
 
<img src="/img/svg.svg" alt="" />

**Resumen para svg accesibles:**

- Si usas svg decorativos, añade el atributo `aria-hidden="true"`, en caso contrario añade el atributo `role="img"`
- Si ofreces compatibilidad con internet explorer, añade el atributo `focusable="false"`.
- Para asegurarnos la compatibilidad las etiquetas `title` y `desc` si fuera necesario.

Ejemplo de svg accesible:

```html
  <svg role="img">
      <title>Título del svg</title>
      <desc>Una descripción de la imagen svg.</desc>
  ...
  </svg>
```

### SVG dentro de enlace

Si el enlace incluye texto descriptivo fuera del svg, únicamente debemos añadir el atributo `aria-hidden="true"`

```html
<a href="#!">
  <svg aria-hidden="true">
    <use xlink:href="#..."></use>
  </svg>
  Descargar archivo
</a>

<a href="#!">
  <svg aria-hidden="true">
    <use xlink:href="#..."></use>
  </svg>
  <span class="oculto">Descargar archivo</span>
</a>
```

Si el enlace no tiene texto descriptivo, debemos añadir los atributos `role="img"` y `aria-label` con la acción que se lanzará al pulsar el enlace.

```html
<a href="#!">
  <svg role="img" aria-label="Descargar archivo" >
    <use xlink:href="#..." aria-hidden="true"></use>
  </svg>
</a>
```

### SVG dentro de botón

Si el botón incluye texto, únicamente añadiremos el atributo `aria-hidden="true"`

```html
<button>
  <svg aria-hidden="true"><!--...--></svg>
  Buscar
</button>

<button>
  <svg aria-hidden="true"><!--...--></svg>
  <span class="oculto">Buscar</span>
</button>
```

Si el botón no tiene texto, añadiremos al botón el atributo `aria-label` con la acción.

```html
<button aria-label="Buscar">
  <svg aria-hidden="true"><!--...--></svg>
</button>
```
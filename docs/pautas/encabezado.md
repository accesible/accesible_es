---
id: encabezado
title: Encabezados
slug: /encabezado
image: /img/encabezado.svg
description: Encabezados accesibles para la web con ejemplos sencillos
keywords: [encabezado accesible, orden encabezados, jerarquía, marcado semántico]
---

<img src="/img/encabezado.svg" alt="" />

La función de los encabezados es la de organizar los contenidos haciendo una pequeña descripción de la sección que precede.

:::tip Nota
Define bien los encabezados, **deben ser concisos y únicos**, los usuarios de lectores de pantalla suelen navegar a través de ellos, también los buscadores les dan importancia a la hora de indexar contenidos. [Criterio 2.4.6](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)
:::

- Todas las páginas deben tener un único encabezado `<h1>`
- No saltes niveles de [jerarquía](#jerarquía).
- **No simules encabezados** mediante estilos.
- Si no podemos usar etiquetas nativas, usaremos el atributo `aria-level`.

```html
/* incorrecto */
<span class="clase-h1">Encabezado principal</span>

/* correcto */
<span class="clase-h1" aria-level="1">Encabezado principal</span>

/* óptimo */
<h1 class="clase-h1">Encabezado principal</h1>
```

## Jerarquía

Los encabezados tienen una jerarquía, donde su relevancia se ordena de la etiqueta `<h1>` (mayor importancia) a la `<h6>` (menor)

```html
<h1>Encabezado nivel 1</h1>
<h2>Encabezado nivel 2</h2>
<h3>Encabezado nivel 3</h3>
<h4>Encabezado nivel 4</h4>
<h5>Encabezado nivel 5</h5>
<h6>Encabezado nivel 6</h6>
```

## Encabezado principal

Todas las páginas deben llevar un encabezado `<h1>` que represente el contenido principal de la página y **debe ser único**.

### Múltiples encabezados H1

Tener varios encabezados `h1` no es una práctica **recomendada.**

#### ¿Por qué no es una práctica recomendada?

En un inicio, el **outline de HTML5** iba a permitir tener varios encabezados `<h1>` para organizar las distintas secciones como por ejemplo `<article>`, `<section>`, `<aside`>, etc.

Por desgracia, a día de hoy **ningún navegador adoptó el outline de HTML5** tal como se ideó, y los `H1` que tenga una página son considerados por igual, lo que resultaría confuso para el usuario.

```html
  <section>
      <header>Título sección artículos</header>
      <article>
        <header>
          <h1> Título artículo 1 </h1>
        <header>
      </article>
      <article>
        <header>
          <h1> Título artículo 2 </h1>
        </header>
      </article>
  </section>
```

## Orden encabezados

Dentro de una misma sección no se deben saltar niveles de jerarquía, es decir, el encabezado de nivel inferior a un `h1` debería ser un `h2`, y posterior a este, un `h3`, y así consecutivamente hasta el nivel `h6`.

```html
<!-- incorrecto -->
<article>
  <h2>Encabezado nivel 2</h2>
  ...
  <h4>Sub-encabezado nivel 4</h4>
  ...
</article>

<!-- correcto -->
<article>
  <h2>Encabezado nivel 2</h2>
  ...
  <h3>Sub-encabezado nivel 3</h3>
  ...
</article>
```

### Encabezados consecutivos del mismo nivel

A partir del `<h2>` pueden haber encabezados del mismo nivel consecutivamente, por ejemplo:

```html
<h1>Encabezado principal</h1>
...
<h2>Sub-encabezado nivel 2</h2>
...
<h2>Sub-encabezado nivel 2</h2>
...
<h3>Sub-encabezado nivel 3</h3>
...
<h3>Sub-encabezado nivel 3</h3>
...
<h2>Sub-encabezado nivel 2</h2>
...
```
